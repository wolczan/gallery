import { useState, useEffect, useRef } from "react";

export function useVideoPlayer(videos) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

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

  // reset przy zmianie video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.load();
    v.currentTime = 0;
    setPlaying(false);
  }, [videos, selectedVideo]);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      await v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return {
    selectedVideo,
    setSelectedVideo,
    playing,
    setPlaying,
    videoRef,
    videoSrc,
    posterSrc,
    hasSource,
    handlePlay,
    current,
  };
}