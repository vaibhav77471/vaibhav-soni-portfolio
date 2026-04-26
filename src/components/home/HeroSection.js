import { Bebas_Neue, Poppins, Inter } from 'next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const inter = Inter({
  subsets: ['latin'],
});


export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[auto] w-full bg-black overflow-hidden font-['Bebas_Neue']" id="home">

      <div className="relative flex flex-col items-center">
        
        {/* HI I'M */}
        <h1 className="text-[12vw] font-bold uppercase tracking-[0.1em] leading-none select-none z-10 translate-y-12 font-['Bebas_Neue'] text-[grey]">
          HI! I'M
        </h1>

        {/* Avatar */}
        <div className="relative bottom-[180px] z-20 w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 bg-zinc-900">
          <img
            src="/images/vaibhav.webp"
            alt="Vaibhav Soni"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Name */}
        <h2 className="absolute -bottom-[160px] md:-bottom-12 text-[grey] text-[14vw] font-black uppercase leading-none text-center select-none z-30 drop-shadow-2xl font-['Bebas_Neue'] tracking-[0.1em]">
          VAIBHAV
        </h2>

        {/* Tagline */}
        <p className="absolute bottom-[-20px] md:bottom-[-80px] text-center text-[20px] md:text-lg text-[#fff] tracking-wide z-30 max-w-xl">
          A Software Engineer crafting innovative solutions and immersive digital experiences
        </p>

      </div>
    </section>
  );
}