export const ASSETS = {
  heroEngineering: '/src/assets/images/hero_global_engineering_command_1794327218327.jpg',
  vettingLab: '/src/assets/images/vetting_architecture_lab_1794327220288.jpg',
  globalWorkforce: '/src/assets/images/global_workforce_compliance_1794327220932.jpg',
  candidateNetwork: '/src/assets/images/candidate_talent_network_1794327221852.jpg',
};

export interface SolutionItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  executiveChallenge: string;
  rapidBrainsArchitecture: string;
  timeToShortlist: string;
  typicalEngagement: string;
  costEfficiency: string;
  complianceModel: string;
  keyDeliverables: string[];
  idealFor: string[];
  rolesCovered: string[];
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  faqs: { q: string; a: string }[];
}

export interface TechnologyItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  architecturalFocus: string;
  availableTalentCount: string;
  avgTimeToMatch: string;
  senioritySplit: string;
  specializations: string[];
  coreStack: string[];
  sampleRoles: {
    role: string;
    experience: string;
    rateRange: string;
    availability: string;
    coreCompetencies: string;
  }[];
  vettingBenchmark: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  complianceStandards: string;
  summary: string;
  engineeringChallenges: string[];
  deployedSolutions: string[];
  benchmarkOutcome: string;
  keyRoles: string[];
}

export interface CaseStudyItem {
  id: string;
  clientCategory: string;
  region: string;
  industry: string;
  engagementModel: string;
  headline: string;
  challenge: string;
  solution: string;
  quantifiedOutcomes: { metric: string; label: string }[];
  stackUsed: string[];
  quote: string;
  authorRole: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  category: 'Case Studies' | 'Insights' | 'Guides' | 'Blogs';
  title: string;
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  fullContent: string[];
  author: string;
}

export interface OpenRoleItem {
  id: string;
  title: string;
  practice: string;
  location: string;
  timezone: string;
  engagementType: string;
  experienceLevel: string;
  compensationRange: string;
  stackSummary: string;
  description: string;
}

export interface HeroDeploymentPlacement {
  id: string;
  role: string;
  practice: string;
  clientIndustry: string;
  destinationHub: string;
  slaHours: number;
}

export interface HeroDeploymentCounterData {
  baseCount: number;
  formattedMilestone: string;
  headlineLabel: string;
  subLabel: string;
  activePodsCount: number;
  retentionRate: string;
  animationDurationMs: number;
  liveCycleIntervalMs: number;
  recentDeployments: HeroDeploymentPlacement[];
}

export const HERO_DEPLOYMENT_COUNTER_DATA: HeroDeploymentCounterData = {
  baseCount: 12500,
  formattedMilestone: '12,500+',
  headlineLabel: 'Engineers Successfully Deployed',
  subLabel: 'Verified placements across 1,500+ enterprise clients & 85+ EOR jurisdictions',
  activePodsCount: 410,
  retentionRate: '96.4%',
  animationDurationMs: 1400,
  liveCycleIntervalMs: 6500,
  recentDeployments: [
    {
      id: 'dep-01',
      role: 'Principal LLM & RAG Architect',
      practice: 'AI & Machine Learning',
      clientIndustry: 'Tier-1 FinTech · New York',
      destinationHub: 'Bengaluru Hub',
      slaHours: 18,
    },
    {
      id: 'dep-02',
      role: 'Staff Kubernetes & FinOps Engineer',
      practice: 'Cloud & DevOps',
      clientIndustry: 'Enterprise B2B SaaS · London',
      destinationHub: 'Kraków Hub',
      slaHours: 22,
    },
    {
      id: 'dep-03',
      role: 'Lead Snowflake & dbt Data Architect',
      practice: 'Data Engineering',
      clientIndustry: 'Digital Health Platform · Boston',
      destinationHub: 'São Paulo Hub',
      slaHours: 19,
    },
    {
      id: 'dep-04',
      role: 'Senior Go & Distributed Systems Engineer',
      practice: 'Software Engineering',
      clientIndustry: 'Global Payments Infrastructure · Frankfurt',
      destinationHub: 'Kochi Hub',
      slaHours: 16,
    },
    {
      id: 'dep-05',
      role: 'Zero-Trust Cloud Security Architect',
      practice: 'Cybersecurity',
      clientIndustry: 'Regulated InsurTech · Zurich',
      destinationHub: 'Lisbon Hub',
      slaHours: 21,
    },
  ],
};

export const VERIFIED_METRICS = [
  {
    value: '500,000+',
    label: 'Pre-Vetted Engineering Profiles',
    detail: 'Assessed across coding, architecture, and communication',
  },
  {
    value: '24 Hours',
    label: 'Shortlist Delivery SLA',
    detail: 'Role-calibrated technical candidates ready for interview',
  },
  {
    value: '85+ Countries',
    label: 'Global Workforce Footprint',
    detail: 'Compliant remote hiring, payroll, and EOR coverage',
  },
  {
    value: 'Up to 60%',
    label: 'Total Workforce Cost Reduction',
    detail: 'Zero entity setup, statutory overhead, or recruitment delay',
  },
];


