import { useState, useEffect } from "react";
import { getImagesFromFirestore, uploadImageToFirestore } from "../../services/firestoreService";

const Gallery = () => {
  const [images, setImages] = useState([]); // Stan do przechowywania obrazów

  // 🔄 Pobieranie zdjęć po załadowaniu komponentu
  useEffect(() => {
    async function fetchImages() {
      const imagesList = await getImagesFromFirestore();
      setImages(imagesList);
    }

    fetchImages(); // Uruchamiamy pobieranie zdjęć
  }, []);

  // 📤 Obsługa uploadu nowego zdjęcia
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const newImageUrl = await uploadImageToFirestore(file);
      setImages((prevImages) => [...prevImages, { id: newImageUrl, imageUrl: newImageUrl }]);
    } catch (error) {
      console.error("❌ Błąd przesyłania pliku:", error);
    }
  };

  return (
    <div>
      <h2>📷 Moja Galeria</h2>
      <input type="file" onChange={handleUpload} accept="image/*" />
      {images.length > 0 ? (
        images.map((image) => (
          <img key={image.id} src={image.imageUrl} alt="Obraz" width="200" />
        ))
      ) : (
        <p>Brak obrazów do wyświetlenia.</p>
      )}
    </div>
  );
};

export default Gallery;
