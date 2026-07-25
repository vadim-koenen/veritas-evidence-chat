import React from 'react';
import { 
  X, 
  Sliders, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Database,
  BarChart3,
  BookOpen,
  Filter,
  RefreshCw,
  Info
} from 'lucide-react';

export default function EvidencePanel({ 
  isOpen, 
  onClose, 
  selectedSource, 
  activeChat,
  sensitivity,
  onSensitivityChange
}) {
  if (!isOpen) return null;

  return (
    <aside className="w-96 h-screen bg-[#0a0e19] border-l border-[#1e293b] flex flex-col flex-shrink-0 z-20 shadow-2xl animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 border-b border-[#1e293b] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cyan-400" />
          <h3 className="font-heading font-bold text-sm text-white">
            Evidence Graph & Sensitivity
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">

        {/* SECTION 1: SENSITIVITY SIMULATOR */}
        <div className="p-4 rounded-xl bg-[#111728] border border-indigo-500/20 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-300 font-mono flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-400" /> Live Sensitivity Controls
            </span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-1.5 py-0.5 rounded">
              Real-time RAG Shift
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Adjusting parameters dynamically re-weights literature evidence and recalculates the Truth Certainty Index.
          </p>

          {/* Slider 1: Min Sample Size */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Min Study Sample Size (N)</span>
              <span className="text-cyan-400 font-bold">{sensitivity.minSampleSize} patients</span>
            </div>
            <input
              type="range"
              min="10"
              max="5000"
              step="50"
              value={sensitivity.minSampleSize}
              onChange={(e) => onSensitivityChange({ ...sensitivity, minSampleSize: parseInt(e.target.value) })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Slider 2: Recency */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Max Publication Age</span>
              <span className="text-cyan-400 font-bold">Past {sensitivity.recencyYears} years</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={sensitivity.recencyYears}
              onChange={(e) => onSensitivityChange({ ...sensitivity, recencyYears: parseInt(e.target.value) })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Toggle 1: Require RCT */}
          <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#162035] border border-slate-800 cursor-pointer hover:border-slate-700 transition-all">
            <span className="text-xs text-slate-200 font-medium">Require RCT / Meta-Analysis Only</span>
            <input
              type="checkbox"
              checked={sensitivity.requireRCT}
              onChange={(e) => onSensitivityChange({ ...sensitivity, requireRCT: e.target.checked })}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-500"
            />
          </label>

          {/* Toggle 2: Exclude COI */}
          <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#162035] border border-slate-800 cursor-pointer hover:border-slate-700 transition-all">
            <span className="text-xs text-slate-200 font-medium">Exclude Industry COI Funding</span>
            <input
              type="checkbox"
              checked={sensitivity.excludeCOI}
              onChange={(e) => onSensitivityChange({ ...sensitivity, excludeCOI: e.target.checked })}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-500"
            />
          </label>
        </div>

        {/* SECTION 2: SELECTED SOURCE INSPECTOR */}
        {selectedSource ? (
          <div className="p-4 rounded-xl bg-[#111728] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300 font-mono flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Source Audit Inspector
              </span>
              <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">
                Verified DOI
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white leading-snug">
                {selectedSource.title}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                {selectedSource.journal} • {selectedSource.year}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-[#162035] border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">Methodology</span>
                <span className="font-semibold text-slate-200 text-[11px]">{selectedSource.type}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#162035] border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">Sample Size</span>
                <span className="font-semibold text-indigo-300 text-[11px]">N = {selectedSource.sampleSize.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c1220] border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Verbatim Extract</span>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "{selectedSource.excerpt}"
              </p>
            </div>

            {selectedSource.coiFlag ? (
              <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400" />
                <span>Industry sponsorship or potential author conflict of interest flagged.</span>
              </div>
            ) : (
              <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>Independent academic funding verified. No conflict of interest detected.</span>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-[#111728] border border-slate-800 text-center space-y-2">
            <Info className="w-6 h-6 text-slate-500 mx-auto" />
            <p className="text-xs text-slate-400">
              Select any primary literature source card in the chat window to inspect its exact methodology and conflict-of-interest audit.
            </p>
          </div>
        )}

      </div>
    </aside>
  );
}
