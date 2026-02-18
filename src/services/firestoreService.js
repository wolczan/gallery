import { collection, onSnapshot, query, where, orderBy, limit, getDocs, startAfter, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/firebase";

// ====== PAGINACJA: images ======
export const subscribeImagesPage = ({ pageSize = 12, callback }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const imagesRef = collection(db, "images");

  // base query: filtr userId jeśli user zalogowany
  const base = user
    ? query(imagesRef, where("userId", "==", user.uid))
    : query(imagesRef);

  // sort + limit (ważne: createdAt musi istnieć)
  const q = query(base, orderBy("createdAt", "desc"), limit(pageSize));

  const unsubscribe = onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    const lastDoc = snap.docs[snap.docs.length - 1] || null;
    callback({ items, lastDoc });
  });

  return unsubscribe;
};

export const loadMoreImages = async ({ lastDoc, pageSize = 12 }) => {
  if (!lastDoc) return { items: [], lastDoc: null };

  const auth = getAuth();
  const user = auth.currentUser;

  const imagesRef = collection(db, "images");
  const base = user
    ? query(imagesRef, where("userId", "==", user.uid))
    : query(imagesRef);

  const q = query(base, orderBy("createdAt", "desc"), startAfter(lastDoc), limit(pageSize));
  const snap = await getDocs(q);

  const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const newLastDoc = snap.docs[snap.docs.length - 1] || null;

  return { items, lastDoc: newLastDoc };
};

// ====== UPLOAD ======
export async function uploadImageToFirestore(file, meta = {}) {
  if (!file) throw new Error("❌ Brak pliku!");

  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error("❌ Użytkownik niezalogowany!");

  const storage = getStorage();
  const uniqueFileName = `${user.uid}-${uuidv4()}-${file.name}`;
  const storageRef = ref(storage, `images/${user.uid}/${uniqueFileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
  "state_changed",
  () => {},
  reject,
  async () => {
    try {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log("✅ downloadURL:", downloadURL);

      const docRef = await addDoc(collection(db, "images"), {
        userId: user.uid,
        imageUrl: downloadURL,
        createdAt: serverTimestamp(),
         title: meta.title || file.name.replace(/\.[^/.]+$/, ""),
          description: meta.description || "",
      });

      console.log("✅ Firestore doc created, ID:", docRef.id);

      resolve(downloadURL);
    } catch (e) {
      console.error("❌ Firestore addDoc failed:", e);
      reject(e);
    }
  }
);

  });
}
