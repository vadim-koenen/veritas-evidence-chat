import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import EvidencePanel from './components/EvidencePanel';
import NewQueryModal from './components/NewQueryModal';
import { MOCK_CHATS } from './data/mockData';

export default function App() {
  const [chats, setChats] = useState(MOCK_CHATS);
  const [activeChatId, setActiveChatId] = useState('query-1');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedSource, setSelectedSource] = useState(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

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
    // Append simulated system response or update conversation
    const updatedChats = chats.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          summary: `${c.summary}\n\n[Follow-up Audit Response]: "${text}" - Adversarial verification completed against ${c.sources.length} active database records. Truth certainty re-evaluated.`
        };
      }
      return c;
    });
    setChats(updatedChats);
  };

  const handleCreateNewQuery = (newQueryData) => {
    const newChat = {
      id: `query-${Date.now()}`,
      categoryId: newQueryData.category,
      title: newQueryData.queryText,
      subtitle: `Custom Adversarial Audit (N > ${newQueryData.minN})`,
      timestamp: 'Just now',
      consensusGrade: 'HIGH',
      truthConfidence: 84,
      gradeDescription: 'Multi-agent adversarial synthesis completed with verified RCT constraints.',
      query: newQueryData.queryText,
      summary: `Adversarial synthesis completed for hypothesis: "${newQueryData.queryText}". Primary literature retrieved with minimum sample size ${newQueryData.minN} shows strong consensus.`,
      proponentAgent: {
        thesis: 'Peer-reviewed clinical trials support the core hypothesis with statistically significant effect sizes (p < 0.01).',
        keyPoints: [
          { text: 'Primary cohort study confirmed positive response in 82% of subjects.', strength: 'High Significance' },
          { text: 'Independent laboratory replication verified biochemical pathway activation.', strength: 'Replicated' }
        ]
      },
      skepticAgent: {
        thesis: 'Potential confounders include age-stratified subgroup variations and missing long-term follow-up endpoints.',
        keyPoints: [
          { text: 'Sample size restricted to specific geographic demographic.', strength: 'Demographic Bias' },
          { text: 'Publication bias detected in initial un-indexed pilot results.', strength: 'Reporting Risk' }
        ]
      },
      sensitivityDefaults: {
        minSampleSize: newQueryData.minN,
        recencyYears: 5,
        requireRCT: newQueryData.rctOnly,
        excludeCOI: true
      },
      sources: [
        {
          id: `s-${Date.now()}`,
          title: `Empirical Evaluation of ${newQueryData.queryText.slice(0, 40)}...`,
          journal: 'Nature Medicine',
          year: 2025,
          type: newQueryData.rctOnly ? 'Double-Blind RCT' : 'Meta-Analysis',
          sampleSize: newQueryData.minN * 5,
          doi: '10.1038/s41591-025-0991',
          credibilityScore: 95,
          coiFlag: false,
          excerpt: 'Verified significant outcome with low risk of bias across multi-center clinical trials.'
        }
      ]
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
    </div>
  );
}
