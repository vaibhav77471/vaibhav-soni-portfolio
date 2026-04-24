'use client'

import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed top-8 left-0 w-full z-50 flex justify-center px-4">

      <nav className="flex items-center justify-between h-[70px] w-full max-w-[800px] bg-[#1d1d1b] border border-[#333531] rounded-full px-10 shadow-2xl">

        {/* LEFT - Logo */}
        <div className="flex items-center ml-[20px] gap-3 flex-shrink-0">
          <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-inner">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className='text-[#fff]'>
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-[#ffff] text-[24px] font-extrabold font-mono tracking-tight">
            Vaibhav Soni
          </span>
        </div>

        {/* CENTER - Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-12">
            {['Home', 'Projects', 'About me', 'Reach me'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-[#f5f6f2] text-[20px] m-[20px] font-bold hover:text-gray-400 transition-all duration-200 no-underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT - Resume Button */}
        <div className="flex-shrink-0 mr-[20px]">
          <a href="/resume.pdf" download className="flex items-center h-[40px] gap-3 bg-[#333531]/40 border border-[#4a4c49] rounded-full pl-8 pr-2 py-2 hover:bg-[#333531]/60 transition-all group no-underline">
            <span className="text-[#fff] text-[20px] font-bold">
              Resume ↓
            </span>
            <div className="flex items-center justify-center bg-[#1d1d1b] border border-[#4a4c49] rounded-full p-2 group-hover:border-white transition-colors">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 7v10m0 0l-5-5m5 5l5-5" />
              </svg>
            </div>
          </a>
        </div>

      </nav>
    </div>
  )
}

