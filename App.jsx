import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoWrapper from './src/assets/ToDoWrapper';
import ContactForm from './src/assets/ContactForm.jsx'
import './index.css';
import Footer from './Footer.jsx';
import SearchBar from './SearchBar.jsx';
import { Circles } from 'react-loader-spinner'; // For loading spinner
import { FaPlay, FaPause } from 'react-icons/fa'; // For play/pause icons
import RecentPosts from './src/RecentPosts.jsx';
import "./firebase.jsx";
import ImageUploader from "./src/assets/components/ImageUploader.jsx";
import { getAuth } from "firebase/auth";
import Login from './src/assets/components/Login.jsx';
import { AuthProvider } from "./src/utils/AuthProvider.jsx"
import Gallery from "./src/assets/components/Gallery.jsx"
 
const API = '/gallery/assets/video/api.json';
 
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();
 
  // Fetching video data from API
  useEffect(() => {
    console.log('Fetching videos from API...');
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Failed to fetch videos:", error))
      .finally(() => setLoading(false)); // End loading
      console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
      console.log("All env variables:", import.meta.env);
  }, []);
 
  // Update video source when a new video is selected
  useEffect(() => {
    if (videos.length > 0 && videoRef.current) {
      videoRef.current.src = videos[selectedVideo]?.video;
      videoRef.current.load();
      setPlaying(false);
    }
  }, [videos, selectedVideo]);
 
  // Handle window resize to update `isMobile` state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
 
    window.addEventListener('resize', handleResize);
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const handlePlay = () => {
    setPlaying(prev => !prev);
  };
 
  // Ensure hooks are always called before any conditional returns
  if (videos.length < 1) {
    return <div>Loading...</div>;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen"
            style={{ backgroundColor: 'black', color: 'white' }}
      >
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
 
  console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
  console.log("Firebase Config:", {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
  });
 
  return (
        <AuthProvider>
    
      <div
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          //minHeight: '100vh', Ensure it covers the full screen height
          width: '100%',
          backgroundAttachment: 'fixed',
        }}>
         
        <Navbar  expand="lg" collapseOnSelect className="navbar-custom"  
          style={{ height: '40px' , backgroundColor: 'black', color:'white' }}>
          <Container className="justify-content-between d-flex custom-margin-top" style={{ alignItems: 'baseline', backgroundColor: '' }}>
            <Navbar.Brand href="#home" style={{ fontSize: '17px' , color: 'white' }}>
              <img src='https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp' width="35" height="50" className="d-inline-block" alt=""/>
              Gallery
            </Navbar.Brand>
 
            <SearchBar />
 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ paddingBottom: isMobile ? '0px' : '0px',
              alignItems: 'center',
              backgroundColor: 'white'
             }} />
            <Navbar.Collapse id="responsive-navbar-nav"
                style={{
                  backgroundColor: 'black', // Czarny kolor tła
                  opacity: 1, // Upewnij się, że nie ma przezroczystości
                  padding: '0px', // Opcjonalne odstępy wewnętrzne
 
                }}>
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-custom">Films</Nav.Link>
                <Nav.Link href="#features" className="nav-link-custom">Images</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-custom">My List</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-custom">Latest</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-custom">Contact</Nav.Link>
               
                {/* PRZYCISKI SIGN IN & SIGN UP */}
                <Nav.Link onClick={() => setShowLogin(true)} className="nav-link-custom btn btn-custom">Sign In</Nav.Link>
                <Nav.Link href="#signup" className="nav-link-custom btn btn-custom">Sign Up</Nav.Link>
              </Nav>
 
            </Navbar.Collapse>
          </Container>
        </Navbar>
 
        {showLogin && <Login onClose={() => setShowLogin(false)} />}

        <div className="container">
            <div className="video-container flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center rounded-lg shadow-2xl shadow-white">
                  {playing && videos.length > 0 ? (
                    <video
                      ref={videoRef}
                      src={videos[selectedVideo]?.video}
                      className="object-cover rounded-lg w-full h-full"
                      controls
                      autoPlay
                      muted
                      playsInline
                      poster={videos[selectedVideo]?.cover}
                      preload="metadata"
                      style={{ width: '150px', height: '260px' }}
                    >
                      Twoja przeglądarka nie obsługuje elementu video.
                    </video>
                  ) : (
                    <img
                      src={videos[selectedVideo]?.cover}
                      alt="Video cover"
                      style={{ width: '150px', height: '260px' }}
                      className="hover-enlarge object-cover rounded-lg w-full h-full"
                    />
                  )}

                </div>


                <div className="info-container relative z-10 p-2 rounded bg-black text-white flex flex-col justify-between"
                style={{ minHeight: '120px', maxWidth: '400px', width: '100%' , margin: 'auto', boxShadow: '10px 15px 80px -5px rgba(0, 0, 0, 0.7)', }}>

                  <div>
                        <h2
                          style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}
                          className="text-2xl font-bold text-white">
                          {videos[selectedVideo].title}
                        </h2>
                        <p className="text-white">
                          {videos[selectedVideo].description}
                        </p>
                  </div>
                  <div className="flex justify-end mt-auto ">
                    <button
                      onClick={handlePlay}
                      className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                      style={{
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 0 15px rgba(221, 13, 13, 0.8)',
                      color: 'white',
                      }}>
                      {playing ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>

            <div className="gallery-container flex flex-wrap justify-center items-center p-1 max-w-screen-lg mx-auto rounded-lg">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(index)}
                    className={`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${
                      selectedVideo === index ? ' border-blue-500' : ''
                    }`}
                    style={{ width: '109px', height: '140px', borderRadius: '6px' }}
                  >
                    <img
                      src={video.cover}
                      className="object-cover w-full h-full rounded-lg"
                      alt={video.title}
                    />
                  </div>
                ))}
              </div>
              </div>
 
         

          <div className="flex rounded-lg shadow-lg p-1 ">

            {/*Lewa połowa ekranu */}
          
            <div className="flex min-h-screen md:flex-row custom-flex justify-center">
  
                {/* Wrapper for ToDoWrapper to center it */}
                <div className="flex justify-center w-full">
                  <div className=" rounded-lg shadow-lg p-1 text-white">
                    <ToDoWrapper />
                  </div>
                </div>

                {/* ImageUploader (Not Centered) */}
                <ImageUploader />

              </div>

          </div>

            
          
               
                <Gallery />
                <RecentPosts />

                <div className="p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-1 custom-container text-white">
              <div className="w-full mt-4 mx-auto"> {/* Adjust the top margin as needed */}
                <ContactForm />
              </div>
                <div className="w-full map-container  mx-auto" >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus"
                  width="450"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map - Łódź 94-203"
                  
                ></iframe>
                </div>
            </div>
                <Footer />
            </div>
              </AuthProvider>
          
      );
    }
    
    export default App;