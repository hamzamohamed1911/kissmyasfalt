import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Form from "./Form";

const ContactUs = () => (
  <section id="contact-us" className="w-full  h-full py-16">
    <div className="container mx-auto p-6 md:p-2 md:px-6">
      <div className="text-center md:mb-16 mb-10">
        <h2 className="md:text-5xl text-3xl font-bold text-[#d71515] font-urban">
          Get In Touch
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Form */}
        <Form />
        <div className="w-full md:w-1/2 text-[#868686]">
          <h3 className="text-3xl font-bold mb-5 text-primary">
            Contact Information
          </h3>
          <p className="text-lg text-[#868686] mt-4 ">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you as soon as possible.
          </p>

          {/* Grid layout for equal spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
      

            {/* Email */}
            <div className="mb-3  text-left col-span-1">
            <div className="flex gap-3 items-center">
            <MdEmail
                className="text-[#d71515] mb-2 غ"
                size={40}
              />
              <strong className="text-3xl text-primary block">Email :</strong>
            </div>
              <p className="mt-1 text-xl">shady@kissmyasfalt.com</p>
            </div>

      

            {/* Connect Section */}
            <div className="mb-3 text-center md:text-left col-span-1">
            <div className="flex gap-3 items-center">
            <FaWifi
                className="text-[#d71515] mb-2 "
                size={40}
              />
              <strong className="text-3xl text-primary block">Connect :</strong>
            </div>

            <div className="flex justify-start gap-3 text-3xl mt-2">
            <a
        href="https://www.instagram.com/kissmyasfalt/profilecard/?igsh=NGF3ZTZ6bDZidjFr"
        target="_blank"
        rel="noopener noreferrer"  
        aria-label="Instagram"
      >
        <FaInstagram className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
      </a>

      <a
        href="https://www.tiktok.com/@kiss.my.asfalt?_t=8qknsdBcXKk&_r=1"
        target="_blank"
        rel="noopener noreferrer"  
        aria-label="TikTok"
      >
        <FaTiktok className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
      </a>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
