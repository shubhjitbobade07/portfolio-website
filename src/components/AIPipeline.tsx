import { ArrowRight, Image, Sparkles, Database, FileVideo, Cpu, Layers } from 'lucide-react';

export default function AIPipeline() {
  const steps = [
    {
      title: "Input Configuration",
      desc: "User prompts, mock configs, dynamic templates",
      icon: <Layers className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Pre-Processing",
      desc: "Token parsing, template resolution, canvas states",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "AI Model Pipeline",
      desc: "Orchestrated Runway AI, Gemini, and Kling model APIs",
      icon: <Sparkles className="w-5 h-5 text-accent animate-pulse" />
    },
    {
      title: "Backend Storage",
      desc: "Secure asset retention on AWS S3 & MongoDB cataloging",
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Optimized Output",
      desc: "Optimized ad assets, dynamic layouts, static generation",
      icon: <Image className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h4 className="text-lg font-semibold text-white">AI-Powered Content Generation Pipeline</h4>
        <p className="text-sm text-slate-400 mt-2">Showing multi-stage asset generation workflow and API pipeline integration built for ad creation.</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 flex flex-col lg:flex-row items-center gap-4 w-full">
            <div className="flex-1 p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 mb-3">
                {step.icon}
              </div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Stage 0{idx + 1}</h5>
              <h6 className="text-sm font-semibold text-white mb-2">{step.title}</h6>
              <p className="text-xs text-slate-400 leading-normal">{step.desc}</p>
            </div>
            
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center text-slate-700">
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
