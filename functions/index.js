/**
 * Cloud Functions for Firebase (CommonJS)
 * - getVideos: HTTPS endpoint zwracający opublikowane filmy
 * - updateWebpUrls: Storage trigger, po uploadzie miniatury WebP uzupełnia URL w Firestore
 */

const { onRequest } = require("firebase-functions/v2/https");
const { onObjectFinalized } = require("firebase-functions/v2/storage");
const admin = require("firebase-admin");

// Inicjalizacja Admin SDK (bez wielokrotnego init)
try { admin.app(); } catch { admin.initializeApp(); }

const db = admin.firestore();
const storage = admin.storage();

/**
 * GET /getVideos
 * Zwraca opublikowane filmy z sortowaniem po polu "order"
 */
exports.getVideos = onRequest(async (req, res) => {
  // Prosty CORS (opcjonalnie – jeśli chcesz ściślejszą kontrolę, użyj biblioteki cors)
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  try {
    const snap = await db
      .collection("videos")
      .where("published", "==", true)
      .orderBy("order", "asc")
      .get();

    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    res.set("Cache-Control", "public, max-age=60, s-maxage=300");
    res.status(200).json(items);
  } catch (e) {
    console.error("getVideos error:", e);
    res.status(500).json({ error: "SERVER_ERROR" });
  }
});

/**
 * Storage trigger:
 * Reaguje na upload do "videos/resized/..."
 * Oczekuje nazw w formacie: <BASENAME>_320x320.webp / _640x640.webp / _1280x1280.webp
 * Uzupełnia w dokumencie pola: thumbWebp320 / thumbWebp640 / thumbWebp1280
 */
exports.updateWebpUrls = onObjectFinalized(
  {
    region: "europe-central2",
    memory: "256MiB",
    timeoutSeconds: 60,
  },
  async (event) => {
    try {
      const object = event.data; // https://cloud.google.com/storage/docs/json_api/v1/objects#resource
      const bucketName = object.bucket;
      const filePath = object.name || ""; // np. "videos/resized/IMG_20250705_171458_320x320.webp"

      if (!filePath.startsWith("videos/resized/") || !filePath.endsWith(".webp")) {
        console.log("Skip object (not a resized webp):", filePath);
        return;
      }

      // Wyciągnij rozmiar miniatury z nazwy (___NxN_.webp)
      const filename = filePath.split("/").pop(); // IMG_..._320x320.webp
      const sizeMatch = filename.match(/_(\d+)x\1\.webp$/); // -> ["_320x320.webp", "320"]
      if (!sizeMatch) {
        console.log("Cannot detect size from filename:", filename);
        return;
      }
      const size = sizeMatch[1]; // "320" / "640" / "1280"
      const fieldName = `thumbWebp${size}`;

      // Ustal baseName (nazwa oryginalnego pliku bez sufiksu "_320x320.webp")
      // IMG_20250705_171458_320x320.webp -> IMG_20250705_171458
      const baseName = filename.replace(/_(\d+)x\1\.webp$/, "");

      // Z metadanych obiektu pobieramy token (generowany przez Firebase), żeby zbudować publiczny URL
      // Metadane: metadata.firebaseStorageDownloadTokens (może zawierać wiele tokenów rozdzielonych przecinkami)
      const [file] = await storage.bucket(bucketName).file(filePath).get();
      const [metadata] = await file.getMetadata();
      const tokens = (metadata.metadata && metadata.metadata.firebaseStorageDownloadTokens) || "";
      const token = tokens.split(",")[0] || "";

      // Konstruujemy publiczny URL (trwały, z tokenem)
      const encodedPath = encodeURIComponent(filePath);
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedPath}?alt=media${token ? `&token=${token}` : ""}`;

      console.log(`✅ Built URL for ${fieldName}: ${publicUrl}`);

      // Znajdź dokument(y) w kolekcji "videos" powiązane z tym baseName.
      // Nie mamy indeksu "contains", więc pobieramy wszystko i dopasowujemy w kodzie po fragmencie nazwy.
      const vs = await db.collection("videos").get();
      const candidates = [];
      vs.forEach((docSnap) => {
        const data = docSnap.data() || {};
        // bierzemy kilka pól, w których może być ślad nazwy bazowej
        const cover = data.cover || data.thumb || data.image || data.posterUrl || "";
        if (typeof cover === "string" && cover.includes(baseName)) {
          candidates.push({ id: docSnap.id, data });
        }
      });

      if (candidates.length === 0) {
        console.log(`⚠️ No matching document for baseName: ${baseName}`);
        return;
      }

      // Zaktualizuj pole (np. thumbWebp320) publicznym URL-em
      for (const c of candidates) {
        await db.collection("videos").doc(c.id).update({
          [fieldName]: publicUrl,
        });
        console.log(`🔄 Updated ${c.id} → ${fieldName}`);
      }

      console.log("🎉 updateWebpUrls done for:", filename);
    } catch (err) {
      console.error("❌ updateWebpUrls error:", err);
    }
  }
);
