'use client'

import { useState } from 'react'

export default function BlogCard({ blog }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPos({ x, y })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className=" group relative block w-full rounded-[28px] overflow-hidden bg-[rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.12)] shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.85)] transition-all duration-[500ms] "
    >

      {/* 🎰 Mouse Follow Glow */}
      <div
        className="absolute inset-[0] pointer-events-none"
        style={{
          background: `radial-gradient(
            450px circle at ${pos.x}% ${pos.y}%,
            rgba(168,85,247,0.25),
            transparent 40%
          )`,
        }}
      />

      {/* ✨ Star Layer */}
      <div className=" absolute inset-[0] opacity-[0.12] pointer-events-none bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:22px_22px] " />
      {/* 🔥 Image Section */}
      <div className="relative w-full h-[260px] overflow-hidden">

        <div className=" absolute inset-[0] z-[10] bg-gradient-to-b from-transparent via-transparent to-black/90 " />

        <img
          src={blog.image || "https://via.placeholder.com/400x260?text=No+Image"}
          alt={blog.title}
          className=" w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.1] "
        />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-[10] px-[28px] py-[26px]">

        {/* Title */}
        <h3 className=" text-[22px] md:text-[26px] font-semibold text-[#fff] mb-[10px] tracking-[-0.3px] transition-all duration-[300ms] group-hover:text-lime-400 ">
          {blog.title}
        </h3>

        {/* Description */}
        <p className=" text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-[20px] ">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">

          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" relative overflow-hidden no-underline px-[14px] py-[6px] rounded-[999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.5)] backdrop-blur-[12px] text-[13px] text-[rgba(255,255,255,0.8)] transition-all duration-[300ms] hover:scale-[1.05] hover:text-black hover:border-transparent hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] "
          >
            <span className="relative z-[10]">
              {blog.tag || "Read Blog ↗"}
            </span>

            {/* Glow Layer */}
            <span className=" absolute inset-[0] bg-[linear-gradient(90deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3))] opacity-[0] hover:opacity-[1] transition duration-[300ms] " />

            {/* Shine Sweep */}
            <span className=" absolute top-[0] left-[-120%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-[700ms] hover:left-[120%] " />

          </a>

        </div>

      </div>

    </div>
  )
}