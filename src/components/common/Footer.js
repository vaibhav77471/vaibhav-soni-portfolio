'use client'

import { useState } from 'react'

export default function FooterSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-[80px] py-[100px] bg-black text-[#fff]">

      {/* 🔥 Main Card */}
      <div className=" max-w-6xl mx-auto rounded-[32px] border border-[#fff]/10 bg-[#05070d] p-[60px] flex flex-col gap-[40px] " >

        {/* 🔥 Top Section */}
        <div className="flex flex-row md:flex-row justify-between gap-[40px]">

          {/* LEFT */}
          <div className="flex-1">

            {/* Heading */}
            <h2 className="text-[42px] font-light mb-[30px]">
              How I can help <span className="italic font-serif">you?</span>
            </h2>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row gap-[40px] mb-[40px]">

              <div>
                <h3 className="font-bold text-[18px] mb-[10px]">
                  Building Digital Experiences
                </h3>
                <p className="text-[#fff]/60 max-w-[280px]">
                  I design and develop fast, scalable web applications with a strong
                  focus on performance, usability, and modern UI patterns.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[18px] mb-[10px] flex items-center gap-[10px]">
                  Specialized In
                  <span className="text-xs border border-[#fff]/20 px-[6px] py-[2px] rounded-full text-[#fff]/60">
                    Designs with Development
                  </span>
                </h3>
                <p className="text-[#fff]/60 max-w-[320px]">
                  Experienced in building complex UIs like casino platforms, real-time
                  interactions, and reusable component-driven architectures.
                </p>
              </div>

            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className=" w-full border border-[#fff]/10 rounded-full py-[16px] text-[#fff]/80 bg-transparent hover:bg-[grey] hover:text-black transition "
            >
              Get In Touch →
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[260px] h-[260px] rounded-[24px] overflow-hidden">
            <img
              src="/images/vaibhav.webp"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* 🔥 Divider */}
        <div className="border-t border-[#fff]/10 pt-[20px] flex justify-between items-center text-[#fff]/60 text-sm">

          <p>
            Vaibhav Soni © 2025 · If you use light mode in Figma, We’re not friends 👀
          </p>

          <div className="flex gap-[20px] text-[20px]">

            <a
              href="mailto:vaibhavsoni044@gmail.com"
              className="text-[grey]/60 text-[20px] font-bold hover:text-[#fff] transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[grey]/60 text-[20px] font-bold hover:text-[#fff] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[grey]/60 text-[20px] hover:text-[#fff] transition"
            >
              GitHub
            </a>

            <a
              href="https://medium.com/@your-medium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[grey]/60 text-[20px] font-bold hover:text-[#fff] transition"
            >
              Medium
            </a>

          </div>

        </div>

      </div>

      {/* 🔥 Bottom Footer */}

      {/* 🔥 MODAL */}
      {open && (
        <div className="
          fixed inset-0 z-[50]
          flex items-center justify-center
          bg-[rgba(11,15,23,0.7)] backdrop-blur-sm
        ">

          <div className=" bg-[#0b0f17] border border-[#fff]/10 rounded-[24px] p-[40px] w-full max-w-md relative ">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#fff]/60 hover:text-[#fff]"
            >
              ✕
            </button>

            {/* Content */}
            <h3 className="text-[24px] font-bold mb-[20px]">
              Get In Touch
            </h3>

            <form className="flex flex-col gap-[16px]">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-[#fff]/10 rounded-lg px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-[#fff]/10 rounded-lg px-4 py-3 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-transparent border border-[#fff]/10 rounded-lg px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className=" mt-2 bg-lime-400 text-black py-[12px] rounded-full font-bold hover:opacity-90 "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      )}

    </section>
  )
}