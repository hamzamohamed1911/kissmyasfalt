import Image from "next/image";
import { aboutUSImg } from "../../../public";


const AboutUs = () => {
  return (
    <section
      id="about"
      className=" w-full md:px-0 px-4   py-10  text-primary  h-auto "
    >
      <div className=" md:flex flex-col lg:flex-row items-center justify-between  container">
        {/* Image Section */}
        <div className="lg:w-1/2 my-8 ">
          <div className="my-8 flex justify-center lg:justify-start relative">
            <Image
              alt="About Us Image"
              className=" shadow-lg grayscale lg:h-[550px] lg:w-[550px] md:w-[400px] md:h-[400px] h-[300px] w-[300px] transition duration-500 ease-in-out  hover:scale-110  rounded-full "
               src={aboutUSImg}
              style={{objectFit: "cover"}}	
            />
            <div className="absolute left-[15px] top-[-45px] rounded-full md:w-40 md:h-40 h-32 w-32 bg-white shadow-md flex items-center justify-center font-urban">
              <div className="text-center space-y-3 ">
                <h1 className="md:text-5xl text-4xl text-tertiary font-extrabold">
                  3M
                </h1>
                <h1 className="text-gray-400">Users</h1>
              </div>
            </div>

            <div className="absolute left-[5px] bottom-[-30px] rounded-full md:w-52 md:h-52 h-36 w-36 bg-red-600 shadow-md flex items-center justify-center text-white font-urban">
              <div className="text-center p-6 space-y-3">
                <h1 className="md:text-6xl text-5xl font-extrabold">25+</h1>
                <h1 className="md:text-lg text-sm">Years of comic journey</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-6 md:mx-8 mx-0">
            <h1 className="relative lg:text-6xl text-5xl text-tertiary font-bold leading-snug text-center lg:text-left lg:mb-6 mb-2 font-urban">
              About Us
            </h1>
            <p className="lg:text-xl tect-lg leading-relaxed mb-4">
              <strong> Transportation is essential</strong>
              —whether you're commuting, visiting loved ones, or enjoying your
              weekend. Yet, the rideshare industry has been tainted by
              monopolies and greed, turning a necessary service into a miserable
              experience.
            </p>
            <p className="lg:text-xl tect-lg leading-relaxed mb-4 ">
              <strong className="block">             
              We've Had Enough:</strong> Riders and drivers have made themselves clear—skyrocketing costs, unfair pay,
              terrible support, and shady practices have gone on long enough.
            </p>
            <p className="lg:text-xl tect-lg leading-relaxed mb-4">
              <strong className="block">
                Taking Back Control:
              </strong>
              This is your platform. You drive our innovation. You suggest, we build. Drivers set
              their terms, and riders pick who they trust
            </p>
            <p className="lg:text-xl tect-lg leading-relaxed mb-4">
              <strong className="block">               
              Transparency Is Non-Negotiable:</strong> No games, no
              hidden fees, no nonsense. Just honest, clear pricing for everyone.
              We’re here to rewrite the rules. Together, we’re taking back
              what’s ours.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
