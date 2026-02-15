import VideoGallery from "../assets/components/VideoGallery.jsx";
import Login from "../assets/components/Login.jsx";
import ToDoWrapper from "../assets/ToDoWrapper";
import ImageUploader from "../assets/components/ImageUploader.jsx";
import Gallery from "../assets/components/Gallery.jsx";
import RecentPosts from "../RecentPosts.jsx";
import Footer from "../../Footer.jsx";
import ContactSection from "../assets/components/ContactSection.jsx";
import { FaPlay, FaPause } from "react-icons/fa";

export default function HomeRoute({
  videos,
  selectedVideo,
  setSelectedVideo,
  showLogin,
  setShowLogin,
  videoRef,
  playing,
  setPlaying,
  handlePlay,
  posterSrc,
  videoSrc,
  hasSource,
}) {
  return (
    <>
      <VideoGallery videos={videos} />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      <div className="container fix-a rounded-lg shadow-2xl shadow-white my-4 p-4">
        <div
          className="video-container flex-shrink-0 mx-auto justify-center rounded-lg shadow-2xl shadow-white"
          //  style={{ border: "2px solid yellow", background: "rgba(255,0,0,0.1)" }}  // Glowny film wybrany z listy
        >
          {videos.length > 0 && selectedVideo != null && (
            hasSource ? (
              // ⬇️ WRAPPER trzyma rozmiar i maskuje krawędzie przy skalowaniu
              <div
                className="group relative overflow-hidden rounded-xl"
                style={{ width: 180, height: 260 }}
              >
                <video
                  ref={videoRef}
                  className="
                    absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform-gpu will-change-[transform] [backface-visibility:hidden]"
                  controls
                  playsInline
                  preload="metadata"
                  poster={posterSrc}
                  src={videoSrc}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    const p = v.getAttribute("poster") || "";
                    const hasRealPoster = p && !p.includes("default-poster.jpg");
                    if (!hasRealPoster) {
                      try {
                        v.currentTime = 0.001;
                      } catch {}
                    }
                  }}
                  onError={(e) => {
                    const v = e.currentTarget;
                    console.error("VIDEO ERROR:", {
                      src: v.currentSrc,
                      networkState: v.networkState,
                      readyState: v.readyState,
                      error: v.error?.message ?? null,
                    });
                  }}
                />
              </div>
            ) : (
              <div className="rounded-lg w-full h-full grid place-items-center bg-black/10 text-white">
                Brak wideo do odtworzenia
              </div>
            )
          )}
        </div>

        <div
          className="info-container relative z-10 p-2 rounded bg-gray-600 text-white flex flex-col justify-between mb-3"
          style={{
            minHeight: "150px",
            maxHeight: "170px",
            width: "450px",
            margin: "auto",
            boxShadow: "10px 15px 80px -5px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div>
            <h2
              style={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}
              className="text-2xl font-bold text-white"
            >
              {videos[selectedVideo].title}
            </h2>
            <p className="text-white">{videos[selectedVideo].description}</p>
          </div>

          <div className="mt-auto">
            <button
              onClick={handlePlay}
              className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              style={{
                border: "2px solid red",
                boxShadow: "0 0 15px rgba(27, 124, 64, 0.8)",
                color: "white",
                margin: "0 auto",
              }}
            >
              {playing ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>

        <div className="gallery-container flex flex-wrap justify-center items-center p-1 max-w-screen-lg mx-auto rounded-lg">
          {videos.map((video, index) => {
            const webpSrcSet = [
              video.thumbWebp320 && `${video.thumbWebp320} 320w`,
              video.thumbWebp640 && `${video.thumbWebp640} 640w`,
              video.thumbWebp1280 && `${video.thumbWebp1280} 1280w`,
            ]
              .filter(Boolean)
              .join(", ");

            const sizes =
              "(min-width:1024px) 109px, (min-width:640px) 109px, 100vw";
            const jpgFallback = video.thumb || video.cover || video.image || "";

            return (
              <button
                type="button"
                key={video.id ?? index}
                onClick={() => setSelectedVideo(index)}
                className={`group hover-enlarge m-2 rounded-lg overflow-hidden cursor-pointer ${
                  selectedVideo === index ? "border-blue-500" : ""
                }`}
                style={{
                  width: "109px",
                  height: "140px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                aria-label={`Otwórz wideo: ${video.title ?? ""}`}
              >
                {/* 👇 tutaj nowy wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <picture>
                    {webpSrcSet && (
                      <source
                        type="image/webp"
                        srcSet={webpSrcSet}
                        sizes={sizes}
                      />
                    )}
                    <img
                      src={jpgFallback}
                      alt={video.title ?? "Miniatura"}
                      loading="lazy"
                      decoding="async"
                      width={109}
                      height={140}
                      className="
                          absolute inset-0 w-full h-full object-cover
                          transition-transform duration-500
                          group-hover:scale-[1.03]
                          transform-gpu
                          will-change-[transform]
                        "
                      style={{
                        imageRendering: "auto",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </picture>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ToDoWrapper />

      <div className="fix-a">
        <div className="video-container rounded-lg shadow-2xl shadow-white"></div>
      </div>

      <div className="gallery-container p-1 rounded-lg"></div>

      <ImageUploader />

      <Gallery />

      <RecentPosts />

      <ContactSection />

      <Footer />
    </>
  );
}