"use client"
import React, { useRef, useState } from "react";

const SignUp = () => {
  const emailRef = useRef();
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(""); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value; 

    if (!email) {
      setError("Please enter your email.");
      setSuccess(""); 
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess(""); 
    } else {
      setError(""); 
      setLoading(true); 

      setTimeout(() => {
        setLoading(false);
        setSuccess("Email successfully submitted!");
        emailRef.current.value = "";
      }, 2000); 
    }
  };

  return (
    <section id="sign-up" className="w-full h-full py-16">
      <div className="container mx-auto p-6 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-normal">
            Connect with Us
            <span className="text-[#d71515]"> for Updates </span>
            & Newsletter
          </h1>
        </div>

        <div className="lg:col-span-6 w-full">
          <form className="relative block" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className={`w-full pl-4 md:py-4 py-3 lg:py-6 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-full focus:outline-none focus:ring-2 ${
                error ? "focus:ring-red-500" : "focus:ring-[#d71515]"
              } transition duration-200`}
            />
            <button
              type="submit"
              className="absolute right-0 bottom-1/2 transform translate-y-1/2 bg-[#d71515] text-white text-lg font-semibold px-8 md:py-4 py-3 lg:py-6 md:px-10 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              disabled={loading} 
            >
              {loading ? (
                <span className="spinner-border animate-spin inline-block w-5 h-5 border-t-2 border-white rounded-full"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
