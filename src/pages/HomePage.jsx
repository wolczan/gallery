import React from "react";
import VideoGallery from "../assets/components/VideoGallery";

// NOWOCZESNY, CZYSTY UKŁAD Z BANEREM W STYLU SHAREPOINT
// -----------------------------------------------------
// Główne założenia:
// - Smukły, poziomy baner (Top Bar) u góry – jak w SharePoint – z tytułem i krótkim opisem.
// - Ograniczona szerokość treści (max-w-screen-xl) + wewnętrzne marginesy.
// - Sekcja "Hero Cards": 3 karty z kluczowymi USP (lekkość, responsywność, Firestore/Hosting, itp.).
// - "Featured Video" + lista nowszych – jaśniejszy podział treści wideo.
// - Galeria zdjęć w układzie kolumnowym (masonry-like bez JS) – prosto i efektownie.
// - Delikatne cienie, zaokrąglenia 2xl, duże odstępy – minimalistycznie, ale nowocześnie.
// - Wszystko oparte o Tailwind.

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 ">
      {/* SHAREPOINT-STYLE TOP BAR */}
      <header className="relative w-full">
  <div className="relative mx-auto max-w-screen-2xl px-4 lg:px-8">
    <div className="relative h-[180px] sm:h-[220px] overflow-hidden rounded-b-3xl">

      {/* A) Tło: rozmyte, przyciemnione */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/videos%2Fresized%2Fchlopaki_1280x1280.webp?alt=media&token=a2183adc-79d8-41f6-8622-2f2b6d906ade"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover blur-sm brightness-[0.75] scale-110"
        aria-hidden="true"
      />

      {/* B) Ostry środek: brak skalowania w górę, trzymamy realną ostrość */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {/* „Okienko” – reguluje szerokość kadru; nie używamy object-cover */}
        <div className="h-full w-[380px] sm:w-[460px] md:w-[520px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galeriazdjec-f4180.firebasestorage.app/o/videos%2Fresized%2Fchlopaki_1280x1280.webp?alt=media&token=a2183adc-79d8-41f6-8622-2f2b6d906ade"
            alt="Panel SharePoint"
            className="max-h-full w-auto block mx-auto"
          />
        </div>
      </div>

      {/* C) Teksty na wierzchu */}
      <div className="relative z-20 h-full flex items-center">
        <div className="text-white drop-shadow max-w-2xl">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
            Nowość • 2025
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">
            Minimalistyczna Galeria Wideo + Foto
          </h1>
          <p className="mt-1 text-white/90">
            Szybkie ładowanie, czysty design, pełna responsywność. Zbudowane na React + Tailwind.
          </p>
        </div>
      </div>
    </div>
  </div>
</header>


      {/* USP / CARDS */}
      <section className="mx-auto max-w-screen-xl px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Lekki i szybki",
              desc:
                "Skupiony CSS, przemyślany HTML i komponenty – gotowe na świetny LCP/CLS.",
            },
            {
              title: "Responsywny układ",
              desc:
                "Ograniczona szerokość treści + solidne marginesy – elegancko na laptopie i mobile.",
            },
            {
              title: "Gotowy pod Firebase",
              desc:
                "Sekcje przygotowane pod Twoje dane (Firestore/Storage/Functions).",
            },
          ].map((f, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED VIDEO + LISTA */}
      <section id="galeria" className="mx-auto max-w-screen-xl px-4 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Najnowsze wideo</h2>
            <p className="mt-2 text-gray-600 max-w-prose">
              Wybrane wideo na start + lista. Sekcję możesz podpiąć pod Firestore/API.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Zobacz wszystkie
          </a>
        </div>

        {/* Wyróżnione wideo (placeholder – zostawiamy VideoGallery jako siatkę poniżej) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <img
                src="https://picsum.photos/seed/featured-video/1280/720"
                alt="Featured video"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-900 font-bold shadow-lg hover:scale-105 transition"
                aria-label="Odtwórz"
              >
                ▶
              </button>
            </div>
          </div>
          <aside className="space-y-4">
            {[1, 2, 3].map((n) => (
              <a
                key={n}
                href="#"
                className="group flex gap-4 rounded-2xl border border-gray-200 p-3 hover:bg-gray-50 transition"
              >
                <img
                  src={`https://picsum.photos/seed/list-${n}/320/180`}
                  alt="miniatura"
                  className="h-20 w-36 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-medium group-hover:underline">Krótki tytuł wideo #{n}</h3>
                  <p className="text-sm text-gray-600">Opis 1–2 zdania. 2:34 min</p>
                </div>
              </a>
            ))}
          </aside>
        </div>

        {/* Siatka z Twojego komponentu */}
        <div className="mt-10">
          <VideoGallery />
        </div>
      </section>

      {/* GALERIA FOTO – styl masonry (pure CSS columns) */}
      <section className="mx-auto max-w-screen-xl px-4 lg:px-8 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Wybrane fotografie</h2>
            <p className="mt-2 text-gray-600 max-w-prose">
              Prosty układ kolumnowy bez JS. Zamień na swoje obrazy/miniatury.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Otwórz pełny album
          </a>
        </div>

        {/* columns-1 sm:columns-2 lg:columns-3 tworzy masonry-like; break-inside-avoid zapobiega łamaniu kart */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {[
            "a","b","c","d","e","f","g","h","i","j"
          ].map((seed) => (
            <figure key={seed} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <img
                src={`https://picsum.photos/seed/${seed}/1200/900`}
                alt="Zdjęcie"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4">
                <h3 className="font-semibold">Tytuł kadru</h3>
                <p className="mt-1 text-sm text-gray-600">Krótki opis ujęcia.</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
        <div className="mx-auto max-w-screen-xl px-4 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold">Dołącz do aktualizacji</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Zostaw e-mail, aby otrzymywać powiadomienia o nowych filmach, zdjęciach i wpisach.
          </p>
          <form className="mt-8 mx-auto max-w-md flex gap-2">
            <input
              type="email"
              placeholder="Twój e-mail"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
            <button
              type="button"
              className="rounded-xl bg-black px-5 py-3 text-white font-medium shadow-lg hover:shadow-xl transition"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
