import React from "react";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.IO",
  "JWT",
  "Python",
  "C++",
  "Git",
  "GitHub",
  "DSA",
  "OOP",
  "Pandas",
  "NumPy",
  "Matplotlib",
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
