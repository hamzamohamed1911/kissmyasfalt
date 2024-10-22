"use client";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-transparent rounded-lg">
      <form onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Phone"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Subject"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-red-500 text-white font-bold py-4 px-6 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? <FiLoader className="animate-spin h-5 w-5 mx-auto" /> : "Send Message"}
        </button>

        {success && <p className="text-green-600 mt-4">Your message has been sent successfully!</p>}
        {error && <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
};

export default Form;
