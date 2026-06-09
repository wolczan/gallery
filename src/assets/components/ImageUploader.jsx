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
  <div className="w-full flex justify-center px-4 py-4">
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-zinc-950/80 p-4 text-white shadow-2xl backdrop-blur-md">
      {user && (
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <h1 className="text-lg font-bold">
              📸 Prześlij zdjęcie
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Dodaj zdjęcie, tytuł i krótki opis do swojej galerii.
            </p>
          </div>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-1 py-1 text-center hover:bg-white/10 transition">
            <span className="text-sm text-zinc-300 ">
              {image ? image.name : "Kliknij, aby wybrać zdjęcie"}
            </span>

            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <input
            type="text"
            placeholder="Tytuł wpisu"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-8 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-blue-400"
          />

          <textarea
            placeholder="Krótki opis"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="min-h-[30px] resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-blue-400"
          />

          <button
            onClick={handleUpload}
            className="h-8 rounded-xl bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "⏳ Przesyłanie..." : "🚀 Prześlij zdjęcie"}
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Powiększony obraz"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />

          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            ✕ Zamknij
          </button>
        </div>
      )}
    </div>
  </div>
)};

export default ImageUploader;
