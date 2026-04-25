export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-[10rem] md:px-20 bg-transparent text-[#fff] flex items-center justify-center backdrop-blur-md" >
      <div className="max-w-5xl mx-auto w-full text-center">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-[50px] md:text-5xl font-bold tracking-wide">
            About Me
          </h2>

          {/* Subheading */}
          <p className="text-[20px] md:text-xl text-[#fff] mt-5 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into <span className="font-semibold text-white">scalable</span>,{" "}
            <span className="font-semibold text-white">high-performance</span> web applications
            with modern technologies.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-[20px] text-base md:text-lg leading-relaxed text-[#fff] max-w-3xl mx-auto text-justify">

          <p>
            I started my journey with a background in{" "}
            <span className="font-semibold text-white">
              Electronics and Communication Engineering
            </span>, but my passion for building on the web led me to transition into software development.
            I am a <span className="font-semibold text-white">Full Stack Developer</span> focused on
            creating modern, scalable, and user-friendly applications.
          </p>

          <p>
            Currently, I’m working on real-world projects like a{" "}
            <span className="font-semibold text-white">
              casino gaming platform using Next.js, Tailwind CSS, and Firebase
            </span>, where I build reusable UI components, handle complex state management,
            and ensure smooth user experience.
          </p>

          <p>
            Beyond coding, I’m passionate about{" "}
            <span className="font-semibold text-white">
              design, animations, and UI/UX
            </span>. I also love exploring new technologies, improving my problem-solving skills,
            and sharing my learnings.
          </p>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap text-[20px] justify-center gap-[12px] mt-14 text-center">

          <div>
            <div className="text-4xl md:text-5xl font-bold text-lime-200">
              01+
            </div>
            <div className="text-sm md:text-base opacity-80 mt-2">
              Years of Experience
            </div>
          </div>
          <br />

          <div>
            <div className="text-4xl md:text-5xl font-bold text-lime-200">
              08+
            </div>
            <div className="text-sm md:text-base opacity-80 mt-2">
              Completed Projects
            </div>
          </div>
          <br />


          <div>
            <div className="text-4xl md:text-5xl font-bold text-lime-200">
              08+
            </div>
            <div className="text-sm md:text-base opacity-80 mt-2">
              Completed Projects
            </div>
          </div>
          <br />


          <div>
            <div className="text-4xl md:text-5xl font-bold text-lime-200">
              01
            </div>
            <div className="text-sm md:text-base opacity-80 mt-2">
              Company Experience
            </div>
          </div>

        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[12px] mt-[14px] text-center">

          <div>
            <div className="font-semibold text-[20px] mb-1">
              Contact
            </div>
            <div className="text-[#fff]">
              +91 8770643009
            </div>
          </div>

          <div>
            <div className="font-semibold text-[20px] mb-1">
              Email
            </div>
            <div className="text-[#fff]">
              vaibhavsoni044@gmail.com
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}