const skills = [
  { name: "React", image: "/skills/react.png" },
  { name: "Next.js", image: "/skills/next.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { name: "JavaScript", image: "/skills/js.png" },
  { name: "TypeScript", image: "/skills/ts.png" },
  { name: "Framer Motion", image: "/skills/framer.png" },
  { name: "shadcn/ui", image: "/skills/shadcn.png" },
  { name: "Zustand", image: "/skills/zustand.png" },
]

export default function SkillsScroller() {
  const scrollSkills = [...skills, ...skills]

  return (
    <section
      id="skills"
      className="h-[auto] mt-[50px] w-full flex flex-col justify-center px-[80px] bg-transparent backdrop-blur-md overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-[50px] font-bold text-[#fff] text-center mt-[50px]">
        Skills
      </h2>

      {/* Scroll Container */}
      <div className="relative w-full overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent z-10" />

        {/* Scrolling Row */}
        <div
          className="flex gap-[60px] mt-[50px] items-center"
          style={{ animation: 'scroll 20s linear infinite' }}
        >
          {scrollSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center object-fill min-w-[160px] group"
            >
              {/* Image */}
              <div className=" w-[120px] h-[120px] rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-[1.1] transition duration-300 ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>

              {/* Name */}
              <p className="mt-[16px] text-[18px] text-[#fff]/80 group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}