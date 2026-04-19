import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ id, className }) => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text > *",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-image",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id || "hero"} ref={heroRef} className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center overflow-hidden w-full bg-[#050505] ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="hero-text flex flex-col items-start gap-4">
          <h1 className="text-[55px] sm:text-[65px] md:text-[85px] lg:text-[95px] font-extrabold tracking-tight text-[#e5e5e5] leading-[1.05] whitespace-nowrap">
            Jothiswaran R
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-[#e5e5e5] mt-1">
            Software Developer <span className="text-[#3b82f6]">@ Hash Agile</span>
          </h2>
          <p className="text-[11px] md:text-[13px] font-semibold tracking-[0.1em] text-[#9a9a9a] uppercase leading-relaxed max-w-lg mt-4">
            MOBILE APP DEVELOPER • WEBAPP DEVELOPER • AI ENGINEER LLMS AND MODEL • VAPT AND ETHICAL HACKER
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a href="#work" className="px-6 py-4 rounded-full border border-white/30 bg-black text-white text-base md:text-lg pointer-events-auto font-medium hover:bg-white/10 transition-colors flex items-center gap-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              Explore Portfolio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>

            {/* Tech Stack Icons */}
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#050505] flex items-center justify-center overflow-hidden shrink-0 shadow-lg"><img src="/images/logos/react.png" alt="React" className="w-6 h-6 object-contain" /></div>
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#050505] flex items-center justify-center overflow-hidden shrink-0 shadow-lg"><img src="/images/logos/node.png" alt="Node" className="w-6 h-6 object-contain" /></div>
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#050505] flex items-center justify-center overflow-hidden shrink-0 shadow-lg"><img src="/images/logos/python.svg" alt="Python" className="w-6 h-6 object-contain" /></div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end hero-image mt-20 lg:mt-0 xl:mr-10">

          {/* Blue Neon Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[280px] h-[350px] md:w-[400px] md:h-[500px] bg-[#3b82f6] opacity-60 blur-[100px] rounded-[3rem] z-0 pointer-events-none"></div>

          {/* White Card background */}
          <div className="relative z-10 w-[280px] h-[360px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[480px] bg-white rounded-[1.5rem] shadow-2xl flex items-end justify-center">

            {/* The Image overlaid (sticking out on top if transparent) */}
            <img
              src="/images/jothis-pro.jpg"
              alt="Jothiswaran R"
              className="absolute bottom-0 w-[115%] min-w-[320px] md:min-w-[380px] lg:min-w-[440px] h-[115%] object-cover z-20 drop-shadow-2xl rounded-b-[1.5rem]"
              style={{ objectPosition: 'center 10%' }}
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;