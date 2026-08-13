import { useRef } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Shubhjit_Resume_2026-08_A.pdf';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const floatingTags = ['React', 'Node.js', 'MongoDB', 'JavaScript', 'AI', 'APIs'];

  // Scroll progress anchored to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Text block: moves up and fades as user scrolls past
  const textY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  // Image: slight scale-down + upward drift
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 0.9]);

  // Background glow: moves slower than content
  const glowY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -20]);

  // Floating tags: each tag has a slightly different parallax
  const tagParallax = [
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -18]),
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -10]),
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -22]),
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -14]),
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -8]),
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -16]),
  ];

  // Scroll indicator: fades out immediately on scroll
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Smooth spring for image scale
  const smoothScale = useSpring(imageScale, { stiffness: 80, damping: 20 });

  const positions = [
    'top-2 -left-6',
    'top-12 -right-6',
    'bottom-12 -left-10',
    'bottom-6 -right-8',
    '-top-8 left-1/3',
    '-bottom-10 left-1/4',
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden developer-grid"
    >
      {/* Dynamic glow — parallax slower than content */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Text Area — moves up + fades as user scrolls */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="lg:col-span-7 flex flex-col items-start text-left gap-5"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            {personalInfo.title}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Building Scalable Web Experiences with{' '}
            <span className="text-accent text-glow">Modern Tech</span> &amp; AI.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            I am a software engineer with {personalInfo.experienceYears} years of experience specializing
            in full-stack MERN environments, high-performance database optimization, and orchestrating
            multi-stage AI media pipelines.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark-900 font-bold hover:bg-accent-light transition-all text-sm shadow-lg shadow-accent/20"
            >
              View My Work
            </a>
            <a
              href={resumePdf}
              download="Shubhjit_Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold transition-all text-sm"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent text-slate-300 hover:text-white font-bold transition-all text-sm hover:underline"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-5 mt-6"
          >
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-accent transition-colors" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Photo — scales down + drifts up independently */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            style={{ y: imageY, scale: smoothScale }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 select-none"
          >
            {/* Custom frame & glowing borders */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent to-purple-600 p-0.5 animate-pulse">
              <div className="w-full h-full bg-dark-900 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950 flex items-center justify-center text-4xl font-extrabold text-accent">
                  SB
                </div>
                <img
                  src={profileImg}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-[center_30%] relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl -z-10" />

            {/* Floating Tags — each with its own parallax offset */}
            {floatingTags.map((tag, idx) => (
              <motion.span
                key={tag}
                style={{ y: tagParallax[idx] }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 + idx * 0.07 }}
                className={`absolute ${positions[idx]} px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-[10px] sm:text-xs font-mono font-semibold text-accent shadow-xl backdrop-blur-sm z-20`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator — fades out on first scroll */}
      <motion.div
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-mono select-none animate-bounce"
        aria-hidden="true"
      >
        <span>Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.div>
    </section>
  );
}
