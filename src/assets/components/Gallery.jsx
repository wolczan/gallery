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
    <div className="flex items-center justify-center ">
      <div className=" border-gray-300 rounded-lg p-6 shadow-md 
        w-full text-center ">
        <h2 className="text-xl font-bold mb-4 text-white ">📷 Moja Galeria</h2>
        <input
          type="file"
          onChange={handleUpload}
          accept="image/*"
          className="mb-4 p-2 border border-gray-300 rounded color-white bg-white"
        />
        <div className="flex flex-wrap justify-center gap-4 ">
          {images.length > 0 ? (
            images.map((image) => (
              <img
                key={image.id}
                src={image.imageUrl}
                alt="Obraz"
                width="140"
                className="rounded-md shadow-md border border-gray-200"
              />
            ))
          ) : (
            <p className="text-gray-500">Brak obrazów do wyświetlenia.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
