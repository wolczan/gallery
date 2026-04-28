import { useEffect, useRef, useState } from "react";
import { FiHeart, FiShare2, FiTrendingUp, FiMessageSquare } from "react-icons/fi";
import { FiCamera, FiVideo, FiImage } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";


export default function VideoGallery({ videos }) {
  const navigate = useNavigate(); 
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    console.log("[VideoGallery] MOUNT");
    return () => console.log("[VideoGallery] UNMOUNT");
  }, []);


  // NEW: po przejściu w tryb odtwarzania – odpal od razu .play()
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      // pokaż kontrolki dopiero gdy user kliknął Play
      videoRef.current.setAttribute("controls", "");
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  const openModal = (v) => {
    setSelectedVideo(v);
    setIsPlaying(false); // startujemy od plakatu + Play
  };

  const closeModal = () => {
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      } catch (error) {
        console.warn("Video cleanup failed:", error);
      }
    }

    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const onKeyDownModal = (e) => {
    if (e.key === "Escape") closeModal();
    if (!isPlaying && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsPlaying(true);
    }
  };

  VideoGallery.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbWebp640: PropTypes.string,
      cover: PropTypes.string,
      thumb: PropTypes.string,
      posterUrl: PropTypes.string,
      src: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};


  return (
    <>
      {/* GRID jak u Ciebie – bez zmian poza handlerem onClick */}
    <div className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-1 sm:gap-3
            justify-center
            justify-items-center
            mx-auto
            p-2 sm:p-3 md:p-4
            max-w-[1200px]
          "
          style={{
            rowGap: '12px',
          }}
        >
       {videos.slice(0, 15).map((v, i) => {

  const webpSrcSet = [
    v.thumbWebp320 && `${v.thumbWebp320} 320w`,
    v.thumbWebp640 && `${v.thumbWebp640} 640w`,
    v.thumbWebp1280 && `${v.thumbWebp1280} 1280w`,
  ].filter(Boolean).join(", ");

  const jpgFallback =
  v.cover ||
  v.thumbWebp640 ||
  v.thumbWebp320 ||
  v.thumbWebp1280 ||
  "";
  const showPlayOn = "first5";
 
  const isHero = i >= 5 && i < 15; // 👈 6–10 kafelek w trybie HERO
  const isTop5 = i < 5; // 👈 NOWE
   const showPlay =
    showPlayOn === "first5" ? isTop5 : i === 0; // i === 0 -> tylko pierwszy

  // --- Wariant HERO (overlay jak w Edge) ---
  if (isHero) {
    return (
      <article
        key={v.id ?? i}
        onClick={() => openModal(v)}
        className="group relative w-full max-w-[360px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
      >
        <div className="relative w-full aspect-[16/10] bg-gray-100">
          <picture>
            {webpSrcSet && (
              <source
                type="image/webp"
                srcSet={webpSrcSet}
                sizes="(min-width:1024px) 480px, (min-width:640px) 460px, 100vw"
              />
            )}
            <img
              src={jpgFallback}
              alt={v.title || "Miniatura"}
              loading="lazy"
              decoding="async"
              width={480}
              height={300}
              className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-[transform] group-hover:scale-[1.02] transition-transform duration-300"
              style={{ backfaceVisibility: "hidden" }}
            />
          </picture>
          
            {showPlay && (
                <div className="absolute inset-0 z-10 grid place-items-center pointer-events-none">
                  <span className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/50 text-white text-3xl grid place-items-center shadow-[0_6px_28px_rgba(0,0,0,.45)]">
                    ▶
                  </span>
                </div>
              )}


          {/* ciemny gradient na zdjęciu */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />


          {/* meta u góry (źródło + czas) */}
          <div className="absolute top-2 left-3 right-3 flex items-center gap-2 text-white/90 text-xs">
            <span className="inline-flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center text-[11px] font-semibold">G</span>
              <span className="font-medium">{v.source || "Galeria"}</span>
            </span>
            <span className="ml-2 opacity-80">{v.publishedAt || "• 19h"}</span>
          </div>

          {/* tytuł na dole HERO */}
          <h3 className="absolute left-3 right-3 bottom-8 text-white font-bold text-sm md:text-sm leading-snug drop-shadow-md line-clamp-2">
            {v.title || "Tytuł materiału"}
          </h3>

          {/* pasek ikon na samym dole HERO */}
          <div className="absolute left-3 right-3 bottom-1 flex items-center gap-4 text-white/90 text-sm">
            <span className="inline-flex items-center gap-1"><FiHeart /> {v.likes ?? 15}</span>
            <span className="inline-flex items-center gap-1"><FiMessageSquare /> {v.comments ?? 5}</span>
            <span className="ml-auto inline-flex items-center gap-1 opacity-90"><FiTrendingUp /> Trending</span>
            
          </div>
        </div>
      </article>
    );
  }

  // --- Wariant STANDARD (biała karta z tekstem pod obrazem) ---
  return (
    <article
      key={v.id ?? i}
      onClick={() => openModal(v)}
      className="group w-full max-w-[240px] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer "
    >
      <div className="relative w-full aspect-[16/10] bg-gray-100">
        <picture>
          {webpSrcSet && (
            <source
              type="image/webp"
              srcSet={webpSrcSet}
              sizes="(min-width:1024px) 480px, (min-width:640px) 460px, 100vw"
            />
          )}
         <img
            src={jpgFallback}
            alt={v.title || "Miniatura"}
            loading="lazy"
            decoding="async"
            width={480}
            height={300}
            className={
              "absolute inset-0 w-full h-full transform-gpu will-change-[transform] transition-transform duration-300 " +
              (isTop5
                ? "object-cover object-center group-hover:scale-[1.02]" // 🔹 pierwsze 5 kart wypełniają cały kadr
                : "object-contain object-center scale-[0.985] group-hover:scale-[0.99]") // 🔹 reszta bez zmian
            }
            style={{ backfaceVisibility: "hidden", imageRendering: "auto" }}
          />
          {showPlay && (
            <div
              className="
                absolute inset-0 z-10 grid place-items-center
                pointer-events-none
                opacity-95 group-hover:opacity-100 transition
              "
              aria-hidden="true"
            >
              <span className="
                    relative h-12 w-12 md:h-14 md:w-14 rounded-full
                    ring-1 ring-white/40 backdrop-blur-sm
                    bg-black/30 shadow-[0_4px_20px_rgba(0,0,0,.35)]
                    before:absolute before:inset-0 before:rounded-full before:opacity-35
                    before:[background:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)]
                    before:[background-size:3px_3px]
                  "
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto w-6 h-6 md:w-7 md:h-7 fill-white/95">
                    <path d="M8 5v14l11-7z" />
                  </svg>
          
          </span>

            </div>
          )}


        </picture>
      </div>

   <div className="px-2 pt-1 pb-2">

  <div className="flex items-center gap-1 mb-1">
    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-[10px]">
      <FiImage />
    </div>
    <span className="text-[11px] font-medium text-gray-800">Galeria</span>
  </div>

  <h3 className="text-xs md:text-xs font-semibold text-gray-900 leading-snug line-clamp-2">
    {v.title || "Tytuł artykułu lub filmu"}
  </h3>

  {/* 🔧 ikony + lekki margines między sercem i udostępnij */}
  <div className="mt-0.5 flex items-center text-[11px] text-gray-800 flex-wrap ">
    <span className="inline-flex items-center gap-0.5">
      <FiHeart className="text-gray-800" /> {v.likes ?? 12}
    </span>
    <span className="inline-flex items-center gap-0.5 ml-2">
      <FiShare2 className="text-gray-800" /> Udostępnij
    </span>
    <span className="ml-auto inline-flex items-center gap-0.5 text-gray-700 truncate">
      <FiTrendingUp className="text-gray-800" /> Trending
    </span>
  </div>

          <button
  onClick={(e) => {
    e.stopPropagation();              // 👈 nie otwieraj modala
    navigate(`/buy/${v.id}`);         // 👈 przejście do strony zakupu
  }}
  className="mt-2 w-full bg-black text-white rounded-full py-1 text-xs font-semibold hover:bg-gray-800 transition"
>
  Kup plakat 🖼️
    </button>


  </div>  

    </article>
  );
    })}

      </div>

      {/* MODAL: bez autoPlay; najpierw poster + duży Play, dopiero po kliknięciu montujemy <video> */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          onKeyDown={onKeyDownModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop z animacją fade */}
          <div className="absolute inset-0 bg-black/80" style={{ animation: "fadeIn .18s ease-out" }} onClick={closeModal} />

          <div
            className="relative bg-black rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl"
            style={{ animation: "zoomIn .18s ease-out" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              {/* Jeśli NIE gramy → pokaż plakat + duży przycisk Play */}
              {!isPlaying && (
                <>
                  <img
                    src={
                      selectedVideo.thumbWebp640 ||
                      selectedVideo.cover ||
                      selectedVideo.thumb ||
                      selectedVideo.posterUrl ||
                      ""
                    }
                    alt={selectedVideo.title || "Podgląd wideo"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                 <button
                    onClick={() => setIsPlaying(true)}
                    className="
                      absolute inset-0 m-auto h-20 w-20 md:h-24 md:w-24
                      rounded-full
                      bg-white/20 backdrop-blur-sm
                      text-white text-4xl md:text-5xl
                      ring-1 ring-white/50
                      shadow-[0_8px_28px_rgba(0,0,0,.45)]
                      hover:bg-white/30 hover:scale-[1.05]
                      transition-all duration-300
                    "
                    aria-label="Odtwórz wideo"
                  >
                    ▶
                  </button>

                </>
              )}

              {/* Po kliknięciu Play → renderujemy <video> i od razu .play() w useEffect */}
              {isPlaying && (
                <video
                  ref={videoRef}
                  key={selectedVideo.id}
                  playsInline
                  preload="metadata"
                  poster={
                    selectedVideo.thumbWebp640 ||
                    selectedVideo.cover ||
                    selectedVideo.thumb
                  }
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  style={{ animation: "fadeIn .2s ease-out" }}
                >
                  <source
                    src={
                      selectedVideo.videoUrl ||
                      selectedVideo.video ||
                      selectedVideo.url ||
                      selectedVideo.mp4 ||
                      ""
                    }
                    type="video/mp4"
                  />
                  {selectedVideo.videoWebm && (
                    <source src={selectedVideo.videoWebm} type="video/webm" />
                  )}
                </video>
              )}

              {/* Fallback, gdy dalej brak URL */}
              {isPlaying && !(selectedVideo.videoUrl || selectedVideo.video || selectedVideo.url || selectedVideo.mp4) && (
                <div className="absolute inset-x-0 bottom-0 p-4 text-sm text-white/90 bg-black/60">
                  Brak adresu wideo w danych (oczekiwane: <code>videoUrl</code> / <code>video</code> / <code>url</code> / <code>mp4</code>).
                </div>
              )}
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
              aria-label="Zamknij"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Minimalne keyframes do animacji (bez Tailwind pluginów) */}
          <style>{`
            @keyframes zoomIn { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          `}</style>
        </div>
      )}
    </>
  );
  }
