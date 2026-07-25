# 🛡️ VERITAS AI | Next-Gen Adversarial Evidence Engine

> **The Deep-Verification Engine for High-Stakes Decision Makers**  
> *Triangulated Adversarial Multi-Agent Debate • Real-Time Evidence Graph • GRADE Certainty Ratings • Sensitivity Simulator*

---

## 🚀 Overview

Standard 1st-generation "Evidence-Based AI Chat" tools rely on passive vector retrieval (RAG), which frequently results in:
1. **Citation Hallucinations & Misattribution**
2. **Equal-Weight Blending** (treating small retrospective studies the same as multi-center double-blind RCTs)
3. **Uncertainty Blindness** (sounding 100% confident even when literature is conflicting)

**VERITAS AI** addresses these limitations by introducing **Triangulated Adversarial Multi-Agent Synthesis (TAES)**. When a hypothesis is submitted, Veritas concurrently launches three specialized micro-agents:
* ⚖️ **Proponent Agent**: Builds the strongest empirical case *for* the hypothesis using high-impact clinical/empirical literature.
* 🛡️ **Skeptic Agent (Falsifier)**: Specifically hunts for methodology risks, sample size deficits ($N$), publication biases, and industry conflict-of-interest (COI) flags.
* 🧠 **Synthesizer Agent**: Merges both perspectives into a weighted **Net Truth Certainty Index (%)** using the **GRADE Framework**.

---

## ✨ Key Features

* 🔬 **Multi-Domain Vertical Auditing**:
  * **Biotech & Longevity Therapeutics** (Clinical trials, drug repurposing, biomarker validity)
  * **Deep Tech & Engineering** (Battery chemistries, materials science scalability)
  * **Enterprise AI Governance** (Security debt, SAST vs generative coding assistants)
  * **Quantitative Finance & Macro Strategy** (High-frequency liquidity dynamics)
* 🎛️ **Live Sensitivity Simulator**: Real-time slider controls ($N$ sample size, publication recency, RCT enforcement, COI exclusion) that dynamically re-weight literature confidence scores.
* 📄 **Interactive Primary Literature Inspector**: Inspect verbatim paper extracts, journal impact scores, DOI links, and conflict-of-interest flags.
* 📊 **Exportable Evidence Dossiers**: Download decision-ready JSON evidence audits for executive review.
* ⚡ **Zero-Dependency Instant Web Application**: Includes a standalone single-file production web app (`standalone.html`) requiring no package installations.

---

## 🛠️ Project Structure

```
veritas-evidence-chat/
├── standalone.html          # Self-contained zero-dependency production app
├── index.html               # Vite entry HTML
├── vite.config.js           # Vite configuration
├── package.json             # Package manifest & scripts
├── src/
│   ├── main.jsx             # React mounting point
│   ├── App.jsx              # Core application layout & state container
│   ├── index.css            # Custom glassmorphic design system & styling
│   ├── data/
│   │   └── mockData.js      # Pre-loaded adversarial evidence audits
│   └── components/
│       ├── Sidebar.jsx      # Domain vertical filter & chat history
│       ├── Header.jsx       # Real-time status indicators & export actions
│       ├── ChatWindow.jsx   # Adversarial debate split & literature view
│       ├── EvidencePanel.jsx# Live sensitivity simulator & source audit drawer
│       └── NewQueryModal.jsx# Custom hypothesis submission modal
```

---

## 💻 Getting Started

### Option A: Instant Standalone (No Node/NPM required)
Simply double-click or open `standalone.html` in any web browser!

### Option B: Local Development (Vite + React)
```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## 📈 Outperforming 1st-Gen Evidence Micro-SaaS

| Feature | 1st-Gen Evidence Chat | VERITAS AI |
| :--- | :--- | :--- |
| **Retrieval System** | Passive Vector RAG | **Triangulated Adversarial Debate (TAES)** |
| **Evidence Weighting** | Equal weight across all documents | **GRADE Framework Certainty Ratings** |
| **Funding & COI Audit** | Ignored | **Automated Conflict-of-Interest Detector** |
| **Sensitivity Controls** | Static text answer | **Real-Time Sliders ($N$, Recency, RCT)** |
| **Exportable Artifacts** | None | **JSON / PDF Decision-Ready Dossiers** |

---

## 📜 License

MIT License © 2026 Vadim Koenen
