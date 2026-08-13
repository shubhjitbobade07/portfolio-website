import { Calendar, Building, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import {
  sectionHeader,
  staggerContainer,
  staggerItem,
  timelineCard,
  timelineDot,
} from '../utils/motionVariants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-16 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Professional Timeline
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          Experience &amp; Career History
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Detailed record of production roles, focus areas, and enterprise application delivery.
        </motion.p>
      </motion.div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto ml-4 sm:ml-6 md:mx-auto">

        {/* The timeline rail — grows via scaleY on enter */}
        <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-slate-800 origin-top">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-b from-accent via-accent/60 to-accent/20 origin-top"
          />
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 pl-6 sm:pl-8 relative">

            {/* Timeline dot — pops in with spring */}
            <motion.span
              custom={idx}
              variants={timelineDot}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-dark-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />

            {/* Timeline Card — staggered reveal per card */}
            <motion.div
              custom={idx}
              variants={timelineCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="flex flex-col gap-6 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >

              {/* Card Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800/50 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Building className="w-4 h-4 text-accent" /> {exp.company}
                  </h3>
                  <h4 className="text-sm font-semibold text-accent mt-1">{exp.role}</h4>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

              {/* Sub-projects — stagger within card */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5%' }}
                className="flex flex-col gap-8"
              >
                {exp.projects.map((proj, pIdx) => (
                  <motion.div key={pIdx} variants={staggerItem} className="flex flex-col gap-3">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" /> {proj.name}
                    </h5>
                    <ul className="flex flex-col gap-2.5">
                      {proj.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                          <span className="text-accent shrink-0 mt-1">▹</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Badges */}
              <div className="border-t border-slate-800/50 pt-5">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-3 font-mono">Key Tools &amp; Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}
