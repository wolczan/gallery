import { useState, useEffect } from "react";
import { uploadImageToFirestore, getImagesFromFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const ImageUploader = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]); // ✅ Lista zdjęć
  const [loading, setLoading] = useState(false);

  // 🔄 Pobieranie zdjęć przy pierwszym renderze
  useEffect(() => {
    const unsubscribe = getImagesFromFirestore((imagesList) => {
      setUploadedImages(imagesList); // ✅ Pobieramy WSZYSTKIE zdjęcia
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

      // ✅ Teraz dodajemy nowy obraz do listy ZAMIAST ją nadpisywać
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
          uploadedImages.map((img) => (
            <img
              key={img.id}
              src={img.imageUrl}
              alt="Zapisany obraz"
              className="w-40 h-40 object-cover rounded-md border-white shadow-lg"
            />
          ))
        ) : (
          <p className="text-white-300 text-1xl">Brak zapisanych obrazów...</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
