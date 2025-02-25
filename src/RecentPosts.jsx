import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Importuj swoją inicjalizację Firestore

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
      const docRef = await addDoc(collection(db, "posts"), { title, link, thumbnail });
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: docRef.id, title, link, thumbnail },
      ]);
      setTitle(""); // Czyści pole tytułu
      setLink(""); // Czyści pole linku
      alert("Post został dodany!");
    } catch (error) {
      console.error("Błąd podczas dodawania posta:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recent-posts p-4 sm:p-6 md:p-8">

      {/* Formularz do dodawania postów */}
      <h3>Dodaj nowy post</h3>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="Tytuł posta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Link do posta"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Dodawanie..." : "Dodaj post"}
        </button>
      </form>

      {/* Lista ostatnich postów */}
      <h3>Ostatnie posty</h3>
      <ul>
        {posts.map((post) => (
          <li
              key={post.id}
              style={{
                display: "flex", // Ustawia elastyczny układ
                alignItems: "center", // Wyrównuje miniaturkę i tekst w pionie
                marginBottom: "15px", // Dodaje odstęp między elementami listy
              }}
            >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "10px", // Odstęp między miniaturką a tekstem
                  borderRadius: "8px", // Opcjonalnie zaokrąglenie rogów
                }}
              />
            )}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <h4 style={{ margin: 0 }}>{post.title}</h4>
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RecentPosts;
