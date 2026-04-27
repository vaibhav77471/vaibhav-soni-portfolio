export const projects = [
  // 🔥 CASINO LOBBY
  {
    slug: "casino-lobby",
    title: "Casino Lobby Platform",
    description:
      "Full-scale casino lobby platform where users can explore and play multiple real-time games. Includes authentication, dynamic game routing, iframe-based game launcher, and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1706129867447-b4f156c46641?q=80&w=1974&auto=format&fit=crop",
    tech: ["Next.js", "React Query", "Zustand", "Tailwind", "Shadcn UI"],
    category: "Professional",
    liveUrl: "https://casino-lobby-mnf3plcvp-vaibhav77471s-projects.vercel.app/en",
    github: "https://github.com/vaibhav77471/CasinoLobby",

    problem:
      "Building a scalable real-time casino lobby with dynamic game loading.",
    approach:
      "Used Next.js App Router, Zustand for state management, and iframe-based rendering for games.",
    flow: "Login → Casino Lobby → Select Game → Load Game via iframe",

    highlights: [
      "Multi-game platform architecture",
      "Dynamic routing for games",
      "Scalable component system",
      "Real-time ready structure",
    ],
  },

  // 🍲 RECIPE FINDER
  {
    slug: "recipe-finder",
    title: "Recipe Finder App",
    description:
      "Search and explore recipes using external APIs with a clean, responsive UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1743169049314-0666e8e35ca3?q=80&w=1170&auto=format&fit=crop",
    tech: ["React", "REST API", "CSS"],
    liveUrl: "https://recipe-finder-app-woad.vercel.app/",
    github: "https://github.com/vaibhav77471/RecipeFinderApp",
    category: "Personal",
    featured: true,

    problem: "Users struggle to find recipes quickly and efficiently.",
    approach:
      "Integrated external recipe APIs and built a responsive UI for fast search and filtering.",
    flow: "Search Recipe → View Results → Open Recipe Details",

    highlights: [
      "API integration",
      "Fast search experience",
      "Responsive UI design",
    ],
  },

  // 👨‍💻 DEV COLLAB
  {
    slug: "dev-collab",
    title: "Dev Collab (MERN)",
    description:
      "Full-stack developer collaboration platform with authentication and real-time communication.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://dev-collab-mern-sguk.vercel.app/",
    github: "https://github.com/vaibhav77471/DevCollab-MERN",
    category: "Personal",
    featured: true,

    problem: "Developers lack a simple collaboration platform.",
    approach:
      "Built a MERN stack app with authentication, project creation, and real-time collaboration features.",
    flow: "Login → Create Project → Invite Collaborators → Work Together",

    highlights: [
      "Full MERN architecture",
      "Authentication system",
      "Real-time collaboration",
    ],
  },

  // ❌ TIC TAC TOE
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    description:
      "Interactive browser-based game with clean UI and efficient game logic.",
    image:
      "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?q=80&w=1074&auto=format&fit=crop",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl:
      "https://vaibhav77471s-projects-tic-tac-toe.vercel.app/",
    github: "https://github.com/vaibhav77471/Tic-Tac-Toe",
    category: "Personal",

    problem:
      "Need for a simple interactive logic-based browser game.",
    approach:
      "Built using vanilla JavaScript with optimized win-checking logic.",
    flow: "Start Game → Player Move → Check Winner → Restart",

    highlights: [
      "Pure JavaScript logic",
      "Fast game state detection",
      "Minimal UI design",
    ],
  },

  // 🧮 SCIENTIFIC CALCULATOR
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    description:
      "Feature-rich scientific calculator with accurate computations and sleek UI.",
    image:
      "https://media.istockphoto.com/id/1158237703/photo/indian-money-with-calculator-on-black-textured-background.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl:
      "https://scientific-calculator-app-two.vercel.app/",
    github:
      "https://github.com/vaibhav77471/SCIENTIFIC-CALCULATOR-APP",
    category: "Personal",

    problem:
      "Need for a simple yet powerful scientific calculator in browser.",
    approach:
      "Built using vanilla JavaScript with expression parsing and math functions.",
    flow: "Input Expression → Calculate → Show Result",

    highlights: [
      "Scientific operations support",
      "Clean UI design",
      "Fast calculations",
    ],
  },

  // 🚀 QUICK SERVICES
  {
    slug: "quick-services",
    title: "Quick Services (MERN)",
    description:
      "Full-stack service marketplace for finding and offering services.",
    image:
      "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github:
      "https://github.com/vaibhav77471/QUICK-SERVICES",
    category: "Personal",

    problem:
      "No simple platform to connect service providers and users.",
    approach:
      "Built MERN marketplace with authentication and service listings.",
    flow: "Signup → Browse Services → Book Service",

    highlights: [
      "Marketplace architecture",
      "User authentication",
      "Service listing system",
    ],
  },

  // 💻 C++ PROJECTS
  {
    slug: "cpp-projects",
    title: "C++ Projects Collection",
    description:
      "Collection of C++ projects showcasing DSA and core programming concepts.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tech: ["C++"],
    github: "https://github.com/vaibhav77471/cpp_Projects",
    category: "Personal",

    problem:
      "Strengthen understanding of core programming and DSA.",
    approach:
      "Implemented multiple small programs using C++ fundamentals.",
    flow: "Compile → Run → Test Logic",

    highlights: [
      "DSA practice",
      "Core C++ concepts",
      "Problem-solving skills",
    ],
  },
];