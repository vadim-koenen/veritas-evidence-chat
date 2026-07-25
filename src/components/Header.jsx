import React from 'react';
import { 
  Download, 
  Sliders, 
  CreditCard,
  Sparkles
} from 'lucide-react';

export default function Header({ 
  activeChat, 
  isPanelOpen, 
  onTogglePanel, 
  onExportReport,
  onOpenPricing
}) {
  if (!activeChat) return null;

  const gradeColor = 
    activeChat.consensusGrade === 'HIGH' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' :
    activeChat.consensusGrade === 'MODERATE' ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' :
    'text-rose-400 bg-rose-500/10 border-rose-500/30';

  return (
    <header className="h-16 border-b border-[#1e293b] bg-[#0c101c]/90 backdrop-blur-md px-6 flex items-center justify-between z-10 sticky top-0">
      {/* Title and Badge */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-white truncate font-heading tracking-tight">
              {activeChat.title}
            </h2>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${gradeColor}`}>
              GRADE: {activeChat.consensusGrade}
            </span>
          </div>
          <p className="text-xs text-slate-400 truncate">
            {activeChat.subtitle}
          </p>
        </div>
      </div>

      {/* Control Actions & Verification Bar */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Stripe Upgrade Button */}
        <button
          onClick={onOpenPricing}
          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Upgrade to PRO</span>
        </button>

        {/* Export Button */}
        <button
          onClick={onExportReport}
          className="px-3 py-1.5 rounded-lg bg-[#162035] hover:bg-[#1e2c4a] border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95"
          title="Export Verified Evidence PDF/JSON Dossier"
        >
          <Download className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Export Audit</span>
        </button>

        {/* Panel Toggle */}
        <button
          onClick={onTogglePanel}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 border transition-all ${
            isPanelOpen 
              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20' 
              : 'bg-[#162035] hover:bg-[#1e2c4a] text-slate-200 border-slate-700'
          }`}
        >
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          <span>Graph & Sensitivity</span>
        </button>
      </div>
    </header>
  );
}
