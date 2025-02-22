import { useState, useEffect } from "react";
import { uploadImageToFirestore, getImagesFromFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const ImageUploader = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔄 Pobieranie zdjęć po załadowaniu komponentu i zmianie użytkownika
  useEffect(() => {
    if (user) {
      fetchImages();
    }
  }, [user]); // Dodanie user jako zależności, aby odświeżało dane po logowaniu/wylogowaniu

  // 📥 Funkcja pobierająca zdjęcia z Firestore
  const fetchImages = async () => {
    try {
      setLoading(true); // 🔄 Dodanie wskaźnika ładowania
      const images = await getImagesFromFirestore();
      console.log("📸 Pobranie obrazów:", images);
      setUploadedImages(images); // 📌 Aktualizacja stanu z pobranymi zdjęciami
    } catch (error) {
      console.error("❌ Błąd pobierania obrazów:", error);
    } finally {
      setLoading(false);
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

      // 🔹 Aktualizacja UI od razu po przesłaniu
      setUploadedImages((prev) => [...prev, { id: Date.now(), imageUrl }]);

      setImage(null);
      await fetchImages(); // 🟢 Odświeżenie listy zdjęć po przesłaniu
    } catch (error) {
      console.error("❌ Błąd przesyłania obrazu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center p-0.5 bg-cover bg-center    mx-auto rounded-lg shadow-xl">
      <h1 className="text-l font-bold text-white mb-2">📸 Prześlij zdjęcie</h1>

      {!user ? (
        <p className="text-yellow-400 text-lg font-bold flex items-center ">
          🔒 Musisz być zalogowany, aby przesyłać obrazy!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-3 bg-black/40 p-6 rounded-lg ">
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
      )}

      <h2 className="text-l font-bold text-white mt-1">🖼 Zapisane obrazy:</h2>
      {loading && <p className="text-gray-300">⏳ Ładowanie...</p>}

      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {uploadedImages.length === 0 ? (
          <p className="text-white-300 text-1xl">Brak zapisanych obrazów...</p>
        ) : (
          uploadedImages.map((img) => (
            <img 
              key={img.id} 
              src={img.imageUrl} 
              alt="Zapisany obraz"
              className="w-32 h-32 object-cover rounded-md border border-white shadow-lg"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
