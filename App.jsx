import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoWrapper from './src/assets/ToDoWrapper';
import './index.css';
import ToDo from './src/assets/TempToDo';

const API = '/gallery/assets/video/api.json';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    console.log('Fetching videos from API...');
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  useEffect(() => {
    if (videos.length > 0 && videoRef.current) {
      videoRef.current.src = videos[selectedVideo].video;
      videoRef.current.load();
      setPlaying(false);
    }
  }, [videos, selectedVideo]);

  const handlePlay = () => {
    setPlaying(prev => !prev);  // Toggle the playing state
  };
  

  if (videos.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar-custom">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home"> <img src='https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp' width="50" height="60"  className="d-inline-block " alt=""/> Gallery 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#home" className="nav-link-custom">About</Nav.Link>
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

      <div className=" min-h-screen bg-black text-white flex items-center justify-center">
          {/* Outer container */}
          
        <section
          className="flex flex-row items-center space-x-4 p-4  w-full" // todo & image
          style={{ justifyContent: 'space-evenly' }}
          >

          <ToDoWrapper className="flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] border-1 p-2" />
  
        {/* Video or Image next to the ToDoWrapper */}
        <div className="flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center">
          {playing && videos.length > 0 ? (
            <video
              ref={videoRef}
              src={videos[selectedVideo]?.video}  // Dynamically load the video source
              className="object-cover rounded-lg w-full h-full border-1 "
              controls
              autoPlay  // Start playing automatically
              style={{ width: '', height: '270px' }}
            />
          ) : (
            <img
              src={videos[selectedVideo]?.cover}  // Dynamically load the image source
              alt="Video cover"
              style={{ width: '170px', height: '270px' }}
              className="hover-enlarge object-cover rounded-lg w-full h-full"
            />
          )}
        </div>
      </section>


  </div>

<div className='relative z-10 p-1 rounded bg-black text-white '>  {/* Description section */}
  <h2 style={{
    fontSize: '1.5rem',   // Corresponds to Tailwind's 'text-2xl'
    fontWeight: 'bold',   // Corresponds to Tailwind's 'font-bold'
    color: 'white'        // Corresponds to Tailwind's 'text-white'
  }}
  className='text-2xl font-bold text-white'>{videos[selectedVideo].title}
  </h2>
  
  <p className='text-white'>
    {videos[selectedVideo].description}
  </p>
  <button
  onClick={handlePlay}  // Just toggle playing state
  className='bg-red-700 hover:bg-red-600 active:bg-red-500 py-2 px-4 rounded-full relative z-10'
  style={{ backgroundColor: playing ? 'green' : 'red', borderRadius: '12px' }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'cherryred'}  // On hover, change to cherry red
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'red'}  // On mouse out, change back to normal red
  onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'darkred'}  // On click, change to darker cherry
  onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'cherryred'}  // On release, change back to cherry red
>
  {playing ? 'STOP' : 'PLAY'}
</button>


</div>

<section className="min-h-screen bg-black flex flex-col items-center">
  <h1 className="text-2xl font-bold mb-4 text-center mt-8 text-white">Browse Library</h1>
  <div className="flex flex-wrap justify-center  p-5 gap-0.5 max-w-screen-lg mx-auto">
    {videos.map((video, index) => (
      <div 
        key={video.id} 
        onClick={() => setSelectedVideo(index)} 
        className="hover-enlarge border-1 m-4 rounded-lg overflow-hidden cursor-pointer"  // Applying hover-enlarge class
        style={{ width: '129px', height: '170px', borderRadius: '6px' }}  // Fixed width and height
      >
        <img 
          src={video.cover} 
          className="object-cover w-full h-full rounded-lg"  // Ensure images fill their containers
          alt={video.title} 
        />
      </div>
    ))}
  </div>
</section>

<div className="w-32 h-32 bg-blue-500 transition-transform transform hover:scale-105 duration-100"></div>

    </>
  );
}

export default App;
