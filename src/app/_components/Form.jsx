"use client"
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const Form = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);
    emailjs
      .sendForm(
        'service_53n7y5f', // Replace with your service ID
        'template_qu8hffl', // Replace with your template ID
        form.current,
        'ajazcxg2g8xegXgrt' // Replace with your user ID (or public key in some cases)
      )
      .then(
        () => {
          setSuccess(true);
          router.push("/successfulpage");
          form.current.reset()
        },
        () => {
          setError(true);
          setLoading(false); 

        }
      );

    e.target.reset();
  };

  return (
    <div className="w-full md:w-1/2 bg-transparent rounded-lg">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <input
            type="text"
            name="name"  
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email" 
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <input
            type="tel"
            name="phone" 
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Phone"
          />
          <input
            type="text"
            name="subject" 
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Subject"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message" 
            rows="5"
            className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <div>
        <button
            type="submit"
            disabled={loading} 
            className={`w-full bg-[#d71515] text-white font-bold py-4 px-6 rounded-md transition-colors duration-300 hover:bg-red-700 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? (
              <FiLoader className="animate-spin h-5 w-5 mx-auto" /> 
            ) : (
              "Send Message"
            )}
          </button>
          <div className="py-1">
            {success && (
              <span className=" text-green-600 font-semibold">
                Your message has been sent successfuly !
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                smothing went Wrong !
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
