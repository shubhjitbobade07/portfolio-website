import { useScroll, useSpring, motion } from 'framer-motion';

/**
 * A hairline-thin accent-colored progress bar fixed at the absolute top of the
 * viewport. Represents how far the user has scrolled through the document.
 * Uses scaleX so the bar grows from left to right — GPU-friendly.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[9999] shadow-[0_0_8px_rgba(6,182,212,0.6)]"
      aria-hidden="true"
    />
  );
}
