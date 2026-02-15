import { useState, useEffect } from "react";
import { uploadImageToFirestore, getImagesFromFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const ImageUploader = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Powiększone zdjęcie

  useEffect(() => {
    const unsubscribe = getImagesFromFirestore((imagesList) => {
      setUploadedImages(imagesList);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!user) {
      alert("Musisz być zalogowany, aby przesłać obraz!");
      return;
    }
    if (!image) {
      alert("Wybierz plik do przesłania!");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImageToFirestore(image);
      const newImage = { id: Date.now().toString(), imageUrl };

      setUploadedImages((prev) => [...prev, newImage]);
      setImage(null);
      alert("🎉 Obraz przesłany!");
    } catch (error) {
      console.error("❌ Błąd przesyłania obrazu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      {user && (
        <div className="bg-black/60 p-4 rounded-lg">
          <h1 className="text-l font-bold text-white mb-2">📸 Prześlij zdjęcie</h1>
          <div className="flex flex-col items-center gap-3">
            <input
              type="file"
              onChange={handleImageChange}
              className="mb-1 border-1 border-white p-1 rounded text-white bg-black w-full max-w-xs"
            />
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition w-full max-w-xs"
              disabled={loading}
            >
              {loading ? "⏳ Przesyłanie..." : "🚀 Prześlij"}
            </button>
          </div>
        </div>
      )}

     <h2 className="text-l font-bold text-white mt-4">🖼 Zapisane obrazy:</h2>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
       {uploadedImages.length > 0 ? (
          uploadedImages.slice(0, 10).map((img) => (
            <img
              key={img.id}
              src={img.imageUrl}
              alt="Zapisany obraz"
              loading="lazy"
              decoding="async"
              width={96}
              height={104}
              sizes="(max-width: 640px) 96px, 96px"
             className="w-32 h-36 object-cover rounded-md border-white shadow-lg cursor-pointer transition-transform hover:scale-105"

              onClick={() => setSelectedImage(img.imageUrl)}
            />
          ))
        ) : (
          <p className="text-white-300 text-1xl">Brak zapisanych obrazów...</p>
        )}

      </div>


      {/* 🔹 Powiększone zdjęcie jako Lightbox */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Powiększony obraz" className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg" />
          <button
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            ❌ Zamknij
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
