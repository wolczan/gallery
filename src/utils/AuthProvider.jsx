import { useEffect, useState, useContext } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,  createUserWithEmailAndPassword,setPersistence, browserSessionPersistence, signOut as firebaseSignOut } from "firebase/auth"; 
import PropTypes from "prop-types";
import AuthContext from "./authContext"; // ✅ Importujemy kontekst

export function useAuth() {
  return useContext(AuthContext);
}

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

  const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  setUser(userCredential.user);
  return userCredential.user;
    };

  const signIn = async (email, password) => {
  try {

    await setPersistence(auth, browserSessionPersistence);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

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
  

  console.log("✅ Przekazywane wartości w AuthProvider:", { user, signIn, signUp,signOut });
  console.log("✅ AuthProvider renderuje się! user:", user);
  console.log("✅ AuthProvider przekazuje: ", { user, signIn, signOut });

  return (
    <AuthContext.Provider value={{ user, signIn, signUp,signOut }}> {/* ✅ Przekazujemy poprawnie */}
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider; // ✅ Domyślny eksport
