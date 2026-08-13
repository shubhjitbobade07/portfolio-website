import { motion } from 'framer-motion';
import ArchitectureExplorer from '../components/ArchitectureExplorer';
import { sectionHeader, staggerContainer, staggerItem, fadeUp } from '../utils/motionVariants';

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-16 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Interactive Explorers
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          System Architecture
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Detailed visual breakdown of production layouts, onboarding engines, and security components.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8%' }}
      >
        <ArchitectureExplorer />
      </motion.div>

    </section>
  );
}
