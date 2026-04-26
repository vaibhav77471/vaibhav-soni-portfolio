'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "React", image: "/skills/react.png" },
  { name: "Next.js", image: "/skills/next.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { name: "JavaScript", image: "/skills/js.png" },
  { name: "TypeScript", image: "/skills/ts.png" },
  { name: "Framer Motion", image: "/skills/framer.png" },
  { name: "shadcn/ui", image: "/skills/shadcn.png" },
  { name: "Zustand", image: "/skills/zustand.png" },
  { name: "Node.js", image: "/skills/nodejs.png" },
  { name: "Express.js", image: "/skills/express.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "HTML5", image: "/skills/html.png" },
  { name: "CSS3", image: "/skills/css.png" },
  { name: "Material UI", image: "/skills/materialui.png" },
  { name: "MySQL", image: "/skills/mysql.png" },
  { name: "Redux", image: "/skills/redux.png" },
]

// duplicate for seamless loop
const scrollSkills = [...skills, ...skills]

export default function SkillsScroller() {
  return (
    <section
      id="skills"
      className="w-full mt-[50px] px-[80px] flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-[50px] font-bold text-white mt-[50px]">
        Skills
      </h2>

      {/* Container */}
      <div className="relative w-full overflow-hidden mt-[50px]">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row */}
        <motion.div
          className="flex gap-[60px] w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 50,
          }}
        >
          {scrollSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[160px] group"
            >
              {/* Image */}
              <div className="w-[120px] h-[120px] rounded-[24px] bg-white/5 flex items-center justify-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition duration-300 group-hover:scale-[1.1]">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-[100px] h-[100px] object-fill"
                />
              </div>

              {/* Name */}
              <p className="mt-[16px] text-[18px] text-white/80 group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}