import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
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

  useEffect(() => {
    // Check if device supports hover interactions (desktop)
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
    <div className="relative min-h-screen selection:bg-accent selection:text-dark-900 overflow-hidden">
      {/* Custom Cursor for Desktop */}
      {!isMobile && (
        <div 
          className="custom-cursor hidden md:block" 
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

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
