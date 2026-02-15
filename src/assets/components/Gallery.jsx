import { useState, useEffect } from "react";
import { getImagesFromFirestore, uploadImageToFirestore } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const { user } = useAuth();
  const [selectedIndex, setSelectedIndex] = useState(null); // używamy indeksu

  useEffect(() => {
    const unsubscribe = getImagesFromFirestore((imagesList) => {
      setImages(imagesList);
    });
    return () => { if (typeof unsubscribe === "function") unsubscribe(); };
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

  // ⬇️ jedna, wspólna lista widocznych elementów (pierwsza 10)
  const visible = images.slice(0, 10);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 py-8 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#fefaf5] via-[#fdf6f0] to-[#f9ece3] backdrop-blur-sm border border-white/30">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800 drop-shadow-sm">📷 Moja Galeria</h2>

  {user && (
    <input
      type="file"
      onChange={handleUpload}
      accept="image/*"
      className="mb-6 p-2 border border-gray-300 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-100"
    />
  )}

  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
    {visible.length > 0 ? (
      visible.map((image, index) => (
        <img
          key={image.id}
          src={image.imageUrl}
          alt="Obraz"
          loading="lazy"
          decoding="async"
          className="rounded-lg shadow-md border border-gray-200 object-cover 
             w-36 h-40 sm:w-44 sm:h-48 md:w-52 md:h-56 cursor-pointer 
             transform transition-transform duration-200 ease-out 
             hover:scale-[1.03] hover:-translate-y-[2px]
             hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)] 
             will-change-transform"
          onClick={() => setSelectedIndex(index)}
        />
      ))
    ) : (
      <p className="text-gray-500">Brak obrazów do wyświetlenia.</p>
    )}
  </div>
</div>


      {/* 🔹 Lightbox na indeksie + strzałki */}
      {selectedIndex !== null && visible[selectedIndex] && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={visible[selectedIndex].imageUrl}
              alt="Powiększony obraz"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* ⬅ Poprzednie */}
            <button
              className="absolute left-8 text-white text-4xl font-bold select-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === 0 ? visible.length - 1 : prev - 1));
              }}
            >
              ⬅
            </button>

            {/* ➡ Następne */}
            <button
              className="absolute right-8 text-white text-4xl font-bold select-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === visible.length - 1 ? 0 : prev + 1));
              }}
            >
              ➡
            </button>

            {/* ❌ Zamknij */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full"
              onClick={() => setSelectedIndex(null)}
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