export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'it-staff-augmentation',
    slug: '/solutions/it-staff-augmentation',
    index: '01',
    title: 'IT Staff Augmentation',
    shortTitle: 'IT Staff Augmentation',
    tagline: 'Embed pre-vetted senior engineers directly into your existing sprint teams within 24 hours.',
    summary:
      'Eliminate engineering bottlenecks without long-term fixed overhead. RapidBrains augments your internal product and platform teams with domain-vetted software engineers, cloud architects, and AI specialists who operate inside your Jira, GitHub, and Slack workflows aligned to your time zone.',
    executiveChallenge:
      'Enterprise product roadmaps stall when domestic technical hiring takes 90 to 120 days per senior engineer, driving up burn rates and delaying critical releases.',
    rapidBrainsArchitecture:
      'We maintain an active bench and pre-assessed talent graph of 500,000+ engineers. Our principal architects calibrate technical requirements in a 30-minute discovery call and deliver 3 to 5 interview-ready profiles within 24 hours.',
    timeToShortlist: '24 Hours',
    typicalEngagement: '3 to 24+ Months (Flexible Hourly or Monthly)',
    costEfficiency: '45%–60% lower total cost vs. domestic hiring',
    complianceModel: 'Full IP assignment, NDA protection, ISO/IEC 27001 security controls',
    keyDeliverables: [
      'Role-calibrated candidate shortlist within 24 hours',
      'Direct integration into your CI/CD, Agile sprints, and Slack channels',
      'Dedicated Customer Success Manager & HRMS productivity tracking portal',
      '14-day risk-free replacement guarantee on every deployed engineer',
    ],
    idealFor: [
      'CTOs accelerating product delivery roadmaps',
      'VPs of Engineering filling specialized skill gaps in AI, Cloud, or Rust/Go',
      'Series B+ scale-ups bridging domestic hiring delays',
    ],
    rolesCovered: [
      'Senior Full-Stack Engineers',
      'Platform & SRE Architects',
      'Applied AI / LLM Engineers',
      'Principal Data Engineers',
      'QA Automation Architects',
    ],
    seoTitle: 'IT Staff Augmentation Services | Hire Vetted Engineers in 24h – RapidBrains',
    seoDescription:
      'Scale your engineering velocity with RapidBrains IT staff augmentation. Access 500,000+ pre-vetted remote developers across 85+ countries with 24-hour matching.',
    primaryKeyword: 'IT staff augmentation services',
    secondaryKeywords: ['enterprise staff augmentation', 'on-demand software engineers', 'remote IT staffing'],
    faqs: [
      {
        q: 'How do augmented engineers integrate with our internal engineering security policies?',
        a: 'Every RapidBrains engineer signs direct IP assignment and strict NDAs prior to onboarding, operates under ISO/IEC 27001 security protocols, and connects exclusively through your approved VPN, VDI, or MDM-managed environment.',
      },
      {
        q: 'Can we scale our augmented team up or down based on quarterly release cycles?',
        a: 'Yes. Engagements support elastic scaling with transparent monthly or hourly billing and flexible notice periods tailored to your release milestones.',
      },
    ],
  },
  {
    id: 'dedicated-development-teams',
    slug: '/solutions/dedicated-development-teams',
    index: '02',
    title: 'Dedicated Development Teams',
    shortTitle: 'Dedicated Teams',
    tagline: 'Deploy autonomous, cross-functional engineering pods engineered for end-to-end delivery.',
    summary:
      'When you need to build a new product line, modernize legacy core systems, or establish an offshore engineering center without operational friction, RapidBrains assembles cohesive pods comprising Principal Architects, Senior Engineers, QA Automation, and Technical Product Managers.',
    executiveChallenge:
      'Assembling a multi-disciplinary squad from scratch requires vetting dozens of candidates and spending months aligning team dynamics and delivery rituals.',
    rapidBrainsArchitecture:
      'We deploy pre-aligned engineering pods backed by our 16+ years of HashRoot enterprise delivery heritage. You retain complete architectural and roadmap authority while we manage workspace infrastructure, HRMS telemetry, retention, and statutory administration.',
    timeToShortlist: '48 to 72 Hours for Full Pod',
    typicalEngagement: '6 to 36+ Months (Managed Pod Retainer)',
    costEfficiency: 'Up to 60% TCO reduction vs. building an in-house squad',
    complianceModel: 'Dedicated VLAN/VPN, SOC2/ISO-aligned environments, 100% IP ownership',
    keyDeliverables: [
      'Complete squad topology: Tech Lead, Senior Developers, DevOps, and QA',
      'Real-time velocity, timesheet, and task telemetry via RapidBrains HRMS Portal',
      'Co-located or time-zone synchronized distributed pod options',
      'Optional Build-Operate-Transfer (BOT) transition pathway',
    ],
    idealFor: [
      'Enterprises launching new digital products or AI platforms',
      'CIOs executing legacy monolith-to-microservices modernization',
      'Private equity portfolio companies standardizing technology execution',
    ],
    rolesCovered: [
      'Pod Technical Lead / Solutions Architect',
      'Frontend & Backend Product Engineers',
      'Cloud Infrastructure & DevSecOps Engineers',
      'SDET & Performance Engineers',
      'Technical Scrum Master / Delivery Manager',
    ],
    seoTitle: 'Dedicated Development Teams | Autonomous Engineering Pods – RapidBrains',
    seoDescription:
      'Hire dedicated software development teams and cross-functional engineering pods. Pre-vetted architects, developers, and QA deployed in 72 hours.',
    primaryKeyword: 'dedicated development teams',
    secondaryKeywords: ['hire dedicated software team', 'offshore development pod', 'managed engineering teams'],
    faqs: [
      {
        q: 'Who owns the source code and intellectual property created by a dedicated team?',
        a: 'Your organization retains 100% ownership of all source code, architectural artifacts, models, and intellectual property from day one under our Master Services Agreement.',
      },
      {
        q: 'How do we monitor daily output and engineering velocity across a dedicated pod?',
        a: 'Alongside your native GitHub/GitLab and Jira metrics, clients receive full access to the RapidBrains HRMS & Team Management Portal for real-time attendance, task logs, and sprint reporting.',
      },
    ],
  },
  {
    id: 'contract-staffing',
    slug: '/solutions/contract-staffing',
    index: '03',
    title: 'Contract IT Staffing',
    shortTitle: 'Contract Staffing',
    tagline: 'High-velocity contract and contract-to-hire specialists for time-critical technology initiatives.',
    summary:
      'Address urgent system migrations, regulatory compliance deadlines, and seasonal workload spikes with precision-matched IT contractors available on hourly, monthly, or fixed-duration terms.',
    executiveChallenge:
      'Short-term digital transformation programs require specialized domain contractors immediately, yet traditional staffing agencies flood hiring managers with unscreened resumes.',
    rapidBrainsArchitecture:
      'Every contract candidate undergoes our 5-stage technical and architectural screening before reaching your desk, ensuring immediate contributor readiness from week one.',
    timeToShortlist: '24 Hours',
    typicalEngagement: '1 to 12 Months (Hourly, Part-Time, or Full-Time Contract)',
    costEfficiency: 'Zero permanent benefits overhead; pay strictly for productive hours',
    complianceModel: 'Statutory contractor classification shield & automated invoicing',
    keyDeliverables: [
      'Pre-screened domain specialists ready for immediate deployment',
      'Flexible hourly ($15–$65+/hr depending on seniority & niche) or monthly billing',
      'Automated timesheet approval and consolidated multi-currency invoicing',
      'Seamless contract-to-hire conversion option',
    ],
    idealFor: [
      'IT Directors managing cloud migrations or ERP rollouts',
      'Security leaders executing penetration testing or compliance audits',
      'Engineering managers covering parental leave or peak release cycles',
    ],
    rolesCovered: [
      'Cloud Migration Specialists',
      'SAP / Salesforce / Workday Consultants',
      'Penetration Testers & SOC Analysts',
      'Mobile & Cross-Platform Developers',
    ],
    seoTitle: 'Contract IT Staffing & Technical Contractors | RapidBrains',
    seoDescription:
      'Flexible contract IT staffing and contract-to-hire technology professionals. Deploy vetted developers and IT consultants within 24 hours.',
    primaryKeyword: 'contract IT staffing',
    secondaryKeywords: ['IT contract staffing agency', 'contract-to-hire developers', 'hourly software engineers'],
    faqs: [
      {
        q: 'Can we convert a contract engineer into a full-time permanent employee later?',
        a: 'Yes. We offer a structured contract-to-hire pathway that allows you to evaluate an engineer on real production workloads before transitioning them to permanent status.',
      },
    ],
  },
  {
    id: 'remote-developer-hiring',
    slug: '/solutions/remote-developer-hiring',
    index: '04',
    title: 'Remote Developer Hiring',
    shortTitle: 'Remote Developers',
    tagline: 'Source, vet, and onboard elite remote developers across 85+ countries with zero border friction.',
    summary:
      'Tap into global engineering hubs across India, Eastern Europe, Latin America, and Southeast Asia. RapidBrains combines deep technical assessment with full remote workplace readiness verification.',
    executiveChallenge:
      'Hiring remote developers internationally exposes companies to inconsistent code quality, time-zone misalignment, and cross-border payroll complexity.',
    rapidBrainsArchitecture:
      'Our remote engineering marketplace filters for both technical mastery and asynchronous remote execution, paired with built-in HRMS work tracking and global payroll.',
    timeToShortlist: '24 Hours',
    typicalEngagement: 'Full-Time Remote or Long-Term Retainer',
    costEfficiency: 'Up to 60% savings on senior engineering compensation',
    complianceModel: 'Localized remote contracts, background verification, and device security',
    keyDeliverables: [
      '4+ hours minimum daily time-zone overlap guarantee (US EST/PST, UK GMT, EU CET)',
      'Verified coding assessments, system design scores, and communication recordings',
      'Integrated HRMS portal for daily check-ins, task tracking, and productivity insights',
      'Complete hardware, security, and statutory onboarding support',
    ],
    idealFor: [
      'Remote-first startups and high-growth SaaS companies',
      'Founders building high-output engineering teams on capital-efficient budgets',
      'Global enterprises expanding distributed engineering capacity',
    ],
    rolesCovered: [
      'React / Next.js / TypeScript Engineers',
      'Python / Go / Rust Backend Systems Engineers',
      'LLM / RAG / PyTorch AI Engineers',
      'Kubernetes / Terraform Cloud Engineers',
    ],
    seoTitle: 'Hire Remote Developers in 24 Hours | Top Vetted Talent – RapidBrains',
    seoDescription:
      'Hire pre-vetted remote developers from a pool of 500,000+ engineers across 85+ countries. Save up to 60% on hiring costs with 24-hour talent matching.',
    primaryKeyword: 'hire remote developers',
    secondaryKeywords: ['remote software developers for hire', 'offshore developer marketplace', 'hire vetted engineers'],
    faqs: [
      {
        q: 'How do you guarantee time-zone alignment for US and European teams?',
        a: 'During scoping, you specify your required synchronous overlap window (e.g., 4 hours overlap with US Eastern or UK GMT). We exclusively match candidates verified to work those shifts.',
      },
    ],
  },
  {
    id: 'global-workforce-solutions',
    slug: '/solutions/global-workforce-solutions',
    index: '05',
    title: 'Global Workforce & EOR Solutions',
    shortTitle: 'Global EOR & Compliance',
    tagline: 'Hire anywhere in 85+ countries without establishing local legal entities or branch offices.',
    summary:
      'RapidBrains acts as your compliant Employer of Record (EOR) and legal shield. We handle localized employment contracts, multi-currency payroll, statutory tax withholdings, employee benefits, and local labor law compliance across 85+ jurisdictions.',
    executiveChallenge:
      'Setting up a foreign subsidiary takes 6 to 12 months and tens of thousands of dollars in legal and accounting fees, while misclassifying international contractors risks severe regulatory penalties.',
    rapidBrainsArchitecture:
      'Our EOR infrastructure absorbs all local statutory liability, onboarding your chosen global talent in days with country-specific compliant contracts and automated payroll administration.',
    timeToShortlist: '48 Hours for EOR Onboarding',
    typicalEngagement: 'Ongoing Global Employment & Payroll Management',
    costEfficiency: 'Eliminates $50K–$150K+ in foreign entity incorporation & legal overhead',
    complianceModel: '100% local labor law adherence, GDPR, HIPAA, and ISO/IEC 27001 certified',
    keyDeliverables: [
      'Compliant local employment contracts tailored to 85+ country jurisdictions',
      'Automated multi-currency payroll, tax filings, pensions, and statutory benefits',
      'Worker misclassification protection and IP transfer enforcement',
      'Centralized workforce dashboard for contracts, invoices, and compliance documentation',
    ],
    idealFor: [
      'HR Directors & People Ops scaling international headcount',
      'CFOs and Legal Counsel mitigating contractor misclassification risk',
      'Enterprises establishing Global Capability Centers (GCCs) in India and emerging hubs',
    ],
    rolesCovered: [
      'Global Engineering & Product Teams',
      'Regional Technical Support & Customer Success',
      'International R&D Hubs and GCC Pods',
    ],
    seoTitle: 'Global Workforce Solutions & Employer of Record (EOR) – RapidBrains',
    seoDescription:
      'Hire and pay remote employees across 85+ countries without a local entity. RapidBrains EOR manages global payroll, tax compliance, and local labor laws.',
    primaryKeyword: 'global workforce solutions',
    secondaryKeywords: ['Employer of Record IT staffing', 'global payroll compliance', 'hire employees without local entity'],
    faqs: [
      {
        q: 'Does RapidBrains handle statutory benefits, tax withholdings, and termination compliance?',
        a: 'Yes. As the legal Employer of Record, RapidBrains calculates and remits all local income taxes, social security contributions, mandatory health benefits, and manages compliant offboarding.',
      },
    ],
  },
  {
    id: 'permanent-recruitment',
    slug: '/solutions/permanent-recruitment',
    index: '06',
    title: 'Permanent Technical Recruitment',
    shortTitle: 'Permanent Recruitment',
    tagline: 'Executive and principal-level technical headhunting for mission-critical permanent roles.',
    summary:
      'Build your core long-term technology leadership and architectural foundation. Our specialized technical headhunters and domain architects evaluate passive talent for Principal Engineer, Staff Architect, VP of Engineering, and specialized AI research positions.',
    executiveChallenge:
      'Top 1% passive engineering leaders rarely apply to job boards, and generalist recruiters lack the technical depth to evaluate distributed systems or AI architecture expertise.',
    rapidBrainsArchitecture:
      'We combine proprietary talent intelligence across 500,000+ profiles with peer-level architectural interviews conducted by practicing domain specialists.',
    timeToShortlist: '5 to 7 Business Days',
    typicalEngagement: 'Success-Based Executive & Technical Search',
    costEfficiency: '78% reduction in internal engineering interview hours per hire',
    complianceModel: 'Comprehensive background, credential, and reference verification',
    keyDeliverables: [
      'Peer-vetted scorecard covering system design, code quality, and leadership impact',
      'Market compensation benchmarking and offer negotiation management',
      '90-day placement retention guarantee',
    ],
    idealFor: [
      'Talent Acquisition Leaders hiring hard-to-fill Staff/Principal Engineers',
      'Founders recruiting founding engineers and VPs of Engineering',
    ],
    rolesCovered: [
      'VP of Engineering / Head of AI',
      'Principal Distributed Systems Architects',
      'Staff Security & Cloud Architects',
      'Lead Data Scientists',
    ],
    seoTitle: 'Technology Recruitment Services & Technical Headhunting – RapidBrains',
    seoDescription:
      'Permanent technology recruitment and executive IT search. Hire pre-assessed Principal Engineers, AI Architects, and Engineering Leaders.',
    primaryKeyword: 'technology recruitment services',
    secondaryKeywords: ['technical recruitment agency', 'IT executive search', 'permanent developer recruitment'],
    faqs: [
      {
        q: 'What differentiates RapidBrains permanent recruitment from traditional staffing agencies?',
        a: 'Every shortlisted candidate is technically interviewed by a senior practicing architect in their exact stack prior to submission, accompanied by a detailed engineering scorecard.',
      },
    ],
  },
  {
    id: 'recruitment-process-outsourcing',
    slug: '/solutions/recruitment-process-outsourcing',
    index: '07',
    title: 'Recruitment Process Outsourcing (RPO)',
    shortTitle: 'Enterprise RPO',
    tagline: 'End-to-end embedded technical talent acquisition engines for high-growth enterprises and GCCs.',
    summary:
      'When scaling 20 to 200+ engineers across a fiscal year, RapidBrains embeds a dedicated RPO squad—complete with technical sourcers, assessment platforms, and interview panelists—operating seamlessly under your employer brand.',
    executiveChallenge:
      'Rapid multi-team expansion overwhelms internal HR teams and pulls senior engineers away from product development to conduct hundreds of first-round technical screens.',
    rapidBrainsArchitecture:
      'Our RPO engine handles employer branding, talent sourcing, automated coding tests, and first-round architectural interviews, delivering only final-round candidates to your hiring managers.',
    timeToShortlist: 'Continuous Pipeline SLA',
    typicalEngagement: '6 to 36 Months (Dedicated RPO Program)',
    costEfficiency: 'Reduces cost-per-hire by up to 50% while reclaiming 400+ engineering hours',
    complianceModel: 'ATS integration, EEOC/GDPR compliant hiring workflows, SLA-backed delivery',
    keyDeliverables: [
      'Dedicated technical sourcers and architectural interview panelists',
      'Direct integration with Greenhouse, Lever, Workday, or Ashby ATS',
      'Weekly funnel analytics: pass-through rates, time-to-offer, and diversity metrics',
    ],
    idealFor: [
      'Global Enterprises establishing or expanding Global Capability Centers (GCCs)',
      'Hyper-growth technology companies post-Series B/C scaling 30+ roles',
    ],
    rolesCovered: [
      'Multi-Squad Full-Stack & Cloud Engineering Pipelines',
      'Enterprise Data, AI, and Cybersecurity Practice Expansion',
    ],
    seoTitle: 'Technical RPO & Recruitment Process Outsourcing | RapidBrains',
    seoDescription:
      'Scale enterprise technical hiring with RapidBrains Recruitment Process Outsourcing (RPO). Dedicated sourcing, technical vetting, and GCC ramp-up.',
    primaryKeyword: 'technical recruitment process outsourcing',
    secondaryKeywords: ['IT RPO services', 'enterprise recruitment outsourcing', 'GCC talent acquisition partner'],
    faqs: [
      {
        q: 'Can RapidBrains RPO operate directly inside our existing Applicant Tracking System (ATS)?',
        a: 'Yes. Our RPO specialists work directly within your Workday, Greenhouse, Lever, or custom ATS environment under your company domain and employer brand.',
      },
    ],
  },
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    id: 'ai-machine-learning',
    slug: '/technologies/ai-machine-learning',
    index: '01',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & Machine Learning',
    summary:
      'Production-grade AI engineers specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), multi-agent orchestration, fine-tuning, and scalable MLOps pipelines.',
    architecturalFocus:
      'Moving generative and predictive AI from experimental notebooks into low-latency, cost-controlled, enterprise-secure production environments.',
    availableTalentCount: '42,000+ Vetted Specialists',
    avgTimeToMatch: '24 Hours',
    senioritySplit: '68% Senior (5–8 yrs) · 24% Principal/Lead (8+ yrs)',
    specializations: [
      'LLM Fine-Tuning & RLHF (Llama, Mistral, Gemini, OpenAI)',
      'Enterprise RAG Architectures & Vector Databases (Pinecone, Weaviate, Milvus, pgvector)',
      'Agentic Workflows & Orchestration (LangGraph, CrewAI, Semantic Kernel)',
      'Computer Vision, NLP & Deep Learning (PyTorch, TensorFlow, ONNX, TensorRT)',
      'MLOps & Model Serving Infrastructure (vLLM, Triton, Kubeflow, MLflow)',
    ],
    coreStack: ['Python', 'PyTorch', 'vLLM', 'LangGraph', 'CUDA', 'Pinecone', 'pgvector', 'Kubeflow', 'AWS Bedrock', 'Vertex AI'],
    sampleRoles: [
      {
        role: 'Principal Applied AI / LLM Architect',
        experience: '8+ Years',
        rateRange: '$45 – $75 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Production RAG, vLLM inference optimization, multi-agent systems, guardrails & evaluation',
      },
      {
        role: 'Senior Machine Learning Engineer',
        experience: '5+ Years',
        rateRange: '$30 – $50 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'PyTorch model training, feature stores, distributed training, low-latency inference APIs',
      },
      {
        role: 'MLOps & AI Infrastructure Engineer',
        experience: '5+ Years',
        rateRange: '$32 – $52 / hr',
        availability: 'Within 48h',
        coreCompetencies: 'Kubernetes GPU scheduling, Triton Inference Server, CI/CD for ML, telemetry & drift monitoring',
      },
    ],
    vettingBenchmark:
      'Assessed on live RAG latency optimization, token-cost architecture, hallucination evaluation frameworks, and production Python systems design.',
    seoTitle: 'Hire AI Developers & Machine Learning Engineers in 24h – RapidBrains',
    seoDescription:
      'Hire pre-vetted AI developers, LLM architects, and MLOps engineers. Deploy specialists in PyTorch, RAG, LangGraph, and production AI within 24 hours.',
    primaryKeyword: 'AI developers for hire',
  },
  {
    id: 'cloud-devops',
    slug: '/technologies/cloud-devops',
    index: '02',
    title: 'Cloud & DevOps Engineering',
    shortTitle: 'Cloud & DevOps',
    summary:
      'Certified cloud architects, Site Reliability Engineers (SREs), and platform engineers designing high-availability, multi-region infrastructure across AWS, Google Cloud, and Azure.',
    architecturalFocus:
      'Infrastructure-as-Code (IaC), zero-downtime CI/CD automation, Kubernetes cluster federation, FinOps cloud cost optimization, and DevSecOps compliance.',
    availableTalentCount: '78,000+ Vetted Specialists',
    avgTimeToMatch: '24 Hours',
    senioritySplit: '72% Senior · 20% Staff/Principal',
    specializations: [
      'Multi-Cloud Architecture (AWS, Google Cloud Platform, Microsoft Azure)',
      'Kubernetes & Container Orchestration (EKS, GKE, AKS, Helm, Istio, Cilium)',
      'Infrastructure as Code & GitOps (Terraform, OpenTofu, Pulumi, ArgoCD, Ansible)',
      'Observability & SRE (Prometheus, Grafana, OpenTelemetry, Datadog, PagerDuty)',
      'FinOps & Cloud Security Posture Management (CSPM)',
    ],
    coreStack: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'Go', 'OpenTelemetry', 'Prometheus'],
    sampleRoles: [
      {
        role: 'Principal Cloud & Platform Architect',
        experience: '9+ Years',
        rateRange: '$40 – $68 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Multi-region high availability, internal developer platforms (IDP), FinOps cost reduction',
      },
      {
        role: 'Senior Site Reliability Engineer (SRE)',
        experience: '6+ Years',
        rateRange: '$28 – $48 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Kubernetes production operations, SLO/error budgets, chaos engineering, incident automation',
      },
    ],
    vettingBenchmark:
      'Evaluated via hands-on Terraform state debugging, Kubernetes network policy hardening, and distributed outage root-cause scenarios.',
    seoTitle: 'Cloud Engineers & DevOps Architects for Hire | RapidBrains',
    seoDescription:
      'Hire certified AWS, GCP, and Azure cloud engineers, SREs, and Kubernetes architects within 24 hours. Pre-vetted DevOps talent across 85+ countries.',
    primaryKeyword: 'cloud engineers for hire',
  },
  {
    id: 'software-engineering',
    slug: '/technologies/software-engineering',
    index: '03',
    title: 'Software & Product Engineering',
    shortTitle: 'Software Engineering',
    summary:
      'Full-stack, backend, frontend, and mobile systems engineers building resilient, high-throughput web applications, distributed microservices, and native mobile experiences.',
    architecturalFocus:
      'Clean domain-driven design, event-driven microservices, high-concurrency APIs, accessible design systems, and sub-second web performance.',
    availableTalentCount: '210,000+ Vetted Specialists',
    avgTimeToMatch: '24 Hours',
    senioritySplit: '65% Senior · 25% Tech Lead / Architect',
    specializations: [
      'Modern Frontend & Web Platforms (React 19, Next.js, TypeScript, Vue, Angular, WebAssembly)',
      'High-Concurrency Backend Systems (Node.js, Go, Rust, Java Spring Boot, .NET Core, Python)',
      'Distributed APIs & Event Streaming (GraphQL, gRPC, Apache Kafka, RabbitMQ, Redis)',
      'Native & Cross-Platform Mobile (Swift/iOS, Kotlin/Android, React Native, Flutter)',
    ],
    coreStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'Rust', 'Java', 'Python', 'PostgreSQL', 'Kafka', 'GraphQL'],
    sampleRoles: [
      {
        role: 'Staff Distributed Systems Engineer (Go / Rust)',
        experience: '8+ Years',
        rateRange: '$38 – $62 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Low-latency microservices, gRPC, Kafka event sourcing, high-throughput PostgreSQL',
      },
      {
        role: 'Senior Full-Stack Product Engineer (React / TypeScript / Node)',
        experience: '5+ Years',
        rateRange: '$22 – $42 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'End-to-end SaaS architecture, design systems, API design, automated testing',
      },
    ],
    vettingBenchmark:
      'Tested on concurrency control, database query optimization, clean architecture patterns, and production code review rigor.',
    seoTitle: 'Hire Software Engineering Talent & Full-Stack Developers – RapidBrains',
    seoDescription:
      'Access 210,000+ pre-vetted software engineers in React, Node.js, Python, Go, Java, and Rust. Deploy remote developers within 24 hours.',
    primaryKeyword: 'software engineering talent',
  },
  {
    id: 'data-engineering',
    slug: '/technologies/data-engineering',
    index: '04',
    title: 'Data Engineering & Analytics',
    shortTitle: 'Data Engineering',
    summary:
      'Data platform architects and analytics engineers building petabyte-scale data lakehouses, real-time streaming pipelines, and enterprise data governance frameworks.',
    architecturalFocus:
      'Medallion lakehouse architectures, real-time CDC streaming, data lineage & governance, and AI-ready data pipelines.',
    availableTalentCount: '54,000+ Vetted Specialists',
    avgTimeToMatch: '24 Hours',
    senioritySplit: '70% Senior · 22% Principal Data Architect',
    specializations: [
      'Cloud Data Warehouses & Lakehouses (Snowflake, Databricks, BigQuery, Amazon Redshift, Apache Iceberg)',
      'Real-Time Stream Processing (Apache Kafka, Apache Flink, Spark Structured Streaming)',
      'Data Transformation & Orchestration (dbt, Apache Airflow, Dagster, Prefect)',
      'Data Governance, Cataloging & Quality (Unity Catalog, Great Expectations, Monte Carlo)',
    ],
    coreStack: ['Databricks', 'Snowflake', 'Apache Spark', 'Kafka', 'dbt', 'Airflow', 'Python', 'SQL', 'BigQuery', 'Iceberg'],
    sampleRoles: [
      {
        role: 'Principal Data Platform Architect (Databricks / Snowflake)',
        experience: '8+ Years',
        rateRange: '$40 – $65 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Medallion lakehouse design, Spark performance tuning, enterprise data governance',
      },
      {
        role: 'Senior Analytics & dbt Engineer',
        experience: '5+ Years',
        rateRange: '$25 – $44 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Dimensional modeling, dbt Core/Cloud, Airflow orchestration, BI semantic layers',
      },
    ],
    vettingBenchmark:
      'Evaluated on complex SQL window optimization, Spark shuffle partitioning, schema evolution, and idempotent pipeline design.',
    seoTitle: 'Hire Data Engineers | Snowflake, Databricks & Spark Experts – RapidBrains',
    seoDescription:
      'Hire pre-vetted data engineers and lakehouse architects. Scale your Snowflake, Databricks, Kafka, and dbt data pipelines within 24 hours.',
    primaryKeyword: 'hire data engineers',
  },
  {
    id: 'cybersecurity',
    slug: '/technologies/cybersecurity',
    index: '05',
    title: 'Cybersecurity & Zero-Trust',
    shortTitle: 'Cybersecurity',
    summary:
      'Application security engineers, cloud security architects, penetration testers, and GRC specialists protecting enterprise infrastructure and ensuring regulatory compliance.',
    architecturalFocus:
      'Zero-trust network architecture, DevSecOps shift-left automation, SOC modernization, and ISO 27001 / SOC 2 / HIPAA / GDPR compliance.',
    availableTalentCount: '28,000+ Vetted Specialists',
    avgTimeToMatch: '24 to 48 Hours',
    senioritySplit: '75% Senior Certified Professionals (CISSP, OSCP, CISM)',
    specializations: [
      'Application Security & DevSecOps (SAST/DAST, Threat Modeling, Supply Chain Security)',
      'Offensive Security & Penetration Testing (OSCP-certified Red Teaming, API & Cloud Pentesting)',
      'Cloud Security & IAM (Zero-Trust, Okta/Entra ID, AWS/GCP Security Hardening)',
      'SecOps, SIEM/SOAR & Incident Response (CrowdStrike, Sentinel, Splunk)',
    ],
    coreStack: ['CrowdStrike', 'Microsoft Sentinel', 'Splunk', 'Burp Suite', 'Terraform Security', 'Snyk', 'Wiz', 'Okta'],
    sampleRoles: [
      {
        role: 'Principal Cloud Security & Zero-Trust Architect',
        experience: '8+ Years',
        rateRange: '$42 – $70 / hr',
        availability: 'Within 24h',
        coreCompetencies: 'Multi-cloud IAM, Wiz/Prisma CSPM, zero-trust segmentation, SOC 2 / ISO 27001 readiness',
      },
      {
        role: 'Senior Application Security / Pentest Engineer (OSCP)',
        experience: '5+ Years',
        rateRange: '$32 – $54 / hr',
        availability: 'Within 48h',
        coreCompetencies: 'Web/API penetration testing, CI/CD security gates, OWASP Top 10 & LLM security',
      },
    ],
    vettingBenchmark:
      'Rigorous verification of active industry certifications (CISSP, OSCP, AWS Security Specialty), live vulnerability triage, and clean background clearances.',
    seoTitle: 'Hire Cybersecurity Engineers & DevSecOps Specialists – RapidBrains',
    seoDescription:
      'Deploy certified cybersecurity engineers, penetration testers, and zero-trust cloud architects in 24–48 hours. ISO/IEC 27001 aligned security staffing.',
    primaryKeyword: 'hire cybersecurity engineers',
  },
  {
    id: 'enterprise-applications',
    slug: '/technologies/enterprise-applications',
    index: '06',
    title: 'Enterprise Applications (ERP & CRM)',
    shortTitle: 'Enterprise Apps',
    summary:
      'Certified functional and technical consultants across SAP S/4HANA, Salesforce, ServiceNow, Workday, and Oracle Cloud driving global enterprise operations.',
    architecturalFocus:
      'Core ERP modernization, custom Apex/ABAP engineering, cross-platform enterprise middleware integration (MuleSoft, Boomi), and workflow automation.',
    availableTalentCount: '46,000+ Vetted Specialists',
    avgTimeToMatch: '24 to 48 Hours',
    senioritySplit: '70% Senior Certified Consultants & Technical Architects',
    specializations: [
      'SAP Ecosystem (SAP S/4HANA, ABAP, BTP, Fiori, Ariba, SuccessFactors)',
      'Salesforce Platform (Sales/Service Cloud, Apex, LWC, MuleSoft, Agentforce)',
      'ServiceNow & ITOM/ITSM Enterprise Workflows',
      'Oracle Cloud ERP, NetSuite & Microsoft Dynamics 365',
    ],
    coreStack: ['SAP S/4HANA', 'Salesforce Apex', 'MuleSoft', 'ServiceNow', 'Workday', 'Oracle Cloud', 'Microsoft Dynamics 365'],
    sampleRoles: [
      {
        role: 'Principal Salesforce Technical Architect',
        experience: '8+ Years',
        rateRange: '$38 – $64 / hr',
        availability: 'Within 24h',
        coreCompetencies: 'Multi-org enterprise architecture, LWC/Apex, MuleSoft ERP integration',
      },
      {
        role: 'Senior SAP S/4HANA & BTP Consultant',
        experience: '7+ Years',
        rateRange: '$36 – $60 / hr',
        availability: 'Within 48h',
        coreCompetencies: 'Greenfield/Brownfield S/4HANA migration, ABAP RAP, SAP Integration Suite',
      },
    ],
    vettingBenchmark:
      'Vendor certification validation plus real-world enterprise integration architecture case assessments.',
    seoTitle: 'Hire SAP, Salesforce & ServiceNow Consultants | RapidBrains',
    seoDescription:
      'Hire certified SAP S/4HANA, Salesforce, ServiceNow, and Workday technical consultants and architects within 24–48 hours.',
    primaryKeyword: 'enterprise application consultants',
  },
  {
    id: 'quality-engineering',
    slug: '/technologies/quality-engineering',
    index: '07',
    title: 'Quality Engineering & SDET',
    shortTitle: 'Quality Engineering',
    summary:
      'Software Development Engineers in Test (SDETs) and QA architects building continuous test automation frameworks, performance testing suites, and AI-assisted quality gates.',
    architecturalFocus:
      'Shift-left continuous testing, end-to-end Playwright/Cypress automation, high-load k6/JMeter stress testing, and zero-regression CI/CD pipelines.',
    availableTalentCount: '42,000+ Vetted Specialists',
    avgTimeToMatch: '24 Hours',
    senioritySplit: '66% Senior SDET · 20% QA Automation Architect',
    specializations: [
      'End-to-End Web & Mobile Test Automation (Playwright, Cypress, Appium, Selenium)',
      'API & Microservices Contract Testing (Postman, RestAssured, Pact, GraphQL)',
      'Performance, Load & Chaos Engineering (k6, Apache JMeter, Gatling, Gremlin)',
      'Continuous Quality in CI/CD & AI-Driven Test Generation',
    ],
    coreStack: ['Playwright', 'Cypress', 'TypeScript', 'Appium', 'k6', 'JMeter', 'RestAssured', 'GitHub Actions'],
    sampleRoles: [
      {
        role: 'Lead SDET & Test Automation Architect',
        experience: '7+ Years',
        rateRange: '$24 – $42 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Playwright TypeScript framework architecture, parallel CI execution, k6 load testing',
      },
      {
        role: 'Senior Mobile & API QA Automation Engineer',
        experience: '5+ Years',
        rateRange: '$18 – $34 / hr',
        availability: 'Immediate (24h)',
        coreCompetencies: 'Appium iOS/Android automation, contract testing, synthetic monitoring',
      },
    ],
    vettingBenchmark:
      'Evaluated on building deterministic, flake-free Playwright/API automation suites and diagnosing microservice performance bottlenecks.',
    seoTitle: 'Hire SDET & QA Automation Engineers | Playwright & k6 – RapidBrains',
    seoDescription:
      'Hire pre-vetted SDETs and QA automation architects. Scale continuous testing with Playwright, Cypress, Appium, and k6 experts in 24 hours.',
    primaryKeyword: 'hire QA automation engineers',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'fintech-banking',
    slug: '/industries/fintech-banking',
    title: 'FinTech, Banking & Capital Markets',
    complianceStandards: 'PCI-DSS · SOC 2 Type II · ISO/IEC 27001 · GDPR',
    summary:
      'High-frequency payment rails, core banking modernization, algorithmic risk engines, and regulatory compliance platforms engineered by background-cleared financial technology specialists.',
    engineeringChallenges: [
      'Legacy mainframe and monolithic core banking migration to cloud-native microservices',
      'Real-time fraud detection and AML/KYC pipeline orchestration with sub-50ms latency',
      'Strict PCI-DSS data residency and zero-trust environment enforcement',
    ],
    deployedSolutions: [
      'Dedicated Go/Rust & Kafka payment processing pods',
      'Snowflake & Databricks regulatory risk reporting teams',
      'OSCP-certified application security and DevSecOps augmentation',
    ],
    benchmarkOutcome: 'Reduced core settlement API latency by 64% while accelerating quarterly release velocity by 2.4x.',
    keyRoles: ['Payment Systems Architect', 'Rust/Go Backend Engineer', 'Risk Data Engineer', 'DevSecOps Specialist'],
  },
  {
    id: 'healthcare-lifesciences',
    slug: '/industries/healthcare-lifesciences',
    title: 'Healthcare, MedTech & Life Sciences',
    complianceStandards: 'HIPAA · HL7 FHIR · HITRUST · GDPR · FDA 21 CFR Part 11',
    summary:
      'Interoperable clinical data platforms, EHR/EMR integrations, telehealth applications, and diagnostic AI systems built with end-to-end HIPAA privacy safeguards.',
    engineeringChallenges: [
      'Unifying fragmented EHR data across Epic, Cerner, and custom clinical systems via HL7 FHIR',
      'Securing Protected Health Information (PHI) across distributed remote engineering workflows',
      'Deploying validated clinical AI decision-support models',
    ],
    deployedSolutions: [
      'HIPAA-trained HL7 FHIR integration engineers',
      'Dedicated clinical data lakehouse and AI engineering pods',
      'Automated compliance and quality engineering (SDET) suites',
    ],
    benchmarkOutcome: 'Cut clinician onboarding and EHR synchronization turnaround from 6 weeks to 4 days across 120+ clinics.',
    keyRoles: ['HL7 FHIR Integration Architect', 'Healthcare Data Engineer', 'Clinical AI Engineer', 'HIPAA Cloud Architect'],
  },
  {
    id: 'enterprise-saas',
    slug: '/industries/enterprise-saas',
    title: 'B2B SaaS & Cloud Platforms',
    complianceStandards: 'SOC 2 · ISO/IEC 27001 · Multi-Tenant Isolation',
    summary:
      'Accelerating product velocity, multi-tenant cloud scalability, and native AI feature adoption for Series A through public enterprise software companies.',
    engineeringChallenges: [
      'Domestic engineering hiring bottlenecks delaying critical enterprise customer commitments',
      'Embedding native LLM/RAG copilots and agentic workflows into core SaaS products',
      'Reducing AWS/GCP cloud infrastructure unit costs while scaling multi-tenant load',
    ],
    deployedSolutions: [
      '24-hour staff augmentation for React, TypeScript, Node.js, Python, and Go squads',
      'Turnkey Applied AI pods for enterprise RAG and agent orchestration',
      'FinOps and Kubernetes platform engineering specialists',
    ],
    benchmarkOutcome: 'Delivered production AI copilot modules 11 weeks ahead of roadmap while lowering engineering burn by 54%.',
    keyRoles: ['Principal Full-Stack Engineer', 'Applied LLM Architect', 'Staff SRE / Kubernetes Engineer', 'Lead SDET'],
  },
  {
    id: 'gcc-global-enterprises',
    slug: '/industries/gcc-global-enterprises',
    title: 'Global Capability Centers (GCCs) & Multinationals',
    complianceStandards: 'Global EOR · Local Statutory Compliance · BOT Framework',
    summary:
      'Turnkey establishment, rapid talent ramp-up, and Employer of Record (EOR) operations for multinationals building high-output engineering hubs in India and across 85+ countries.',
    engineeringChallenges: [
      '6–12 month legal entity setup delays when launching a new offshore R&D center',
      'Scaling 25 to 150+ vetted engineers across Cloud, Data, SAP, and AI under unified governance',
      'Managing localized payroll, statutory benefits, attrition, and IP compliance',
    ],
    deployedSolutions: [
      'Zero-entity Global EOR + Dedicated RPO talent acquisition engine',
      'Build-Operate-Transfer (BOT) engineering center incubations',
      'Integrated HRMS productivity and compliance management portal',
    ],
    benchmarkOutcome: 'Launched a 45-engineer Cloud & Data GCC hub in 6 weeks with zero local entity setup and 96% 18-month retention.',
    keyRoles: ['GCC Center Lead / Architect', 'Multi-Disciplinary Engineering Pods', 'Enterprise ERP & Cloud Squads'],
  },
  {
    id: 'retail-ecommerce',
    slug: '/industries/retail-ecommerce',
    title: 'Omnichannel Retail & Composable Commerce',
    complianceStandards: 'PCI-DSS · High-Availability Peak Load · Global CDN',
    summary:
      'Headless commerce architectures, real-time inventory supply chain platforms, and AI-driven personalization engines built for peak global traffic.',
    engineeringChallenges: [
      'Migrating monolithic commerce platforms to composable microservices (CommerceTools, Shopify Plus, custom Next.js)',
      'Real-time inventory visibility across thousands of global fulfillment nodes',
      'Zero-downtime resilience during Black Friday / peak seasonal surges',
    ],
    deployedSolutions: [
      'Composable frontend and GraphQL middleware engineering squads',
      'Real-time Kafka & Snowflake supply chain analytics engineers',
      'High-load k6 performance engineering and SRE specialists',
    ],
    benchmarkOutcome: 'Achieved 99.998% peak checkout availability and 38% faster mobile page loads across 14 regional storefronts.',
    keyRoles: ['Composable Commerce Architect', 'Senior Next.js/TypeScript Engineer', 'Supply Chain Data Engineer'],
  },
];

