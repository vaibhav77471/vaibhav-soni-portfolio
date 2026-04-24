"use client";

import { useState } from "react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="relative w-full bg-black min-h-[60vh] flex flex-col justify-end border-t border-neutral-800 px-4 pt-24 pb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto w-full gap-12">
        {/* Left: Big Text */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
            Available for<br />New Challenges
          </h2>
          <p className="text-green-200 text-xl mt-2 mb-8">
            Open to new roles, feedback, or a simple coffee chat.
          </p>
          {/* Social Links */}
          <div className="flex gap-8 mt-8 text-lg font-medium text-gray-300">
            <a href="https://www.linkedin.com/in/vaibhav-soni-77471/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors">Linkedin</a>
            <a href="https://medium.com/@vaibhavsoni" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors">Medium</a>
            <a href="https://www.behance.net/vaibhavsoni" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors">Behance</a>
            <a href="https://www.instagram.com/vaibhavsoni.me/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors">Instagram</a>
          </div>
        </div>
        {/* Right: Big Arrow Button */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <button
            aria-label="Reach Me"
            onClick={() => setShowModal(true)}
            className="group relative w-64 h-64 rounded-full bg-gradient-to-br from-[#181924] to-[#8b8ca7]/30 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            style={{ boxShadow: "0 0 120px 0 #8b8ca7, 0 0 0 0 #000" }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="60" fill="none" />
              <path d="M40 80L80 60M80 60L60 40M80 60L40 40" stroke="#bfc1d6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M45 75L80 60" stroke="#bfc1d6" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 rounded-full ring-2 ring-[#bfc1d6] opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </div>
      </div>
      {/* Copyright bottom left */}
      <div className="absolute left-4 bottom-2 text-gray-500 text-sm">
        © Vaibhav Soni {new Date().getFullYear()}
      </div>

      {/* Modal for Reach Me (Contact Form) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-neutral-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            {/* You can replace below with your ContactForm component */}
            <h3 className="text-2xl font-bold mb-4 text-white">Reach Me</h3>
            <p className="mb-4 text-gray-300">Let's connect! Fill out the form below and I'll get back to you soon.</p>
            {/* Placeholder form */}
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="bg-neutral-800 rounded px-4 py-2 text-white" />
              <input type="email" placeholder="Your Email" className="bg-neutral-800 rounded px-4 py-2 text-white" />
              <textarea placeholder="Your Message" className="bg-neutral-800 rounded px-4 py-2 text-white" rows={4}></textarea>
              <button type="submit" className="bg-lime-400 text-black font-semibold rounded px-4 py-2 mt-2 hover:bg-lime-500 transition-colors">Send</button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}