import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth"; 
import PropTypes from "prop-types";
import AuthContext from "./authContext"; // ✅ Importujemy kontekst

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    console.log("✅ AuthProvider zamontowany!");

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Zalogowano:", userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      console.error("❌ Błąd logowania:", error.message);
    }
  };

  const signOut = async () => {
    console.log("🔍 Próba wylogowania...");
    try {
      await firebaseSignOut(auth);
      console.log("🚪 Użytkownik powinien być wylogowany!");
      setUser(null); // Resetowanie użytkownika
    } catch (error) {
      console.error("❌ Błąd wylogowania:", error.message);
    }
  };
  

  console.log("✅ Przekazywane wartości w AuthProvider:", { user, signIn, signOut });
  console.log("✅ AuthProvider renderuje się! user:", user);
  console.log("✅ AuthProvider przekazuje: ", { user, signIn, signOut });

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}> {/* ✅ Przekazujemy poprawnie */}
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider; // ✅ Domyślny eksport
