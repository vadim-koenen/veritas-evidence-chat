import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import EvidencePanel from './components/EvidencePanel';
import NewQueryModal from './components/NewQueryModal';
import PricingModal from './components/PricingModal';
import { MOCK_CHATS } from './data/mockData';
import { fetchLiveAcademicEvidence } from './services/academicApi';
import { runMultiAgentSynthesis } from './services/multiAgentEngine';

export default function App() {
  const [chats, setChats] = useState(MOCK_CHATS);
  const [activeChatId, setActiveChatId] = useState('query-1');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedSource, setSelectedSource] = useState(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // Global Sensitivity Parameters State
  const [sensitivity, setSensitivity] = useState({
    minSampleSize: 200,
    recencyYears: 5,
    requireRCT: true,
    excludeCOI: true
  });

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setSelectedSource(null);
  };

  const handleSelectSource = (src) => {
    setSelectedSource(src);
    setIsPanelOpen(true);
  };

  const handleSendFollowUp = (text) => {
    const updatedChats = chats.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          summary: `${c.summary}\n\n[Follow-up Audit Response]: "${text}" - Re-evaluating ${c.sources.length} active database records against current parameter bounds.`
        };
      }
      return c;
    });
    setChats(updatedChats);
  };

  // REAL LIVE ACADEMIC FETCH + MULTI-AGENT SYNTHESIS PIPELINE
  const handleCreateNewQuery = async (newQueryData) => {
    // 1. Fetch live real papers from PubMed & CrossRef
    const livePapers = await fetchLiveAcademicEvidence(newQueryData.queryText);

    // 2. Run Triangulated Adversarial Multi-Agent Engine
    const synthesisResult = await runMultiAgentSynthesis(
      newQueryData.queryText, 
      livePapers, 
      {
        minSampleSize: newQueryData.minN,
        requireRCT: newQueryData.rctOnly,
        excludeCOI: true
      }
    );

    const newChat = {
      id: `query-${Date.now()}`,
      categoryId: newQueryData.category,
      title: newQueryData.queryText,
      subtitle: `Live PubMed & CrossRef Multi-Agent Audit (N > ${newQueryData.minN})`,
      timestamp: 'Just now',
      ...synthesisResult
    };

    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  const handleExportReport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeChat, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `VERITAS_EVIDENCE_DOSSIER_${activeChat.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#07090e] font-body text-slate-100">
      {/* Sidebar Navigation */}
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onOpenNewModal={() => setIsNewModalOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        <Header
          activeChat={activeChat}
          isPanelOpen={isPanelOpen}
          onTogglePanel={() => setIsPanelOpen(!isPanelOpen)}
          onExportReport={handleExportReport}
          onOpenPricing={() => setIsPricingOpen(true)}
          sensitivity={sensitivity}
        />

        <div className="flex-1 flex overflow-hidden">
          <ChatWindow
            activeChat={activeChat}
            onSelectSource={handleSelectSource}
            onSendFollowUp={handleSendFollowUp}
            onOpenNewModal={() => setIsNewModalOpen(true)}
            sensitivity={sensitivity}
          />

          <EvidencePanel
            isOpen={isPanelOpen}
            onClose={() => setIsPanelOpen(false)}
            selectedSource={selectedSource}
            activeChat={activeChat}
            sensitivity={sensitivity}
            onSensitivityChange={setSensitivity}
          />
        </div>
      </div>

      {/* New Query Modal */}
      <NewQueryModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSubmitQuery={handleCreateNewQuery}
      />

      {/* Stripe Pricing & Checkout Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
    </div>
  );
}
