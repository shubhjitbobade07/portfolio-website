import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Build Something Meaningful</h2>
        <p className="text-slate-400 text-sm max-w-md font-sans">Reach out directly through any of the channels below. I look forward to connecting.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        
        {/* Email */}
        <a 
          href={`mailto:${personalInfo.email}`}
          className="group p-6 rounded-2xl bg-slate-900/20 border border-slate-800/80 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-450 group-hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Email Direct</span>
              <p className="text-sm font-semibold text-white mt-1 break-all">{personalInfo.email}</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-1 text-[11px] text-slate-500 font-mono group-hover:text-accent transition-colors mt-6">
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>

        {/* Phone */}
        <a 
          href={`tel:${personalInfo.phone}`}
          className="group p-6 rounded-2xl bg-slate-900/20 border border-slate-800/80 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-450 group-hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Phone Number</span>
              <p className="text-sm font-semibold text-white mt-1">{personalInfo.phone}</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-1 text-[11px] text-slate-500 font-mono group-hover:text-accent transition-colors mt-6">
            <span>Call Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>

        {/* LinkedIn */}
        <a 
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group p-6 rounded-2xl bg-slate-900/20 border border-slate-800/80 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-450 group-hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">LinkedIn Connection</span>
              <p className="text-sm font-semibold text-white mt-1">/in/shubhjit-bobade</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-1 text-[11px] text-slate-500 font-mono group-hover:text-accent transition-colors mt-6">
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>

        {/* GitHub */}
        <a 
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="group p-6 rounded-2xl bg-slate-900/20 border border-slate-800/80 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-450 group-hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">GitHub Repositories</span>
              <p className="text-sm font-semibold text-white mt-1">/shubhjit-bobade</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-1 text-[11px] text-slate-500 font-mono group-hover:text-accent transition-colors mt-6">
            <span>Explore Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>

      </div>

      {/* Location Bar */}
      <div className="max-w-5xl mx-auto mt-8 p-4 rounded-xl bg-slate-900/10 border border-slate-800/50 flex items-center justify-center gap-2 text-xs text-slate-450">
        <MapPin className="w-4 h-4 text-accent" />
        <span>Based in <strong className="text-white">{personalInfo.location}</strong>. Currently {personalInfo.availability.toLowerCase()}.</span>
      </div>

    </section>
  );
}
