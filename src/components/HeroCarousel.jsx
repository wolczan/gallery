import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    label: "Poster Collection",
    title: "Cinematic Łódź Posters",
    subtitle: "Minimalistyczna kolekcja plakatów inspirowanych filmowym klimatem Łodzi, neonami, industrialną architekturą i miejską atmosferą po zmroku i nie tylko.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/Zdjecia%20salonowe%2Fresized%2FP-street_1280x1280.webp?alt=media&token=ecfe6cb9-0e68-4334-b93f-cdde3e932318",
    button: "Zobacz kolekcję",
    path: "/Plakaty",
  },
  {
    label: "Interior Posters",
    title: "Plakaty do salonu",
    subtitle: "Modern wall art for living rooms and offices.",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/Zdjecia%20salonowe%2Fresized%2Fbannerhero_1_main_1280x1280.jpeg?alt=media&token=6917b503-b98d-4edf-b073-7ba5a5404474",
    button: "Kup plakat",
    path: "/Plakaty",
  },
  {
    label: "Wall Art",
    title: "Industrial Mood",
    subtitle: "Loft and industrial style wall decor.",
    image: "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/Zdjecia%20salonowe%2Fresized%2Fbannerhero_1_main_1280x1280.jpeg?alt=media&token=6917b503-b98d-4edf-b073-7ba5a5404474",
    button: "Odkryj kolekcję",
    path: "/Plakaty",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="mx-auto max-w-[1700px] px-1 py-1 md:px-6">
      <div className="relative h-[380px] overflow-hidden rounded-xl bg-zinc-950 text-white shadow-2xl md:h-[460px]">
        <div className="absolute inset-0">
          <img
            src={slide.image}
            alt={slide.title}
            loading="eager"
            fetchpriority="high"
            className="h-full w-full object-cover object-center opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-end px-4 pb-6 md:px-10 md:pb-4">
          <div className="max-w-md">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              {slide.label}
            </p>

            <h2 className="mb-1 text-lg font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] md:text-3xl">
              {slide.title}
            </h2>

            <p className="mb-4 max-w-lg text-xs leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-sm">
              {slide.subtitle}
            </p>

            <button
              onClick={() => navigate(slide.path)}
              className="rounded-md bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-violet-500"
            >
              {slide.button}
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}