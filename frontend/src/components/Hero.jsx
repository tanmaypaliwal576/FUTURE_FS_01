import { ArrowRight, Code2, Sparkles } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black text-white">
      {/* Subtle animated black gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#0d0d0d] to-black animate-gradient-slow"></div>

      {/* Faint cyan + purple glow accents */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6">
        {/* Top Badge */}

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_25px_rgba(255,255,255,0.05)]">
          Your Name
        </h1>

        {/* Subtitle */}
        <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          <Code2 className="w-6 h-6 text-cyan-400" />
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-10">
          I craft exceptional digital experiences with modern web technologies.
          Specializing in <span className="text-cyan-400">React</span>,{" "}
          <span className="text-purple-400">Next.js</span>, and building
          scalable applications that make a difference.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-lg shadow-cyan-500/20">
            View My Work <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200 hover:bg-white/10 transition">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
