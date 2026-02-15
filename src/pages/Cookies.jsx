// src/pages/Cookies.jsx
import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Polityka cookies</h1>

      <p className="mb-4">
        Ta strona wyjaśnia, czym są pliki cookies i w jaki sposób są wykorzystywane w serwisie.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Czym są pliki cookies?</h2>
      <p className="mb-4">
        Cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu, które pomagają
        w prawidłowym działaniu serwisu oraz mogą służyć do analityki i marketingu (w zależności od zgód).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Jakie cookies stosujemy?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Niezbędne</b> – wymagane do działania serwisu (np. bezpieczeństwo, sesja).</li>
        <li><b>Analityczne</b> – pomagają zrozumieć, jak użytkownicy korzystają ze strony (opcjonalne).</li>
        <li><b>Marketingowe</b> – używane do personalizacji reklam (opcjonalne, jeśli wdrożysz reklamy).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Jak zarządzać cookies?</h2>
      <p className="mb-4">
        Możesz zmienić ustawienia cookies w swojej przeglądarce. Jeśli wdrożysz baner zgód,
        użytkownik może również zarządzać zgodami bezpośrednio w serwisie.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Zmiany w polityce cookies</h2>
      <p className="mb-4">
        Polityka cookies może być aktualizowana. Data ostatniej aktualizacji powinna być widoczna na dole strony.
      </p>

      <p className="text-sm opacity-70 mt-10">Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>
    </div>
  );
}