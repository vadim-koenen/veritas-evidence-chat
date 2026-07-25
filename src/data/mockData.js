export const CATEGORIES = [
  { id: 'biotech', name: 'Biotech & Clinical Health', icon: 'Activity', color: '#10b981' },
  { id: 'deeptech', name: 'Deep Tech & Engineering', icon: 'Cpu', color: '#06b6d4' },
  { id: 'governance', name: 'Enterprise AI Governance', icon: 'Shield', color: '#6366f1' },
  { id: 'fintech', name: 'Quantitative Finance', icon: 'TrendingUp', color: '#8b5cf6' }
];

export const MOCK_CHATS = [
  {
    id: 'query-1',
    categoryId: 'biotech',
    title: 'Metformin Healthspan & All-Cause Mortality in Non-Diabetics',
    subtitle: 'Evaluate human longevity trials (TAME trial, meta-analyses 2017-2025)',
    timestamp: '10 mins ago',
    consensusGrade: 'MODERATE', // HIGH, MODERATE, LOW, CONTRADICTED
    truthConfidence: 68, // % score
    gradeDescription: 'Promising observational & retrospective data, but randomized controlled trial (RCT) evidence in non-diabetic humans remains pending final TAME endpoints.',
    query: 'Does Metformin extend healthspan and reduce all-cause mortality in non-diabetic human populations, or is the benefit limited to glycemic regulation in diabetics?',
    summary: 'While Metformin significantly reduces all-cause mortality in type 2 diabetic patients compared to non-diabetic controls (a paradox attributed to glycemic control + pleiotropic anti-inflammatory effects), evidence in non-diabetic healthy adults shows mixed metabolic shifts with potential blunting of exercise-induced mitochondrial adaptations.',
    
    // Adversarial Triangulation
    proponentAgent: {
      thesis: 'Metformin activates AMPK, inhibits mTORC1, and decreases systemic IL-6/TNF-alpha, conferring geroprotective effects independent of glycemic control.',
      keyPoints: [
        { text: 'Meta-analysis of 61 observational studies (N=210,000) showed 24% reduction in all-cause mortality vs non-diabetics.', strength: 'High observational' },
        { text: 'Reduces cardiovascular event risk by 19% via endothelial nitric oxide synthase (eNOS) upregulation.', strength: 'Moderate' },
        { text: 'Attenuates cellular senescence markers (p16INK4a) in human adipose tissue biopsies.', strength: 'In Vitro / Ex Vivo' }
      ]
    },
    skepticAgent: {
      thesis: 'Retrospective observational studies suffer from selection bias; recent RCTs show Metformin blunts VO2 max improvements and hypertrophic response to resistance training in healthy elderly adults.',
      keyPoints: [
        { text: 'MASTERS Trial (2019, N=109 RCT): Metformin blunted skeletal muscle hypertrophic response to resistance exercise in adults aged 65+.', strength: 'RCT (High Quality)' },
        { text: 'Confounding by indication: Diabetic cohorts on metformin receive closer clinical monitoring and lifestyle interventions than control groups.', strength: 'Methodological Risk' },
        { text: 'Mitochondrial Complex I inhibition reduces ROS signaling required for hormetic exercise adaptation.', strength: 'Mechanistic Conflict' }
      ]
    },

    // Sensitivity Parameters Default
    sensitivityDefaults: {
      minSampleSize: 200,
      recencyYears: 5,
      requireRCT: true,
      excludeCOI: true
    },

    // Sources
    sources: [
      {
        id: 's1',
        title: 'Metformin as a Longevity Agent: A Systematic Review and Meta-Analysis of Human Studies',
        journal: 'Cell Metabolism',
        year: 2024,
        type: 'Systematic Review & Meta-Analysis',
        sampleSize: 210000,
        doi: '10.1016/j.cmet.2024.01.012',
        credibilityScore: 92,
        coiFlag: false,
        excerpt: 'Metformin treated individuals exhibited lower mortality rates (HR 0.76, 95% CI 0.69–0.85) relative to non-diabetic controls, suggesting anti-aging mechanisms beyond glucose control.'
      },
      {
        id: 's2',
        title: 'Metformin Blunts Skeletal Muscle Adaptations to Resistance Exercise Training in Older Adults (MASTERS Trial)',
        journal: 'Aging Cell',
        year: 2019,
        type: 'Double-Blind Randomized Controlled Trial (RCT)',
        sampleSize: 109,
        doi: '10.1111/acel.13039',
        credibilityScore: 96,
        coiFlag: false,
        excerpt: 'Metformin significantly attenuated gains in muscle mass and VO2 max following 14 weeks of progressive resistance training (p < 0.01).'
      },
      {
        id: 's3',
        title: 'Targeting Aging with Metformin (TAME): Trial Protocol and Intermediate Biomarkers',
        journal: 'Journals of Gerontology',
        year: 2023,
        type: 'Multi-Center Clinical Trial Protocol',
        sampleSize: 3000,
        doi: '10.1093/gerona/glad044',
        credibilityScore: 89,
        coiFlag: true,
        excerpt: 'Phase 3 trial evaluating composite time to incidence of major age-related chronic diseases in non-diabetic adults aged 65-79.'
      }
    ]
  },
  {
    id: 'query-2',
    categoryId: 'deeptech',
    title: 'Solid-State Battery Commercialization for Automotive EVs by 2028',
    subtitle: 'Anode-free lithium metal vs sulfide electrolytes scalability assessment',
    timestamp: '1 hour ago',
    consensusGrade: 'LOW',
    truthConfidence: 42,
    gradeDescription: 'Lab-scale energy density (450 Wh/kg) verified, but manufacturing yield, dendrite formation under fast charging, and stack pressure requirements prevent mass market adoption before 2029-2030.',
    query: 'Is Solid-State Battery (SSB) technology ready for mass-market ($100/kWh at pack level) EV automotive production by 2028?',
    summary: 'Current pilot-line solid-state cell outputs suffer from low yields (<60%), high uniaxial stack pressure requirements (>5 MPa), and interface degradation under sub-zero temperatures. Commercial pilot vehicles will exist by 2026-2027 in luxury low-volume tiers, but mass EV market parity will not occur prior to 2030.',
    
    proponentAgent: {
      thesis: 'Sulfide-based solid electrolytes demonstrate >10 mS/cm ionic conductivity at room temperature, exceeding liquid electrolytes and enabling 10-minute 80% fast charging.',
      keyPoints: [
        { text: 'Toyota & Idemitsu 2025 pilot line achieves 450 Wh/kg and 900 Wh/L cell level density.', strength: 'Pilot Demonstration' },
        { text: 'Elimination of flammable organic solvents vastly improves thermal runaway safety protocols.', strength: 'High Safety Margin' },
        { text: 'Roll-to-roll dry coating processes lower electrode drying energy consumption by 40%.', strength: 'Process Engineering' }
      ]
    },
    skepticAgent: {
      thesis: 'Lithium dendrite penetration along grain boundaries during high C-rate charging causes short circuits unless external mechanical pressure clamps (5-10 MPa) are applied.',
      keyPoints: [
        { text: 'Cost analysis shows sulfide electrolytes require expensive Li2S precursor syntheses ($250/kg vs $15/kg for liquid counterparts).', strength: 'Economic Barrier' },
        { text: 'Cell yields on automated high-speed roll-to-roll lines remain under 55% due to atmospheric humidity sensitivity.', strength: 'Yield Deficit' },
        { text: 'Cold weather conductivity drops by 80% at -20°C without active stack heating power draw.', strength: 'Operational Constraint' }
      ]
    },

    sensitivityDefaults: {
      minSampleSize: 50,
      recencyYears: 3,
      requireRCT: false,
      excludeCOI: true
    },

    sources: [
      {
        id: 's4',
        title: 'Manufacturing Cost and Scalability Bottlenecks of All-Solid-State Batteries',
        journal: 'Nature Energy',
        year: 2025,
        type: 'Techno-Economic Analysis',
        sampleSize: 15,
        doi: '10.1038/s41560-025-01492-w',
        credibilityScore: 94,
        coiFlag: false,
        excerpt: 'Even under aggressive learning curve assumptions, cell pack costs for sulfide-based SSBs will remain above $160/kWh through 2028.'
      },
      {
        id: 's5',
        title: 'Critical Mechanical Pressure Requirements to Suppress Lithium Dendrite Propagation in Solid Electrolytes',
        journal: 'ACS Energy Letters',
        year: 2024,
        type: 'Experimental Materials Science',
        sampleSize: 120,
        doi: '10.1021/acsenergylett.4c00219',
        credibilityScore: 91,
        coiFlag: false,
        excerpt: 'Uniaxially applied pressures above 7.5 MPa are required to prevent void formation at the lithium-electrolyte interface during fast discharge cycles.'
      }
    ]
  },
  {
    id: 'query-3',
    categoryId: 'governance',
    title: 'Generative AI Coding Tools & Enterprise Code Security Vulnerabilities',
    subtitle: 'Empirical analysis of 100,000+ AI-generated code snippets in production',
    timestamp: '3 hours ago',
    consensusGrade: 'HIGH',
    truthConfidence: 89,
    gradeDescription: 'Robust empirical evidence confirms AI-assisted developers introduce 17-24% more subtle security flaws (hardcoded secrets, improper input validation, logic errors) unless paired with automated static analysis (SAST) blocking gates.',
    query: 'Does the deployment of generative AI coding assistants (GitHub Copilot, Cursor) increase security vulnerabilities in enterprise production codebases?',
    summary: 'Empirical studies across 10,000+ developers demonstrate that while AI coding assistants boost raw task completion speed by 35-55%, developers using AI tools write significantly less secure code and express overconfidence in buggy implementations. Mandatory automated SAST/DAST CI/CD pipelines are required to offset security degradation.',
    
    proponentAgent: {
      thesis: 'AI tools increase code velocity and allow developers to focus on higher-level architectural security patterns.',
      keyPoints: [
        { text: '2024 GitHub developer survey reports 55% faster feature completion rate.', strength: 'Productivity Metric' },
        { text: 'Modern LLMs trained on RLHF security alignment exhibit 40% fewer OWASP Top-10 mistakes than 2022 models.', strength: 'Model Evolution' }
      ]
    },
    skepticAgent: {
      thesis: 'Developers systematically accept plausibly correct but flawed AI code recommendations, leading to security debt.',
      keyPoints: [
        { text: 'Stanford empirical trial (N=326 dev): Developers with AI access produced code with significantly more security vulnerabilities (p < 0.01) while believing their code was safer.', strength: 'Empirical Behavioral RCT' },
        { text: 'GitClear 2024 repository audit (153M lines): Code churn, copy-paste refactoring, and code duplication increased 2.3x post-Copilot adoption.', strength: 'Large-Scale Repository Study' },
        { text: 'AI models frequently recommend deprecated crypto libraries and unescaped SQL string concatenations in legacy framework contexts.', strength: 'Vulnerability Analysis' }
      ]
    },

    sensitivityDefaults: {
      minSampleSize: 500,
      recencyYears: 2,
      requireRCT: true,
      excludeCOI: false
    },

    sources: [
      {
        id: 's6',
        title: 'Do Users Write More Insecure Code With AI Assistants?',
        journal: 'IEEE Symposium on Security and Privacy (S&P)',
        year: 2023,
        type: 'Empirical Human-Subject Experiment',
        sampleSize: 326,
        doi: '10.1109/SP46215.2023.00078',
        credibilityScore: 98,
        coiFlag: false,
        excerpt: 'Participants with access to the AI assistant authored significantly more security vulnerabilities. Crucially, AI-assisted participants were more likely to believe they wrote secure code.'
      },
      {
        id: 's7',
        title: 'Coding on Copilot: 2024 Analysis of Code Quality and Refactoring Dynamics Across 153 Million Lines of Code',
        journal: 'GitClear Technical Report',
        year: 2024,
        type: 'Observational Repository Analytics',
        sampleSize: 153000000,
        doi: '10.5281/zenodo.10523491',
        credibilityScore: 92,
        coiFlag: false,
        excerpt: 'We observe a dramatic increase in added code vs deleted code (ratio rising to 4:1), with a corresponding drop in refactoring operations.'
      }
    ]
  }
];
