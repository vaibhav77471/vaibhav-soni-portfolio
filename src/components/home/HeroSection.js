'use client'
import IDCardAnimation from './IDCardAnimation'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

export default function HomeSection() {
  return (
    <section
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-16 relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]"
    >
      {/* Glassmorphism Card */}
      <div className="z-20 mb-12 md:mb-0 md:mr-16 flex-shrink-0">
        <IDCardAnimation>
          <div className="w-[320px] h-[420px] md:w-80 md:h-[460px] bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col items-center border-[2px] border-white/20 text-white relative">
            {/* Lanyard Hole */}
            <div className="w-12 h-3 bg-white/40 rounded-full mb-6 shadow-inner" />

            {/* Profile Image */}
            <div className="w-full aspect-square bg-white/20 rounded-xl overflow-hidden mb-6 border border-white/30">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-125 brightness-110"
                draggable="false"
              />
            </div>

            <div className="text-center bg-white/20 p-4 w-full rounded-xl">
              <h2 className="text-2xl md:text-3xl font-black leading-none uppercase tracking-tighter text-white drop-shadow">
                Vaibhav Soni
              </h2>
              <Badge variant="outline" className="mt-6 border-lime-400 text-lime-400 font-bold uppercase tracking-widest text-[15px] px-4 py-2 rounded-full bg-black/60">
                Available for work
              </Badge>
            </div>
          </div>
        </IDCardAnimation>
      </div>

      {/* Text Content Section */}
      <div className="max-w-2xl z-10 flex flex-col items-start text-left bg-black/30 rounded-2xl p-8 shadow-xl backdrop-blur-md">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lime-300 mb-4 font-medium text-lg drop-shadow"
        >
          Hello 👋, great to have you here
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="text-4xl md:text-7xl font-black text-white leading-[1.1] uppercase drop-shadow-lg"
        >
          I'M A <span className="text-lime-400 italic">PRODUCT DESIGNER</span> <br />
          CRAFTING FINTECH PRODUCTS
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-[#fff]/60 mt-6 text-lg md:text-xl max-w-lg leading-relaxed"
        >
          Started as a fraud analyst, found my way to design. Now I create 
          fintech products that deliver results and earn trust.
        </motion.p>
      </div>

      {/* 3. BOTTOM MARQUEE STRIP */}
      {/* Positioned at the very bottom to stay below both sections */}
      <div className="absolute bottom-[10%] md:bottom-12 left-[-5%] w-[110%] rotate-[-2deg] bg-lime-400 py-3 md:py-4 shadow-xl z-30">
        <div className="flex gap-10 whitespace-nowrap text-[#fff] font-black uppercase text-xl font-bold md:text-base overflow-hidden">
          <div className="flex animate-marquee gap-10">
           <span>Product Design</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Frontend Development</span>
            <span className="text-xl opacity-40">✦</span>
            <span>UI Engineering</span>
            <span className="text-xl opacity-40">✦</span>
            <span>React Expert</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Fintech Solutions</span>
            <span className="text-xl opacity-40">✦</span>
            <span>User-Centric Design</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Immediate Joiner</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Problem Solving</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Scalable Architecture</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Design Thinking</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Business Impact</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Next.js & Tailwind</span>
            <span className="text-xl opacity-40">✦</span>

            {/* DUPLICATE SET FOR SEAMLESS LOOP */}
            <span>Product Design</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Frontend Development</span>
            <span className="text-xl opacity-40">✦</span>
            <span>UI Engineering</span>
            <span className="text-xl opacity-40">✦</span>
            <span>React Expert</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Fintech Solutions</span>
            <span className="text-xl opacity-40">✦</span>
            <span>User-Centric Design</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Immediate Joiner</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Problem Solving</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Scalable Architecture</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Design Thinking</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Business Impact</span>
            <span className="text-xl opacity-40">✦</span>
            <span>Next.js & Tailwind</span>
            </div>
        </div>
      </div>

    </section>
  )
}