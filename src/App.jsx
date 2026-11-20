import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 255, 255, 0.035), transparent 55%)`;
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#08090C] text-zinc-100 relative selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Zero-re-render Hardware-accelerated Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 hidden md:block will-change-transform"
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <ProjectsSection />
        <InteractiveTerminal />
        <SkillsSection />
        <ExperienceSection />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
