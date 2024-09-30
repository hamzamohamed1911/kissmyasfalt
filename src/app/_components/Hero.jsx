import { appStore, googlePlay, heroImg1, heroImg2 } from "../../../public";
import HeroImages from "./HeroImages";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="/" className="  h-full w-full md:px-0 px-4 ">
      <div className="flex lg:flex-row items-center justify-between container  w-full  pt-20 lg:h-[110vh] md:h-[100vh] h-auto text-primary">
        {/* Text and Buttons Section */}
        <div className="lg:w-1/2 mb-8 ">
          <div className="lg:text-7xl md:text-6xl  text-5xl font-extrabold  font-urban	 text-center lg:text-left">
            <p className="lg:mb-4 mb-0 leading-tight ">
              Adventures with   
              <span className="text-Secondary bg-transparent block ">
                 Kiss My Asfalt
              </span>
            </p>
          </div>

          <div className="py-6 rounded-lg text-center lg:text-left mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed font-urban">
              Breaking the Chains of Rideshare Exploitation
            </h2>
            <p className="text-center lg:text-left text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
              We’re disrupting the competition, aggressively putting riders and
              drivers in control. This isn’t just a platform—it’s a movement
              built on transparency, fairness, and empowerment. Together, we’ll
              redefine the future of ridesharing, where people come first. The
              revolution starts now, and you will lead it.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center lg:justify-start items-center lg:items-start md:my-12 my-6">
            <button
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full inline-block font-semibold transition-transform transform hover:scale-110 bg-transparent "
            >
              <Image
                priority
                className="h-auto w-48  "
                src={appStore}
                alt="Download on the App Store"
              />
            </button>
            <button
              href="https://www.google.com/play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold transition-transform transform hover:scale-110 "
            >
              <Image
                priority
                className="h-auto w-48 "
                src={googlePlay}
                alt="Download on Google Play"
              />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <HeroImages heroImg1={heroImg1} heroImg2={heroImg2} />
      </div>
    </section>
  );
};

export default Hero;
