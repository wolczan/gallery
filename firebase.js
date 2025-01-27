// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "default-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "default-auth-domain",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "default-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "default-storage-bucket",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "default-sender-id",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "default-app-id",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "default-measurement-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
