import { useState, useEffect } from "react";
import { getImagesFromFirestore, uploadImageToFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = getImagesFromFirestore((imagesList) => {
      setImages(imagesList);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe(); // 🔹 Odsubskrybowanie tylko jeśli funkcja istnieje
      }
    };
  }, []);

  const handleUpload = async (event) => {
    if (!user) {
      alert("Musisz być zalogowany, aby przesłać obraz!");
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    try {
      await uploadImageToFirestore(file);
      console.log("✅ Nowy obraz dodany");
    } catch (error) {
      console.error("❌ Błąd przesyłania pliku:", error);
    }
  };

  return (
    <div className="border-gray-300 rounded-lg p-6 shadow-md text-center bg-black/60 w-6/7 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-white">📷 Moja Galeria</h2>

      {user && (
        <input
          type="file"
          onChange={handleUpload}
          accept="image/*"
          className="mb-4 p-2 border border-gray-300 rounded bg-white"
        />
      )}

      <div className="flex flex-wrap gap-2 justify-center">
        {images.length > 0 ? (
          images.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt="Obraz"
              className="rounded-md shadow-md border border-gray-200 object-cover w-28 h-30"
            />
          ))
        ) : (
          <p className="text-gray-500">Brak obrazów do wyświetlenia.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
