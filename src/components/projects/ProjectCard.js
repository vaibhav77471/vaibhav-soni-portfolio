'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,255,128,0.15)" }}
      className="bg-gray-800 p-0 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full border border-gray-700 hover:border-lime-400 transition-all"
    >
      {project.image && (
        <div className="w-full h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
          <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-2 text-lime-400">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
        <Link href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-lime-300 font-semibold hover:underline"
        >
          View Project
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
    </motion.div>
  )
}