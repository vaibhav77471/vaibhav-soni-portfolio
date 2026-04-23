'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="home"
      /* FIXED: Keeping the className on a single line or concatenated without physical line breaks */
      className="min-h-screen flex items-center justify-between px-20 relative bg-gradient-to-br from-[#020617] via-[#071a0c] to-[#020617]"
    >

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <p className="text-gray-300 mb-4">
          Hello 👋, great to have you here
        </p>

        <h1 className="text-5xl font-extrabold leading-tight text-lime-400">
          I'M A FRONTEND DEVELOPER <br />
          BUILDING SCALABLE WEB APPS
        </h1>

        <p className="text-gray-400 mt-6">
          I build modern, scalable and high-performance web applications
          using React, Next.js and modern frontend tools.
        </p>
      </div>

      {/* RIGHT SIDE - ID CARD */}
      <div className="relative flex items-center justify-center">
        {/* Hook */}
        <div className="absolute -top-24 w-2 h-28 bg-gray-600 rounded"></div>

        {/* ID CARD */}
        <motion.div
          initial={{ y: -200, rotate: -10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-72 h-[420px] bg-white rounded-2xl shadow-2xl p-5 text-black relative"
        >
          <div className="flex flex-col items-center">
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-40 h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">VAIBHAV SONI</h2>
            <span className="mt-2 text-sm border px-3 py-1 rounded-full">
              Available for work
            </span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="bg-lime-400 text-black py-3 whitespace-nowrap rotate-[-2deg]">
          <div className="animate-marquee flex gap-10 px-10">
            <span>Frontend Developer</span>
            <span>Problem Solving</span>
            <span>Scalable Apps</span>
            <span>UI Engineering</span>
            <span>React Expert</span>
          </div>
        </div>
      </div>

    </section>
  )
}