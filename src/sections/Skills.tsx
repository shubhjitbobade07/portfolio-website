import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolioData';
import {
  sectionHeader,
  staggerContainer,
  staggerItem,
  tightStaggerContainer,
  badgeItem,
} from '../utils/motionVariants';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-16 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Expertise Matrix
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          Skills &amp; Technologies
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Categorized technical skills. Hover or tap on any technology bubble to view project context details instantly.
        </motion.p>
      </motion.div>

      {/* Skill Groups — each group enters progressively */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: groupIdx * 0.08 }}
            className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-6"
          >
            {/* Category heading animates first */}
            <motion.h3
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: groupIdx * 0.08 + 0.05 }}
              className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2 font-mono"
            >
              {group.category}
            </motion.h3>

            {/* Badges cascade within the group */}
            <motion.div
              variants={tightStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5%' }}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map((skill) => (
                <motion.div key={skill.name} variants={badgeItem} className="relative group/item">

                  {/* Skill Badge */}
                  <button className="px-3.5 py-1.5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-accent hover:bg-accent hover:text-dark-900 text-xs sm:text-sm font-mono font-medium transition-all duration-300 group-hover/item:scale-105">
                    {skill.name}
                  </button>

                  {/* Floating Context Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 p-3.5 rounded-xl bg-slate-950 border border-slate-800 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto transition-all duration-200 z-30">
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Used In:</h4>
                    {skill.projectsUsed.length > 0 ? (
                      <ul className="flex flex-col gap-1.5 mt-1.5">
                        {skill.projectsUsed.map((project, idx) => (
                          <li key={idx} className="text-[11px] text-accent flex items-start gap-1.5 leading-normal">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
                            <span className="text-slate-355 text-left">{project}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-slate-500 italic mt-1.5 leading-normal text-left">Internal workflows &amp; practices.</p>
                    )}
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
