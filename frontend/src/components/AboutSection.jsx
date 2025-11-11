import { motion } from "framer-motion";
import React from "react";
export default function AboutMe() {
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section className=" bg-[#0f1117] text-gray-300 px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-72 h-80 rounded-md overflow-hidden border-2 border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
          <img
            src="https://i.ibb.co/YQBbZ4d/profile-sample.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* About Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white border-b-2 border-purple-500 inline-block mb-3">
            ABOUT ME
          </h2>
          <h3 className="text-lg text-purple-400 font-semibold mb-4">
            Professional Web Designer & Developer Having 5 Years Of Experience
          </h3>
          <p className="text-gray-400 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-400 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Personal Info */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-1 mb-6 text-sm">
            <p>
              <span className="text-white font-semibold">Name:</span> Etimad
              Khan
            </p>
            <p>
              <span className="text-white font-semibold">Age:</span> 24 Years
            </p>
            <p>
              <span className="text-white font-semibold">Email:</span>{" "}
              xyz@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Address:</span> A Road,
              B Street
            </p>
          </div>

          {/* Download CV Button */}
          <button className="border border-purple-500 px-6 py-2 rounded-full text-white hover:bg-purple-600/20 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Logo Loop */}
      <div className="mt-16 overflow-hidden w-full">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex flex-col items-center min-w-[100px]">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-2 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-xs text-gray-400">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
