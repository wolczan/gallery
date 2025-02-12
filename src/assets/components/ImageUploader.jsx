import { useState, useEffect } from "react";
import { uploadImageToFirestore, getImagesFromFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const ImageUploader = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔄 Pobieranie zdjęć po załadowaniu komponentu
  useEffect(() => {
    fetchImages();
  }, []);

  // 📥 Funkcja pobierająca zdjęcia z Firestore
  const fetchImages = async () => {
    try {
      const images = await getImagesFromFirestore();
      console.log("📸 Pobranie obrazów:", images);
      setUploadedImages(images);
    } catch (error) {
      console.error("❌ Błąd pobierania obrazów:", error);
    }
  };

  // 📤 Obsługa zmiany pliku
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // 🚀 Obsługa przesyłania zdjęcia
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
      alert("🎉 Obraz przesłany! URL: " + imageUrl);

      // 🔹 Dodanie nowego obrazu do listy, aby UI natychmiast się zaktualizowało
      setUploadedImages((prev) => [...prev, { id: Date.now(), imageUrl }]);

      setImage(null);
      await fetchImages(); // 🟢 Teraz lista zdjęć będzie odświeżona po przesłaniu
    } catch (error) {
      console.error("❌ Błąd przesyłania obrazu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-cover bg-center border-2 w-full max-w-lg mx-auto rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-white mb-4">📸 Prześlij zdjęcie</h1>

      {!user ? (
        <p className="text-yellow-400 text-lg font-bold flex items-center">
          🔒 Musisz być zalogowany, aby przesyłać obrazy!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-lg w-full">
          <input 
            type="file" 
            onChange={handleImageChange} 
            className="mb-2 border border-white p-2 rounded text-white bg-black w-full max-w-xs"
          />
          <button 
            onClick={handleUpload} 
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full max-w-xs"
            disabled={loading}
          >
            {loading ? "⏳ Przesyłanie..." : "🚀 Prześlij"}
          </button>
        </div>
      )}

      <h2 className="text-xl font-bold text-white mt-4">🖼 Zapisane obrazy:</h2>
      <div className="flex flex-wrap gap-3 mt-4 justify-center w-full max-w-sm">
        {uploadedImages.length === 0 ? (
          <p className="text-gray-300">Brak zapisanych obrazów.</p>
        ) : (
          uploadedImages.map((img) => (
            <img 
              key={img.id} 
              src={img.imageUrl} 
              alt="Zapisany obraz"
              className="w-24 h-24 object-cover rounded-md border border-white shadow-lg"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
