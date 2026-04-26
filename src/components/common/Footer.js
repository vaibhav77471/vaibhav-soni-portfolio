'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function FooterSection() {
  const [open, setOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMouse({ x, y })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative px-[80px] py-[100px] bg-black text-[#fff] overflow-hidden"
    >

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(circle,[#fff]_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8))]" />

      {/* MAIN CARD */}
      <div className="relative z-[10] max-w-6xl mx-auto rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[rgba(5,7,13,0.75)] backdrop-blur-[18px] p-[60px] flex flex-col gap-[40px] shadow-[0_0_80px_rgba(0,0,0,0.6)]">

        {/* TOP SECTION */}
        <div className="flex flex-row justify-between gap-[40px]">

          {/* LEFT */}
          <div className="flex-1">

            <h2 className="text-[42px] font-light mb-[30px]">
              How I can help <span className="italic font-serif">you?</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-[40px] mb-[40px]">

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

            {/* BUTTON (HIDES WHEN OPEN) */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="relative overflow-hidden w-full rounded-[999px] py-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-[12px] text-[#fff]/80 font-semibold transition-all duration-300 hover:scale-[1.03] hover:text-black hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              >
                Get In Touch →

                <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3))] opacity-0 hover:opacity-100 transition" />
                <span className="absolute top-0 left-[-120%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-700 hover:left-[120%]" />
              </button>
            )}

            {/* INLINE FORM (SHOW WHEN OPEN) */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-[30px] relative rounded-[24px] border border-[rgba(255,255,255,0.12)] bg-[rgba(11,15,23,0.75)] backdrop-blur-[22px] p-[22px] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]"
                >
                  {/* shine layer */}
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] skew-x-[20deg] animate-[shine_4s_linear_infinite] pointer-events-none" />

                  <div className="flex items-center justify-between mb-[18px] relative z-10">
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
          <div className="w-[260px] h-[260px] rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)]">
            <img
              src="/images/vaibhav.webp"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-[20px] flex justify-between text-[#fff]/60">

          <p>Vaibhav Soni © 2025</p>

          <div className="flex gap-[10px] text-[20px] flex-wrap">

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