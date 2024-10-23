import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoWrapper from './src/assets/ToDoWrapper';
import './index.css';
import Footer from './Footer.jsx';
import SearchBar from './SearchBar.jsx';
//

const API = '/gallery/assets/video/api.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Fetching video data from API
  useEffect(() => {
    console.log('Fetching videos from API...');
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
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
        }}
      >
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar-custom"  
          style={{ height: '40px' }}
        >
          <Container className="justify-content-between d-flex custom-margin-top" style={{ alignItems: 'baseline' }}>
            <Navbar.Brand href="#home" style={{ fontSize: '17px' }}>
              <img src='https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp' width="35" height="50" className="d-inline-block" alt=""/> 
              Gallery
            </Navbar.Brand>

            <SearchBar />

            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ paddingBottom: isMobile ? '0px' : '0px',
              alignItems: 'center',
              backgroundColor: 'black'
             }} />
            <Navbar.Collapse id="responsive-navbar-nav">
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

        <div className="min-h-screen text-white flex items-center justify-center  ">
          <section className="flex flex-row items-center space-x-2 p-1 w-full" style={{ justifyContent: 'space-evenly' }}>
            <ToDoWrapper className="flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] border-1 p-1 rounded-lg shadow-2xl shadow-white" />
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

        <div className="relative z-10 p-1 rounded bg-black text-white">
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }} className="text-2xl font-bold text-white">
            {videos[selectedVideo].title}
          </h2>
          <p className="text-white">
            {videos[selectedVideo].description}
          </p>
          <button
            onClick={handlePlay}
            className="bg-red-700 hover:bg-red-600 active:bg-red-500 py-0.5 px-3 rounded-full relative z-10"
            style={{ backgroundColor: playing ? 'green' : 'red', borderRadius: '19px' }}
          >
            {playing ? 'STOP' : 'PLAY'}
          </button>
        </div>

        <section className="min-h-screen flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide">
            Browse Library
          </h1>
          <div className="flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto min-h-screen">
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(index)}
                className="hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer"
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

        <Footer />
      </div>
    </>
  );
}

export default App;