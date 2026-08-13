import AIPipeline from '../components/AIPipeline';

export default function AIWork() {
  return (
    <section id="ai" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-3">
        <span className="text-xs uppercase tracking-wider text-accent font-semibold font-mono">Modern Capabilities</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">AI & GenAI Integration</h2>
        <p className="text-slate-400 text-sm max-w-md">Integrating leading Large Language Models and creative media generation pipelines into dynamic workspace apps.</p>
      </div>

      <AIPipeline />

    </section>
  );
}
