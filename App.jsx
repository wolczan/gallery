import React, { useState, useEffect, useRef } from 'react';
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
import "./firebase.js";
import ImageUploader from './src/assets/components/ImageUploader.jsx';

const API = '/gallery/assets/video/api.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [loading, setLoading] = useState(true);

  // Fetching video data from API
  useEffect(() => {
    console.log('Fetching videos from API...');
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Failed to fetch videos:", error))
      .finally(() => setLoading(false)); // End loading
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
  

  return (

    <>
      <div
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensure it covers the full screen height
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
                <Nav.Link href="#signin" className="nav-link-custom btn btn-custom">Sign In</Nav.Link>
                <Nav.Link href="#signup" className="nav-link-custom btn btn-custom">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="min-h-screen text-white flex items-center justify-center">
          <section className="flex flex-row items-center space-x-2 p-1 w-full mt-4 mb-4 " style={{ justifyContent: 'space-evenly' }}>
          <ToDoWrapper 
            className="flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] p-1 rounded-lg todo-wrapper-shadow relative z-10" 
          />

            <div className="flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center border-1 rounded-lg shadow-2xl shadow-white bg-black">
              {playing && videos.length > 0 ? (
                <video
                  ref={videoRef}
                  src={videos[selectedVideo]?.video}  // Dynamically load the video source
                  className="object-cover rounded-lg w-full h-full border-1"
                  controls
                  autoPlay
                  style={{ width: '150px', height: '260px' }}
                />
              ) : (
                <img
                  src={videos[selectedVideo]?.cover}
                  alt="Video cover"
                  style={{ width: '150px', height: '260px' }}
                  className="hover-enlarge object-cover rounded-lg w-full h-full"
                />
              )}
              
            </div>
            
          </section>
          
        </div>

       <div className="relative z-10 p-1 rounded bg-black text-white border-1 flex flex-col justify-between"
         style={{ minHeight: '120px', maxWidth: '400px', width: '100%' , margin: 'auto', boxShadow: '10px 15px 80px -5px rgba(0, 0, 0, 0.7)', }}>
        <div>
              <h2
                style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}
                className="text-2xl font-bold text-white"
              >
                {videos[selectedVideo].title}
              </h2>
              <p className="text-white">
                {videos[selectedVideo].description}
              </p>
        </div>
      <div className="flex justify-end mt-auto">
        <button
          onClick={handlePlay}
          className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          style={{
          border: '2px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.8)',
          color: 'white',
          }}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        </div>
      </div>


        <section className="min-h-screen flex flex-col items-center">
        <h1 className="heading-reset text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide">
            Browse Library
          </h1>


          <div className="flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto min-h-screen">
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(index)}
                className={`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${
                  selectedVideo === index ? 'border-4 border-blue-500' : ''
                }`}
                style={{ width: '129px', height: '170px', borderRadius: '6px' }}
              >
                <img
                  src={video.cover}
                  className="object-cover w-full h-full rounded-lg"
                  alt={video.title}
                />
              </div>
            ))}

          </div>
        </section>
        <div className="p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-2 custom-container">
          <div className="w-full mt-8 mx-auto"> {/* Adjust the top margin as needed */}
            <ContactForm />
          </div>
            <div className="w-full map-container p-5 mx-auto" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus"
              width="350"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map - Łódź 94-203"
            ></iframe>
            </div>
        </div>
        <ImageUploader />
        <RecentPosts />
        <Footer />

      </div>
    </>
  );
}

export default App;