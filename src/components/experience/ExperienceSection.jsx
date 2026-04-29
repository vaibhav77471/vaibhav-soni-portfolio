"use client";

import { experienceData } from "@/data/experienceData";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  return (
    <section
      id="experience"
      onMouseMove={handleMove}
      className="relative scroll-mt-[40px] w-full py-[120px] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

      {/* MAIN CONTAINER */}
      <div
        className="relative w-[92%] max-w-6xl rounded-[40px] p-[30px] md:p-[70px] border border-[#fff]/10 bg-[#fff]/5 backdrop-blur-[25px]"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(168,85,247,0.12), transparent 40%), rgba(255,255,255,0.04)`
        }}
      >

        {/* SHINE */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] skew-x-[20deg] animate-[shine_6s_linear_infinite]" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="text-center mb-[60px]">
            <h2 className="text-[48px] md:text-[58px] font-bold">
              🎰 Experience
            </h2>

            <p className="text-[#fff]/70 mt-[16px]">
              My journey building real-world products
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-[30px]">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}