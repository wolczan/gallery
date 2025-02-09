import { addDoc, getDocs, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase"; // Import Firestore i Storage

// Referencja do kolekcji "images" w Firestore
const imagesCollection = collection(db, "images");

// ✅ Funkcja przesyłająca obraz do Firebase Storage i zapisująca URL w Firestore
const uploadImageToFirestore = async (file) => {
  if (!file) throw new Error("Brak pliku!");

  // Tworzymy referencję do pliku w Firebase Storage
  const storageRef = ref(storage, `images/${file.name}`);

  try {
    // ✅ 1. Przesyłamy plik do Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);
    console.log("✅ Plik przesłany do Storage:", snapshot.metadata.fullPath);

    // ✅ 2. Pobieramy URL do pliku
    const downloadURL = await getDownloadURL(storageRef);
    console.log("✅ URL obrazu:", downloadURL);

    // ✅ 3. Zapisujemy URL w Firestore
    const docRef = await addDoc(imagesCollection, { imageUrl: downloadURL });
    console.log("✅ Obraz zapisany w Firestore, ID:", docRef.id);

    return downloadURL; // Zwracamy URL obrazu
  } catch (error) {
    console.error("❌ Błąd przesyłania obrazu:", error);
    throw error;
  }
};

// ✅ Funkcja do pobierania obrazów z Firestore
const getImagesFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(imagesCollection);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("❌ Błąd pobierania obrazów:", error);
    return [];
  }
};

export { uploadImageToFirestore, getImagesFromFirestore };
