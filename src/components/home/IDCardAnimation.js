'use client'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

export default function IDCardAnimation({ children }) {
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Spring physics for natural movement
  const springConfig = { stiffness: 150, damping: 12, mass: 1 }
  const x = useSpring(dragX, springConfig)
  const y = useSpring(dragY, springConfig)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  return (
    <motion.div 
      className="relative perspective-1000"
      // DROP-IN ANIMATION: High bounce effect on load
      initial={{ y: -800, x: 200, rotate: 20 }}
      animate={{ y: 0, x: 0, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 60, 
        damping: 10, 
        delay: 0.5 
      }}
    >
      {/* The String/Lanyard */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[2px] h-48 bg-gradient-to-b from-transparent via-zinc-700 to-zinc-400 z-0" />
      
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
        style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ cursor: 'grabbing' }}
        className="relative z-10 touch-none select-none"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}