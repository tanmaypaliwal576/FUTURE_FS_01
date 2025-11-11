import React from "react";
const projects = [
  {
    title: "Huddle (Chat App)",
    description:
      "Real-Time chat app using MERN stack with Socket.IO, JWT authentication, and Arcjet security middleware.",
    link: "https://github.com/tanmaypaliwal576",
  },
  {
    title: "Selective Repeat ARQ Simulator",
    description:
      "Simulation of the Selective Repeat ARQ protocol in computer networks using HTML, CSS, and JS.",
    link: "https://github.com/tanmaypaliwal576",
  },
  {
    title: "YouTube Clone",
    description:
      "Frontend clone of YouTube built with HTML, CSS, and JS featuring video grid layout and interactive UI.",
    link: "https://github.com/tanmaypaliwal576",
  },
  {
    title: "FestX — College Fest Management",
    description:
      "Hackathon project for event management with real-time updates and interactive design elements.",
    link: "https://github.com/tanmaypaliwal576",
  },
  {
    title: "Gemini Clone",
    description:
      "UI clone of Google Gemini built using HTML, CSS, and JS focusing on modern responsive design.",
    link: "https://github.com/tanmaypaliwal576",
  },
];

export default function Projects() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              className="text-blue-500 font-medium hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
