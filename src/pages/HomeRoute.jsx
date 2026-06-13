import VideoGallery from "../assets/components/VideoGallery.jsx";
import Login from "../assets/components/Login.jsx";
//import ToDoWrapper from "../assets/ToDoWrapper";
import ImageUploader from "../assets/components/ImageUploader.jsx";
import Gallery from "../assets/components/Gallery.jsx";
import RecentPosts from "../RecentPosts.jsx";
import Footer from "../../Footer.jsx";
import ContactSection from "../assets/components/ContactSection.jsx";
import VideoPlayerCard from "../components/VideoPlayerCard.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";

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
     
    <HeroCarousel />

     <div className="max-w-screen-xl mx-auto my-6 px-4">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-full max-w-md">
          <ImageUploader />
        </div>

        <div className="w-full">
          <Gallery />
        </div>
      </div>
    </div>

    <VideoPlayerCard
      videos={videos}
      selectedVideo={selectedVideo || videos?.[0]}
      setSelectedVideo={setSelectedVideo}
      videoRef={videoRef}
      playing={playing}
      setPlaying={setPlaying}
      handlePlay={handlePlay}
      posterSrc={posterSrc}
      videoSrc={videoSrc}
      hasSource={hasSource}
    />

    <VideoGallery videos={videos} />

    {showLogin && (
      <Login onClose={() => setShowLogin(false)} />
    )}

    {/* <ToDoWrapper /> */}

   

    <RecentPosts />

    <ContactSection />

    <Footer />
  </>
)};