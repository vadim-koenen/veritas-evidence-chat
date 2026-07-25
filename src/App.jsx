import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import EvidencePanel from './components/EvidencePanel';
import NewQueryModal from './components/NewQueryModal';
import PricingModal from './components/PricingModal';
import { MOCK_CHATS } from './data/mockData';
import { fetchLiveAcademicEvidence } from './services/academicApi';
import { searchSecEdgar } from './services/secEdgarApi';
import { runMultiAgentSynthesis } from './services/multiAgentEngine';

export default function App() {
  const [chats, setChats] = useState(MOCK_CHATS);
  const [activeChatId, setActiveChatId] = useState('query-vc-1');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedSource, setSelectedSource] = useState(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Global Sensitivity Parameters State
  const [sensitivity, setSensitivity] = useState({
    minSampleSize: 50,
    recencyYears: 5,
    requireRCT: false,
    excludeCOI: false
  });

  const rawActiveChat = chats.find(c => c.id === activeChatId) || chats[0];

  // PURE REACTIVE SENSITIVITY PIPELINE (Patent Claim 3)
  // Re-evaluates Patent Claim 2 formula dynamically whenever sliders move!
  const activeChat = useMemo(() => {
    const sourcesToSynthesize = rawActiveChat?.rawSources || rawActiveChat?.sources || [];
    if (!rawActiveChat || sourcesToSynthesize.length === 0) return rawActiveChat;
    
    const reSynthesized = runMultiAgentSynthesis(
      rawActiveChat.query,
      sourcesToSynthesize,
      sensitivity
    );

    return {
      ...rawActiveChat,
      ...reSynthesized
    };
  }, [rawActiveChat, sensitivity]);

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
          summary: `${c.summary}\n\n[Follow-up Audit Response]: "${text}" - Re-evaluating literature against active sensitivity bounds.`
        };
      }
      return c;
    });
    setChats(updatedChats);
  };

  // REAL LIVE FETCH + TAES SYNTHESIS PIPELINE
  const handleCreateNewQuery = async (newQueryData) => {
    setIsLoading(true);

    try {
      let livePapers = [];
      if (newQueryData.category === 'vcdiligence') {
        const secPapers = await searchSecEdgar(newQueryData.queryText);
        const academicPapers = await fetchLiveAcademicEvidence(newQueryData.queryText);
        livePapers = [...secPapers, ...academicPapers];
      } else {
        livePapers = await fetchLiveAcademicEvidence(newQueryData.queryText);
      }

      const synthesisResult = runMultiAgentSynthesis(
        newQueryData.queryText, 
        livePapers, 
        {
          minSampleSize: newQueryData.minN,
          requireRCT: newQueryData.rctOnly,
          excludeCOI: false,
          recencyYears: 5
        }
      );

      const newChat = {
        id: `query-${Date.now()}`,
        categoryId: newQueryData.category,
        title: newQueryData.queryText,
        subtitle: `Live Multi-Agent Audit (${newQueryData.category === 'vcdiligence' ? 'SEC EDGAR Filings' : 'PubMed Index'})`,
        timestamp: 'Just now',
        rawSources: livePapers, // Store raw un-filtered sources for reactive slider re-synthesis
        ...synthesisResult
      };

      setChats([newChat, ...chats]);
      setActiveChatId(newChat.id);
    } catch (err) {
      console.error('Audit query error:', err);
    } finally {
      setIsLoading(false);
      setIsNewModalOpen(false);
    }
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
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onOpenNewModal={() => setIsNewModalOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

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

      <NewQueryModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSubmitQuery={handleCreateNewQuery}
        isLoading={isLoading}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
    </div>
  );
}
