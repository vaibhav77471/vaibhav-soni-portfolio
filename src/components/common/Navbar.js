'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-[0] left-[0] w-full z-[50]">

      {/* 🌫️ Glass Layer */}
      <div className="absolute inset-[0] bg-[rgba(0,0,0,0.35)] backdrop-blur-[16px]" />

      {/* 🔥 Glow Border */}
      {/* <div className="absolute bottom-[0] left-[0] w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.6),transparent)]" /> */}

      <nav className="relative max-w-[1200px] flex items-center justify-between h-[70px] px-[20px] md:px-[40px] mx-auto">

        {/* 🔥 LEFT — Logo */}
        <div className="flex items-center gap-[12px] group">

          <div className=" w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-[300ms] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group-hover:scale-[1.05] ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="#fff" />
            </svg>
          </div>

          <span className=" text-[#fff] text-[18px] md:text-[20px] font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ">
            Vaibhav Soni
          </span>
        </div>

        {/* 🔥 DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-[28px]">

          <div className="flex items-center gap-[22px]">

            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className=" relative text-[#fff]/70 no-underline text-[14px] font-semibold transition-all duration-[300ms] hover:text-[#fff] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] "
              >
                {item}

                {/* underline glow */}
                <span className=" absolute left-[0] bottom-[-4px] w-[0%] h-[1px] bg-[linear-gradient(90deg,rgba(168,85,247,0.8),rgba(236,72,153,0.8))] transition-all duration-[300ms] group-hover:w-[100%] " />
              </a>
            ))}

          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className=" relative no-underline overflow-hidden px-[14px] py-[7px] rounded-[999px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.2)] text-[#fff] text-[14px] font-semibold transition-all duration-[300ms] hover:scale-[1.05] hover:text-black hover:border-transparent hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] "
          >
            Resume

            {/* Glow */}
            <span className=" absolute inset-[0] bg-[linear-gradient(90deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3))] opacity-[0] hover:opacity-[1] transition duration-[300ms] " />

            {/* Shine */}
            <span className=" absolute top-[0] left-[-120%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-[700ms] hover:left-[120%] " />
          </a>

        </div>

        {/* 🔥 MOBILE BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className=" md:hidden relative overflow-hidden w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-[14px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] transition-all duration-[300ms] ease-out hover:scale-[1.1] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-[0.95] "
        >
          {/* Glow Layer */}
          <span className=" absolute inset-[0] bg-[linear-gradient(135deg,rgba(168,85,247,0.25),rgba(236,72,153,0.25))] opacity-[0] hover:opacity-[1] transition duration-[300ms] " />

          {/* Shine Sweep */}
          <span className=" absolute top-[0] left-[-130%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-[800ms] hover:left-[130%] " />

          {/* Lines (slightly thicker = more premium feel) */}
          <span className="relative z-[10] w-[22px] h-[2px] bg-[#fff] rounded-[2px]"></span>
          <span className="relative z-[10] w-[22px] h-[2px] bg-[#fff] rounded-[2px]"></span>
          <span className="relative z-[10] w-[22px] h-[2px] bg-[#fff] rounded-[2px]"></span>
        </button>
      </nav>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className=" md:hidden bg-[rgba(0,0,0,0.7)] backdrop-blur-[18px] border-t border-[rgba(255,255,255,0.1)] px-[20px] py-[20px] items-center justify-center flex flex-col gap-[16px] ">

          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className=" text-[#fff]/80 no-underline text-[16px] font-semibold hover:text-[#fff] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition "
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className=" mt-[10px] w-[100px] no-underline text-center py-[10px] rounded-[999px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-[#fff] font-semibold hover:bg-[rgba(255,255,255,0.2)] "
          >
            Resume
          </a>

        </div>
      )}

    </div>
  )
}