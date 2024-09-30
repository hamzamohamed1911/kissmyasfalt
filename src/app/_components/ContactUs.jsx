import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
      

            {/* Email */}
            <div className="mb-3 text-center md:text-left">
              <MdEmail
                className="text-[#d71515] mb-2 mx-auto md:mx-0"
                size={50}
              />
              <strong className="text-3xl text-primary block">Email:</strong>
              <p className="mt-1 text-xl">shebl.shady@gmail.com</p>
            </div>

      

            {/* Connect Section */}
            <div className="mb-3 text-center md:text-left">
              <FaWifi
                className="text-[#d71515] mb-2 mx-auto md:mx-0"
                size={50}
              />
              <strong className="text-3xl text-primary block">Connect:</strong>
              <div className="flex justify-center md:justify-start gap-3 text-3xl mt-2">
                <FaFacebookF className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaInstagram className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaSquareXTwitter className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaWhatsapp className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
