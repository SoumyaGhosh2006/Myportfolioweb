import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(prev => prev !== isScrolled ? isScrolled : prev);

          const sections = ['hero', 'about', 'projects', 'terminal', 'skills', 'experience', 'contact'];
          const scrollPosition = window.scrollY + 160;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && scrollPosition >= el.offsetTop) {
              setActiveSection(prev => prev !== sections[i] ? sections[i] : prev);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'terminal', label: 'CLI Sandbox' },
    { id: 'skills', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-3 bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-zinc-100 group-hover:border-white/30 transition-colors">
              SG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm sm:text-base text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                  Soumya Ghosh
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  Active
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-mono hidden sm:block">Backend & Systems</p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 obsidian-pill px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Direct Connect */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg obsidian-pill flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-lg obsidian-pill flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl obsidian-pill text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl obsidian-card border border-white/10 shadow-2xl animate-in fade-in duration-150">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg obsidian-pill text-zinc-400"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg obsidian-pill text-zinc-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-zinc-950"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
