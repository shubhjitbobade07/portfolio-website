import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import resumePdf from '../assets/Shubhjit_Resume_2026-08_A.pdf';

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Snapshot', href: '#snapshot', id: 'snapshot' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Architecture', href: '#architecture', id: 'architecture' },
  { name: 'AI Work', href: '#ai', id: 'ai' },
  { name: 'Terminal', href: '#terminal', id: 'terminal' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-based backdrop blur activation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Move the gliding underline indicator under the active nav link
  useEffect(() => {
    const activeEl = linkRefs.current[activeSection];
    const indicator = indicatorRef.current;
    if (!activeEl || !indicator) return;

    const { offsetLeft, offsetWidth } = activeEl;
    indicator.style.left = `${offsetLeft}px`;
    indicator.style.width = `${offsetWidth}px`;
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-md py-3 border-b border-slate-800/50 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-accent">⚡</span> {personalInfo.fullName}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 relative">
          {/* Gliding active indicator */}
          <span
            ref={indicatorRef}
            className="absolute bottom-[-6px] h-[2px] bg-accent rounded-full transition-all duration-300 ease-out pointer-events-none"
            style={{ left: 0, width: 0, opacity: activeSection ? 1 : 0 }}
            aria-hidden="true"
          />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => { linkRefs.current[link.id] = el; }}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-accent'
                  : 'text-slate-400 hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}

          <span className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={resumePdf}
              download="Shubhjit_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-all text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — animated open/close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden fixed inset-0 top-[57px] bg-dark-900 z-40 border-t border-slate-800/80 p-6 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25, ease: 'easeOut' }}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id ? 'text-accent' : 'text-slate-300 hover:text-accent'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-6 flex flex-col gap-4">
              <div className="flex justify-around items-center">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
              <a
                href={resumePdf}
                download="Shubhjit_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-dark-900 font-semibold hover:bg-accent-light transition-all text-center"
              >
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
