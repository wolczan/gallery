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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p className="text-sm">
          Używamy cookies, aby zapewnić działanie serwisu oraz (opcjonalnie) analitykę.
          Więcej informacji: <Link className="underline" to="/cookies">Polityka cookies</Link>.
        </p>

        <div className="flex gap-2">
          <button onClick={reject} className="px-4 py-2 text-sm border rounded">
            Odrzuć
          </button>
          <button onClick={accept} className="px-4 py-2 text-sm border rounded font-semibold">
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}