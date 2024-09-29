import { appStore, googlePlay, heroImg1, heroImg2 } from "../../../public";
import HeroImages from "./HeroImages";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="/" className=" bg-[#f0ebe5] h-full w-full md:px-0 px-4 ">
      <div className="flex lg:flex-row items-center justify-between container  w-full  pt-20 lg:h-[110vh] h-auto text-primary">
        {/* Text and Buttons Section */}
        <div className="lg:w-1/2 mb-8 ">
          <div className="lg:text-7xl md:text-6xl sm:text-6xl text-5xl font-extrabold 	 text-center lg:text-left">
            <p className="lg:mb-4 mb-0 leading-tight">
              Adventures with Kiss My
              <span className="text-Secondary bg-transparent "> Asfalt</span>
            </p>
          </div>

          <div className="py-6 rounded-lg text-center lg:text-left mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Breaking the Chains of Rideshare Exploitation
            </h2>
            <p className="text-center lg:text-left text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
              We are aggressively putting riders and drivers in charge,
              transforming the industry into one that truly serves both.
              Together, we'll lead this revolution—because the time for change
              is now.
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
