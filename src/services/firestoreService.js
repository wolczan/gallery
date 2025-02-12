import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase"; 
import { addDoc } from "firebase/firestore";


// ✅ Funkcja pobierania obrazów z Firestore
export async function getImagesFromFirestore() {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      console.warn("⚠ Użytkownik nie jest zalogowany, zwracam pustą listę.");
      return [];
    }

    // Pobranie wszystkich zdjęć użytkownika
    const querySnapshot = await getDocs(collection(db, "images"));
    const images = querySnapshot.docs
      .filter((doc) => doc.data().userId === user.uid)
      .map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log("📸 Zdjęcia pobrane z Firestore:", images);
    return images;
  } catch (error) {
    console.error("❌ Błąd pobierania obrazów:", error);
    return [];
  }
}

// ✅ Funkcja przesyłania obrazu do Firebase Storage i zapis do Firestore
export async function uploadImageToFirestore(file) {
  if (!file) throw new Error("❌ Brak pliku!");

  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error("❌ Użytkownik niezalogowany!");

  const storage = getStorage();
  const uniqueFileName = `${user.uid}-${uuidv4()}-${file.name}`;
  const storageRef = ref(storage, `images/${user.uid}/${uniqueFileName}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`🚀 Upload ${progress.toFixed(2)}% done`);
      },
      (error) => {
        console.error("❌ Błąd przesyłania obrazu:", error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("✅ URL obrazu:", downloadURL);

          await addDoc(collection(db, "images"), {
            userId: user.uid,
            imageUrl: downloadURL,
            createdAt: new Date(),
          });

          resolve(downloadURL);
        } catch (error) {
          console.error("❌ Błąd zapisu do Firestore:", error);
          reject(error);
        }
      }
    );
  });
}
