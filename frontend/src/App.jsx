import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container bg-[#0a0a0a] text-white min-h-screen">
        <Navbar />
        <main>
          <Routes>
            {/* Default Home */}
            <Route path="/" element={<HeroSection />} />

            {/* Other pages */}
            <Route path="/about" element={<AboutSection />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<ContactForm />} />

            {/* Redirect invalid URLs to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
