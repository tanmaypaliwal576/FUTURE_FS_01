import React from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured e-commerce platform with payment integration and inventory management.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://source.unsplash.com/600x400/?ecommerce",
  },
  {
    title: "Task Management App",
    desc: "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "Material-UI"],
    image: "https://source.unsplash.com/600x400/?task,work",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard for managing multiple social media accounts with scheduling.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://source.unsplash.com/600x400/?social,media",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application using OpenWeather API.",
    tags: ["React", "OpenWeather", "Chart.js"],
    image: "https://source.unsplash.com/600x400/?weather",
  },
  {
    title: "Portfolio CMS",
    desc: "CMS system for managing portfolio projects and content.",
    tags: ["React", "Express", "MongoDB"],
    image: "https://source.unsplash.com/600x400/?coding,desk",
  },
  {
    title: "Fitness Tracker",
    desc: "Track workouts and progress analytics with modern UI.",
    tags: ["React Native", "GraphQL", "GoogleFit"],
    image: "https://source.unsplash.com/600x400/?fitness,gym",
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
