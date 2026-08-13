import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import resumePdf from '../assets/Shubhjit_Resume_2026-08_A.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Snapshot', href: '#snapshot' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'AI Work', href: '#ai' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-900/80 backdrop-blur-md py-3 border-b border-slate-800/50 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-accent">⚡</span> {personalInfo.fullName}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <span className="h-4 w-px bg-slate-800"></span>
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
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] bg-dark-900 z-40 border-t border-slate-800/80 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
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
        </div>
      )}
    </nav>
  );
}
