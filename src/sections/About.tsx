import { Code2, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '../utils/motionVariants';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Story Pane — slides in from left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12%' }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Engineering scalable platforms with precision and intelligence.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalInfo.aboutStory}
          </p>

          {/* Feature cards — stagger within the left pane */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-12%' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4"
          >
            <motion.div variants={staggerItem} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Focus &amp; Objectives</h4>
                <p className="text-xs text-slate-400 mt-1">Designing modular microservices, REST APIs, and automating AI media generators.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Design &amp; Usability</h4>
                <p className="text-xs text-slate-400 mt-1">Creating flexible, schema-driven dashboards and clean, interactive UI controls.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quote Card — slides in from right */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12%' }}
          className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          <span className="text-5xl text-slate-700 font-serif absolute top-4 left-4 select-none">"</span>

          <div className="relative z-10 flex flex-col gap-4 mt-6">
            <p className="text-slate-300 text-sm italic leading-relaxed">
              "A junior developer writes code to build features. A senior engineer designs systems to solve
              problems. My goal is to build automated, metadata-driven architectures that scale without overhead."
            </p>
            <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-accent text-xs border border-slate-700">
                SB
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">{personalInfo.fullName}</h5>
                <span className="text-[10px] text-slate-500 font-mono">{personalInfo.title}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
