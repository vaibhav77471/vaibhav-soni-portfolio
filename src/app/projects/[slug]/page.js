import { projects } from '@/data/projects'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return <div className="p-20">Not Found</div>

  // Example details for demo purposes
  const details = {
    "casino-lobby": {
      problem: "How to build a real-time, scalable casino lobby UI with smooth animations and live updates.",
      approach: "Used Next.js for SSR, Zustand for state, and Framer Motion for seamless transitions. Focused on modular components and responsive design.",
      screenshots: ["/images/project1.png"],
      flow: "Players log in, see live tables, and join instantly. Admins can push updates in real-time."
    },
    "keno-game": {
      problem: "Designing an interactive betting UI for Keno with instant feedback and engaging visuals.",
      approach: "Built with React and Tailwind, leveraging hooks for state and custom animations for feedback.",
      screenshots: ["/images/project2.png"],
      flow: "User selects numbers, places bets, and sees results in real-time with animated highlights."
    }
  };
  const info = details[project.slug] || {};

  return (
    <div className="p-20 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-4 font-bold text-lime-400">{project.title}</h1>
      <p className="mb-6 text-lg text-gray-300">{project.description}</p>

      {info.problem && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Problem Statement</h3>
          <p className="text-gray-300">{info.problem}</p>
        </div>
      )}
      {info.approach && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Approach</h3>
          <p className="text-gray-300">{info.approach}</p>
        </div>
      )}
      <div className="mb-4">
        <h3 className="font-semibold text-xl mb-1">Tech Stack</h3>
        <ul className="flex gap-3 flex-wrap">
          {project.tech.map((t, i) => (
            <li key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{t}</li>
          ))}
        </ul>
      </div>
      {info.screenshots && info.screenshots.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Screenshots</h3>
          <div className="flex gap-4">
            {info.screenshots.map((src, i) => (
              <img key={i} src={src} alt="Screenshot" className="w-64 h-40 object-cover rounded border border-gray-700" />
            ))}
          </div>
        </div>
      )}
      {info.flow && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Flow Explanation</h3>
          <p className="text-gray-300">{info.flow}</p>
        </div>
      )}
    </div>
  )
}