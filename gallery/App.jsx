import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './App.css'; // Adjust the path based on your file structure

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

  const handlePlay = () => setPlaying(playing => !playing);

  if (videos.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar-custom">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home"> <img src="https://raw.githubusercontent.com/wolczan/gallery/main/gallery/public/logo.svg" width="80" height="70" className="d-inline-block" alt="Netflix Logo" />

          Library
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

      <div className='min-h-screen w-full bg-black text-white flex flex-col items-center justify-center '>
        <section className='relative p-8 text-center  rounded-lg shadow-lg relative min-w-full min-h-[300px]  '>

          {!playing && (
            <img src={videos[selectedVideo].cover} className='centered-image h-full object-contain rounded-lg border-2 border-yellow-500 '/>
          )}
          
          <video ref={videoRef} style={{ height: '250px', width: 'auto' }} className={`border-2  mx-auto w-2/4 object-cover shadow-lg ${playing ? 'opacity-100' : 'opacity-0'}`} controls>
            <source src={videos[selectedVideo].video} type="video/mp4"/>
          </video>

          <div className='mt-4 relative z-10  p-4 rounded'>
            <h2 className ='text-2xl font-bold text-white'>{videos[selectedVideo].title}</h2>
            <p className='text-white'>
              {videos[selectedVideo].description}
            </p>
            <button onClick={handlePlay} className='nt-4 bg-red-500 hover:bg-red-700 py-2 px-4 rounded-full relative z-10'>{playing ? 'STOP' : 'PLAY'}</button>
          </div>
        </section>
    
        <section>
          <h1 className="text-2xl font-bold mb-4 text-center mt-8">Browse Library</h1>
          <div className="flex flex-wrap justify-center items-center">
            {videos.map((video, index) => (
              <div key={video.id} onClick={() => setSelectedVideo(index)} className={`cursor-pointer ${videos[selectedVideo].id === video.id ? 'border-4 ' : 'border-2 border-gray-200'} m-4 rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out`}>
                <img src={video.cover} className='w-32 h-48 object-cover rounded-lg' alt='' />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
