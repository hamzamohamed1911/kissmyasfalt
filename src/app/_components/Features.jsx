import MobileScreenshotSlider from "./MobileScreenshotSlider";

const Features = () => {
  return (
    <section
      id="features"
      className="w-auto h-auto md:px-0 px-4 py-20 bg-[#d71515]"
    >
      <div className="flex items-center flex-col justify-center container w-full  h-auto py-8">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white mb-8 text-center font-urban leading-10">
          Features
        </h1>
        <MobileScreenshotSlider />
      </div>
    </section>
  );
};

export default Features;
