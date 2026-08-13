import Terminal from '../components/Terminal';

export default function TerminalSection() {
  return (
    <section id="terminal" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 gap-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">Interactive Shell</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Developer Terminal</h2>
        <p className="text-slate-400 text-sm max-w-md">Interact with my professional profile directly through CLI commands.</p>
      </div>

      <Terminal />

    </section>
  );
}
