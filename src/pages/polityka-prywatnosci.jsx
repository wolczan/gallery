import React from "react";
import { Link } from "react-router-dom";

export default function PolitykaPrywatnosci() {
  const effectiveDate = "2026-01-25"; // zmień na swoją datę publikacji

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb / back */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <Link to="/" className="hover:text-white underline underline-offset-4">
            Strona główna
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white">Polityka prywatności</span>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Polityka prywatności</h1>
          <p className="mt-2 text-white/70">
            Obowiązuje od: <span className="text-white">{effectiveDate}</span>
          </p>
        </header>

        <article className="space-y-8 leading-relaxed text-white/90">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">1. Informacje ogólne</h2>
            <p>
              Administratorem danych osobowych jest: <strong>[Twoje imię i nazwisko]</strong>,
              prowadzący sprzedaż w ramach działalności nierejestrowanej.
            </p>
            <p>
              Kontakt e-mail: <strong>[kontakt@twojadomena.pl]</strong>
              <br />
              Strona internetowa: <strong>[adres strony]</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">2. Zakres zbieranych danych</h2>
            <p>Za pośrednictwem strony mogą być zbierane następujące dane:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>imię i nazwisko</li>
              <li>adres e-mail</li>
              <li>adres do wysyłki zamówienia</li>
              <li>dane podane dobrowolnie w formularzu</li>
              <li>adres IP</li>
              <li>dane statystyczne dotyczące korzystania ze strony</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">3. Cele przetwarzania danych</h2>
            <p>Dane osobowe przetwarzane są w celu:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>realizacji zamówień (sprzedaż plakatów fotograficznych)</li>
              <li>kontaktu z użytkownikiem</li>
              <li>obsługi reklamacji</li>
              <li>realizacji obowiązków wynikających z przepisów prawa (np. podatkowych)</li>
              <li>prowadzenia statystyk odwiedzin (jeśli używasz narzędzi analitycznych)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">4. Podstawa prawna przetwarzania</h2>
            <p>Dane są przetwarzane na podstawie:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>art. 6 ust. 1 lit. b RODO – wykonanie umowy</li>
              <li>art. 6 ust. 1 lit. c RODO – obowiązek prawny</li>
              <li>art. 6 ust. 1 lit. a RODO – zgoda (gdy jest wymagana)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Odbiorcy danych</h2>
            <p>Dane mogą być przekazywane podmiotom współpracującym przy realizacji zamówień, w szczególności:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>firmie drukarskiej realizującej wydruk plakatów</li>
              <li>firmie kurierskiej lub pocztowej</li>
              <li>
                dostawcom usług technologicznych (np. Google/Firebase: Hosting, Firestore, ewentualnie Analytics)
              </li>
            </ul>
            <p className="text-white/75">
              Dane mogą być przekazywane poza Europejski Obszar Gospodarczy zgodnie z obowiązującymi przepisami RODO
              (np. na podstawie standardowych klauzul umownych).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">6. Okres przechowywania danych</h2>
            <p>Dane osobowe będą przechowywane:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>przez czas niezbędny do realizacji zamówienia</li>
              <li>przez okres wymagany przepisami prawa (np. podatkowymi)</li>
              <li>do czasu cofnięcia zgody – jeśli zgoda była podstawą przetwarzania</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">7. Prawa użytkownika</h2>
            <p>Użytkownik ma prawo do:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              <li>dostępu do danych</li>
              <li>sprostowania danych</li>
              <li>żądania usunięcia danych</li>
              <li>ograniczenia przetwarzania</li>
              <li>przenoszenia danych</li>
              <li>wniesienia sprzeciwu</li>
              <li>wniesienia skargi do Prezesa UODO</li>
            </ul>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
              {" "}
              <strong>[kontakt@twojadomena.pl]</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">8. Pliki cookies</h2>
            <p>
              Strona może wykorzystywać pliki cookies w celach funkcjonalnych oraz statystycznych (np. Google Analytics,
              jeśli jest włączone). Użytkownik może zarządzać cookies w ustawieniach przeglądarki.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">9. Bezpieczeństwo danych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych
              danych osobowych przed utratą, nieuprawnionym dostępem lub modyfikacją.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">10. Zmiany polityki prywatności</h2>
            <p>
              Polityka prywatności obowiązuje od dnia: <strong>{effectiveDate}</strong>. Administrator może ją aktualizować,
              publikując nową wersję na stronie.
            </p>
          </section>

          <hr className="border-white/10" />

          <div className="flex flex-wrap gap-3">
            <Link
              to="/regulamin"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
            >
              Przejdź do Regulaminu
            </Link>
            <Link
              to="/kontakt"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
            >
              Kontakt
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}