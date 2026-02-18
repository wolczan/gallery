import { initializeApp, getApps, getApp } from "firebase/app";
import {initializeFirestore, persistentLocalCache, persistentMultipleTabManager, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "galeriazdjec-f4180.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// ✅ Inicjalizacja aplikacji Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Poprawiona inicjalizacja Firestore **(db MUSI być zdefiniowane przed `enableIndexedDbPersistence`)**
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
  experimentalForceLongPolling: true,
});


// ✅ Tworzymy referencję do kolekcji "images"
const imagesCollection = collection(db, "images");

// ✅ Inicjalizacja Storage i Auth
const storage = getStorage(app); // forceLongPolling dotyczy Firestore, nie Storage
const auth = getAuth(app);

// ✅ Eksportujemy poprawnie zainicjalizowane obiekty
export { app, db, auth, storage, imagesCollection };

// ✅ Logowanie konfiguracji Firebase (do debugowania)
console.log("✅ Firebase Project ID:", firebaseConfig.projectId);
console.log("✅ Firebase Config:", firebaseConfig);
console.log("✅ Firebase Storage Bucket:", firebaseConfig.storageBucket);
console.log("✅ Firestore Persistence włączone:", db);
