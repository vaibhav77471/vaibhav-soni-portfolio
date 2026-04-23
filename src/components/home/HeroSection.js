'use client'
import IDCardAnimation from './IDCardAnimation'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

export default function HomeSection() {
  return (
    <section className="min-h-screen w-full flex flex-row-reverse md:flex-col sm:flex-col items-center justify-around md:justify-between px-6 md:px-24 relative overflow-hidden py-10 md:py-0 
      bg-[#020617] bg-[radial-gradient(circle_at_60%_50%,_#072e12_0%,_#020617_70%)]"
    >
      
      {/* 1. ID CARD SECTION */}
      {/* On mobile: Top | On Desktop: Right */}
      <div className="z-20 mb-12 md:mb-0">
        <IDCardAnimation>
          <div className="w-[300px] h-[380px] md:w-72 md:h-[420px] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] p-6 flex flex-col items-center border-[8px] border-white text-black">
            {/* Lanyard Hole */}
            <div className="w-10 h-3 bg-zinc-200 rounded-full mb-6 shadow-inner" />

            {/* Profile Image - Reduced width slightly to look more balanced */}
            <div className="w-full aspect-square bg-zinc-100 rounded-lg overflow-hidden mb-6 border border-zinc-200">
              <img 
                src="/images/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-110"
                draggable="false"
              />
            </div>

            <div className="text-center bg-[#fff] p-4 w-full">
              <h2 className="text-2xl md:text-3xl font-black leading-none uppercase tracking-tighter">
                Vaibhav  Soni
              </h2>
              <Badge variant="outline" className="mt-6 border-zinc-300 text-zinc-500 font-bold uppercase tracking-widest text-[15px] px-3 py-5 rounded-full">
                Available for work
              </Badge>
            </div>
          </div>
        </IDCardAnimation>
      </div>

      {/* 2. TEXT CONTENT SECTION */}
      {/* On mobile: Below Image | On Desktop: Left Side */}
      <div className="max-w-2xl z-10 flex flex-col items-start text-left">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#fff] mb-4 font-medium"
        >
          Hello 👋, great to have you here
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="text-4xl md:text-7xl font-black text-[#fff] leading-[1.1] uppercase"
        >
          I'M A <span className="text-[#fff] italic">PRODUCT DESIGNER</span> <br /> 
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