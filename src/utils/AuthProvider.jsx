// AuthProvider.jsx
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  const signOutUser = async () => {
    console.log("🔍 Wylogowanie użytkownika...");
    try {
      await signOut(auth);
      console.log("🚪 Wylogowano!");
    } catch (error) {
      console.error("❌ Błąd wylogowania:", error.message);
    }
  };

  console.log("✅ Przekazywane wartości w AuthProvider:", { user, signIn, signOutUser });
  console.log("✅ AuthProvider renderuje się! user:", user);
  console.log("✅ AuthProvider przekazuje: ", { user, signIn, signOutUser });

  return (
    <AuthContext.Provider value={{ user, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider; // ✅ Domyślny eksport
