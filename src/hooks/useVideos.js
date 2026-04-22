import { useState, useEffect } from "react";
import { fetchVideos } from "../services/videos";

export function useVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchVideos("videos", { source: "App" });

        if (!isMounted) return;

        setVideos(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!isMounted) return;

        setError(err);
        setVideos([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return { videos, loading, error };
}