export const VETTING_STAGES = [
  {
    stage: '01',
    title: 'Algorithmic Profile & Track-Record Audit',
    passRate: 'Top 28%',
    duration: 'Automated + Sourcer Review',
    description:
      'Every applicant across our 500,000+ talent graph is evaluated for verified production tenure, architectural complexity of past systems, GitHub/open-source contributions, and career progression stability.',
    deliverable: 'Verified Employment & Stack History Matrix',
  },
  {
    stage: '02',
    title: 'Domain-Specific Coding & System Design Lab',
    passRate: 'Top 11%',
    duration: '90-Minute Timed Evaluation',
    description:
      'Candidates solve real-world production scenarios—not trivial textbook puzzles. Assessments cover concurrency, distributed state, API security, query optimization, and framework-specific edge cases.',
    deliverable: 'Recorded Code Execution & Complexity Scorecard',
  },
  {
    stage: '03',
    title: 'Live Principal Architect Technical Interview',
    passRate: 'Top 4.2%',
    duration: '60-Minute Peer Architecture Review',
    description:
      'Conducted 1-on-1 by senior practicing architects from RapidBrains’ HashRoot engineering guild. Evaluates system design trade-offs, debugging under pressure, security mindset, and clean code discipline.',
    deliverable: 'Architect-Signed Technical Evaluation Rubric',
  },
  {
    stage: '04',
    title: 'Executive Communication & Remote Readiness',
    passRate: 'Top 2.5%',
    duration: '45-Minute Operational Vetting',
    description:
      'Assesses C1/C2 English fluency, proactive asynchronous communication, Agile sprint ownership, and verified commitment to your required time-zone overlap window (US, UK, EU, or APAC).',
    deliverable: 'Video Introduction & Time-Zone SLA Commitment',
  },
  {
    stage: '05',
    title: 'Identity, Background & ISO/IEC 27001 Clearance',
    passRate: 'Top 1.8% Final Certified Pool',
    duration: 'Pre-Deployment Verification',
    description:
      'Comprehensive criminal background checks, government identity verification, past employer reference validation, and execution of binding IP assignment, NDA, and ISO/IEC 27001 security protocols.',
    deliverable: 'Compliance Clearance & EOR Onboarding Packet',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'cs-fintech-cloud',
    clientCategory: 'Series C Payment Infrastructure Platform',
    region: 'United States (New York / Distributed)',
    industry: 'FinTech & Payments',
    engagementModel: 'Dedicated Development Pod (14 Engineers)',
    headline: 'Scaling a Zero-Downtime Multi-Region Payment Ledger & Cloud Platform in 21 Days',
    challenge:
      'Facing a 4-month domestic hiring backlog for senior Go, Kubernetes, and Kafka engineers, the client risked missing regulatory settlement deadlines for their European market expansion.',
    solution:
      'RapidBrains delivered an initial shortlist within 24 hours and onboarded a 14-person dedicated engineering pod—comprising 2 Principal Cloud Architects, 8 Senior Go/PostgreSQL Engineers, 2 SREs, and 2 SDETs—operating with a 5-hour daily US Eastern overlap.',
    quantifiedOutcomes: [
      { metric: '21 Days', label: 'Full 14-Engineer Pod Onboarded' },
      { metric: '58%', label: 'Annualized Engineering Cost Savings' },
      { metric: '99.995%', label: 'Production Settlement Uptime Achieved' },
    ],
    stackUsed: ['Go', 'Apache Kafka', 'PostgreSQL', 'AWS EKS', 'Terraform', 'OpenTelemetry'],
    quote:
      'RapidBrains delivered senior Go and Kubernetes architects in 24 hours who passed our internal bar on the first round. We hit our European regulatory launch three weeks ahead of schedule while cutting our projected burn by more than half.',
    authorRole: 'VP of Platform Engineering, US FinTech Scale-Up',
  },
  {
    id: 'cs-enterprise-ai',
    clientCategory: 'Global Enterprise Knowledge & Legal Tech SaaS',
    region: 'United Kingdom & European Union',
    industry: 'Enterprise SaaS & Applied AI',
    engagementModel: 'IT Staff Augmentation (8 Senior AI & Full-Stack Engineers)',
    headline: 'Deploying an Enterprise RAG & Multi-Agent Contract Intelligence Engine with ISO 27001 Governance',
    challenge:
      'The client needed specialized LLM, vector search, and Python/TypeScript engineers capable of building a low-latency, zero-hallucination citation engine under strict GDPR and ISO/IEC 27001 enterprise security constraints.',
    solution:
      'RapidBrains matched 8 pre-vetted AI and Full-Stack engineers within 48 hours. The team architected a hybrid semantic/lexical RAG pipeline with automated evaluation guardrails and integrated directly into the client’s UK sprint cadence.',
    quantifiedOutcomes: [
      { metric: '48 Hours', label: 'Time to Vetted AI Shortlist' },
      { metric: '3.2x', label: 'Faster Document Indexing Throughput' },
      { metric: '52%', label: 'Reduction in Total Hiring & EOR Overhead' },
    ],
    stackUsed: ['Python', 'PyTorch', 'LangGraph', 'pgvector', 'TypeScript', 'Next.js', 'Azure OpenAI'],
    quote:
      'Finding engineers who truly understand production RAG latency and GDPR data isolation was nearly impossible locally. RapidBrains connected us with practitioners who architected our core evaluation pipeline in their first two sprints.',
    authorRole: 'Chief Technology Officer, UK LegalTech Enterprise',
  },
  {
    id: 'cs-gcc-eor',
    clientCategory: 'Multinational Industrial & Logistics Technology Group',
    region: 'Germany / Global EOR Expansion',
    industry: 'Manufacturing, Supply Chain & GCC',
    engagementModel: 'Global Workforce EOR + Dedicated Data & SAP Squad (22 Specialists)',
    headline: 'Establishing a 22-Person Offshore Data & SAP S/4HANA Engineering Hub Without a Local Legal Entity',
    challenge:
      'To modernize supply chain visibility across 30+ warehouses, the enterprise needed a dedicated offshore engineering center in India but wanted to avoid the 9-month delay and legal complexity of incorporating a foreign subsidiary.',
    solution:
      'Using RapidBrains Global EOR and RPO solutions, the client onboarded 22 full-time SAP S/4HANA, Databricks, and Cloud specialists in 5 weeks. RapidBrains managed all localized contracts, payroll, statutory benefits, and HRMS work tracking.',
    quantifiedOutcomes: [
      { metric: '$0', label: 'Foreign Entity Incorporation Cost' },
      { metric: '5 Weeks', label: '22-Specialist Hub Fully Operational' },
      { metric: '96%', label: 'Engineer Retention Over 18 Months' },
    ],
    stackUsed: ['SAP S/4HANA', 'Databricks', 'Snowflake', 'Apache Airflow', 'Microsoft Azure', 'PowerBI'],
    quote:
      'RapidBrains removed every legal, payroll, and recruitment barrier. We gained a cohesive 22-person SAP and Data engineering hub in five weeks with complete cost transparency and zero compliance headaches.',
    authorRole: 'Director of Global IT & Digital Transformation, EU Logistics Group',
  },
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'guide-2026-compensation-eor',
    slug: '/resources/2026-global-engineering-compensation-eor-guide',
    category: 'Guides',
    title: '2026 Global Technology Talent Compensation & EOR Compliance Benchmark',
    readTime: '12 min read',
    publishDate: 'October 2026',
    summary:
      'Comprehensive hourly and annual rate benchmarks across 85+ countries for AI, Cloud, Data, and Full-Stack roles, paired with country-by-country Employer of Record statutory guidelines.',
    keyTakeaways: [
      'Senior AI & LLM Architect rate comparisons across US, UK, Western Europe, India, LATAM, and CEE',
      'Total Cost of Ownership (TCO) breakdown: Domestic Full-Time vs. IT Staff Augmentation vs. Global EOR',
      'Statutory notice periods, IP assignment clauses, and worker classification rules in top 15 hiring corridors',
    ],
    fullContent: [
      'Executive Summary: In 2026, enterprise technology leaders face a structural paradox. While demand for production AI, Cloud FinOps, and cybersecurity engineering has reached record intensity, domestic hiring cycles in North America and Western Europe still average 94 days per senior role.',
      'Rate & Total Cost Benchmarks: By leveraging pre-vetted global engineering hubs—particularly India, Poland, Romania, Brazil, and Colombia—enterprises achieve a 45% to 60% reduction in fully burdened workforce costs without compromising architectural seniority.',
      'Compliance & EOR Governance: Operating across borders requires strict adherence to local labor statutes, GDPR/HIPAA data protection, and ISO/IEC 27001 information security. RapidBrains’ integrated Employer of Record (EOR) framework eliminates permanent establishment risk while providing 24-hour talent deployment.',
    ],
    author: 'RapidBrains Workforce Intelligence Practice',
  },
  {
    id: 'insight-cto-ai-pods',
    slug: '/resources/cto-blueprint-scaling-applied-ai-pods',
    category: 'Insights',
    title: 'The CTO’s Blueprint for Structuring High-Velocity Applied AI & RAG Engineering Pods',
    readTime: '8 min read',
    publishDate: 'October 2026',
    summary:
      'Why isolated data scientists struggle to ship production LLM features—and how to structure a 5-person cross-functional Applied AI pod for enterprise reliability.',
    keyTakeaways: [
      'Optimal pod topology: 1 Principal AI Architect, 2 Senior Backend/Python Engineers, 1 Data/Vector Engineer, 1 MLOps/Eval Specialist',
      'Establishing deterministic evaluation harnesses before scaling retrieval pipelines',
      'Integrating augmented AI specialists with internal domain product owners',
    ],
    fullContent: [
      'The Production AI Gap: Over 70% of enterprise generative AI pilots stall between proof-of-concept and production deployment—not because of model capability, but due to missing systems engineering around latency, permissions, and evaluation.',
      'Pod Topology Over Individual Hiring: Rather than hiring a lone ML researcher, high-performing CTOs deploy balanced 4-to-6 person engineering pods combining LLM orchestration, distributed backend engineering, and automated CI/CD evaluation gates.',
      '24-Hour Pod Assembly: RapidBrains maintains pre-assessed AI and data engineering cohorts capable of plugging directly into existing cloud VPCs under strict zero-data-retention security controls.',
    ],
    author: 'Principal AI Architecture Practice, RapidBrains',
  },
  {
    id: 'blog-gcc-vs-eor',
    slug: '/resources/gcc-entity-setup-vs-eor-staff-augmentation',
    category: 'Blogs',
    title: 'GCC Entity Setup vs. EOR Staff Augmentation: A CFO & CIO Decision Matrix',
    readTime: '9 min read',
    publishDate: 'September 2026',
    summary:
      'Evaluating capital expenditure, legal timeline, tax exposure, and operational velocity when expanding your offshore engineering footprint from 10 to 100+ seats.',
    keyTakeaways: [
      'Break-even threshold analysis: Why EOR and Staff Augmentation outperform direct entity incorporation under 75 seats',
      'Using Build-Operate-Transfer (BOT) to de-risk initial market entry',
      'Maintaining unified engineering culture and HRMS visibility across distributed teams',
    ],
    fullContent: [
      'Capital Efficiency in Global Expansion: Incorporating a wholly owned foreign subsidiary for a Global Capability Center (GCC) typically requires 6 to 12 months of legal, tax, transfer-pricing, and real-estate commitments before a single line of production code is written.',
      'The Hybrid EOR-to-BOT Pathway: Modern CIOs and CFOs increasingly launch offshore engineering hubs via RapidBrains’ EOR and Dedicated Team model—going live in under 30 days—and exercise a clean Build-Operate-Transfer option once headcount surpasses 75 to 100 engineers.',
    ],
    author: 'Global Enterprise Advisory Team, RapidBrains',
  },
];

