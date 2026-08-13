import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">Expertise Matrix</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Technologies</h2>
        <p className="text-slate-400 text-sm max-w-md">Categorized technical skills. Hover or tap on any technology bubble to view project context details instantly.</p>
      </div>

      {/* Skills Groups layout - Centered, spanning full width */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2 font-mono">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div key={skill.name} className="relative group/item">
                  
                  {/* Skill Badge */}
                  <button 
                    className="px-3.5 py-1.5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-accent hover:bg-accent hover:text-dark-900 text-xs sm:text-sm font-mono font-medium transition-all duration-300 group-hover/item:scale-105"
                  >
                    {skill.name}
                  </button>

                  {/* Floating Context Box (Tooltip) */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 p-3.5 rounded-xl bg-slate-950 border border-slate-800 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto transition-all duration-200 z-30">
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Used In:</h4>
                    {skill.projectsUsed.length > 0 ? (
                      <ul className="flex flex-col gap-1.5 mt-1.5">
                        {skill.projectsUsed.map((project, idx) => (
                          <li key={idx} className="text-[11px] text-accent flex items-start gap-1.5 leading-normal">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5"></span>
                            <span className="text-slate-355 text-left">{project}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-slate-500 italic mt-1.5 leading-normal text-left">Internal workflows & practices.</p>
                    )}
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
