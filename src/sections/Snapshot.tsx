import { FileText, MapPin, Briefcase, Code, Clock, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import resumePdf from '../assets/Shubhjit_Resume_2026-08_A.pdf';

export default function Snapshot() {
  return (
    <section id="snapshot" className="py-12 px-6 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-accent">■</span> Recruiter Snapshot
            </h2>
            <p className="text-xs text-slate-400 mt-1">Get an overview of my core profile in 10 seconds.</p>
          </div>
          <a 
            href={resumePdf} 
            download="Shubhjit_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-dark-900 font-bold hover:bg-accent-light transition-all text-xs"
          >
            <FileText className="w-4 h-4" /> Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Role */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Role</span>
              <p className="text-sm font-semibold text-white mt-0.5">{personalInfo.title}</p>
            </div>
          </div>

          {/* Card 2: Experience */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Experience</span>
              <p className="text-sm font-semibold text-white mt-0.5">{personalInfo.experienceYears} Years (MERN + GenAI)</p>
            </div>
          </div>

          {/* Card 3: Stack */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3 lg:col-span-2">
            <Code className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Primary Stack</span>
              <p className="text-sm font-semibold text-white mt-0.5">React.js, Node.js, Express.js, MongoDB, FastAPI, Python</p>
            </div>
          </div>

          {/* Card 4: Location & Availability */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Location & Availability</span>
              <p className="text-xs font-semibold text-white mt-0.5">{personalInfo.location}</p>
              <span className="inline-block text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-medium mt-1">
                {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
