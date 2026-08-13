import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Simulate mock mail submission API
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-slate-500 font-bold">Your Name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            placeholder="e.g. Jane Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wider text-slate-500 font-bold">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            placeholder="e.g. jane@company.com"
            required
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs uppercase tracking-wider text-slate-500 font-bold">Subject</label>
          <input 
            type="text" 
            id="subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            placeholder="e.g. Project Collaboration / Opportunity"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs uppercase tracking-wider text-slate-500 font-bold">Message</label>
          <textarea 
            id="message" 
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all font-sans resize-none"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="flex items-center gap-2 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-lg">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-xs bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-dark-900 font-bold hover:bg-accent-light transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Message
            </>
          )}
        </button>

      </form>
    </div>
  );
}
