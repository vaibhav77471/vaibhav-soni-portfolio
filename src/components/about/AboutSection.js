'use client'

import { useState } from 'react'

export default function AboutSection() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMouse({ x, y })
  }

  return (
    <section
      id="about"
      onMouseMove={handleMove}
      className="relative w-full py-[120px] flex items-center justify-center bg-black overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

      {/* MAIN CARD */}
      <div
        className="relative w-[92%] max-w-6xl rounded-[40px] p-[5px] md:p-[70px] border border-[#fff]/10 bg-[#fff]/5 backdrop-blur-[25px] shadow-[0_0_120px_rgba(0,0,0,0.7)]" style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(168,85,247,0.12), transparent 40%), rgba(255,255,255,0.04)`
        }}
      >

        {/* shine layer */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] skew-x-[20deg] animate-[shine_6s_linear_infinite]" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="text-center mb-[60px]">
            <h2 className="text-[58px] font-bold tracking-wide">
              💫 About Me
            </h2>

            <p className="text-[#fff]/70 text-[18px] max-w-3xl mx-auto mt-[20px] leading-relaxed">
              Hi there 👋 I'm <span className="text-[#fff] font-semibold">Vaibhav Soni</span>,
              a Software Developer Engineer building scalable, high-performance web applications with modern JavaScript technologies.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-[30px]">

            {/* LEFT STORY */}
            <div className="p-[28px] rounded-[28px] border border-[#fff]/10 bg-[#fff]/5 hover:bg-[#fff]/10 transition duration-300">
              <h3 className="text-[20px] font-bold mb-[12px]">💻 What I Do</h3>

              <p className="text-[#fff]/70 text-[15px] leading-relaxed">
                Currently working on real-time casino gaming platforms, designing and developing responsive,
                interactive, production-ready UIs using Next.js, React, Tailwind CSS, and Zustand.
              </p>

              <p className="text-[#fff]/70 text-[15px] mt-[10px] leading-relaxed">
                I focus on clean, modular, scalable code and turning complex UI/UX into pixel-perfect systems.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="p-[28px] rounded-[28px] border border-[#fff]/10 bg-[#fff]/5 hover:bg-[#fff]/10 transition">
              <h3 className="text-[20px] font-bold mb-[12px]">🧠 Tech Stack</h3>

              <div className="flex flex-wrap gap-[8px] text-[13px] text-[#fff]/70">
                {[
                  "React", "Next.js", "JavaScript", "TypeScript",
                  "TailwindCSS", "Zustand", "React Query",
                  "Node.js", "Express.js", "MongoDB", "SQL",
                  "Socket.io", "Redux", "Figma", "Git", "GitHub"
                ].map((t) => (
                  <span
                    key={t}
                    className="px-[10px] py-[6px] rounded-full border border-[#fff]/10 bg-[#fff]/5 hover:bg-[#fff]/10 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CURRENT FOCUS */}
            <div className="p-[28px] rounded-[28px] border border-[#fff]/10 bg-[#fff]/5 hover:bg-[#fff]/10 transition">
              <h3 className="text-[20px] font-bold mb-[12px]">⚡ Current Focus</h3>

              <ul className="text-[#fff]/70 text-[15px] space-y-[8px]">
                <li>• Building reusable UI systems for casino games</li>
                <li>• Real-time interaction & game logic integration</li>
                <li>• Optimizing performance & scalability</li>
                <li>• Advanced frontend architecture patterns</li>
              </ul>
            </div>

            {/* GOALS */}
            <div className="p-[28px] rounded-[28px] border border-[#fff]/10 bg-[#fff]/5 hover:bg-[#fff]/10 transition">
              <h3 className="text-[20px] font-bold mb-[12px]">🚀 Goals</h3>

              <ul className="text-[#fff]/70 text-[15px] space-y-[8px]">
                <li>• Become a top-tier Frontend Engineer</li>
                <li>• Work on large-scale real-time systems</li>
                <li>• Contribute to impactful global products</li>
                <li>• Master UI/UX + performance engineering</li>
              </ul>
            </div>

          </div>

          {/* CONTACT BAR */}
          <div className="mt-[60px] flex flex-col md:flex-row justify-between items-center gap-[20px] text-[#fff]/70 text-[15px]">

            <div>
              📧 <span className="text-[#fff]">vaibhavsoni044@gmail.com</span>
            </div>

            <div>
              📱 <span className="text-[#fff]">+91 8770643009</span>
            </div>

            <div className="flex gap-[12px]">
              <a className="hover:text-[#fff] transition" href="#">LinkedIn</a>
              <a className="hover:text-[#fff] transition" href="#">GitHub</a>
              <a className="hover:text-[#fff] transition" href="#">Medium</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}