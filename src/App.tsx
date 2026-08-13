import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './sections/Hero';
import Snapshot from './sections/Snapshot';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Architecture from './sections/Architecture';
import AIWork from './sections/AIWork';
import TerminalSection from './sections/TerminalSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked background parallax (very subtle — just shifts glow origin)
  const { scrollYProgress } = useScroll();
  const bgBlob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgBlob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const bgBlob3Y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // useLayoutEffect runs synchronously before paint — guarantees scroll is at 0
  // before any child scrollIntoView calls can override it.
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsMobile(!mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-accent selection:text-dark-900 overflow-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Custom Cursor for Desktop */}
      {!isMobile && (
        <div
          className="custom-cursor hidden md:block"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

      {/* Parallax background radial blobs — move at different speeds */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <motion.div
          style={{ y: bgBlob1Y }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          style={{ y: bgBlob2Y }}
          className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/3 blur-[100px]"
        />
        <motion.div
          style={{ y: bgBlob3Y }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]"
        />
      </div>

      {/* Main Layout */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <Snapshot />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <AIWork />
        <TerminalSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
