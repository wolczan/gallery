import VideoGallery from "../assets/components/VideoGallery.jsx";
import Login from "../assets/components/Login.jsx";
import ToDoWrapper from "../assets/ToDoWrapper";
import ImageUploader from "../assets/components/ImageUploader.jsx";
import Gallery from "../assets/components/Gallery.jsx";
import RecentPosts from "../RecentPosts.jsx";
import Footer from "../../Footer.jsx";
import ContactSection from "../assets/components/ContactSection.jsx";
import { FaPlay, FaPause } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import VideoPlayerCard from "../components/VideoPlayerCard.jsx";

export default function HomeRoute({
  videos,
  selectedVideo,
  setSelectedVideo,
  showLogin,
  setShowLogin,
  videoRef,
  playing,
  setPlaying,
  handlePlay,
  posterSrc,
  videoSrc,
  hasSource
  
  
}) {
  return (
    <>
     <VideoGallery videos={videos} />

        {showLogin && <Login onClose={() => setShowLogin(false)} />}

        👉 TU WSTAW
        <VideoPlayerCard
          videos={videos}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
          videoRef={videoRef}
          playing={playing}
          setPlaying={setPlaying}
          handlePlay={handlePlay}
          posterSrc={posterSrc}
          videoSrc={videoSrc}
          hasSource={hasSource}
        />

        <ToDoWrapper />
    

      <div className="max-w-screen-xl mx-auto my-6 px-4">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-80">
          <ImageUploader />
        </div>

        <div className="w-full lg:flex-1">
          <Gallery />
        </div>
      </div>
    </div>


      <RecentPosts />

      <ContactSection />

      <Footer />
    </>
  );
}