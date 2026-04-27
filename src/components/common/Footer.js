'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import toast from "react-hot-toast"

import emailjs from '@emailjs/browser'

export default function FooterSection() {
  const [open, setOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const [isMobile, setIsMobile] = useState(false)

  // form states
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    emailjs.init("v4tMZdVnZGIECrngX")
  }, [])

  // detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMouse({ x, y })
  }

  // ✅ HANDLE SUBMIT (FRONTEND ONLY)
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setSuccess(false)

      const result = await emailjs.send(
        "service_ry560x7",
        "template_lz3pzli",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "v4tMZdVnZGIECrngX"
      )

      setSuccess(true)
      toast.success("Message sent successfully 🚀")


      setForm({ name: "", email: "", message: "" })
      setOpen(false)

    } catch (error) {

      toast.error(
        error?.text || "Failed to send message 😢"
      )

      alert(
        `EmailJS Failed 🚨\n` +
        `Status: ${error?.status || "unknown"}\n` +
        `Message: ${error?.text || error?.message || "No message"}`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      onMouseMove={handleMove}
      className="relative px-[80px] py-[100px] bg-[rgba(0,0,0,0.35)] text-[#fff] overflow-hidden"
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

          {/* LEFT */}
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
                className="relative overflow-hidden w-full rounded-[999px] py-[16px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-[12px] text-[#fff]/80 font-semibold transition-all duration-300 hover:scale-[1.03] hover:text-[rgba(0,0,0,0.35)]"
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
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">

                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Name"
                      className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)]/30 border border-[#fff]/10 text-[#fff]"
                    />

                    <input
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email"
                      className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)]/30 border border-[#fff]/10 text-[#fff]"
                    />

                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      placeholder="Message"
                      className="px-[14px] py-[10px] rounded-[12px] bg-[rgba(0,0,0,0.35)]/30 border border-[#fff]/10 text-[#fff] resize-none"
                    />

                    <button
                      type="submit"
                      className="relative mt-[10px] py-[10px] px-[20px] rounded-full bg-[linear-gradient(90deg,#a855f7,#a855f7)] text-black font-bold overflow-hidden group shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-[1.05]"
                    >
                      {/* text */}
                      <span className="relative z-10">
                        Send Message
                      </span>

                      {/* BASE glossy layer (always subtle shine) */}
                      <span className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-[#fff]/20 to-transparent skew-x-[-20deg]" />

                      {/* HOVER moving casino shine */}
                      <span className="absolute top-0 left-[-90%] w-[55%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:left-[140%] transition-all duration-700 ease-out" />

                      {/* glow pulse on hover */}
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 blur-xl transition duration-300" />
                    </button>


                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* IMAGE */}
          <div className={`${isMobile ? "w-[160px] h-[160px]" : "w-[260px] h-[260px]"} rounded-[24px] overflow-hidden border border-[#fff]/10`}>
            <img src="/images/vaibhav_gemini.png" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* FOOTER */}
        <div
          className={`
            border-t border-[#fff]/10 pt-[20px] text-[#fff]/60
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
                className="relative overflow-hidden flex items-center justify-center w-[100px] h-[52px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-[12px] text-[15px] text-[rgba(255,255,255,0.75)] font-semibold no-underline transition-all duration-300 hover:scale-110 hover:text-black hover:bg-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              >
                {item.label}

                {/* glossy moving shine */}
                <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}