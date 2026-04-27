import { FaPlay, FaPause } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState} from "react";

export default function VideoPlayerCard({
  videos,
  selectedVideo,
  setSelectedVideo,
  videoRef,
  playing,
  setPlaying,
  handlePlay,
  posterSrc,
  videoSrc,
  hasSource,
}) {
  const current = videos?.[selectedVideo] ?? null;
  const firstRow = videos?.slice(0, Math.ceil(videos.length / 2)) ?? [];
  const secondRow = videos?.slice(Math.ceil(videos.length / 2)) ?? [];
  const [scrollState, setScrollState] = useState({
    row1: { left: false, right: true },
    row2: { left: false, right: true },
  });

  const updateScrollState = (rowId, key) => {
  const el = document.getElementById(rowId);
  if (!el) return;

  const { scrollLeft, scrollWidth, clientWidth } = el;

  setScrollState((prev) => ({
    ...prev,
    [key]: {
      left: scrollLeft > 5,
      right: scrollLeft + clientWidth < scrollWidth - 5,
    },
  }));
};

  const scrollRow = (rowId, key, amount) => {
    const el = document.getElementById(rowId);
    if (!el) return;

    el.scrollBy({ left: amount, behavior: "smooth" });

    setTimeout(() => {
      updateScrollState(rowId, key);
    }, 350);
  };
 
  return (
    <section className="mx-auto max-w-[1000px] px-0.5 lg:px-8 py-2 ">
      <div className="relative overflow-hidden rounded-xl bg-black border-none shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] ">
        {videos?.length > 0 && selectedVideo != null ? (
          hasSource ? (
            <div className="relative">
              {/* TŁO VIDEO */}
              <div className="relative aspect-[16/9] w-full  overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                <video className="relative h-full w-full object-cover blur-xl scale-110 opacity-40 pointer-events-none"
                    src={videoSrc}
                    muted
                    playsInline
                    aria-hidden="true"
                  />
                  <motion.video
                    key={selectedVideo}
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster={posterSrc}
                    src={videoSrc}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45 }}
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
                </AnimatePresence>

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

                {/* TREŚĆ NA VIDEO */}
                <div className="absolute inset-0 flex items-end">
                <div className="w-full p-3 sm:p-6 lg:p-10">
                    <div className="max-w-lg text-left">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                        Wideo {selectedVideo + 1} / {videos.length}
                      </span>

                      <h2 className="mt-1 max-w-[220px] text-base font-bold leading-snug text-white sm:mt-3 sm:max-w-md sm:text-lg lg:max-w-lg lg:text-xl">
                        {current?.title ?? "—"}
                      </h2>

                     <p className="mt-2 max-w-lg text-xs leading-relaxed text-white/75 sm:text-sm lg:text-base">
                        {current?.description ?? ""}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <motion.button
                          onClick={handlePlay}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.96 }}
                         className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow-lg transition sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                        >
                          {playing ? <FaPause /> : <FaPlay />}
                          {playing ? "Pauza" : "Odtwórz"}
                        </motion.button>

                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur sm:px-5 sm:py-3 sm:text-sm"
                        >
                          Szczegóły
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           {/* MINIATURY */}
            <div className="border-t border-white/5 bg-black/80 px-0 py-3 backdrop-blur">
              <div className="space-y-0">

                {/* PIERWSZY RZĄD */}
                <div className="relative">

                        <div
  id="video-row-1"
  onScroll={() => updateScrollState("video-row-1", "row1")}
  className="flex gap-0.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
>
  {scrollState.row1.left && (
  <button
    type="button"
    onClick={() => scrollRow("video-row-1", "row1", -300)}
    className="absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-black to-transparent"
  />
)}

{scrollState.row1.right && (
  <button
    type="button"
    onClick={() => scrollRow("video-row-1", "row1", 300)}
    className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-black to-transparent"
  />
)}
                    {firstRow.map((video, index) => {
                      const webpSrcSet = [
                        video.thumbWebp320 && `${video.thumbWebp320} 320w`,
                        video.thumbWebp640 && `${video.thumbWebp640} 640w`,
                        video.thumbWebp1280 && `${video.thumbWebp1280} 1280w`,
                      ].filter(Boolean).join(", ");

                      const sizes = "(min-width:1280px) 180px, (min-width:768px) 160px, 44vw";
                      const jpgFallback = video.thumb || video.cover || video.image || "";
                      const isActive = selectedVideo === index;

     return (
            <button
              type="button"
              key={video.id ?? index}
              onClick={() => setSelectedVideo(index)}
              className={[
                "relative shrink-0 overflow-hidden rounded-md border transition",
                isActive
                  ? "border-white/60 ring-2 ring-white/20"
                  : "border-white/10 hover:border-white/30",
              ].join(" ")}
              style={{ width: 160 }}
              aria-label={`Otwórz wideo: ${video.title ?? ""}`}
            >
              <div className="relative aspect-video w-full bg-black/30">
                <picture>
                  {webpSrcSet && (
                    <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
                  )}
                  <img
                    src={jpgFallback}
                    alt={video.title ?? "Miniatura"}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <p className="line-clamp-1 text-xs font-medium text-white">
                    {video.title ?? ""}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {scrollState.row2.left && (
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
      )}

<button
  type="button"
  onClick={() => {
    const row = document.getElementById("video-row-1");
    row?.scrollBy({ left: 300, behavior: "smooth" });
  }}
  className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-black to-transparent"
/>
    </div>

    {/* DRUGI RZĄD */}
    <div className="relative">
   <div
      id="video-row-2"
      onScroll={() => updateScrollState("video-row-2", "row2")}
      className="flex gap-0.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
    >
        {secondRow.map((video, rowIndex) => {
          const realIndex = rowIndex + firstRow.length;

          const webpSrcSet = [
            video.thumbWebp320 && `${video.thumbWebp320} 320w`,
            video.thumbWebp640 && `${video.thumbWebp640} 640w`,
            video.thumbWebp1280 && `${video.thumbWebp1280} 1280w`,
          ].filter(Boolean).join(", ");

          const sizes = "(min-width:1280px) 180px, (min-width:768px) 160px, 44vw";
          const jpgFallback = video.thumb || video.cover || video.image || "";
          const isActive = selectedVideo === realIndex;

          return (
            <button
              type="button"
              key={video.id ?? realIndex}
              onClick={() => setSelectedVideo(realIndex)}
              className={[
                "relative shrink-0 overflow-hidden rounded-md border transition",
                isActive
                  ? "border-white/60 ring-2 ring-white/20"
                  : "border-white/10 hover:border-white/30",
              ].join(" ")}
              style={{ width: 160 }}
              aria-label={`Otwórz wideo: ${video.title ?? ""}`}
            >
              <div className="relative aspect-video w-full bg-black/30">
                <picture>
                  {webpSrcSet && (
                    <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
                  )}
                  <img
                    src={jpgFallback}
                    alt={video.title ?? "Miniatura"}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <p className="line-clamp-1 text-xs font-medium text-white">
                    {video.title ?? ""}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

     {scrollState.row2.left && (
  <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
)}
        {scrollState.row2.right && (
      <button
        type="button"
        onClick={() => {
          const row = document.getElementById("video-row-2");
          row?.scrollBy({ left: 300, behavior: "smooth" });
        }}
        className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-black to-transparent"
      />
        )}
    </div>

  </div>
</div>
            </div>
          ) : (
            <div className="grid aspect-[4/3] place-items-center bg-black/40 text-white/80">
              Brak wideo do odtworzenia
            </div>
          )
        ) : (
          <div className="grid aspect-[4/3] place-items-center bg-black/40 text-white/80">
            Brak materiałów
          </div>
        )}
      </div>
    </section>
  );
}