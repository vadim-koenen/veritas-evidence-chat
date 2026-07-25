import React from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Cpu, 
  Shield, 
  TrendingUp, 
  PlusCircle, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  Sliders
} from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function Sidebar({ 
  chats, 
  activeChatId, 
  onSelectChat, 
  onOpenNewModal, 
  activeCategory, 
  onSelectCategory 
}) {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Shield': return <Shield className="w-4 h-4" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const filteredChats = activeCategory === 'all' 
    ? chats 
    : chats.filter(c => c.categoryId === activeCategory);

  return (
    <aside className="w-80 h-screen bg-[#090d16] border-r border-[#1e293b] flex flex-col flex-shrink-0 z-20">
      {/* Brand & Tagline */}
      <div className="p-5 border-b border-[#1e293b] flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10.5px] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                VERITAS <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-semibold border border-indigo-500/30">PRO</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Adversarial Evidence Engine</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4">
        <button 
          onClick={onOpenNewModal}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98]"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Deep Verification Query</span>
        </button>
      </div>

      {/* Domain Category Filter */}
      <div className="px-4 py-2">
        <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 px-1">
          Knowledge Domains
        </p>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeCategory === 'all' 
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' 
                : 'bg-[#131b2e] text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            All Vertical Mode
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeCategory === cat.id 
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' 
                  : 'bg-[#131b2e] text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Query History */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 px-2">
          Verified Evidence Audits
        </p>
        {filteredChats.map(chat => {
          const isActive = chat.id === activeChatId;
          const gradeColor = 
            chat.consensusGrade === 'HIGH' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' :
            chat.consensusGrade === 'MODERATE' ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' :
            'text-rose-400 bg-rose-500/10 border-rose-500/30';

          return (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`p-3 rounded-xl cursor-pointer transition-all duration-200 group border ${
                isActive 
                  ? 'bg-[#141c2e] border-indigo-500/50 shadow-md shadow-indigo-950/40' 
                  : 'bg-transparent border-transparent hover:bg-[#101726] hover:border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${gradeColor}`}>
                  GRADE: {chat.consensusGrade} ({chat.truthConfidence}%)
                </span>
                <span className="text-[11px] text-slate-400 font-mono">{chat.timestamp}</span>
              </div>
              <h3 className={`text-xs font-semibold line-clamp-2 leading-snug ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {chat.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-1 mt-1 font-normal">
                {chat.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Micro-SaaS Value Prop Footer */}
      <div className="p-4 border-t border-[#1e293b] bg-[#0c101c]">
        <div className="p-3 rounded-xl bg-gradient-to-b from-[#151d30] to-[#0f1524] border border-indigo-500/20">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Why Veritas Outperforms
            </span>
            <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">v2.4</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Eliminates standard LLM citation hallucination using <strong>Adversarial Proponent/Skeptic debate micro-agents</strong>.
          </p>
        </div>
      </div>
    </aside>
  );
}
