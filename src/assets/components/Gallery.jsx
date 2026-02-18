import { useEffect, useMemo, useState, useCallback } from "react";
import { subscribeImagesPage, loadMoreImages } from "../../services/firestoreService";
import { useAuth } from "../../utils/useAuth";
import "../components/Gallery.css"; // opcjonalnie, dla dodatkowych stylów galerii

const PAGE_SIZE = 9;

const Gallery = () => {
  const { user } = useAuth(); // opcjonalnie pod przyszłe feature (delete, etc.)
  const [images, setImages] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Lightbox stabilniej po ID
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = subscribeImagesPage({
      pageSize: PAGE_SIZE,
      callback: ({ items, lastDoc }) => {
        setImages(items || []);
        setLastDoc(lastDoc || null);
        setLoading(false);
      },
    });

    return () => unsubscribe?.();
  }, []);

  const selectedIndex = useMemo(() => {
    if (!selectedId) return -1;
    return images.findIndex((img) => img.id === selectedId);
  }, [selectedId, images]);

  const selected = selectedIndex >= 0 ? images[selectedIndex] : null;

  const close = useCallback(() => setSelectedId(null), []);

  const prev = useCallback(() => {
    if (!images.length) return;
    const i = selectedIndex <= 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedId(images[i].id);
  }, [images, selectedIndex]);

  const next = useCallback(() => {
    if (!images.length) return;
    const i = selectedIndex >= images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedId(images[i].id);
  }, [images, selectedIndex]);

  // Klawiatura: ESC, strzałki
  useEffect(() => {
    if (!selectedId) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId, close, prev, next]);

  const onLoadMore = async () => {
    if (!lastDoc || loadingMore) return;

    setLoadingMore(true);
    try {
      const res = await loadMoreImages({ lastDoc, pageSize: PAGE_SIZE });
      setImages((prevList) => [...prevList, ...(res.items || [])]);
      setLastDoc(res.lastDoc || null);
    } catch (e) {
      console.error("❌ Błąd loadMoreImages:", e);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">

      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 drop-shadow-sm">📷 Moja Galeria</h2>

        <div className="text-sm text-gray-600">
          {images.length > 0 ? (
            <>
              Załadowane <span className="font-semibold">{images.length}</span>
              {lastDoc ? " (możesz dociągnąć więcej)" : " (to już wszystko)"}
            </>
          ) : (
            "—"
          )}
        </div>
      </div>

      {/* Skeleton loading */}
      {loading && (
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="mb-3 break-inside-avoid rounded-xl bg-white/70 border border-white/60 shadow-sm overflow-hidden"
            >
              <div className="animate-pulse h-44 sm:h-52 md:h-60 w-full bg-gray-200" />
              <div className="p-3">
                <div className="animate-pulse h-3 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && images.length === 0 && <p className="text-gray-500">Brak obrazów do wyświetlenia.</p>}

      {!loading && images.length > 0 && (
        <>
          {/* Masonry */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img) => (
              <button
                key={img.id}
                type="button"
                className="w-full group text-left"
                onClick={() => setSelectedId(img.id)}
              >
                <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-sm backdrop-blur ...">
                  <img
                    src={img.imageUrl}
                    alt={img.title || "Obraz"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 object-cover"
                  />

                  {/* BLOG: tytuł + opis */}
                  <div className="p-3">
                    <div className="text-xs text-white/60 line-clamp-2 mt-1">
                      {img.title || "Tytuł wpisu"}
                    </div>
                    <div className="text-xs text-gray-500 line-clamp-2 mt-1">
                      {img.description || "Krótki opis wpisu…"}
                    </div>
                  </div>
                </div>

              </button>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-6 flex justify-center">
            <button
              className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition disabled:opacity-60"
              onClick={onLoadMore}
              disabled={!lastDoc || loadingMore}
            >
              {loadingMore ? "⏳ Dociągam..." : lastDoc ? "Pokaż więcej" : "To już wszystko"}
            </button>
          </div>
        </>
      )}

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={close} role="dialog" aria-modal="true">
          <div className="relative w-full h-full flex items-center justify-center px-4">
            <img
              src={selected.imageUrl}
              alt="Powiększony obraz"
              className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute left-4 sm:left-8 text-white text-4xl font-bold select-none px-3 py-2 rounded-full hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Poprzednie"
            >
              ‹
            </button>

            <button
              className="absolute right-4 sm:right-8 text-white text-4xl font-bold select-none px-3 py-2 rounded-full hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Następne"
            >
              ›
            </button>

            <button
              className="absolute top-4 right-4 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              ✕ Zamknij
            </button>

            <div className="absolute bottom-4 text-white/70 text-sm hidden sm:block">ESC zamyka • ← → przewija</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
