import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";


function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Zalogowano:", userCredential.user);
      onClose(); // Zamknięcie modalu po zalogowaniu
    } catch (error) {
      console.error("⛔ Błąd logowania:", error.message);
    }
  };

  return (
    <div className="login-modal">
      <h2>Logowanie</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Hasło" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      
      <button onClick={handleLogin}>Sign In</button> 
      <button onClick={onClose}>Zamknij</button> {/* Zamknięcie logowania */}
    </div>
  );
}
Login.propTypes = {
  onClose: PropTypes.func.isRequired, // `onClose` musi być funkcją i jest wymagane
};

export default Login;
