import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const uploadFile = (file, setProgress) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.name) {
      console.error("❌ Niepoprawny plik!", file);
      reject("❌ Niepoprawny plik");
      return;
    }

    const sanitizedFileName = encodeURIComponent(file.name.replace(/[^a-zA-Z0-9.-]/g, "_"));
    const storageRef = ref(storage, `images/${sanitizedFileName}`);

    console.log("🔥 Storage instance:", storage);
    console.log("🔥 StorageRef:", storageRef);
    console.log("🔥 Uploading to Firebase Storage:", storageRef.fullPath);

    const metadata = { contentType: file.type };
    try {
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      console.log("🔥 Upload task:", uploadTask); // Sprawdź, czy upload w ogóle startuje

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`🚀 Upload is ${progress}% done`);
          if (setProgress) setProgress(progress);
        },
        (error) => {
          console.error("❌ Błąd podczas przesyłania pliku:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("✅ Plik przesłany pomyślnie. URL:", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error("❌ Błąd pobierania URL:", error);
            reject(error);
          }
        }
      );
    } catch (error) {
      console.error("❌ Błąd tworzenia `uploadTask`:", error);
    }
  });
};

export default uploadFile;