export const OPEN_ROLES_DATA: OpenRoleItem[] = [
  {
    id: 'role-ai-arch-01',
    title: 'Principal Applied AI & RAG Systems Architect',
    practice: 'AI & Machine Learning',
    location: '100% Remote (Global)',
    timezone: 'US EST / UK GMT Overlap (4+ hrs)',
    engagementType: 'Long-Term Contract / Full-Time Remote',
    experienceLevel: '8+ Years',
    compensationRange: '$7,500 – $11,500 / month USD',
    stackSummary: 'Python · PyTorch · LangGraph · vLLM · pgvector · AWS Bedrock',
    description:
      'Lead architectural design and production deployment of multi-agent and enterprise RAG systems for a Fortune 500 financial services client.',
  },
  {
    id: 'role-go-dist-02',
    title: 'Senior Distributed Systems Engineer (Go / Kafka)',
    practice: 'Software Engineering',
    location: '100% Remote (Global)',
    timezone: 'US EST or EU CET Overlap',
    engagementType: 'Full-Time Dedicated Pod',
    experienceLevel: '5+ Years',
    compensationRange: '$5,200 – $8,400 / month USD',
    stackSummary: 'Go · Apache Kafka · PostgreSQL · gRPC · Kubernetes · Terraform',
    description:
      'Architect high-throughput event streaming and core ledger microservices handling 50,000+ transactions per second.',
  },
  {
    id: 'role-sre-k8s-03',
    title: 'Staff Cloud Platform & Kubernetes Architect',
    practice: 'Cloud & DevOps',
    location: '100% Remote (Global)',
    timezone: 'UK GMT / EU CET Overlap',
    engagementType: 'Long-Term Contract',
    experienceLevel: '7+ Years',
    compensationRange: '$6,000 – $9,200 / month USD',
    stackSummary: 'AWS EKS · Terraform · ArgoCD · Cilium · OpenTelemetry · Go',
    description:
      'Design multi-region Kubernetes platform infrastructure, GitOps pipelines, and automated FinOps governance for a high-growth European SaaS enterprise.',
  },
  {
    id: 'role-data-lake-04',
    title: 'Senior Databricks & Snowflake Data Platform Engineer',
    practice: 'Data Engineering',
    location: '100% Remote (Global)',
    timezone: 'US PST / EST Overlap',
    engagementType: 'Full-Time Remote',
    experienceLevel: '5+ Years',
    compensationRange: '$4,800 – $7,800 / month USD',
    stackSummary: 'Databricks · Apache Spark · Snowflake · dbt · Airflow · Python',
    description:
      'Build real-time CDC streaming pipelines and medallion lakehouse architectures supporting enterprise analytics and ML feature stores.',
  },
  {
    id: 'role-fullstack-ts-05',
    title: 'Senior Full-Stack Product Engineer (React 19 / TypeScript / Node)',
    practice: 'Software Engineering',
    location: '100% Remote (Global)',
    timezone: 'US / EU / APAC Shifts Available',
    engagementType: 'Full-Time Remote',
    experienceLevel: '5+ Years',
    compensationRange: '$4,200 – $7,000 / month USD',
    stackSummary: 'React 19 · Next.js · TypeScript · Node.js · PostgreSQL · GraphQL',
    description:
      'Own end-to-end feature architecture, design system implementation, and API scalability for an enterprise B2B SaaS platform.',
  },
];
