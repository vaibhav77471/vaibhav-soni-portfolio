"use client";

export default function ExperienceCard({ exp }) {
  return (
    <div className=" relative p-[28px] rounded-[28px] border border-[#fff]/10 bg-[#fff]/5 backdrop-blur-[20px] hover:bg-[#fff]/10 transition duration-300 overflow-hidden group ">

      {/* COLOR GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-[40px]" />
      </div>

      {/* TOP SHINE */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* LIVE BADGE */}
      {exp.current && (
        <div className="absolute top-[16px] right-[16px] px-[10px] py-[4px] text-[11px] rounded-full bg-green-400/20 text-green-400 border border-green-400/30">
          LIVE
        </div>
      )}

      {/* CONTENT */}
      <h3 className="text-[20px] font-bold text-[#fff]">
        {exp.role}
      </h3>

      <p className="text-purple-400 text-[14px] mt-[4px]">
        {exp.company}
      </p>

      <p className="text-[#fff]/50 text-[12px] mb-[12px]">
        {exp.duration}
      </p>

      {/* DIVIDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-[14px]" />

      {/* DESCRIPTION */}
      <ul className="space-y-[6px] text-[14px] text-[#fff]/70">
        {exp.description.map((item, i) => (
          <li key={i} className="flex gap-[6px]">
            <span className="text-purple-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}