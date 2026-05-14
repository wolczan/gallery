import { initializeApp, getApps, getApp } from "firebase/app";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  collection,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",
  authDomain: "galeriazdjec-f4180.firebaseapp.com",
  projectId: "galeriazdjec-f4180",
  storageBucket: "galeriazdjec-f4180.firebasestorage.app",
  messagingSenderId: "789024046392",
  appId: "1:789024046392:web:26d9e3195917ed28e515cd",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
  experimentalForceLongPolling: true,
});

const imagesCollection = collection(db, "images");

const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage, imagesCollection };