import { motion } from "framer-motion";
import React from "react";

export default function AboutMe() {
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Pandas",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "DSA",
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png",
    },
  ];

  return (
    <section className="bg-[#0f1117] text-gray-300 px-6 py-16 flex flex-col items-center">
      {/* ✨ About Me Heading (Updated Style) */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-white tracking-wide mb-2">
          ABOUT ME
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"></div>
        <p className="text-gray-400 mt-2 text-sm">
          A Glimpse into Who I am and What Drives Me 🚀
        </p>
      </motion.div>

      {/* 🧑 About Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="relative w-72 h-80 rounded-md overflow-hidden border-2 border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
          <img
            src="/Resume/Pfp.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-lg text-purple-400 font-semibold mb-4">
            B.Tech Student | Aspiring Full Stack Developer | Lifelong Learner
          </h3>
          <p className="text-gray-400 mb-3">
            I’m a B.Tech student at NMIMS, Indore, with a deep interest in web
            development and modern technologies. My journey in tech began with
            curiosity — and quickly evolved into a passion for creating
            interactive, meaningful digital experiences using tools like React,
            Node.js, and Tailwind CSS.
          </p>
          <p className="text-gray-400 mb-5">
            I love exploring how design and logic come together to build smooth,
            efficient, and user-friendly applications. Currently, I’m expanding
            my skills by learning new frameworks, improving my problem-solving
            abilities, and understanding real-world software architecture.
          </p>

          {/* Personal Info */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-1 mb-6 text-sm">
            <p>
              <span className="text-white font-semibold">Name:</span> Tanmay
              Paliwal
            </p>
            <p>
              <span className="text-white font-semibold">Age:</span> 19 Years
            </p>
            <p>
              <span className="text-white font-semibold">Email:</span>{" "}
              tanmaypaliwal12345@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Address:</span> Indore,
              India
            </p>
          </div>

          {/* Download CV Button */}
          <a
            href="/Resume/TanmayPaliwalResume.pdf"
            download="Tanmay_Paliwal_Resume.pdf"
            className="inline-block border border-purple-500 px-6 py-2 rounded-full text-white hover:bg-purple-600/20 transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ✨ Skills Heading */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-white tracking-wide mb-2">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"></div>
        <p className="text-gray-400 mt-2 text-sm">
          Technologies & Tools I love working with 💻
        </p>
      </motion.div>

      {/* 🌀 Scrolling Skills Logos */}
      <div className="mt-12 overflow-hidden w-full">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-2 transition-all duration-300"
              />
              <p className="text-xs text-gray-400">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
