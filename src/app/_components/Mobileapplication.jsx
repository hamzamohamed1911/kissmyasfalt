import MobileScreenshotSlider from "./MobileScreenshotSlider";

const Mobileapplication = () => {
  return (
    <section
      id="mobile-application"
      className="w-auto h-auto  pt-10 bg-[#d71515]"
    >
      <div className="flex items-center flex-col justify-center container w-full  h-auto py-8">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white mb-8 text-center font-urban leading-10">
          Mobile Application
        </h1>
        <MobileScreenshotSlider />
      </div>
    </section>
  );
};

export default Mobileapplication;
