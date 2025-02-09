import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "galeriazdjec-f4180.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// ✅ Najpierw inicjalizujemy aplikację
const app = initializeApp(firebaseConfig);

// ✅ Inicjalizacja Firestore (DOPIERO TERAZ MOŻNA UŻYĆ `db`)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({}),
  experimentalForceLongPolling: true,
});

// ✅ Teraz możemy utworzyć kolekcję "images"
const imagesCollection = collection(db, "images");

const storage = getStorage(app, {
  experimentalForceLongPolling: true, // ✅ Pozostaw, jeśli masz problemy z połączeniem
});

const auth = getAuth(app);

// ✅ Eksportujemy poprawnie zainicjalizowane obiekty
export { app, db, auth, storage, imagesCollection };

// ✅ Poprawne logowanie Firebase Configuration
console.log("✅ Firebase Project ID:", firebaseConfig.projectId);
console.log("✅ Firebase Config:", firebaseConfig);
console.log("✅ Firebase Storage Bucket:", firebaseConfig.storageBucket);
