import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
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
          spotlightRef.current.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.06), transparent 60%)`;
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
    <div className="min-h-screen bg-[#070913] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
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
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
