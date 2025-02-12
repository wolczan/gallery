import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth"; // Upewnij się, że ścieżka jest poprawna!

export default function Login() {
  const { user, signIn } = useAuth() || {}; // ✅ Pobieramy user i signIn
  console.log("🔍 useAuth() w Login.jsx zwróciło:", { user, signIn });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Monitorujemy zmiany w `user`
  useEffect(() => {
    if (user) {
      console.log("🔄 user został zaktualizowany:", user);
      setTimeout(() => {
        window.user = user; // ✅ Opóźnienie pozwala Reactowi zaktualizować stan
        console.log("✅ window.user ustawiony:", window.user);
      }, 500); // Poczekaj 500 ms
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signIn) {
      console.error("❌ Błąd: signIn nie istnieje w useAuth()");
      return;
    }

    console.log("🔍 Próba logowania...");
    
    try {
      const userCredential = await signIn(email, password);
      console.log("✅ Użytkownik zalogowany:", userCredential?.user);
    } catch (error) {
      console.error("❌ Błąd logowania:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl mb-4">Zaloguj się</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border p-2 rounded"
        />
        <input 
          type="password" 
          placeholder="Hasło" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Zaloguj</button>
      </form>
    </div>
  );
}
