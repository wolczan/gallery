import { useState, useEffect } from "react";
import { getImagesFromFirestore, uploadImageToFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Powiększone zdjęcie

  useEffect(() => {
    const unsubscribe = getImagesFromFirestore((imagesList) => {
      setImages(imagesList);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
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
    <>
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
                className="rounded-md shadow-md border border-gray-200 object-cover w-26 h-28 cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image.imageUrl)} // ✅ Kliknięcie otwiera powiększenie
              />
            ))
          ) : (
            <p className="text-gray-500">Brak obrazów do wyświetlenia.</p>
          )}
        </div>
      </div>

      {/* 🔹 Lightbox działa poprawnie */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)} // Kliknięcie poza obrazem zamyka Lightbox
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={selectedImage}
              alt="Powiększony obraz"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu po kliknięciu w obraz
            />
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ❌ Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
