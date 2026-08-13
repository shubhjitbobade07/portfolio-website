import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-sm font-bold text-white tracking-tight">{personalInfo.fullName}</span>
          <span className="text-[11px] text-slate-500 font-mono">{personalInfo.title}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Socials & Note */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-white transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            &copy; {currentYear} {personalInfo.fullName}. Designed & built with React & Tailwind.
          </span>
        </div>

      </div>
    </footer>
  );
}
