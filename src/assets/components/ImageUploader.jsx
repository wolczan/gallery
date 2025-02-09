import React, { useState, useEffect } from "react";
import { uploadImageToFirestore, getImagesFromFirestore } from "../../services/firestoreService";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Pobieranie obrazów przy starcie komponentu
  useEffect(() => {
    fetchImages();
  }, []);

  // Funkcja do pobierania obrazów zapisanych w Firestore
  const fetchImages = async () => {
    try {
      const images = await getImagesFromFirestore();
      setUploadedImages(images);
    } catch (error) {
      console.error("❌ Błąd pobierania obrazów:", error);
    }
  };

  // Obsługa wyboru pliku
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]); // ✅ Przechowujemy plik, a nie Base64
    }
  };

  // Przesyłanie obrazu do Firebase Storage i zapis URL w Firestore
  const handleUpload = async () => {
    if (!image) {
      console.error("Brak wybranego pliku do przesłania!");
      return;
    }

    try {
      const imageUrl = await uploadImageToFirestore(image); // ✅ Przesyłamy plik do Storage
      alert("Obraz przesłany! URL: " + imageUrl);
      fetchImages(); // Odśwież listę obrazów
    } catch (error) {
      console.error("❌ Błąd przesyłania obrazu:", error);
    }
  };

  return (
    <div>
      <h1>Prześlij zdjęcie</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} className="upload-btn">Prześlij</button>

      <h2>Zapisane obrazy:</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {uploadedImages.map((img) => (
          <img key={img.id} src={img.imageUrl} alt="Zapisany obraz"
            style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
