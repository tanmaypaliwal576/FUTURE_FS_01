import React from "react";
import "../styles/Project.css";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Huddle",
    desc: "It is a dynamic real-time chat application built with the MERN stack. It allows users to engage in live, instant conversations through a clean and responsive interface",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/Resume/huddle.png",
    link: "https://huddle-tgykr.sevalla.app/",
  },
  {
    title: "Selective ARQ Simulator",
    desc: "This project is an interactive simulator for the Selective Repeat ARQ (Automatic Repeat Request) protocol, a fundamental algorithm in computer networking ",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Resume/SRARQ.png",
    link: "https://selectiverepeatarq.vercel.app/",
  },
  {
    title: "Youtube Clone",
    desc: "This project is a high-fidelity, responsive front-end clone of the YouTube homepage, built from scratch with HTML, CSS, and vanilla JavaScript. ",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Resume/YT.png",
    link: "https://youtube-nine-woad.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio website is designed to highlight my expertise, skills, and the projects I have worked on. It serves as a central hub for clients.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    image: "/Resume/Portfolio.png",
    link: "https://portfolio-65fr.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.image} alt={p.title} />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-4   text-cyan-400 font-medium hover:underline"
              >
                Live Link                
                <ExternalLink className="w-4 h-4" />             
              </a>
              <br />

              <div className="tags">
                {p.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
