import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';
import { sectionHeader, staggerContainer, staggerItem } from '../utils/motionVariants';

export default function TerminalSection() {
  return (
    <section id="terminal" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">

      {/* Section Header — animated */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="flex flex-col items-center text-center mb-12 gap-3"
      >
        <motion.span variants={sectionHeader} className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">
          Interactive Shell
        </motion.span>
        <motion.h2 variants={sectionHeader} className="text-3xl sm:text-4xl font-bold text-white">
          Developer Terminal
        </motion.h2>
        <motion.p variants={staggerItem} className="text-slate-400 text-sm max-w-md">
          Interact with my professional profile directly through CLI commands.
        </motion.p>
      </motion.div>

      {/* Terminal is NOT wrapped in a motion.div — it has internal scrollIntoView
          which conflicts with outer y-transform animations and causes page jumping. */}
      <Terminal />

    </section>
  );
}
