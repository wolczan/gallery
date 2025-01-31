// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "galeriazdjec-f4180.appspot.com",
  messagingSenderId: "789024046392",
  appId: "1:789024046392:web:26d9e3195917ed28e515cd",
  measurementId: "G-WX9ZBHXLSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it

console.log("Firebase App Initialized:", app);


const db = getFirestore(app); // Initialize Firestore
export { db };
export const auth = getAuth(app);
export { app, analytics };
