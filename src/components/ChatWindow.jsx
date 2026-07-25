import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Send, 
  Scale, 
  Search,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  CornerDownRight,
  BookOpen,
  Sliders,
  Award
} from 'lucide-react';

export default function ChatWindow({ 
  activeChat, 
  onSelectSource, 
  onSendFollowUp,
  onOpenNewModal,
  sensitivity
}) {
  const [inputText, setInputText] = useState('');
  const [activeTab, setActiveTab] = useState('synthesis'); // 'synthesis', 'debate', 'sources'

  if (!activeChat) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendFollowUp(inputText);
    setInputText('');
  };

  // Adjust score dynamically based on sensitivity sliders
  let calculatedScore = activeChat.truthConfidence;
  if (sensitivity.requireRCT) calculatedScore -= 5;
  if (sensitivity.excludeCOI) calculatedScore += 3;
  if (sensitivity.minSampleSize > 500) calculatedScore -= 4;
  calculatedScore = Math.max(10, Math.min(98, calculatedScore));

  return (
    <div className="flex-1 flex flex-col h-full bg-[#070a12] overflow-hidden relative">
      {/* Background Subtle Glow */}
      <div className="glow-background top-10 left-1/3 opacity-30" />

      {/* Main Conversation Stream */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl mx-auto w-full">
        
        {/* User Question Card */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs flex-shrink-0">
            YOU
          </div>
          <div className="flex-1 bg-[#0f1626] border border-[#1e2a45] rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wide uppercase">
                Verification Inquiry
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Timestamp: 2026.07.25</span>
            </div>
            <h2 className="text-base font-semibold text-white leading-relaxed font-heading">
              "{activeChat.query}"
            </h2>
          </div>
        </div>

        {/* System Evidence Response Engine Output */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-lg shadow-indigo-500/30">
            V
          </div>

          <div className="flex-1 space-y-5">
            {/* Verdict Summary Card */}
            <div className="glass-panel p-6 border-indigo-500/30 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Confidence Metric & Grade Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#141d33] border border-indigo-500/30 flex flex-col items-center justify-center">
                    <span className="text-xs text-slate-400 font-mono leading-none">GRADE</span>
                    <span className={`text-sm font-extrabold font-mono mt-0.5 ${
                      activeChat.consensusGrade === 'HIGH' ? 'text-emerald-400' :
                      activeChat.consensusGrade === 'MODERATE' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {activeChat.consensusGrade}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white font-heading">Synthesized Truth Verdict</h3>
                      <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded">
                        GRADE Framework Evaluated
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {activeChat.gradeDescription}
                    </p>
                  </div>
                </div>

                {/* Score Gauge */}
                <div className="flex items-center gap-3 bg-[#111728] px-4 py-2.5 rounded-xl border border-slate-800">
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Truth Certainty Index
                    </div>
                    <div className="text-lg font-extrabold font-mono text-cyan-400">
                      {calculatedScore}%
                    </div>
                  </div>
                  <div className="w-1.5 h-10 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                    <div 
                      className="w-full bg-gradient-to-t from-indigo-500 to-cyan-400 transition-all duration-500"
                      style={{ height: `${calculatedScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* View Mode Tabs */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('synthesis')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeTab === 'synthesis'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-[#12192b] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BrainCircuit className="w-3.5 h-3.5" />
                  Executive Synthesis
                </button>

                <button
                  onClick={() => setActiveTab('debate')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeTab === 'debate'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-[#12192b] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  Adversarial Multi-Agent Debate Split
                </button>

                <button
                  onClick={() => setActiveTab('sources')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeTab === 'sources'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-[#12192b] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Primary Literature ({activeChat.sources.length})
                </button>
              </div>

              {/* TAB 1: EXECUTIVE SYNTHESIS */}
              {activeTab === 'synthesis' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {activeChat.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-[#101728] border border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-cyan-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Actionable Recommendation for Decision Makers
                    </h4>
                    <p className="text-xs text-slate-300 leading-normal">
                      Do not rely on uncontrolled retrospective cohorts. Require verified clinical endpoint monitoring or isolate subgroup trials. Track ongoing randomized controlled trials (e.g. TAME endpoint releases).
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: ADVERSARIAL MULTI-AGENT DEBATE SPLIT */}
              {activeTab === 'debate' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {/* Proponent Agent Box */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                      <span className="text-xs font-bold font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> PROPONENT AGENT (CASE FOR)
                      </span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                        Supporting Evidence
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200 leading-relaxed">
                      "{activeChat.proponentAgent.thesis}"
                    </p>
                    <div className="space-y-2 pt-1">
                      {activeChat.proponentAgent.keyPoints.map((point, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#0e1624] border border-emerald-500/10 text-xs text-slate-300 flex items-start gap-2">
                          <CornerDownRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{point.text}</p>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-1 inline-block">
                              Rating: {point.strength}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skeptic Agent Box */}
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
                      <span className="text-xs font-bold font-mono text-rose-400 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-rose-400" /> SKEPTIC AGENT (FALSIFIER)
                      </span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded">
                        Counter-Evidence & Biases
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200 leading-relaxed">
                      "{activeChat.skepticAgent.thesis}"
                    </p>
                    <div className="space-y-2 pt-1">
                      {activeChat.skepticAgent.keyPoints.map((point, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#0e1624] border border-rose-500/10 text-xs text-slate-300 flex items-start gap-2">
                          <CornerDownRight className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{point.text}</p>
                            <span className="text-[10px] font-mono text-rose-400 font-semibold mt-1 inline-block">
                              Risk Factor: {point.strength}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PRIMARY LITERATURE SOURCES */}
              {activeTab === 'sources' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">
                    Click any source card to view full methodology evaluation and conflict-of-interest audit in the side panel.
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeChat.sources.map((src) => (
                      <div
                        key={src.id}
                        onClick={() => onSelectSource(src)}
                        className="p-3.5 rounded-xl bg-[#111828] hover:bg-[#182238] border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all flex items-start justify-between gap-4 group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                              {src.type}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {src.journal} ({src.year})
                            </span>
                            {src.coiFlag && (
                              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> COI Flag
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white leading-snug">
                            {src.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 italic line-clamp-1">
                            "{src.excerpt}"
                          </p>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-[10px] font-mono text-slate-400">Credibility</div>
                          <div className="text-xs font-extrabold font-mono text-indigo-300">
                            {src.credibilityScore}%
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 block mt-1">
                            N={src.sampleSize.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Follow-up Query Input Bar */}
      <div className="p-4 border-t border-[#1e293b] bg-[#090d16]/95 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a follow-up evidence question (e.g. 'What if we filter only RCTs with N > 500?')..."
              className="w-full py-3.5 px-4 pl-11 rounded-xl bg-[#12192b] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-body"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="submit"
            className="py-3.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all active:scale-95 flex-shrink-0"
          >
            <span>Audit Query</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
