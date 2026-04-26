'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function FooterSection() {
  const [open, setOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const [isMobile, setIsMobile] = useState(false)

  // ✅ detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900)
    }

    handleResize() // run initially
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMouse({ x, y })
  }

  return (
    <section
      id="contact"
      onMouseMove={handleMove}
      className="relative px-[80px] py-[100px] bg-black text-[#fff] overflow-hidden"
    >

      {/* background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8))]" />

      {/* MAIN CARD */}
      <div className="relative z-[10] max-w-6xl mx-auto rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[rgba(5,7,13,0.75)] backdrop-blur-[18px] p-[60px] flex flex-col gap-[40px] shadow-[0_0_80px_rgba(0,0,0,0.6)]">

        {/* TOP SECTION */}
        <div
          className={`flex gap-[40px] ${isMobile ? "flex-col-reverse items-center" : "flex-row justify-between"
            }`}
        >

          {/* LEFT CONTENT */}
          <div className={`flex-1 ${isMobile ? "text-center" : ""}`}>

            <h2 className="text-[42px] font-light mb-[30px]">
              How I can help <span className="italic font-serif">you?</span>
            </h2>

            <div className={`flex gap-[40px] mb-[40px] ${isMobile ? "flex-col items-center" : "flex-row"}`}>

              <div>
                <h3 className="font-bold text-[18px] mb-[10px]">
                  Building Digital Experiences
                </h3>
                <p className="text-[#fff]/60 max-w-[280px]">
                  I design and develop fast, scalable web applications.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[18px] mb-[10px] flex items-center gap-[10px]">
                  Specialized In
                  <span className="text-xs border border-[#fff]/20 px-[6px] py-[2px] rounded-full text-[#fff]/60">
                    Design + Dev
                  </span>
                </h3>
                <p className="text-[#fff]/60 max-w-[320px]">
                  Casino UI, real-time systems, modern frontend architecture.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="relative overflow-hidden w-full rounded-[999px] py-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-[12px] text-[#fff]/80 font-semibold transition-all duration-300 hover:scale-[1.03] hover:text-black"
              >
                Get In Touch →
              </button>
            )}

            {/* FORM */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="mt-[30px] rounded-[24px] border border-[rgba(255,255,255,0.12)] bg-[rgba(11,15,23,0.75)] backdrop-blur-[22px] p-[22px]"
                >
                  <div className="flex justify-between mb-[18px]">
                    <h3 className="text-[22px] font-light">Send Message</h3>

                    <button
                      onClick={() => setOpen(false)}
                      className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full border border-[#fff]/10 bg-[rgba(255,255,255,0.05)] text-[#fff]/60 transition-all duration-300 hover:text-[#fff] hover:scale-110 hover:rotate-90"
                    >
                      ✕
                    </button>
                  </div>

                  {/* rest of your form unchanged */}
                  <div className="flex flex-col gap-[12px] relative z-10">
                    <input placeholder="Name" className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)] border border-[#fff]/10 text-[#fff] outline-none" />

                    <input placeholder="Email" className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)] border border-[#fff]/10 text-[#fff] outline-none" />

                    <textarea rows={4} placeholder="Message" className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)] border border-[#fff]/10 text-[#fff] outline-none resize-none" />

                    <button className="mt-[10px] py-[10px] rounded-full bg-[linear-gradient(90deg,#a855f7,#ec4899)] text-black font-bold">
                      Send Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* IMAGE */}
          <div
            className={`
              rounded-[24px] overflow-hidden border border-white/10
              ${isMobile ? "w-[160px] h-[160px] mx-auto" : "w-[260px] h-[260px]"}
            `}
          >
            <img
              src="/images/vaibhav_gemini.png"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* FOOTER */}
        <div
          className={`
            border-t border-white/10 pt-[20px] text-white/60
            flex justify-between items-center
            ${isMobile ? "flex-col gap-[20px] text-center" : ""}
          `}
        >

          <p>
            Crafted with ❤️ by Vaibhav Soni • If you use light theme, we are not friends 😤
          </p>
          
          <div className="flex gap-[10px] flex-wrap justify-center">
            {[
              { label: "Email", href: "mailto:vaibhavsoni044@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "GitHub", href: "https://github.com" },
              { label: "Medium", href: "https://medium.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className=" relative flex items-center justify-center w-[100px] h-[52px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-[12px] text-[15px] text-[rgba(255,255,255,0.75)] font-semibold no-underline transition-all duration-300 hover:scale-110 hover:text-black hover:bg-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] "
              >
                {item.label}

                {/* glow effect */}
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.3),transparent)] opacity-0 hover:opacity-100 transition" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}