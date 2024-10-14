// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",
  authDomain: "galeriazdjec-f4180.firebaseapp.com",
  projectId: "galeriazdjec-f4180",
  storageBucket: "galeriazdjec-f4180.appspot.com",
  messagingSenderId: "789024046392",
  appId: "1:789024046392:web:26d9e3195917ed28e515cd",
  measurementId: "G-WX9ZBHXLSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it

const db = getFirestore(app); // Initialize Firestore
export { db };