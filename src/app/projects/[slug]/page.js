import { projects } from "@/data/projects";

export default async function ProjectPage({ params }) {
  // 🔥 VERY IMPORTANT FIX
  const resolvedParams = await params;

  const slug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  console.log("Slug:", slug); // debug

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="p-20 text-white text-center text-xl">
        Project Not Found
      </div>
    );
  }


  // 🔥 Detailed content
  const details = {
    "casino-lobby": {
      problem:
        "Building a scalable real-time casino lobby with dynamic game loading.",
      approach:
        "Used Next.js App Router, Zustand for state, and iframe-based rendering for games.",
      flow:
        "Login → Casino Lobby → Select Game → Load Game via iframe",
    },

    "keno-game": {
      problem: "Designing an intuitive betting UI for Keno game.",
      approach:
        "Built reusable UI components using React and Tailwind with animations.",
      flow: "Select numbers → Place bet → View results",
    },

    "blackjack-game": {
      problem: "Real-time multiplayer blackjack UI.",
      approach:
        "Used Socket.io for live updates and optimized UI rendering.",
      flow: "Join table → Play cards → Get result",
    },

    "roulette-game": {
      problem: "Interactive roulette betting experience.",
      approach:
        "Implemented smooth animations with Framer Motion.",
      flow: "Place bet → Spin wheel → Result display",
    },

    "recipe-finder": {
      problem: "Users struggle to find recipes quickly.",
      approach:
        "Integrated external APIs with responsive React UI.",
      flow: "Search → View recipes → Explore details",
    },

    "dev-collab": {
      problem: "Lack of simple dev collaboration tools.",
      approach:
        "Built MERN app with authentication and real-time features.",
      flow: "Login → Create project → Collaborate",
    },

    "tic-tac-toe": {
      problem: "Simple interactive game implementation.",
      approach:
        "Built with vanilla JavaScript and efficient game logic.",
      flow: "Play → Detect winner → Restart",
    },
  };

  const info = details[slug] || {};

  return (
    <div className="min-h-screen bg-black text-white px-10 py-2 top-[50px] max-w-4xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold text-lime-400 mb-6">
        {project.title}
      </h1>

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[300px] object-cover rounded-xl mb-6"
      />

      {/* Description */}
      <p className="text-lg text-white/80 mb-8">
        {project.description}
      </p>

      {/* Problem */}
      {info.problem && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Problem</h3>
          <p className="text-white/70">{info.problem}</p>
        </div>
      )}

      {/* Approach */}
      {info.approach && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Approach</h3>
          <p className="text-white/70">{info.approach}</p>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-white/10 px-3 py-1 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Flow */}
      {info.flow && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Flow</h3>
          <p className="text-white/70">{info.flow}</p>
        </div>
      )}

      {/* Live Button */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          className="inline-block mt-6 px-6 py-2 bg-lime-400 text-black rounded-full font-medium"
        >
          View Live Project →
        </a>
      )}
    </div>
  );
}