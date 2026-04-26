import { projects } from "@/data/projects";

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;

  const slug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl tracking-[2px]">
        🎰 PROJECT NOT FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#111827,#000000)] text-white px-[20px] md:px-[60px] py-[60px]">

      {/* Card Container */}
      <div className="max-w-[900px] mx-auto bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-[18px] rounded-[24px] shadow-[0_0_40px_rgba(0,255,128,0.08)] p-[24px] md:p-[40px]">

        {/* TITLE */}
        <h1 className="text-[32px] md:text-[44px] font-[800] tracking-[2px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00ff88,#00c2ff,#a855f7)] mb-[20px] uppercase">
          {project.title}
        </h1>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.12)] shadow-[0_0_30px_rgba(0,255,200,0.12)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[260px] md:h-[360px] object-cover hover:scale-[1.05] transition duration-500"
          />
        </div>

        {/* DESCRIPTION */}
        <p className="mt-[20px] text-[15px] md:text-[16px] text-white/70 leading-[1.7] border-l-[3px] border-[rgba(0,255,136,0.5)] pl-[12px]">
          {project.description}
        </p>

        {/* GRID SECTIONS */}
        <div className="mt-[30px] space-y-[24px]">

          {/* PROBLEM */}
          {project.problem && (
            <div className="p-[16px] rounded-[16px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_0_20px_rgba(0,255,150,0.05)]">
              <h3 className="text-[18px] font-[700] text-[rgb(0,255,150)] tracking-[1px] mb-[8px]">
                PROBLEM
              </h3>
              <p className="text-white/70 text-[14px] leading-[1.6]">
                {project.problem}
              </p>
            </div>
          )}

          {/* APPROACH */}
          {project.approach && (
            <div className="p-[16px] rounded-[16px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_0_20px_rgba(168,85,247,0.08)]">
              <h3 className="text-[18px] font-[700] text-[rgb(168,85,247)] tracking-[1px] mb-[8px]">
                APPROACH
              </h3>
              <p className="text-white/70 text-[14px] leading-[1.6]">
                {project.approach}
              </p>
            </div>
          )}

          {/* FLOW */}
          {project.flow && (
            <div className="p-[16px] rounded-[16px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_0_20px_rgba(0,194,255,0.08)]">
              <h3 className="text-[18px] font-[700] text-[rgb(0,194,255)] tracking-[1px] mb-[8px]">
                FLOW
              </h3>
              <p className="text-white/70 text-[14px] leading-[1.6]">
                {project.flow}
              </p>
            </div>
          )}

          {/* TECH STACK */}
          <div>
            <h3 className="text-[18px] font-[700] text-[rgb(255,215,0)] tracking-[1px] mb-[12px]">
              TECH STACK
            </h3>

            <div className="flex flex-wrap gap-[10px]">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-[12px] py-[6px] text-[12px] tracking-[1px] rounded-[999px]
                  bg-[rgba(255,215,0,0.08)]
                  border border-[rgba(255,215,0,0.25)]
                  text-[rgb(255,215,0)]
                  shadow-[0_0_10px_rgba(255,215,0,0.15)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          {project.highlights && (
            <div>
              <h3 className="text-[18px] font-[700] text-[rgb(0,255,136)] tracking-[1px] mb-[12px]">
                HIGHLIGHTS
              </h3>

              <ul className="space-y-[8px]">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-white/70 flex items-center gap-[10px]"
                  >
                    <span className="w-[6px] h-[6px] bg-[rgb(0,255,136)] rounded-full shadow-[0_0_8px_rgb(0,255,136)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* BUTTONS */}
        <div className="mt-[40px] flex flex-wrap gap-[14px]">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="px-[22px] py-[10px] rounded-[999px] bg-[linear-gradient(90deg,#00ff88,#00c2ff)] text-black font-[700] no-underline tracking-[1px] shadow-[0_0_25px_rgba(0,255,200,0.25)] hover:scale-[1.05] transition"
            >
              ▶ LIVE
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="relative no-underline inline-flex px-[22px] py-[10px] rounded-[999px] border border-[rgba(255,255,255,0.18)] text-white/80 tracking-[1px] overflow-hidden transition duration-300 hover:text-white hover:scale-[1.05]"
            >

              {/* 🔥 animated glow background */}
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00ff8830,#00000000)] opacity-0 hover:opacity-100 transition duration-300" />

              {/* ✨ moving shine */}
              <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]" />

              {/* text */}
              <span className="relative z-10">
                GITHUB
              </span>

            </a>
          )}
        </div>
      </div>
    </div>
  );
}