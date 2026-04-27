'use client'

import { useEffect, useState } from 'react'

const skills = [
  "React", "Next.js", "Tailwind", "JavaScript", "TypeScript",
  "Framer Motion", "Zustand", "Node.js", "Express",
  "MongoDB", "Redux", "Git"
]

export default function SkillsWheel() {
  const [mounted, setMounted] = useState(false)
  const [angle, setAngle] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [size, setSize] = useState(600)

  const radius = size * 0.35

  // ✅ FIX: mount guard
  useEffect(() => {
    setMounted(true)
  }, [])

  // responsive size
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth
      if (w < 480) setSize(320)
      else if (w < 768) setSize(420)
      else if (w < 1024) setSize(520)
      else setSize(600)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // animation ONLY after mount
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setAngle((prev) => {
        const next = prev + 0.25

        const normalized = ((next % 360) + 360) % 360
        const index = Math.floor((normalized / 360) * skills.length)

        setActiveIndex(index)
        return next
      })
    }, 16)

    return () => clearInterval(interval)
  }, [mounted])

  // 🚨 IMPORTANT: prevent SSR render mismatch
  if (!mounted) {
    return (
      <section className="w-full h-[100vh] flex items-center justify-center bg-black">
        <div className="text-white/50">Loading Skills Wheel...</div>
      </section>
    )
  }

  return (
    <section id="skills" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]" />

      <div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size
        }}
      >

        {skills.map((skill, i) => {
          const angleStep = (360 / skills.length) * i + angle
          const rad = (angleStep * Math.PI) / 180

          const x = Math.cos(rad) * radius
          const y = Math.sin(rad) * radius

          const isActive = i === activeIndex

          return (
            <div
              key={i}
              className="absolute transition-all duration-300"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              <div
                className={`
                  flex items-center justify-center
                  rounded-[20px]
                  backdrop-blur-md
                  border
                  transition-all duration-300

                  ${isActive
                    ? "bg-purple-500/20 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.6)] scale-110"
                    : "bg-white/5 border-white/10 opacity-70 scale-100"
                  }
                `}
                style={{
                  width: size < 480 ? 70 : 110,
                  height: size < 480 ? 70 : 110
                }}
              >
                <span className="text-white text-xs md:text-sm font-semibold text-center">
                  {skill}
                </span>
              </div>
            </div>
          )
        })}

        <div
          className="absolute rounded-full bg-black border border-white/20 shadow-[0_0_80px_rgba(168,85,247,0.5)] flex items-center justify-center"
          style={{
            width: size < 480 ? 90 : 140,
            height: size < 480 ? 90 : 140
          }}
        >
          <span className="text-white text-[10px] md:text-xs tracking-[3px] text-center">
            SKILLS CORE
          </span>
        </div>

      </div>
    </section>
  )
}