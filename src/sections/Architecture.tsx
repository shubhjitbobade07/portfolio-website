import ArchitectureExplorer from '../components/ArchitectureExplorer';

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">Interactive Explorers</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">System Architecture</h2>
        <p className="text-slate-400 text-sm max-w-md">Detailed visual breakdown of production layouts, onboarding engines, and security components.</p>
      </div>

      <ArchitectureExplorer />

    </section>
  );
}
