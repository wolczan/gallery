import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
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
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchPosts();
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


  // Pobranie miniaturki z metadanych Open Graph
  // Funkcja do pobierania miniatury (YouTube lub OpenGraph)
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
      await addDoc(collection(db, "posts"), { title, link, thumbnail, createdAt: serverTimestamp(), likes: 0 });
      const updatedSnapshot = await getDocs(collection(db, "posts"));
      const updatedPosts = updatedSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(updatedPosts);

      setTitle(""); // Czyści pole tytułu
      setLink(""); // Czyści pole linku
      alert("Post został dodany!");
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
    <div className="recent-posts max-w-3xl mx-auto px-4 sm:px-6 py-6">

      {/* Formularz do dodawania postów */}
      <h3>Dodaj nowy post</h3>
      <form onSubmit={handleAddPost} className="flex flex-col sm:flex-row gap-2 my-4">
  <input
    className="border rounded px-2 py-2 w-full sm:w-1/3"
    type="text"
    placeholder="Tytuł posta"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
  />
  <input
    className="border rounded px-3 py-2 w-full sm:w-1/3"
    type="url"
    placeholder="Link do posta"
    value={link}
    onChange={(e) => setLink(e.target.value)}
    required
  />
  <button
    type="submit"
    disabled={loading}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    {loading ? "Dodawanie..." : "Dodaj post"}
  </button>
</form>


  {/* Lista ostatnich postów */}
<h3>Ostatnie posty</h3>
<ul className="space-y-4 mt-6">
  {posts.map((post, index) => {
    console.log("POST:", post); // 👈 podgląd danych

    return (
      <motion.li
        key={post.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="w-full flex items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-[100px] h-[100px] object-cover rounded mr-4"
          />
        )}

        <div className="flex flex-col">
          <p className="text-left text-sm text-black leading-snug">
            {post.title}
          </p>

          {/* DATA */}
          {post.createdAt && (
            <p className="text-xs text-gray-500 mt-1">
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
            <span className="text-sm text-gray-600">{post.likes || 0}</span>
          </div>
        </div>
      </motion.li>
    );
  })}
</ul>




    </div>
  );
}

export default RecentPosts;
