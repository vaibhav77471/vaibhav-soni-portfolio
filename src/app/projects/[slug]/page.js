import { projects } from '@/data/projects'

export default function ProjectPage({ params }) {
  const { slug } = params;

  const project = projects.find(
    p => p.slug?.toLowerCase() === slug?.toLowerCase()
  );

  if (!project) {
    return <div className="p-20 text-white">Project Not Found</div>
  }

  const details = {
    "casino-lobby": {
      problem: "How to build a real-time, scalable casino lobby UI with smooth animations and live updates.",
      approach: "Used Next.js, Zustand, and Framer Motion for modular architecture and smooth UX.",
      screenshots: ["/images/project1.png"],
      flow: "Players log in, see live tables, and join instantly."
    },
    "keno-game": {
      problem: "Designing an interactive betting UI for Keno.",
      approach: "Built with React + Tailwind + animations.",
      screenshots: ["/images/project2.png"],
      flow: "User selects numbers, places bets, and sees results."
    }
  };

  const info = details[slug] || {};

  return (
    <div className="p-20 max-w-3xl mx-auto text-white">
      <h1 className="text-4xl mb-4 font-bold text-lime-400">
        {project.title}
      </h1>

      <p className="mb-6 text-lg text-gray-300">
        {project.description}
      </p>

      {info.problem && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Problem</h3>
          <p>{info.problem}</p>
        </div>
      )}

      {info.approach && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Approach</h3>
          <p>{info.approach}</p>
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-semibold text-xl mb-1">Tech Stack</h3>
        <ul className="flex gap-3 flex-wrap">
          {project.tech.map((t, i) => (
            <li key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {info.screenshots?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Screenshots</h3>
          <div className="flex gap-4">
            {info.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-64 h-40 object-cover rounded border border-gray-700"
              />
            ))}
          </div>
        </div>
      )}

      {info.flow && (
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-1">Flow</h3>
          <p>{info.flow}</p>
        </div>
      )}
    </div>
  );
}