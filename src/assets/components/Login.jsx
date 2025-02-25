import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth"; // Hook do autoryzacji
import PropTypes from "prop-types";


export default function Login({ onClose }) { // <-- Przekazujemy funkcję onClose jako prop
  const { user, signIn, signOut } = useAuth() || {}; // Pobieramy user i funkcje logowania/wylogowania
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Czy onClose działa?", onClose);

  useEffect(() => {
    if (user) {
      console.log("🔄 user został zaktualizowany:", user);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signIn) return console.error("❌ Błąd: signIn nie istnieje");

    try {
      await signIn(email, password);
      console.log("✅ Zalogowano pomyślnie!");
      onClose(); // Po zalogowaniu zamykamy okno logowania
    } catch (error) {
      console.error("❌ Błąd logowania:", error.message);
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-red-500">
      <div className="bg-red-900 p-6 rounded-lg shadow-lg text-white">
        {/* Jeśli użytkownik jest zalogowany, pokazujemy przycisk wylogowania */}
        {user ? (
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-4">Witaj, {user.email}!</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-2">
              Wyloguj
            </button>
            <button onClick={onClose} className="bg-gray-600 text-white p-2 rounded">
              Zamknij
            </button>
          </div>
        ) : (
          <>
            <button onClick={onClose} className="bg-gray-600 text-white p-2 rounded mb-4">
              Zamknij
            </button>

            

            <h2 className="text-xl mb-4">Zaloguj się</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="border p-2 rounded text-black"
              />
              <input 
                type="password" 
                placeholder="Hasło" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="border p-2 rounded text-black"
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Zaloguj
              </button>
              <button onClick={onClose} className="bg-gray-600 text-white p-2 rounded mb-4">
              Zamknij
            </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}
Login.propTypes = {
  onClose: PropTypes.func.isRequired, // Wymagamy, aby `onClose` było funkcją
};
