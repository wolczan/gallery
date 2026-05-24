import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-[1700px] px-1 py-1 md:px-6">
      <div className="relative h-[380px] overflow-hidden rounded-xl bg-zinc-950 text-white shadow-2xl md:h-[460px]">
        <div className="absolute inset-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/resized%2FChatGPT%20Image%2020%20maj%202026%2C%2020_37_58_1280x1280.jpeg?alt=media&token=e1679d94-22c3-4ab0-9ef1-f9e0537c71e5"
            alt="Cinematic Łódź"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-end px-4 pb-6 md:px-10 md:pb-4">
          <div className="max-w-md">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Poster Collection
            </p>

            <h2 className="mb-1 text-lg font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] md:text-3xl">
              Cinematic Łódź Posters
            </h2>

            <p className="mb-4 max-w-lg text-xs leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-sm">
              Minimalistyczna kolekcja plakatów inspirowanych filmowym klimatem
              Łodzi, neonami, industrialną architekturą i miejską atmosferą po
              zmroku i nie tylko.
            </p>

            <button
              onClick={() => navigate("/Plakaty")}
              className="rounded-md bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-violet-500"
            >
              Zobacz kolekcję
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}