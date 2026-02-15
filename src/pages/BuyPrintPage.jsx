import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function BuyPrintPage({ videos = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1) znajdujemy konkretny element po id
  const item = useMemo(
    () => videos.find((v) => String(v.id) === String(id)),
    [videos, id]
  );

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p>Nie znaleziono plakatu o podanym ID.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            Wróć
          </button>
        </div>
      </div>
    );
  }

  // 2) główny obraz – COVER
  const coverSrc =
    item.cover ||
    item.thumbWebp1280 ||
    item.thumbWebp640 ||
    item.image ||
    "/images/default-poster.jpg";

  // 3) mini wideo jako bonus
  const videoSrc =
    item.videoUrl ||
    item.video ||
    item.url ||
    item.mp4 ||
    "";

  // 4) opcje wydruku: z Firestore (printOptions) albo fallback
  const printOptions = Array.isArray(item.printOptions)
    ? item.printOptions
    : [
        { size: "30x40", price: 99 },
        { size: "50x70", price: 149 },
      ];

  const [size, setSize] = useState(printOptions[0]?.size ?? "");
  const [material, setMaterial] = useState("plakat"); // plakat / plotno

  const currentOption = printOptions.find((opt) => opt.size === size) || null;
  const finalPrice = currentOption?.price ?? 0;

  const handleCheckout = () => {
    // tu na razie ATRAPA – później podepniemy prawdziwą płatność
    console.log("Zamówienie:", {
      id: item.id,
      title: item.title,
      cover: coverSrc,
      video: videoSrc,
      size,
      material,
      price: finalPrice,
    });

    alert(
      `Zamówienie:\n${item.title}\nRozmiar: ${size}\nMateriał: ${material}\nCena: ${finalPrice} zł\n\nW kolejnym kroku podłączymy płatność.`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <div className="w-full max-w-5xl bg-zinc-900/80 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col gap-6 md:flex-row">
        {/* LEWA kolumna – główny plakat */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <img
            src={coverSrc}
            alt={item.title || "Plakat"}
            className="w-full rounded-xl object-cover shadow-lg"
          />

          {/* mini wideo jako bonus – tylko jeśli mamy URL */}
          {videoSrc && (
            <div>
              <p className="text-xs text-gray-300 mb-1">
                Podgląd wideo (bonus do plakatu):
              </p>
              <video
                src={videoSrc}
                controls
                playsInline
                className="w-full rounded-lg bg-black"
                preload="metadata"
              />
            </div>
          )}
        </div>

        {/* PRAWA kolumna – konfiguracja zamówienia */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div>
            <h1 className="text-xl font-bold mb-1">
              {item.title || "Plakat z galerii"}
            </h1>
            <p className="text-sm text-gray-300">
              Wybierz rozmiar i materiał, aby zamówić wydruk.
            </p>
          </div>

          {/* Rozmiar */}
          <div>
            <label className="block text-xs mb-1 uppercase tracking-wide text-gray-400">
              Rozmiar
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
            >
              {printOptions.map((opt) => (
                <option key={opt.size} value={opt.size}>
                  {opt.size} – {opt.price} zł
                </option>
              ))}
            </select>
          </div>

          {/* Materiał */}
          <div>
            <label className="block text-xs mb-1 uppercase tracking-wide text-gray-400">
              Materiał
            </label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
            >
              <option value="plakat">Plakat – papier premium</option>
              <option value="plotno">Płótno Canvas</option>
            </select>
          </div>

          {/* Cena */}
          <div className="mt-2 text-sm">
            Cena:
            <span className="font-bold ml-2 text-lg">
              {finalPrice ? `${finalPrice} zł` : "—"}
            </span>
          </div>

          {/* Przyciski */}
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={handleCheckout}
              disabled={!finalPrice}
              className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-sm font-semibold shadow-lg shadow-red-900/40 transition"
            >
              Przejdź do płatności
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs"
            >
              Wróć do galerii
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
