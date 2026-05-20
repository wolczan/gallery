import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy ,  onSnapshot } from "firebase/firestore";
//import { db } from "../firebase"; // Importuj swoją inicjalizację Firestore
import { db } from "@/firebase"; // Importuj swoją inicjalizację Firestore

import { motion } from "framer-motion";
import { doc, updateDoc, increment } from "firebase/firestore";



function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(""); // Stan do przechowywania tytułu posta
  const [link, setLink] = useState("");  // Stan do przechowywania linku do posta
  const [loading, setLoading] = useState(false); // Obsługa ładowania

  // Pobieranie istniejących postów z Firestore
      useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const postsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setPosts(postsData);
        });

        return () => unsubscribe();
      }, []);

  const fetchYoutubeThumbnail = (url) => {
    try {
      if (url.includes("youtu.be")) {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0];
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      } else if (url.includes("youtube.com")) {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v");
        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
      }
      return null;
    } catch (error) {
      console.error("Błąd podczas generowania miniaturki YouTube:", error);
      return null;
    }
  };

  // Funkcja do pobierania miniatury (YouTube lub OpenGraph) , Pobranie miniaturki z metadanych Open Graph
const fetchThumbnail = async (url) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return fetchYoutubeThumbnail(url); // Obsługa YouTube
  }
  try {
    // Obsługa innych linków przez OpenGraph
    const response = await fetch(
      `https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=74430628-2023-4e90-9d59-a4ff6779d48e`
    );
    const data = await response.json();
    console.log("OpenGraph response:", data); // Logowanie danych
    return data.hybridGraph.image || null;
  } catch (error) {
    console.error("Błąd podczas pobierania miniaturki:", error);
    return null;
  }
};

  // Funkcja obsługująca dodawanie nowych postów
  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!title || !link) {
      alert("Proszę wypełnić oba pola!");
      return;
    }

    setLoading(true);
    try {
      const thumbnail = await fetchThumbnail(link); // Pobierz miniaturkę
      await addDoc(collection(db, "posts"), { title, link, thumbnail, createdAt: serverTimestamp(), likes: 0 })
      setTitle(""); // Czyści pole tytułu
      setLink(""); // Czyści pole linku
    } catch (error) {
      console.error("Błąd podczas dodawania posta:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: increment(1),
    });

    // Odśwież dane po kliknięciu serduszka
    const updatedSnapshot = await getDocs(collection(db, "posts"));
    const updatedPosts = updatedSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(updatedPosts);
  } catch (error) {
    console.error("Błąd podczas aktualizacji liczby polubień:", error);
  }
};

  

return (
  <div className="bg-gradient-to-b from-black to-zinc-950 py-10">
    <div className="recent-posts max-w-lg mx-auto px-4 sm:px-6 py-6">

      {/* Formularz do dodawania postów */}
      <h3 className="text-lg font-semibold text-zinc-900">Dodaj nowy post</h3>

        <p className="mt-1 text-sm text-zinc-400">
          Udostępnij link, inspirację lub materiał do bloga.
        </p>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-black to-zinc-950 p-5 shadow-2xl backdrop-blur-md">
       <form onSubmit={handleAddPost} className="flex flex-col gap-1">
      
        <input
          className="h-9 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none backdrop-blur-md focus:border-blue-400"
          type="text"
          placeholder="Tytuł posta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="h-9 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none backdrop-blur-md focus:border-blue-400"
          type="url"
          placeholder="Link do posta"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="h-9 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Dodawanie..." : "Dodaj post"}</button>

       </form>
      </div>

  {/* Lista ostatnich postów */}
<h3 className="mt-8 text-lg font-semibold text-zinc-900">
  Ostatnie posty
</h3>
<ul className="space-y-4 mt-6">
  {posts.map((post, index) => {
   // console.log("POST:", post); // 👈 podgląd danych

    return (
      <motion.li
        key={post.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
       className="w-full flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/70 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
      >
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-16 w-20 rounded-xl object-cover"
          />
        )}

        <div className="flex flex-col">
          <p className="text-left text-sm font-medium text-white leading-snug">
            {post.title}
          </p>

          {/* DATA */}
          {post.createdAt && (
            <p className="text-xs text-zinc-400 mt-1">
              Dodano: {new Date(post.createdAt.seconds * 1000).toLocaleString()}
            </p>
          )}

          {/* ❤️ POLUBIENIE */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => handleLike(post.id)}
              className="text-red-500 text-xl hover:scale-110 transition"
            >
              ❤️
            </button>
            <span className="text-sm text-zinc-400">{post.likes || 0}</span>
          </div>
        </div>
      </motion.li>
    );
  })}
</ul>


</div>

    </div>
  );
}

export default RecentPosts;
