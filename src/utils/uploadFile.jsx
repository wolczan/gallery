import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export async function uploadFile(file) {
  if (!file) {
    console.error("❌ Brak pliku do przesłania!");
    return;
  }

  const storage = getStorage(); // ✅ Pobieramy `storage`
  const filePath = `uploads/${file.name}`; // ✅ Upewnij się, że to STRING
  const storageRef = ref(storage, filePath); // ✅ Poprawna referencja

  try {
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`📡 Upload ${progress.toFixed(2)}% done`);
        },
        (error) => {
          console.error("❌ Błąd przesyłania pliku:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("✅ Plik przesłany! URL:", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error("❌ Błąd pobierania URL:", error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error("❌ Błąd inicjalizacji przesyłania:", error);
  }
}
