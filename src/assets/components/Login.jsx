import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth"; // Hook do autoryzacji
import PropTypes from "prop-types";


export default function Login({ onClose }) { // <-- Przekazujemy funkcję onClose jako prop
  const { user, signIn, signUp, signOut } = useAuth() || {}; // Pobieramy user i funkcje logowania/wylogowania
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  console.log("Czy onClose działa?", onClose);

  useEffect(() => {
    if (user) {
      console.log("🔄 user został zaktualizowany:", user);
    }
  }, [user]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (isRegisterMode) {
      await signUp(email, password);
      console.log("✅ Konto utworzone!");
    } else {
      await signIn(email, password);
      console.log("✅ Zalogowano!");
    }

    onClose();
  } catch (error) {
    console.error("❌ Błąd:", error.message);
  }
};

  const handleLogout = async () => {
    if (!signOut) return console.error("❌ Błąd: signOut nie istnieje");

    try {
      await signOut();
      console.log("✅ Wylogowano pomyślnie!");
    } catch (error) {
      console.error("❌ Błąd wylogowania:", error.message);
    }
  };
  


  return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
    <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/90 p-8 text-white shadow-2xl">

      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
      >
        ✕
      </button>

      {user ? (
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            ✓
          </div>

          <h2 className="mb-2 text-2xl font-semibold">Jesteś zalogowany</h2>
          <p className="mb-6 max-w-xs text-sm text-white/60">
            {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="w-full rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Wyloguj
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 text-center">
           <h2 className="text-3xl font-semibold tracking-tight">
            {isRegisterMode ? "Utwórz konto" : "Zaloguj się"}
          </h2>
            <p className="mt-2 text-sm text-white/50">
              Wejdź do swojego konta galerii
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
            />

            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
            />

            <button
              type="submit"
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
            >
              {isRegisterMode ? "Utwórz konto" : "Zaloguj"}
            </button>
            <button
                type="button"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
                className="text-sm text-white/60 hover:text-white transition"
              >
                {isRegisterMode
                  ? "Masz już konto? Zaloguj się"
                  : "Nie masz konta? Zarejestruj się"}
              </button>
          </form>
        </>
      )}
    </div>
  </div>
);}
