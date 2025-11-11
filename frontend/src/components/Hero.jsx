import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-2">Tanmay Paliwal</h1>
      <p className="text-lg mb-4">
        Aspiring Software Engineer | Full Stack Developer
      </p>
      <p className="text-sm">
        B.Tech Computer Engineering, NMIMS Indore (2024–2028)
      </p>

      <div className="mt-5 space-x-4">
        <a
          href="mailto:tanmaypaliwal2006@outlook.com"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
        >
          Email Me
        </a>
        <a
          href="https://github.com/tanmaypaliwal576"
          target="_blank"
          className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 font-medium"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
