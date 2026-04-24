import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-20 bg-[#000000] text-[#f6ffe0]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-[#f6ffe0]">A Bit About Me</h2>
          <div className="text-lg text-[#f6ffe0] space-y-6">
            <p>
              Began with a creative interest in graphic design. Later, I spent 5.5 years as a fraud analyst in banking. I bring a rare blend of visual craft and analytical thinking to product design. I now design fintech experiences at ZET, focusing on usability, clarity, and creating business impact often integrating AI tools in my workflow to speed up exploration, ideation, and problem-solving.
            </p>
            <p>
              Beyond design, I love experiencing visual storytelling on the big screen (yes, I watch a lot of movies!). I’m also into <span className="inline-flex items-center">Chess <span className="ml-1">♟️</span></span> feel free to challenge me for a fun match. I’m curious about tech gadgets and bikes, too.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-10 mt-10 mb-8">
            <div>
              <div className="text-5xl font-bold text-lime-200 leading-none">02</div>
              <div className="text-base text-[#f6ffe0] opacity-80 mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-lime-200 leading-none">10+</div>
              <div className="text-base text-[#f6ffe0] opacity-80 mt-1 font-semibold">Completed Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-lime-200 leading-none">03+</div>
              <div className="text-base text-[#f6ffe0] opacity-80 mt-1 font-semibold">Companies worked</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 mt-4">
            <div>
              <div className="font-bold text-xl mb-1">Contact</div>
              <div className="text-[#f6ffe0] opacity-90 text-lg">+91 93916 31292</div>
            </div>
            <div>
              <div className="font-bold text-xl mb-1">Email :</div>
              <div className="text-[#f6ffe0] opacity-90 text-lg">nirannagasai@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="rounded-[45%] border-4 border-lime-200 p-2 md:p-4 bg-black shadow-xl max-w-xs">
            <Image
              src="/images/profile.png"
              alt="Profile photo"
              width={350}
              height={420}
              className="rounded-[40%] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}