import { X, Award, Lightbulb, Wrench, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-900/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-950/80 backdrop-blur-md px-6 py-4 border-b border-slate-800/80 flex justify-between items-center z-10">
          <div>
            <span className="text-[10px] tracking-wider uppercase font-bold text-accent">{project.role}</span>
            <h3 className="text-xl font-bold text-white mt-1">{project.name}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-8">
          
          {/* Main Description */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">Overview</h4>
            <p className="text-slate-300 text-base leading-relaxed">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800/50 pt-8">
            {/* Problem */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white mb-2">The Problem</h5>
                <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-900/40 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white mb-2">The Solution</h5>
                <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Contributions & Key Features */}
          <div className="border-t border-slate-800/50 pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-accent" />
              <h5 className="text-sm font-semibold text-white">Key Contributions & Outcomes</h5>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-300 leading-relaxed bg-slate-900/40 border border-slate-800/30 p-3 rounded-lg">
                  <span className="text-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack used */}
          <div className="border-t border-slate-800/50 pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-accent" />
              <h5 className="text-sm font-semibold text-white">Technology Architecture</h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Badge Banner */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 flex flex-col sm:flex-row justify-around gap-4 text-center mt-4">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-accent text-sm font-mono font-bold">⚡ IMPACT {idx + 1}</span>
                <span className="text-white text-base font-semibold mt-1">{highlight}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
