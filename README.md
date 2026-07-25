# 🛡️ VERITAS AI™ | Next-Gen Adversarial Evidence Engine

> **The Deep-Verification Engine for High-Stakes Decision Makers**  
> *Triangulated Adversarial Multi-Agent Debate • Real-Time Evidence Graph • GRADE Certainty Ratings • Sensitivity Simulator*

---

### 📜 LEGAL & INTELLECTUAL PROPERTY NOTICES
* **Trademark Notice**: **VERITAS AI™**, **VERITAS™**, and **Triangulated Adversarial Evidence Synthesis (TAES)™** are registered/pending trademarks of Vadim Koenen.
* **Patent Status**: **PATENT PENDING**. Certain core multi-agent evaluation pipelines, automated COI audits, and deterministic GRADE score calculations are subject to pending patent applications (See [PATENT_SPECIFICATION.md](PATENT_SPECIFICATION.md)).
* **Software License**: Commercial & Proprietary Software License (See [LICENSE](LICENSE)). Commercial cloning, unauthorized rebranding, or public deployment of the TAES engine is strictly prohibited under the US Defend Trade Secrets Act.

---

## 🚀 Overview

Standard 1st-generation "Evidence-Based AI Chat" tools rely on passive vector retrieval (RAG), which frequently results in:
1. **Citation Hallucinations & Misattribution**
2. **Equal-Weight Blending** (treating small retrospective studies the same as multi-center double-blind RCTs)
3. **Uncertainty Blindness** (sounding 100% confident even when literature is conflicting)

**VERITAS AI™** addresses these limitations by introducing **Triangulated Adversarial Multi-Agent Synthesis (TAES)™**. When a hypothesis is submitted, Veritas concurrently launches three specialized micro-agents:
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
* ⚡ **Live Academic PubMed & CrossRef API Feeds**: Queries live scientific paper metadata directly from open academic databases.

---

## 🛠️ Project Structure

```
veritas-evidence-chat/
├── LICENSE                  # Commercial & Trade Secret Software License
├── PATENT_SPECIFICATION.md  # Draft Provisional Patent Application
├── .env.example             # Server-side API key isolation template
├── api/
│   └── synthesize.js        # Protected server-side multi-agent API endpoint
├── standalone.html          # Self-contained zero-dependency production app
├── index.html               # Vite / GitHub Pages entry HTML
├── vite.config.js           # Vite configuration
├── package.json             # Package manifest & scripts
├── src/
│   ├── main.jsx             # React mounting point
│   ├── App.jsx              # Core application layout & state container
│   ├── index.css            # Custom glassmorphic design system & styling
│   ├── services/
│   │   ├── academicApi.js   # Live PubMed & CrossRef API fetcher
│   │   └── multiAgentEngine.js # Client TAES synthesis engine
│   └── components/
│       ├── Sidebar.jsx      # Domain vertical filter & chat history
│       ├── Header.jsx       # Real-time status indicators & export actions
│       ├── ChatWindow.jsx   # Adversarial debate split & literature view
│       ├── EvidencePanel.jsx# Live sensitivity simulator & source audit drawer
│       ├── NewQueryModal.jsx# Custom hypothesis submission modal
│       └── PricingModal.jsx # Stripe Checkout integration modal
```

---

## 💻 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## 📜 Legal & IP Enquiries

For commercial licensing, patent inquiries, or institutional enterprise deployments, contact: Vadim Koenen.
