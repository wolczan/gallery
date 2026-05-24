export default function Plakaty() {
  const posters = [
    {
      id: 1,
      title: "Cinematic Łódź",
      image:
        "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/resized%2FChatGPT%20Image%2020%20maj%202026%2C%2020_37_58_1280x1280.jpeg?alt=media&token=e1679d94-22c3-4ab0-9ef1-f9e0537c71e5",
    },
    {
      id: 2,
      title: "Industrial Mood",
      image:
        "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/resized%2Fokiennice_manu_1280x1280.jpeg?alt=media&token=e9dbbf42-f5ca-477c-b131-aa8cc1f19483",
    },
    {
      id: 3,
      title: "Neon Streets",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
     {
      id: 4,
      title: "Neon Streets",
      image:
        "https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/resized%2Fpiotrkowska_noc%C4%85_1280x1280.jpeg?alt=media&token=08efca4d-606f-4ccb-bb01-fcb7e988512e",
    },
     {
      id: 5,
      title: "Neon Streets",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="max-w-2xl">
          <h2 className="mb-3 text-xl font-semibold">
            Kolekcja plakatów
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            Autorskie fotografie i kompozycje przygotowane w klimacie
            cinematic, urban i minimalistycznym. Każdy projekt może zostać
            wydrukowany jako premium poster do wnętrz.
          </p>
        </div>
      </section>

      {/* GRID */}
<section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-16 md:grid-cols-3 lg:grid-cols-4">
  {posters.map((poster) => (
    <article
      key={poster.id}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-white/20"
    >
      <div className="overflow-hidden">
        <img
          src={poster.image}
          alt={poster.title}
          className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold md:text-base">
          {poster.title}
        </h3>

        <p className="mt-1 text-xs text-zinc-400">
          Premium cinematic poster
        </p>

        <button className="mt-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-zinc-300">
          Kup
        </button>
      </div>
    </article>
  ))}
</section>
    </div>
  );
}