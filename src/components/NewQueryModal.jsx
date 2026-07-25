import React, { useState } from 'react';
import { X, Sparkles, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function NewQueryModal({ isOpen, onClose, onSubmitQuery }) {
  const [queryText, setQueryText] = useState('');
  const [category, setCategory] = useState('biotech');
  const [minN, setMinN] = useState(100);
  const [rctOnly, setRctOnly] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!queryText.trim()) return;
    onSubmitQuery({
      queryText,
      category,
      minN,
      rctOnly
    });
    setQueryText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0f1524] border border-slate-700 rounded-2xl w-full max-w-xl p-6 shadow-2xl space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-heading">
              Launch Adversarial Evidence Audit
            </h3>
            <p className="text-xs text-slate-400">
              Veritas will spawn Proponent and Skeptic micro-agents to stress-test your hypothesis.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
              Target Hypothesis or Question
            </label>
            <textarea
              rows={3}
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              placeholder="e.g. Does GLP-1 receptor agonist therapy reduce neurodegenerative disease progression in early-stage Parkinson's patients?"
              className="w-full p-3 rounded-xl bg-[#141d30] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-body"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                Knowledge Vertical
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#141d30] border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500 font-body"
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                Min Sample Size Filter
              </label>
              <select
                value={minN}
                onChange={(e) => setMinN(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-[#141d30] border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500 font-body"
              >
                <option value={10}>N &gt; 10 (Exploratory)</option>
                <option value={100}>N &gt; 100 (Standard Cohort)</option>
                <option value={1000}>N &gt; 1,000 (Large Clinical/Empirical)</option>
              </select>
            </div>
          </div>

          <label className="flex items-center gap-2 p-3 rounded-xl bg-[#141d30] border border-slate-800 cursor-pointer">
            <input
              type="checkbox"
              checked={rctOnly}
              onChange={(e) => setRctOnly(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-500"
            />
            <span className="text-xs text-slate-300">
              Enforce strict GRADE peer-review filter (Exclude unreviewed preprints & opinion pieces)
            </span>
          </label>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#141d30] hover:bg-slate-800 text-slate-300 text-xs font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              <span>Execute Adversarial Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
