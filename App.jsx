import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoWrapper from './src/assets/ToDoWrapper';
import ContactForm from './src/assets/ContactForm.jsx';
import './index.css';
import Footer from './Footer.jsx';
import { Circles } from 'react-loader-spinner';
import { FaPlay, FaPause } from 'react-icons/fa';
import RecentPosts from './src/RecentPosts.jsx';
import ImageUploader from "./src/assets/components/ImageUploader.jsx";
import { getAuth } from "firebase/auth";
import Login from './src/assets/components/Login.jsx';
import { AuthProvider } from "./src/utils/AuthProvider.jsx";
import Gallery from "./src/assets/components/Gallery.jsx";
import VideoGallery from './src/assets/components/VideoGallery.jsx';  
import { fetchVideos } from "./src/services/videos";
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';  
import { AnimatePresence, motion } from 'framer-motion';
import MainNavbar from './src/components/MainNavbar.jsx';
import BuyPrintPage from "./src/pages/BuyPrintPage.jsx";
import Plakaty from "./src/pages/Plakaty.jsx";
import Fotografia from "./src/pages/Fotografia.jsx";
import Blog from "./src/pages/Blog.jsx";
import Dostawa from "./src/pages/Dostawa.jsx";
//import Zwroty from "./pages/Zwroty";
//import Faq from "./pages/Faq";
import PolitykaPrywatnosci from "./src/pages/polityka-prywatnosci.jsx";
import Regulamin from "./src/pages/Regulamin.jsx";
import HomePage from "./src/pages/HomePage.jsx";
import CookieBanner from './src/assets/components/CookieBanner.jsx';
import Cookies from './src/pages/Cookies.jsx';
import ContactSection from './src/assets/components/ContactSection.jsx';
import HomeRoute from './src/pages/HomeRoute.jsx';

function App() {
  // --- STANY (wszystkie na górze) ---
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();
 

  // --- POBIERANIE DANYCH: JEDEN useEffect ---
    useEffect(() => {
      let isMounted = true; // flaga na wypadek odmontowania komponentu

      (async () => {
        try {
          setLoading(true);
          setError(null);

          const data = await fetchVideos({ source: "App" });

          if (!isMounted) return;
          setVideos(Array.isArray(data) ? data : []);
        } catch (err) {
          console.error("❌ Błąd ładowania filmów:", err);
          if (!isMounted) return;
          setError(err);
          setVideos([]);
        } finally {
          if (!isMounted) return;
          setLoading(false);
        }
      })();

      return () => {
        isMounted = false;
      };
    }, []);




// --- RESET PO ZMIANIE WYBORU: pokaż poster, nie graj od razu ---
useEffect(() => {
  const v = videoRef.current;
  if (!v) return;
  v.pause();
  v.load();          // przeładowanie nowego src -> poster widoczny
  v.currentTime = 0;
  setPlaying(false);
}, [videos,selectedVideo]);


  // --- RESPONSYWNOŚĆ ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlay = () => {
  const v = videoRef.current;
  if (!v) return;
  if (v.paused) v.play(); else v.pause();
};


  // --- PRIORYTETY RENDERU (spinner > błąd > brak danych) ---
  if (loading) {
    return (
      <div
        className="flex justify-center items-center min-h-screen"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <Circles height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Nie udało się pobrać listy filmów: {error.message}
        <button className="ml-3 underline" onClick={() => location.reload()}>
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return <div className="p-4">Brak filmów do wyświetlenia.</div>;
  }

 // --- wyliczenia dla playera ---
const current = videos?.[selectedVideo] ?? null;

const videoSrc =
  current?.video ??
  current?.videoUrl ??
  current?.src ??
  "";

const posterSrc =
  current?.cover ||
  current?.thumbWebp1280 ||
  current?.thumbWebp640 ||
  current?.thumb ||
  current?.image ||
  "/images/default-poster.jpg";

const hasSource = Boolean(videoSrc);

console.log("DBG current:", current);
console.log("DBG videoSrc:", videoSrc);
console.log("DBG posterSrc:", posterSrc);



  return (
    <AuthProvider>
     <div
        style={{
          backgroundImage: "url('/assets/bacgroundimagedark.png')",
          backgroundColor: '#000',
          backgroundSize: 'auto',        // tu zmieniasz wg potrzeb
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100vh',
        }}
      >
     <MainNavbar setShowLogin={setShowLogin} />

     <div className="page-content">
        <Routes>
            {/* /about -> HomePage */}
            <Route path="/plakaty" element={<Plakaty />} />
            <Route path="/fotografia" element={<Fotografia />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dostawa" element={<Dostawa />} />
            
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/buy/:id" element={<BuyPrintPage videos={videos} />} />
           <Route path="/"element={
                      <HomeRoute
                        videos={videos}
                        selectedVideo={selectedVideo}
                        setSelectedVideo={setSelectedVideo}
                        showLogin={showLogin}
                        setShowLogin={setShowLogin}
                        videoRef={videoRef}
                        playing={playing}
                        setPlaying={setPlaying}
                        handlePlay={handlePlay}
                        posterSrc={posterSrc}
                        videoSrc={videoSrc}
                        hasSource={hasSource}
                      />
                    }
                  />
                    <Route path="*" element={<HomePage />} />
                  </Routes>
                  </div>
      </div>
      <CookieBanner />
    </AuthProvider>
  );
}

export default App;
