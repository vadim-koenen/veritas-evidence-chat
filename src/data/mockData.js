export const CATEGORIES = [
  { id: 'biotech', name: 'Biotech & Clinical Health', icon: 'Activity', color: '#10b981' },
  { id: 'vcdiligence', name: 'VC & PE Due Diligence', icon: 'TrendingUp', color: '#8b5cf6' },
  { id: 'deeptech', name: 'Deep Tech & Engineering', icon: 'Cpu', color: '#06b6d4' },
  { id: 'governance', name: 'Enterprise AI Governance', icon: 'Shield', color: '#6366f1' }
];

const VC_SOURCES = [
  {
    id: 'sec-1',
    title: 'SEC EDGAR Public AI Software Valuation & Gross Margin Benchmark Index',
    journal: 'U.S. SEC EDGAR Corporate Filings (10-K / S-1 Analytics)',
    year: 2025,
    type: 'Official SEC Filing Benchmark',
    sampleSize: 140,
    credibilityScore: 98,
    coiFlag: false,
    excerpt: 'Public software companies with COGS > 35% (LLM token costs) trade at a 40% discount to high-margin SaaS peers (75%+ gross margin).'
  },
  {
    id: 'vc-paper-1',
    title: 'Empirical Unit Economics of Enterprise Generative AI Applications',
    journal: 'Journal of Private Equity & Venture Capital',
    year: 2024,
    type: 'Empirical Industry Benchmark',
    sampleSize: 320,
    credibilityScore: 91,
    coiFlag: false,
    excerpt: 'Median Series A valuation multiple for B2B AI applications settled at 14.5x ARR in 2024/2025.'
  }
];

const BIOTECH_SOURCES = [
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
  },
  {
    id: 's2',
    title: 'Metformin Blunts Skeletal Muscle Adaptations to Resistance Exercise (MASTERS Trial)',
    journal: 'Aging Cell',
    year: 2019,
    type: 'Double-Blind RCT',
    sampleSize: 109,
    doi: '10.1111/acel.13039',
    credibilityScore: 96,
    coiFlag: false,
    excerpt: 'Metformin significantly attenuated gains in muscle mass and VO2 max following 14 weeks of progressive resistance training (p < 0.01).'
  }
];

export const MOCK_CHATS = [
  {
    id: 'query-vc-1',
    categoryId: 'vcdiligence',
    title: 'VC Due Diligence: Enterprise AI Platform at 30x ARR Multiple',
    subtitle: 'Stress-test founder ARR growth claims against SEC EDGAR S-1 public multiples & gross margins',
    timestamp: '5 mins ago',
    query: 'Is a $60M Series A valuation (30x ARR multiple) justified for an enterprise AI Agent startup with $2M ARR and 58% gross margin?',
    rawSources: VC_SOURCES,
    sources: VC_SOURCES
  },
  {
    id: 'query-1',
    categoryId: 'biotech',
    title: 'Metformin Healthspan & All-Cause Mortality in Non-Diabetics',
    subtitle: 'Evaluate human longevity trials (TAME trial, meta-analyses 2017-2025)',
    timestamp: '15 mins ago',
    query: 'Does Metformin extend healthspan and reduce all-cause mortality in non-diabetic human populations?',
    rawSources: BIOTECH_SOURCES,
    sources: BIOTECH_SOURCES
  }
];
