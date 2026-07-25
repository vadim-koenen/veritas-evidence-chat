export const CATEGORIES = [
  { id: 'biotech', name: 'Biotech & Clinical Health', icon: 'Activity', color: '#10b981' },
  { id: 'vcdiligence', name: 'VC & PE Due Diligence', icon: 'TrendingUp', color: '#8b5cf6' },
  { id: 'deeptech', name: 'Deep Tech & Engineering', icon: 'Cpu', color: '#06b6d4' },
  { id: 'governance', name: 'Enterprise AI Governance', icon: 'Shield', color: '#6366f1' }
];

export const MOCK_CHATS = [
  {
    id: 'query-vc-1',
    categoryId: 'vcdiligence',
    title: 'VC Due Diligence: Enterprise AI Agent Platform at 30x ARR Multiple',
    subtitle: 'Stress-test founder ARR growth claims against SEC EDGAR S-1 public multiples & gross margins',
    timestamp: '5 mins ago',
    consensusGrade: 'MODERATE',
    truthConfidence: 62,
    gradeDescription: 'Founder ARR growth (200% YoY) verified, but gross margin compression (58% vs 78% SaaS benchmark) due to LLM token costs poses valuation multiple risk.',
    query: 'Is a $60M Series A valuation (30x ARR multiple) justified for an enterprise AI Agent startup with $2M ARR and 58% gross margin?',
    summary: 'While top-line ARR growth is strong (200% YoY), SEC EDGAR public company benchmarks (Palantir, C3.ai, MongoDB) show median public AI multiples are 12.8x ARR. Furthermore, high LLM API inference costs compress gross margins to 58% (vs 75%+ traditional SaaS), requiring a CAC payback adjustment.',
    
    proponentAgent: {
      thesis: 'High Net Revenue Retention (NRR 135%) and rapid enterprise seat expansion justify premium early-stage growth multiples.',
      keyPoints: [
        { text: 'ACV expanded from $25k to $85k across top 10 enterprise Fortune 500 customers.', strength: 'High NRR Growth' },
        { text: 'Pipeline velocity: Sales cycle averaged 42 days, 50% faster than traditional enterprise software.', strength: 'Sales Efficiency' }
      ]
    },
    skepticAgent: {
      thesis: 'Gross margin compression (58%) limits long-term terminal value; SEC filings show public market re-rating of AI wrappers with high token COGS.',
      keyPoints: [
        { text: 'SEC EDGAR S-1 Data: Public AI software multiples averaged 12.8x ARR (vs requested 30x Series A multiple).', strength: 'Valuation Multiple Risk' },
        { text: 'Customer Concentration: 48% of total ARR is derived from top 2 enterprise accounts.', strength: 'Churn & Concentration Risk' }
      ]
    },

    sensitivityDefaults: {
      minSampleSize: 50,
      recencyYears: 2,
      requireRCT: false,
      excludeCOI: true
    },

    sources: [
      {
        id: 'sec-1',
        title: 'SEC EDGAR Public AI Software Valuation & Gross Margin Benchmark Index',
        journal: 'U.S. Securities and Exchange Commission (10-K / S-1 Analytics)',
        year: 2025,
        type: 'Official SEC Filing Benchmark',
        sampleSize: 140,
        doi: 'https://www.sec.gov/edgar',
        credibilityScore: 98,
        coiFlag: false,
        excerpt: 'Public software companies with COGS > 35% (LLM inference costs) trade at a 40% discount to high-margin SaaS peers (75%+ gross margin).'
      },
      {
        id: 'vc-paper-1',
        title: 'Empirical Unit Economics of Enterprise Generative AI Applications',
        journal: 'Journal of Private Equity & Venture Capital',
        year: 2024,
        type: 'Empirical Industry Benchmark',
        sampleSize: 320,
        doi: '10.1016/j.jpe.2024.08.012',
        credibilityScore: 91,
        coiFlag: false,
        excerpt: 'Median Series A valuation multiple for B2B AI applications settled at 14.5x ARR in 2024/2025.'
      }
    ]
  },
  {
    id: 'query-1',
    categoryId: 'biotech',
    title: 'Metformin Healthspan & All-Cause Mortality in Non-Diabetics',
    subtitle: 'Evaluate human longevity trials (TAME trial, meta-analyses 2017-2025)',
    timestamp: '15 mins ago',
    consensusGrade: 'MODERATE',
    truthConfidence: 68,
    gradeDescription: 'Promising observational data, but randomized controlled trial (RCT) evidence in non-diabetic humans remains pending final TAME endpoints.',
    query: 'Does Metformin extend healthspan and reduce all-cause mortality in non-diabetic human populations?',
    summary: 'While Metformin significantly reduces all-cause mortality in type 2 diabetic patients compared to non-diabetic controls, evidence in non-diabetic healthy adults shows mixed metabolic shifts with potential blunting of exercise-induced mitochondrial adaptations.',
    
    proponentAgent: {
      thesis: 'Metformin activates AMPK, inhibits mTORC1, and decreases systemic IL-6/TNF-alpha.',
      keyPoints: [
        { text: 'Meta-analysis of 61 observational studies (N=210,000) showed 24% reduction in all-cause mortality vs non-diabetics.', strength: 'High observational' }
      ]
    },
    skepticAgent: {
      thesis: 'Retrospective observational studies suffer from selection bias; recent RCTs show Metformin blunts VO2 max improvements in healthy elderly adults.',
      keyPoints: [
        { text: 'MASTERS Trial (2019, N=109 RCT): Metformin blunted skeletal muscle hypertrophic response to resistance exercise.', strength: 'RCT (High Quality)' }
      ]
    },

    sensitivityDefaults: {
      minSampleSize: 200,
      recencyYears: 5,
      requireRCT: true,
      excludeCOI: true
    },

    sources: [
      {
        id: 's1',
        title: 'Metformin as a Longevity Agent: Systematic Review & Meta-Analysis',
        journal: 'Cell Metabolism',
        year: 2024,
        type: 'Systematic Review & Meta-Analysis',
        sampleSize: 210000,
        doi: '10.1016/j.cmet.2024.01.012',
        credibilityScore: 92,
        coiFlag: false,
        excerpt: 'Metformin treated individuals exhibited lower mortality rates (HR 0.76) relative to non-diabetic controls.'
      }
    ]
  }
];
