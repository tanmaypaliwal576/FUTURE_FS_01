import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400 py-10 flex flex-col items-center justify-center">
      {/* Social Icons */}
      <div className="flex gap-6 mb-6">
        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-800 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 group-hover:blur-md group-hover:bg-cyan-500/20 transition-all"></div>
          <Github className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-800 hover:border-purple-400 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/10 group-hover:blur-md group-hover:bg-purple-500/20 transition-all"></div>
          <Linkedin className="w-5 h-5 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* Email */}
        <a
          href="mailto:youremail@example.com"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-800 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 group-hover:blur-md group-hover:bg-cyan-500/20 transition-all"></div>
          <Mail className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 mb-2">© 2025 All rights reserved.</p>

      {/* Built With */}
      <p className="text-sm text-gray-500">
        Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          Tailwind CSS
        </a>{" "}
        &{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Framer Motion
        </a>
      </p>
    </footer>
  );
}
