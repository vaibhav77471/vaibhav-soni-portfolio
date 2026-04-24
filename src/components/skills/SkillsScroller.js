const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "shadcn/ui", icon: "🧩" },
  { name: "Radix UI", icon: "🎛️" },
  { name: "Zustand", icon: "🐻" },
  { name: "PIXI.js", icon: "🕹️" },
  { name: "HTML5", icon: "🔶" },
  { name: "CSS3", icon: "🔷" },
  { name: "Git", icon: "🔧" },
  { name: "Vercel", icon: "▲" },
]

export default function SkillsScroller() {
  // Duplicate skills for infinite scroll effect
  const scrollSkills = [...skills, ...skills]
  return (
    <section id="skills" className="p-20 overflow-hidden bg-black">
      <h2 className="text-3xl mb-8">Skills</h2>
      <div className="w-full relative">
        <div className="flex gap-10 animate-scroll whitespace-nowrap" style={{ animation: 'scroll 18s linear infinite' }}>
          {scrollSkills.map((skill, i) => (
            <div key={i} className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold text-white border border-gray-700 shadow">
              <span>{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}