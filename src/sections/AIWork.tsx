import { motion } from 'framer-motion';
import AIPipeline from '../components/AIPipeline';
import { sectionHeader, staggerContainer, staggerItem, fadeUp } from '../utils/motionVariants';

export default function AIWork() {
  return (
    <section id="ai" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">

      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-16 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Modern Capabilities
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          AI &amp; GenAI Integration
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Integrating leading Large Language Models and creative media generation pipelines into dynamic workspace apps.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8%' }}
      >
        <AIPipeline />
      </motion.div>

    </section>
  );
}
