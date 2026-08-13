import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error';
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "Type 'help' to see available commands.", type: "output" }
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines = [...lines, { text: `$ ${input}`, type: 'input' as const }];

    switch (cmd) {
      case 'help':
        newLines.push({ text: "Available commands: whoami, stack, focus, status, clear", type: 'output' });
        break;
      case 'whoami':
        newLines.push({ text: `${personalInfo.fullName} - ${personalInfo.title}. ${personalInfo.summary}`, type: 'output' });
        break;
      case 'stack':
        newLines.push({ text: "React.js • Node.js • Express.js • MongoDB • FastAPI • TypeScript • AWS S3 • Gemini API • Runway API", type: 'output' });
        break;
      case 'focus':
        newLines.push({ text: "Building scalable production platforms and custom GenAI feature workflows.", type: 'output' });
        break;
      case 'status':
        newLines.push({ text: `Current availability: ${personalInfo.availability}`, type: 'output' });
        break;
      case 'clear':
        setLines([]);
        setInput("");
        return;
      default:
        newLines.push({ text: `Command not found: '${cmd}'. Type 'help' for options.`, type: 'error' });
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <div className="w-full bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Title Bar */}
      <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-slate-400 text-[11px]">shubhjit@portfolio:~</span>
        <div className="w-12"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2 bg-slate-950/40">
        {lines.map((line, idx) => (
          <div 
            key={idx} 
            className={
              line.type === 'input' 
                ? 'text-white' 
                : line.type === 'error' 
                ? 'text-red-400' 
                : 'text-accent'
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleCommand} className="flex border-t border-slate-800 bg-slate-950 px-4 py-2">
        <span className="text-white mr-2">$</span>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0 font-mono"
          placeholder="Type command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </form>
    </div>
  );
}
