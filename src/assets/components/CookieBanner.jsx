// src/assets/components/CookieBanner.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div
        className="
          max-w-3xl
          mx-auto
          rounded-2xl
          border
          border-white/10
          bg-zinc-950/95
          p-3
          text-white
          shadow-2xl
          backdrop-blur-md
        "
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
         <p className="text-[11px] leading-relaxed text-zinc-400">
            🍪 Używamy cookies, aby zapewnić działanie serwisu oraz
            (opcjonalnie) analitykę. Więcej informacji:{" "}
            <Link
              className="font-medium text-violet-400 underline hover:text-violet-300"
              to="/cookies"
            >
              Polityka cookies
            </Link>
            .
          </p>

          <div className="flex w-full justify-end gap-2 md:w-auto">
            <button
              onClick={reject}
              className="
                rounded-lg
                border
                border-white/10
                px-2
                py-1
                text-xs
                text-zinc-300
                transition
                hover:bg-white/5
              "
            >
              Odrzuć
            </button>

            <button
              onClick={accept}
             className="
                rounded-lg
                bg-violet-600
                px-2.5
                py-1
                text-xs
                font-semibold
                text-white
                transition
                hover:bg-violet-500
              "
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}