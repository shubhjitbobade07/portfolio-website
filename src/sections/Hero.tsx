import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Shubhjit_Resume_2026-08_A.pdf';

export default function Hero() {
  const floatingTags = ["React", "Node.js", "MongoDB", "JavaScript", "AI", "APIs"];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden developer-grid">
      {/* Dynamic glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">

          {/* Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
            {personalInfo.title}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Scalable Web Experiences with <span className="text-accent text-glow">Modern Tech</span> & AI.
          </h1>

          {/* Supporting Text */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I am a software engineer with {personalInfo.experienceYears} years of experience specializing in full-stack MERN environments, high-performance database optimization, and orchestrating multi-stage AI media pipelines.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark-900 font-bold hover:bg-accent-light transition-all text-sm shadow-lg shadow-accent/20"
            >
              View My Work
            </a>
            <a
              href={resumePdf}
              download="Shubhjit_Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold transition-all text-sm"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent text-slate-300 hover:text-white font-bold transition-all text-sm hover:underline"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-accent transition-colors" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Photo treating & Visuals */}
        <div className="lg:col-span-5 flex justify-center relative">

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 select-none">
            {/* Custom frame treatments & glowing borders */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent to-purple-600 p-0.5 animate-pulse">
              <div className="w-full h-full bg-dark-900 rounded-3xl overflow-hidden relative">
                {/* Fallback to initials if photo fails to load */}
                <div className="absolute inset-0 bg-slate-950 flex items-center justify-center text-4xl font-extrabold text-accent">
                  SB
                </div>
                <img
                  src={profileImg}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-[center_30%] relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl -z-10"></div>

            {/* Floating Tags */}
            {floatingTags.map((tag, idx) => {
              // Distribute tags around photo using custom absolute positions
              const positions = [
                "top-2 -left-6",
                "top-12 -right-6",
                "bottom-12 -left-10",
                "bottom-6 -right-8",
                "-top-8 left-1/3",
                "-bottom-10 left-1/4"
              ];
              return (
                <span
                  key={tag}
                  className={`absolute ${positions[idx]} px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-[10px] sm:text-xs font-mono font-semibold text-accent shadow-xl backdrop-blur-sm z-20`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

        </div>

      </div>

      <div className="absolute bottom-6 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-mono select-none animate-bounce">
        <span>Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
}
