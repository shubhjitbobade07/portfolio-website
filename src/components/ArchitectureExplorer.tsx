import { useState } from 'react';
import { ArrowRight, Database, Code2, ShieldAlert, Cpu, Settings } from 'lucide-react';

interface Node {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  tech: string;
}

export default function ArchitectureExplorer() {
  const [activeNode, setActiveNode] = useState<Node | null>(null);

  const nodes: Node[] = [
    {
      id: 'frontend',
      name: 'React Frontend',
      icon: <Code2 className="w-5 h-5 text-accent" />,
      description: 'Dynamic schema-driven onboarding layouts built with React and Redux. Generates forms dynamically based on JSON config schema files.',
      tech: 'React, Redux Toolkit, Tailwind'
    },
    {
      id: 'gateway',
      name: 'REST API & Auth',
      icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
      description: 'API routing orchestrator implementing strict JWT validation and granular Role-Based Access Controls (RBAC). Filters all inbound requests.',
      tech: 'Express.js, JWT, Node.js'
    },
    {
      id: 'processor',
      name: 'Bulk Data Processor',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      description: 'Handles 10,000+ records per batch. Parses Excel templates dynamically, executes schema validation rules, and yields partial-success metrics.',
      tech: 'Node.js, ExcelJS, JSON Schema'
    },
    {
      id: 'database',
      name: 'MongoDB Storage',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      description: 'Configured with optimized compound indexing for global search filters and user metadata cataloging. Latency optimized by 35%.',
      tech: 'MongoDB, Mongoose'
    },
    {
      id: 'cloud',
      name: 'AWS S3 & Workers',
      icon: <Settings className="w-5 h-5 text-purple-400" />,
      description: 'Handles background metadata synchronization and automates cron jobs for S3 file ingestion and scheduled report generation.',
      tech: 'AWS S3, Node Cron'
    }
  ];

  return (
    <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h4 className="text-lg font-semibold text-white">Enterprise Data Governance Platform Flow</h4>
        <p className="text-sm text-slate-400 mt-2">Hover or tap on any architecture node to explore its tech details and role in the platform.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Nodes flow layout */}
        <div className="lg:col-span-2 flex flex-col gap-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            
            {/* Frontend */}
            <div 
              onMouseEnter={() => setActiveNode(nodes[0])}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 w-44 cursor-pointer transition-all duration-300 ${
                activeNode?.id === 'frontend' ? 'bg-accent/10 border-accent scale-105 shadow-lg shadow-accent/5' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {nodes[0].icon}
              <span className="text-sm font-semibold text-white">{nodes[0].name}</span>
            </div>

            <ArrowRight className="hidden sm:block w-5 h-5 text-slate-600 rotate-90 sm:rotate-0" />

            {/* Gateway */}
            <div 
              onMouseEnter={() => setActiveNode(nodes[1])}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 w-44 cursor-pointer transition-all duration-300 ${
                activeNode?.id === 'gateway' ? 'bg-amber-400/10 border-amber-400 scale-105 shadow-lg shadow-amber-400/5' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {nodes[1].icon}
              <span className="text-sm font-semibold text-white">{nodes[1].name}</span>
            </div>

          </div>

          <div className="flex justify-center my-1">
            <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            
            {/* Processor */}
            <div 
              onMouseEnter={() => setActiveNode(nodes[2])}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 w-44 cursor-pointer transition-all duration-300 ${
                activeNode?.id === 'processor' ? 'bg-emerald-400/10 border-emerald-400 scale-105 shadow-lg shadow-emerald-400/5' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {nodes[2].icon}
              <span className="text-sm font-semibold text-white">{nodes[2].name}</span>
            </div>

            <ArrowRight className="hidden sm:block w-5 h-5 text-slate-600 rotate-90 sm:rotate-0" />

            {/* Database */}
            <div 
              onMouseEnter={() => setActiveNode(nodes[3])}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 w-44 cursor-pointer transition-all duration-300 ${
                activeNode?.id === 'database' ? 'bg-indigo-400/10 border-indigo-400 scale-105 shadow-lg shadow-indigo-400/5' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {nodes[3].icon}
              <span className="text-sm font-semibold text-white">{nodes[3].name}</span>
            </div>

          </div>

          <div className="flex justify-center my-1">
            <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
          </div>

          {/* Cloud Workers */}
          <div className="flex justify-center">
            <div 
              onMouseEnter={() => setActiveNode(nodes[4])}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 w-48 cursor-pointer transition-all duration-300 ${
                activeNode?.id === 'cloud' ? 'bg-purple-400/10 border-purple-400 scale-105 shadow-lg shadow-purple-400/5' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {nodes[4].icon}
              <span className="text-sm font-semibold text-white">{nodes[4].name}</span>
            </div>
          </div>

        </div>

        {/* Explain Pane */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 min-h-60 flex flex-col justify-center">
          {activeNode ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                {activeNode.icon}
                <h5 className="text-base font-bold text-white">{activeNode.name}</h5>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{activeNode.description}</p>
              <div className="border-t border-slate-800/80 pt-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Technologies Used</span>
                <span className="text-xs text-accent font-mono">{activeNode.tech}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-500 py-10">
              <Code2 className="w-8 h-8 mx-auto mb-2 text-slate-700" />
              <p className="text-sm">Hover over any node in the architecture diagram to inspect pipeline mechanics and technologies.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
