import { useEffect, useRef } from 'react';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false; // Unmute the video after interaction
        videoRef.current.play(); // Ensure the video is playing with sound
      }
    };

    // Add an event listener to listen for any interaction (e.g., click)
    window.addEventListener('click', handleInteraction);

    return () => {
      // Cleanup the event listener
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted // Starts muted
        preload="auto"
      >
        <source src="/videos/kissmyasphalt.mp4" type="video/mp4" />
        <source src="/videos/kissmyasphalt.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
