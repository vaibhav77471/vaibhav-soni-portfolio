'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function ProjectCard({ project }) {
  const router = useRouter()

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="w-full h-full"
    >
      <div className="h-full flex flex-col rounded-[28px] overflow-hidden bg-[#000000] border border-[#fff]/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group">

        {/* Image */}
        <div className="relative w-full h-[260px] overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/80" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-[28px] py-[26px]">

          <h3 className="text-[22px] md:text-[26px] font-semibold text-[#fff] mb-[10px]">
            {project.title}
          </h3>

          <p className="text-[15px] text-[#fff]/70 mb-[20px] flex-1">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-[12px] mt-auto">

            {/* 🔥 DETAILS BUTTON */}
            <button
              onClick={() => router.push(`/projects/${project.slug}`)}
              className=" relative overflow-hidden px-[14px] py-[6px] rounded-[999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.6)] backdrop-blur-[12px] text-[13px] text-[rgba(255,255,255,0.8)] transition-all duration-[300ms] hover:scale-[1.05] hover:text-black hover:border-transparent hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] "
            >
              <span className="relative z-[10]">Details</span>

              {/* Glow Layer */}
              <span
                className=" absolute inset-[0] bg-[linear-gradient(90deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3))] opacity-[0] hover:opacity-[1] transition duration-[300ms] "
              />

              {/* Shine Sweep */}
              <span
                className=" absolute top-[0] left-[-120%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-[700ms] hover:left-[120%] "
              />
            </button>

            {/* 🔗 LIVE BUTTON */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" relative no-underline overflow-hidden px-[14px] py-[6px] rounded-[999px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.6)] backdrop-blur-[12px] text-[13px] text-[rgba(255,255,255,0.8)] transition-all duration-[300ms] hover:scale-[1.05] hover:text-black hover:border-transparent hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] "
              >
                <span className="relative z-[10]">Live →</span>

                {/* Glow Layer (green vibe for live) */}
                <span
                  className=" absolute inset-[0] bg-[linear-gradient(90deg,rgba(34,197,94,0.3),rgba(132,204,22,0.3))] opacity-[0] hover:opacity-[1] transition duration-[300ms] "
                />

                {/* Shine Sweep */}
                <span
                  className=" absolute top-[0] left-[-120%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] skew-x-[20deg] transition-all duration-[700ms] hover:left-[120%] "
                />
              </a>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  )
}