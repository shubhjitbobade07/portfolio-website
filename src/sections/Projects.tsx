import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/portfolioData';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import CaseStudyModal from '../components/CaseStudyModal';
import { sectionHeader, staggerContainer, staggerItem } from '../utils/motionVariants';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-16 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Case Studies
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          Featured Projects
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Production-ready applications demonstrating full-stack architecture, performance optimization, and API orchestration.
        </motion.p>
      </motion.div>

      {/* Projects Grid — alternating L/R entry + depth scale */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => {
          // Alternate entry direction: even cards from left, odd from right
          const xOffset = idx % 2 === 0 ? -24 : 24;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32, x: xOffset, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: (idx % 2) * 0.1,
              }}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-slate-900/20 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Ambient hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono group-hover:text-accent transition-colors">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] tracking-wider font-bold uppercase text-accent font-mono">{project.role}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors">{project.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">{project.description}</p>
                </div>
              </div>

              <div className="relative z-10 border-t border-slate-850 mt-6 pt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-500 font-mono font-bold">
                    +{project.technologies.length - 4} More
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
