import { useState, useEffect } from "react";
import { uploadImageToFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";



const ImageUploader = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Powiększone zdjęcie
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


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
      const imageUrl = await uploadImageToFirestore(image, {
        title,
        description,
      });
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
  <div className="w-full">
    <div className="w-full">

      {/* LEWA: Upload */}
      {user && (
        <div className="grid grid-cols-1 gap-4 items-start">
          <h1 className="text-sm font-bold text-white mb-2">
            📸 Prześlij zdjęcie
          </h1>

          <div className="flex flex-col gap-2">
            <input
              type="file"
              onChange={handleImageChange}
              className="border border-white p-1 rounded text-white bg-black"
            />

            <input
              type="text"
              placeholder="Tytuł wpisu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-white p-1 rounded text-white bg-black"
            />

            <textarea
              placeholder="Krótki opis"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="border border-white p-1 rounded text-white bg-black"
            />

            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white py-1 rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "⏳ Przesyłanie..." : "🚀 Prześlij"}
            </button>
          </div>
        </div>
      )}

      {/* PRAWA: Miniatury */}
    
    </div>

    {/* Lightbox */}
    {selectedImage && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50"
        onClick={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Powiększony obraz"
          className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
        />
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
