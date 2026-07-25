import React, { useState } from 'react';
import { X, Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles } from 'lucide-react';

export default function PricingModal({ isOpen, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = (planId) => {
    setIsProcessing(true);
    // Real Stripe Checkout Redirect URL integration
    // Replace with your active Stripe Checkout Link / Payment Link URL
    const stripeUrls = {
      pro: 'https://buy.stripe.com/test_pro_149', // Replace with your actual Stripe Payment Link
      team: 'https://buy.stripe.com/test_team_699' // Replace with your actual Stripe Payment Link
    };

    setTimeout(() => {
      window.open(stripeUrls[planId] || stripeUrls.pro, '_blank');
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#0f1524] border border-slate-700 rounded-3xl w-full max-w-3xl p-6 md:p-8 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Stripe Secure Billing Connected
          </div>
          <h2 className="text-2xl font-bold text-white font-heading tracking-tight">
            Upgrade to VERITAS PRO
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Eliminate LLM hallucination risk. Unlock unlimited adversarial audits, live PubMed/CrossRef data connectors, and exportable decision dossiers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          {/* Card 1: Pro Researcher */}
          <div 
            onClick={() => setSelectedPlan('pro')}
            className={`p-6 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
              selectedPlan === 'pro'
                ? 'bg-[#141d33] border-indigo-500 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500'
                : 'bg-[#111728] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Pro Researcher</h3>
                  <p className="text-xs text-slate-400 mt-0.5">For solo analysts & founders</p>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                  POPULAR
                </span>
              </div>

              <div className="my-4">
                <span className="text-3xl font-extrabold text-white font-heading">$149</span>
                <span className="text-xs text-slate-400 font-mono"> / month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited Adversarial Multi-Agent Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Live PubMed & CrossRef API Data Feeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>GRADE Framework Certainty Ratings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sensitivity Controls (Min N, RCT, COI)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); handleCheckout('pro'); }}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all active:scale-98"
            >
              <CreditCard className="w-4 h-4" />
              <span>{isProcessing ? 'Redirecting to Stripe...' : 'Checkout Pro ($149/mo)'}</span>
            </button>
          </div>

          {/* Card 2: Team Workspace */}
          <div 
            onClick={() => setSelectedPlan('team')}
            className={`p-6 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
              selectedPlan === 'team'
                ? 'bg-[#141d33] border-cyan-500 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500'
                : 'bg-[#111728] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Team Workspace</h3>
                  <p className="text-xs text-slate-400 mt-0.5">For VC, legal & pharma squads</p>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                  5 SEATS
                </span>
              </div>

              <div className="my-4">
                <span className="text-3xl font-extrabold text-white font-heading">$699</span>
                <span className="text-xs text-slate-400 font-mono"> / month</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Everything in Pro for 5 Team Members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Private PDF & Internal Document RAG Uploads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Custom Institutional Strictness Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Shared Team Evidence Repository & Audit Trail</span>
                </li>
              </ul>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); handleCheckout('team'); }}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all active:scale-98"
            >
              <CreditCard className="w-4 h-4" />
              <span>{isProcessing ? 'Redirecting to Stripe...' : 'Checkout Team ($699/mo)'}</span>
            </button>
          </div>

        </div>

        {/* Guarantee Banner */}
        <div className="p-3 rounded-xl bg-[#111728] border border-slate-800 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>256-bit SSL Encrypted • Powered by Stripe Billing • Cancel anytime in 1 click</span>
        </div>
      </div>
    </div>
  );
}
