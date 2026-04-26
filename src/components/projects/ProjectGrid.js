'use client'

import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [cols, setCols] = useState(1)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth

      if (width >= 1440) {
        setCols(3)
      } else if (width >= 768) {
        setCols(2)
      } else {
        setCols(1)
      }
    }

    updateCols()
    window.addEventListener('resize', updateCols)

    return () => window.removeEventListener('resize', updateCols)
  }, [])

  return (
    <section
      id="projects"
      className="p-[20px] flex flex-col items-center bg-transparent backdrop-blur-md"
    >
      <h1 className="text-[50px] font-bold text-[#fff] mb-10">
        Featured Projects
      </h1>

      {/* Grid */}
      <div
        className="grid gap-[20px] w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <button
          onClick={handleLoadMore}
          className="mt-[48px] px-[32px] py-[12px] relative overflow-hidden rounded-[16px] text-white font-[600] tracking-[0.5px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-[300ms] ease-out hover:scale-[1.05] hover:bg-[rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        >
          <span className="relative z-[10]">See More</span>
        </button>
      )}
    </section>
  )
}