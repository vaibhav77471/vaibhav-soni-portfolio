export default function SkillsScroller() {
  const skills = ["React", "Next.js", "Tailwind", "Zustand"]

  return (
    <section id="skills" className="p-20 overflow-hidden">
      <div className="flex gap-10 animate-scroll">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gray-700 px-6 py-3 rounded">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}