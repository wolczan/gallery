import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const ImageUploader = () => {
  const [image, setImage] = useState(null); // Stan wybranego pliku
  const [isUploading, setIsUploading] = useState(false); // Stan przesyłania
  const [progress, setProgress] = useState(0); // Procent przesyłania

  const storage = getStorage(); // Firebase Storage
  const db = getFirestore(); // Firebase Firestore

  // Debugowanie zmiany stanu przesyłania
  useEffect(() => {
    console.log("isUploading zmieniony na:", isUploading);
  }, [isUploading]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      console.log("Wybrano plik:", selectedFile.name);
      console.log("Rozmiar pliku:", selectedFile.size);
      console.log("Typ pliku:", selectedFile.type);
      setImage(selectedFile);
    } else {
      console.error("Nie wybrano żadnego pliku!");
    }
  };

  const handleUpload = async () => {
    console.log("Funkcja handleUpload została wywołana.");
    if (!image) {
      console.error("Brak wybranego pliku do przesłania!");
      return;
    }

    setIsUploading(true); // Rozpoczęcie przesyłania
    const storageRef = ref(storage, `images/${image.name}`);
    console.log("Przygotowano StorageRef:", storageRef.fullPath);

    // Rozpoczęcie przesyłania z monitorowaniem postępu
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Monitorowanie postępu przesyłania
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress.toFixed(2));
        console.log(`Postęp przesyłania: ${progress.toFixed(2)}%`);
      },
      (error) => {
        // Obsługa błędów podczas przesyłania
        console.error("Błąd podczas przesyłania pliku:", error);
        setIsUploading(false);
      },
      async () => {
        // Po zakończeniu przesyłania
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Plik przesłany! URL:", url);

          // Zapis URL do Firestore
          await addDoc(collection(db, "pictures"), {
            url: url,
            name: image.name,
            createdAt: new Date(),
          });
          console.log("Dane zapisane w Firestore pomyślnie!");
          alert("Zdjęcie zostało przesłane pomyślnie!");
        } catch (firestoreError) {
          console.error("Błąd podczas zapisywania danych w Firestore:", firestoreError);
        } finally {
          setIsUploading(false); // Zakończenie przesyłania
          setProgress(0); // Reset postępu
        }
      }
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Prześlij zdjęcie</h1>
      <input type="file" onChange={handleImageChange} />
      <br />
      {progress > 0 && (
        <p style={{ margin: "10px 0" }}>
          Postęp przesyłania: <strong>{progress}%</strong>
        </p>
      )}
      <button
        onClick={handleUpload}
        disabled={isUploading}
        style={{
          padding: "10px 20px",
          backgroundColor: isUploading ? "gray" : "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isUploading ? "not-allowed" : "pointer",
          marginTop: "10px",
        }}
      >
        {isUploading ? "Przesyłanie..." : "Prześlij"}
      </button>
    </div>
  );
};

export default ImageUploader;
