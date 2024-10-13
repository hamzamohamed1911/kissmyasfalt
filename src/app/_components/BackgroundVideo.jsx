
const BackgroundVideo = () => {


  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted 
        controls 
        preload="auto"
      >
        <source src="/videos/kissmyasphalt.mp4" type="video/mp4" />
        <source src="/videos/kissmyasphalt.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
