import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// --- Twoja konfiguracja Firebase ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "galeriazdjec-f4180",
  storageBucket: "galeriazdjec-f4180.appspot.com",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function updateWebpUrls() {
  const videosCol = collection(db, "videos");
  const snapshot = await getDocs(videosCol);

  for (const docSnap of snapshot.docs) {
    const data = docSnap.data();
    const updates = {};

    // Obsługa trzech wariantów WebP
    for (const size of ["320", "640", "1280"]) {
      const field = `thumbWebp${size}`;
      if (data[field] && !data[field].startsWith("http")) {
        // Generujemy publiczny URL na podstawie ścieżki w Storage
        const storageRef = ref(storage, data[field]);
        const url = await getDownloadURL(storageRef);
        updates[field] = url;
        console.log(`✅ ${field} updated for ${docSnap.id}`);
      }
    }

    // Jeśli mamy nowe linki → aktualizujemy dokument
    if (Object.keys(updates).length > 0) {
      await updateDoc(doc(db, "videos", docSnap.id), updates);
    }
  }

  console.log("🎉 Aktualizacja zakończona!");
}

updateWebpUrls().catch(console.error);
