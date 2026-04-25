'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className=" fixed top-0 left-0 w-full z-[50] bg-black/30 backdrop-blur-lg " >
      <nav className=" max-w-[1200px] flex items-center justify-between h-[70px] px-[20px] md:px-[40px] mx-auto ">

        {/* 🔥 LEFT — Logo */}
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#fff]/10 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="[#fff]"/>
            </svg>
          </div>

          <span className="text-[#fff] text-[18px] md:text-[20px] font-bold">
            Vaibhav Soni
          </span>
        </div>

        {/* 🔥 DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-[28px]">

          <div className="flex items-center gap-[20px]">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#fff]/70 text-[14px] font-semibold hover:text-[#fff] transition"
              >
                {item}
              </a>
            ))}
          </div>

          <a href="/resume.pdf" download className=" px-[14px] py-[7px] rounded-full bg-[#fff]/10 text-[#fff] text-[14px] font-semibold hover:bg-[#fff] hover:text-black transition " >
            Resume
          </a>

        </div>

        {/* 🔥 MOBILE BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px]"
        >
          <span className="w-[24px] h-[2px] bg-[#fff]"></span>
          <span className="w-[24px] h-[2px] bg-[#fff]"></span>
          <span className="w-[24px] h-[2px] bg-[#fff]"></span>
        </button>

      </nav>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className=" md:hidden bg-black/80 backdrop-blur-xl border-t border-[#fff]/10 px-[20px] py-[20px] flex flex-col gap-[16px] ">

          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-[#fff]/80 text-[16px] font-semibold hover:text-[#fff] transition" >
              {item}
            </a>
          ))}

          <a href="/resume.pdf" download className=" mt-[10px] text-center py-[10px] rounded-full bg-[#fff] text-black font-semibold " >
            Download Resume
          </a>

        </div>
      )}
    </div>
  )
}