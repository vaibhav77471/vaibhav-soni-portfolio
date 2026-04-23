'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-5 rounded-xl"
    >
      <h3 className="text-xl">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>

      <Link href={`/projects/${project.slug}`}>
        <span className="text-purple-400 cursor-pointer">
          View →
        </span>
      </Link>
    </motion.div>
  )
}