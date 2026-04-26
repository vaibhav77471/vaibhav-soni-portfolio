// import { projects } from '@/data/projects'
// import ProjectCard from './ProjectCard'

// export default function ProjectGrid() {
//   return (
//   <section id="projects" className="p-[20px] h-[auto] flex flex-col items-center justify-start bg-transparent backdrop-blur-md">
//       <h1 className="text-[50px] font-bold text-[#fff] mb-10">Featured Projects</h1>
//       <div className="grid grid-cols-3 md:grid-cols-2 p-[20px] gap-[20px] w-[100%]">
//         {projects.map((project) => (
//           <ProjectCard key={project.slug} project={project} />
//         ))}
//       </div>
//     </section>
//   )
// }


'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const [visibleCount, setVisibleCount] = useState(6)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <section
      id="projects"
      className="p-[20px] flex flex-col items-center bg-transparent backdrop-blur-md"
    >
      <h1 className="text-[50px] font-bold text-[#fff] mb-10">
        Featured Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <button
          onClick={handleLoadMore}
          className=" mt-[48px] px-[32px] py-[12px] relative overflow-hidden rounded-[16px] text-white font-[600] tracking-[0.5px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-[300ms] ease-out hover:scale-[1.05] hover:bg-[rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] "
        >
          <span className="relative z-[10]">See More</span>

          {/* Glow Layer */}
          <span className=" absolute inset-[0] bg-[linear-gradient(90deg,rgba(168,85,247,0.2),rgba(236,72,153,0.2),rgba(168,85,247,0.2))] opacity-[0] hover:opacity-[1] transition duration-[300ms] " />

          {/* Shine Effect */}
          <span className=" absolute top-[0] left-[-100%] h-[100%] w-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] skew-x-[12deg] transition-all duration-[700ms] hover:left-[100%] " />
        </button>
      )}
    </section>
  )
}