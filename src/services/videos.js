
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase"; // lub odpowiednia ścieżka

// Dodaj parametr diagnostyczny
export async function fetchVideos({ source = "unknown" } = {}) {
  console.log(`[fetchVideos] called from: ${source}`);

  try {
    const q = query(
      collection(db, "videos"),
      where("published", "==", true),
      orderBy("id", "desc")
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (err) {
    console.error(`[fetchVideos] error (${source}):`, err);
    return [];
  }
}
