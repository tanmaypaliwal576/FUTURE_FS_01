import { ArrowRight, Code2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
      {/* Background layers (z-0 -> behind content) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#0d0d0d] to-black animate-gradient-slow"></div>

      <div className="absolute -top-40 -left-40 z-0 w-[360px] h-[360px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 z-0 w-[360px] h-[360px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Foreground content (z-20 -> above background) */}
      <div className="relative z-20 px-6 pb-6">
        {" "}
        {/* added pb-6 for breathing room */}
        {/* Title: increased line-height and subtle glow so all letters are visible */}
        <h1 className="text-6xl leading-normal pt-4 md:text-7xl md:leading-normal font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]">
          Tanmay Paliwal
        </h1>
        {/* Subtitle */}
        <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          <Code2 className="w-6 h-6 text-cyan-400" />
          Full Stack Web Developer
        </h2>
        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-10">
          I craft exceptional digital experiences with modern web technologies.
          Specializing in <span className="text-cyan-400">React</span>,{" "}
          <span className="text-purple-400">Node.js</span>, and building
          scalable applications that make a difference.
        </p>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            onClick={() => navigate("/project")}
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </button>
          <button
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200 hover:bg-white/10 transition"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
