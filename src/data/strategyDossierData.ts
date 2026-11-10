export interface AuditItem {
  dimension: string;
  currentState: string;
  criticalDiagnosis: string;
  actionDirective: 'Retain' | 'Improve' | 'Rewrite' | 'Remove' | 'Redesign';
  strategicRecommendation: string;
}

export interface CompetitorItem {
  name: string;
  url: string;
  category: string;
  heroHeadlineAndPositioning: string;
  navigationAndArchitecture: string;
  visualStorytellingAndUX: string;
  leadGenAndConversion: string;
  seoAndContentStrategy: string;
  keyLessonForRapidBrains: string;
  differentiationGapToExploit: string;
}

export interface KeywordClusterItem {
  cluster: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  searchIntent: 'Commercial / Transactional' | 'Transactional' | 'Informational / Commercial';
  difficulty: 'Medium' | 'Medium-High' | 'High';
  opportunityScore: string;
  targetUrl: string;
  aeoGeoStrategy: string;
}

export interface PageSeoMetadataItem {
  pageName: string;
  urlPath: string;
  seoTitle: string;
  metaDescription: string;
  h1Heading: string;
  h2Structure: string[];
  primaryKeyword: string;
  schemaTypes: string;
  internalLinksTo: string;
}

export const EXISTING_WEBSITE_AUDIT: AuditItem[] = [
  {
    dimension: '01. Homepage Structure, Navigation & User Journey',
    currentState:
      'Cluttered top navigation mixing dozens of individual role links ("Hire React Developers", "Hire Python Developers") with generic company pages, lacking a structured enterprise taxonomy.',
    criticalDiagnosis:
      'CTOs, CIOs, and Procurement leaders are forced to hunt through fragmented developer role lists instead of seeing clear enterprise delivery models (Staff Augmentation, Dedicated Pods, Global EOR, RPO). Client and candidate journeys collide in the same funnel.',
    actionDirective: 'Redesign',
    strategicRecommendation:
      'Implement a clean 3-zone executive top bar with structured Solutions, Technologies, Industries, Resources, and About pillars, plus a dedicated Client vs. Candidate journey switcher below the fold.',
  },
  {
    dimension: '02. Existing Branding, Typography, Colour Palette & Visual Identity',
    currentState:
      'Relies on standard corporate blue gradients, generic stock illustrations, inconsistent font weights, and multi-colored pill badges typical of mid-market offshore recruitment agencies.',
    criticalDiagnosis:
      'Undermines RapidBrains’ genuine 16+ year HashRoot enterprise engineering heritage and ISO/IEC 27001 pedigree, making the brand appear transactional rather than architectural.',
    actionDirective: 'Redesign',
    strategicRecommendation:
      'Establish an editorial architectural identity: warm alabaster canvas (#FAF9F6), deep obsidian ink (#0F172A), executive cobalt accent (#1E40AF), Plus Jakarta Sans display typography, DM Sans prose, and JetBrains Mono tabular numerals.',
  },
  {
    dimension: '03. Service Offerings & Positioning',
    currentState:
      'Heavily emphasizes low hourly rates ("Starting at $15/hr") and "affordable remote talent" ahead of architectural capability, vetting rigor, and enterprise compliance.',
    criticalDiagnosis:
      'Competing primarily on price attracts high-churn SMB buyers while alienating enterprise CTOs and VPs of Engineering who prioritize code quality, security governance, and predictable sprint velocity.',
    actionDirective: 'Rewrite',
    strategicRecommendation:
      'Reposition around "Enterprise Engineering Velocity + 24-Hour Vetted Deployment + Zero-Entity Global EOR Compliance," framing up to 60% cost efficiency as a strategic capital advantage rather than a discount pitch.',
  },
  {
    dimension: '04. Content Quality & Messaging',
    currentState:
      'Repetitive, keyword-stuffed paragraphs across dozens of nearly identical "Hire [X] Developer" pages with generic buzzwords ("unlock potential", "seamless hiring").',
    criticalDiagnosis:
      'Fails to answer high-intent technical and operational questions from engineering leaders (e.g., IP assignment, VPC/VDI security, time-zone overlap SLAs, and pod topology).',
    actionDirective: 'Rewrite',
    strategicRecommendation:
      'Replace generic claims with concrete operational mechanics: 5-stage principal architect vetting funnel (top 1.8% pass rate), 4+ hour synchronous overlap guarantees, and ISO/IEC 27001 / GDPR / HIPAA compliance.',
  },
  {
    dimension: '05. Existing Landing Pages & URL Structure',
    currentState:
      'Flat, ungrouped URL paths (/hire-x-developers) mixed with blog posts and standalone service pages without clear parent-child semantic hierarchy.',
    criticalDiagnosis:
      'Dilutes topical authority and crawl equity across hundreds of thin pages instead of consolidating authority into high-converting Solution, Technology, and Industry hubs.',
    actionDirective: 'Improve',
    strategicRecommendation:
      'Architect clean semantic silos (/solutions/*, /technologies/*, /industries/*, /resources/*, /careers) with 301 redirects preserving existing backlink equity from legacy /hire-* URLs.',
  },
  {
    dimension: '06. Desktop, Tablet & Mobile Experience',
    currentState:
      'Dense multi-column tables, oversized hero carousels, and tall sticky headers that consume over 25% of mobile viewport height.',
    criticalDiagnosis:
      'Creates cognitive overload on 1440px desktop monitors and cramped tap targets on mobile devices.',
    actionDirective: 'Redesign',
    strategicRecommendation:
      'Enforce a strict <15% mobile sticky cap, 44px+ touch targets, balanced asymmetric Bento grids on desktop, and progressive disclosure tabs for complex technical matrices.',
  },
  {
    dimension: '07. Page Loading Speed & Core Web Vitals',
    currentState:
      'Heavy third-party chat scripts, unoptimized PNG/JPEG assets, and layout shifts (CLS) caused by late-loading web fonts and carousels.',
    criticalDiagnosis:
      'Hurts both organic search rankings and enterprise buyer conversion rates on first visit.',
    actionDirective: 'Improve',
    strategicRecommendation:
      'Eliminate carousel libraries, use compositor-only CSS transitions, preconnect Google Fonts, and pair every visual slot with resilient zero-CLS aspect-ratio containers.',
  },
  {
    dimension: '08. Existing SEO, AEO & GEO Performance Opportunities',
    currentState:
      'Basic meta tags present, but lacks structured Answer Engine Optimization (AEO) blocks, FAQPage/Service JSON-LD graphs, and authoritative comparison tables.',
    criticalDiagnosis:
      'AI search engines (ChatGPT Search, Perplexity, Google AI Overviews) favour structured, citation-ready facts, SLA tables, and direct Q&A blocks over marketing fluff.',
    actionDirective: 'Improve',
    strategicRecommendation:
      'Embed comprehensive JSON-LD @graph schemas (Organization, Service, FAQPage), explicit crawler allowances in robots.txt (GPTBot, PerplexityBot, Google-Extended), and structured AEO summary blocks.',
  },
  {
    dimension: '09. Internal Linking & Website Architecture',
    currentState:
      'Siloed pages where Solutions rarely cross-link to relevant Technology stacks, Industry compliance frameworks, or Case Studies.',
    criticalDiagnosis:
      'Orphans deep technical pages and fails to guide visitors from capability discovery to proof and conversion.',
    actionDirective: 'Improve',
    strategicRecommendation:
      'Build contextual cross-linking between Solutions (e.g., Dedicated Teams), Technologies (e.g., AI & ML), Industries (e.g., FinTech), and attributable Case Studies.',
  },
  {
    dimension: '10. Lead Generation Forms & Conversion Opportunities',
    currentState:
      'Generic "Contact Us" forms asking for 8–10 unguided text fields with no interactive scoping or instant value calculation.',
    criticalDiagnosis:
      'High form friction causes drop-offs among busy CTOs and VPs of Engineering who want an immediate talent shortlist or TCO estimate.',
    actionDirective: 'Redesign',
    strategicRecommendation:
      'Deploy an interactive "24-Hour Talent Shortlist & TCO Configurator" plus streamlined 4-field conversion flows (Request Shortlist, Book Architecture Call, Request Workforce Proposal, Download Guide).',
  },
  {
    dimension: '11. Trust Signals, Testimonials, Case Studies & Credibility',
    currentState:
      'Genuine strengths (500,000+ talent pool, 85+ countries, 1,500+ clients, 16+ years via HashRoot, ISO/IEC 27001, Trustpilot 4.1/5) are buried or separated from service claims.',
    criticalDiagnosis:
      'Violates claim-to-proof adjacency: visitors read a claim about speed or compliance without seeing the substantiating metric or case study nearby.',
    actionDirective: 'Retain',
    strategicRecommendation:
      'Retain all authentic RapidBrains & HashRoot metrics and ISO/GDPR/HIPAA credentials, and elevate them into quantified, adjacent proof blocks and problem-solution-outcome case studies.',
  },
  {
    dimension: '12. Missing Pages & Content Gaps',
    currentState:
      'Missing dedicated enterprise pages for Global Capability Centers (GCCs), Recruitment Process Outsourcing (RPO), interactive Vetting Methodology, and separated Candidate Careers.',
    criticalDiagnosis:
      'Leaves high-contract-value enterprise deals (GCC buildouts, multi-seat RPO, and EOR compliance) on the table.',
    actionDirective: 'Improve',
    strategicRecommendation:
      'Create dedicated architecture templates for all 7 Solutions, 7 Technology Practices, 5 Core Industries (including GCCs), an interactive 5-Stage Vetting Inspector, and a standalone Candidate Portal.',
  },
];

export const COMPETITOR_BENCHMARK_MATRIX: CompetitorItem[] = [
  {
    name: '1. Toptal',
    url: 'https://www.toptal.com/',
    category: 'Elite Freelance & Talent Network',
    heroHeadlineAndPositioning: '"Hire the Top 3% of Freelance Talent®" — Exclusivity and rigorous screening.',
    navigationAndArchitecture: 'Role-verticalized top navigation (Developers, Designers, Finance, Project Managers, Product Managers).',
    visualStorytellingAndUX: 'Editorial talent profile cards showing verified skills, past enterprise employers, and availability.',
    leadGenAndConversion: 'Interactive multi-step hiring wizard ("What role are you hiring for?") with risk-free trial messaging.',
    seoAndContentStrategy: 'Dominates programmatic SEO for "Hire [Skill] Developers" + deep engineering interview question guides.',
    keyLessonForRapidBrains: 'Make vetting selectivity and screening transparency the centerpiece of trust.',
    differentiationGapToExploit: 'Toptal is premium-priced and freelance-centric; RapidBrains delivers cohesive Dedicated Pods + full EOR compliance at up to 60% lower TCO.',
  },
  {
    name: '2. Andela',
    url: 'https://www.andela.com/',
    category: 'Global Technical Talent Marketplace',
    heroHeadlineAndPositioning: 'Global talent cloud connecting enterprises with emerging-market engineers.',
    navigationAndArchitecture: 'Split by Enterprise Solutions, Technologies, Adaptive Hiring, and For Talent.',
    visualStorytellingAndUX: 'High-warmth human photography paired with AI-matching platform UI callouts.',
    leadGenAndConversion: 'Enterprise consultation booking + downloadable global talent reports.',
    seoAndContentStrategy: 'Strong thought leadership around borderless hiring, African/LATAM/global engineering hubs, and AI talent.',
    keyLessonForRapidBrains: 'Showcase global geographical breadth (85+ countries) and time-zone overlap as a strategic asset.',
    differentiationGapToExploit: 'RapidBrains offers faster 24-hour matching without rigid platform subscription lock-in, backed by built-in HRMS and EOR.',
  },
  {
    name: '3. Turing',
    url: 'https://www.turing.com/',
    category: 'AI-Powered Tech Services & Talent Cloud',
    heroHeadlineAndPositioning: 'Pivoted strongly toward Applied AI engineering, LLM training, and AI-vetted developers.',
    navigationAndArchitecture: 'Dual focus: AI Services / LLM Solutions vs. Hire Pre-Vetted Engineers.',
    visualStorytellingAndUX: 'Dark/light technical aesthetic emphasizing AI benchmarks and deep vetting metrics.',
    leadGenAndConversion: 'Direct "Hire Developers" funnel + enterprise AI consultation CTA.',
    seoAndContentStrategy: 'Captures high-growth GenAI, LLM, and remote developer hiring keywords.',
    keyLessonForRapidBrains: 'Elevate AI & Machine Learning, Data Engineering, and Cloud to first-class navigation citizens.',
    differentiationGapToExploit: 'Combine AI/Cloud talent access with hands-on EOR compliance, RPO, andSAP/Enterprise Apps coverage that Turing lacks.',
  },
  {
    name: '4. Deel',
    url: 'https://www.deel.com/',
    category: 'Global HR, Payroll & Employer of Record (EOR)',
    heroHeadlineAndPositioning: 'Everything you need to scale a global team — EOR, Contractor Management, Global Payroll.',
    navigationAndArchitecture: 'Product-led taxonomy (Deel EOR, Deel Contractors, Global Payroll, Compliance Hub, Resources).',
    visualStorytellingAndUX: 'Crisp Bento grids, interactive cost calculators, country compliance comparison tools.',
    leadGenAndConversion: 'Interactive calculators, instant demo booking, and gated global hiring guides.',
    seoAndContentStrategy: 'Massive programmatic moat around country-specific hiring laws, EOR, and payroll compliance.',
    keyLessonForRapidBrains: 'Present Global Workforce & EOR compliance with crystal-clear interactive cost and statutory transparency.',
    differentiationGapToExploit: 'Deel is software-only (you must source and vet the engineers yourself); RapidBrains unifies 500,000+ pre-vetted engineers WITH full EOR & HRMS in one contract.',
  },
  {
    name: '5. TEKsystems',
    url: 'https://www.teksystems.com/',
    category: 'Enterprise IT Staffing & Full-Stack Services',
    heroHeadlineAndPositioning: 'Enterprise business and technology transformation partner.',
    navigationAndArchitecture: 'Services (Talent Solutions, Global Services) · Technologies (Cloud, Data, AI, Security) · Industries.',
    visualStorytellingAndUX: 'Corporate editorial style with deep industry case studies and hyperscaler partnership proof.',
    leadGenAndConversion: 'Executive consultation forms and industry research reports.',
    seoAndContentStrategy: 'Targets enterprise CIO/CTO keywords around digital transformation, cloud migration, and IT staffing.',
    keyLessonForRapidBrains: 'Adopt enterprise-grade Industry & Practice framing (FinTech, Healthcare, GCCs) to win CIO/Procurement trust.',
    differentiationGapToExploit: 'Legacy giants move slowly (weeks to shortlist) with high overhead; RapidBrains delivers vetted shortlists in 24 hours.',
  },
  {
    name: '6. Randstad Digital',
    url: 'https://www.randstaddigital.com/',
    category: 'Global Digital Enablement & IT Staffing',
    heroHeadlineAndPositioning: 'Accelerated digital enablement across Customer Experience, Cloud, Data & Analytics, and Digital Engineering.',
    navigationAndArchitecture: 'Capabilities · Industries · Talent Models · Insights · Careers.',
    visualStorytellingAndUX: 'Clean geometric layouts with strong quantitative outcome callouts in case studies.',
    leadGenAndConversion: 'Request for Proposal (RFP) and executive contact flows.',
    seoAndContentStrategy: 'Focuses on enterprise digital enablement, managed talent solutions, and global workforce insights.',
    keyLessonForRapidBrains: 'Tie staffing models directly to measurable engineering outcomes (latency, uptime, time-to-market).',
    differentiationGapToExploit: 'Offer agile, transparent pricing and direct architect-to-architect scoping without bureaucratic consultancy bloat.',
  },
  {
    name: '7. Robert Half',
    url: 'https://www.roberthalf.com/',
    category: 'Traditional Contract & Permanent Recruitment',
    heroHeadlineAndPositioning: 'Specialized talent solutions for contract and permanent hiring.',
    navigationAndArchitecture: 'Dual-audience entry (Hire Talent vs. Find a Job) right in the hero + Salary Guide prominence.',
    visualStorytellingAndUX: 'High-utility search bars, role directories, and flagship annual Salary Guides.',
    leadGenAndConversion: 'Immediate job order submission + gated Salary Calculator / Compensation Guide.',
    seoAndContentStrategy: 'High authority from annual Tech Salary Guides and role description templates.',
    keyLessonForRapidBrains: 'Provide a clear Client vs. Candidate switch and publish an authoritative Global Compensation & EOR Benchmark Guide.',
    differentiationGapToExploit: 'Robert Half is regionally bound and generalist; RapidBrains is purpose-built for borderless 85+ country deep-tech engineering.',
  },
  {
    name: '8. Staffing.com',
    url: 'https://www.staffing.com/',
    category: 'Future of Work & Executive Thought Leadership',
    heroHeadlineAndPositioning: 'Editorial media and research authority on the talent economy and remote workforce strategy.',
    navigationAndArchitecture: 'Magazine-style editorial taxonomy (Podcasts, Research, Remote Work, Enterprise Staffing).',
    visualStorytellingAndUX: 'High-contrast editorial typography, clean reading layouts, zero badge clutter.',
    leadGenAndConversion: 'Newsletter, research briefings, and executive network access.',
    seoAndContentStrategy: 'AEO/GEO authority through C-suite interviews and workforce transformation frameworks.',
    keyLessonForRapidBrains: 'Design the Resources & Insights hub like a premier executive publication, not a generic SEO blog.',
    differentiationGapToExploit: 'Pair editorial authority directly with an actionable 24-hour talent deployment engine.',
  },
  {
    name: '9. BairesDev (Additional Competitor #1)',
    url: 'https://www.bairesdev.com/',
    category: 'Nearshore Staff Augmentation & Dedicated Teams',
    heroHeadlineAndPositioning: '"Top 1% IT Talent" — Time-zone aligned nearshore software outsourcing.',
    navigationAndArchitecture: 'Solutions · Technologies · Industries · Clients · About.',
    visualStorytellingAndUX: 'Strong emphasis on time-zone overlap graphics and rapid team assembly.',
    leadGenAndConversion: 'Interactive team configurator ("Select skills & team size").',
    seoAndContentStrategy: 'Targets IT staff augmentation and technology-specific outsourcing keywords.',
    keyLessonForRapidBrains: 'Include an interactive Team & Cost Configurator directly on the homepage.',
    differentiationGapToExploit: 'RapidBrains spans 85+ countries (covering US, UK, EU, APAC, and MENA time zones) plus full EOR compliance.',
  },
  {
    name: '10. Globant (Additional Competitor #2)',
    url: 'https://www.globant.com/',
    category: 'AI-Native Digital Transformation & Engineering Pods',
    heroHeadlineAndPositioning: 'Reinventing businesses through AI Studios and autonomous Agile Pods.',
    navigationAndArchitecture: 'Studios (AI, Cloud, Data, Enterprise) · Industries · Case Studies.',
    visualStorytellingAndUX: 'Bold architectural layouts showcasing cross-functional "Pod" topologies.',
    leadGenAndConversion: 'Studio-specific consultation flows.',
    seoAndContentStrategy: 'Ranks for AI transformation, Agile pods, and industry engineering.',
    keyLessonForRapidBrains: 'Visualize how a Dedicated Development Pod is structured (Architect + Devs + SRE + SDET).',
    differentiationGapToExploit: 'Deliver Globant-caliber pod structures with flexible staff augmentation economics and 24-hour speed.',
  },
  {
    name: '11. EPAM Systems (Additional Competitor #3)',
    url: 'https://www.epam.com/',
    category: 'Global Platform Engineering & Cloud Consulting',
    heroHeadlineAndPositioning: 'Engineering DNA for complex enterprise platforms and Global Capability Centers.',
    navigationAndArchitecture: 'Services · Industries · Insights · About · Careers.',
    visualStorytellingAndUX: 'Data-dense, rigorous engineering case studies with architectural credibility.',
    leadGenAndConversion: 'Enterprise RFP and practice leader contact.',
    seoAndContentStrategy: 'Deep technical whitepapers on platform engineering, cloud native, and data mesh.',
    keyLessonForRapidBrains: 'Speak the language of Staff/Principal Architects (RAG, Kubernetes, Medallion Lakehouses, Zero-Trust).',
    differentiationGapToExploit: 'RapidBrains makes principal-vetted engineering accessible to mid-market and enterprise teams alike within 24 hours.',
  },
  {
    name: '12. Gun.io (Additional Competitor #4)',
    url: 'https://www.gun.io/',
    category: 'Senior Developer Vetting & Direct Matching',
    heroHeadlineAndPositioning: 'World-class technical hiring vetted by senior engineers, not recruiters.',
    navigationAndArchitecture: 'Hire · Find Work · How We Vet · Pricing.',
    visualStorytellingAndUX: 'Clean, candid explanation of peer-led technical interviews and transparent pricing.',
    leadGenAndConversion: 'Direct shortlist request with transparent rate expectations.',
    seoAndContentStrategy: 'Focuses on senior developer hiring, technical interview standards, and contract-to-hire.',
    keyLessonForRapidBrains: 'Highlight that RapidBrains candidates are vetted by practicing senior architects from our HashRoot engineering guild.',
    differentiationGapToExploit: 'Scale beyond individual freelancers to full Dedicated Teams, RPO, and 85-country EOR.',
  },
  {
    name: '13. Terminal (Additional Competitor #5)',
    url: 'https://www.terminal.io/',
    category: 'Remote Engineering Hubs & Global Capability Centers',
    heroHeadlineAndPositioning: 'Build and scale high-performing remote engineering teams and global hubs.',
    navigationAndArchitecture: 'How It Works · Global Hubs · Services · Resources.',
    visualStorytellingAndUX: 'Executive comparison between DIY entity setup, freelancers, and managed global hubs.',
    leadGenAndConversion: 'Custom global hub ROI calculator and executive briefing.',
    seoAndContentStrategy: 'Targets CTO/CFO searches on global engineering hubs, EOR vs. entity setup, and remote team scaling.',
    keyLessonForRapidBrains: 'Include a clear Strategic Comparison Matrix showing RapidBrains vs. Traditional Agencies vs. DIY Entity Setup.',
    differentiationGapToExploit: 'Leverage RapidBrains’ 500,000+ talent pool and 16+ years of operational history for instant 24-hour execution.',
  },
];

export const DESIGN_TRENDS_2026 = [
  {
    trend: 'Architectural Bento Grids & Asymmetric Hierarchy',
    verdict: 'ADOPTED',
    rationale:
      'Organizes complex enterprise capabilities (Staff Augmentation, Dedicated Pods, Global EOR, HRMS Portal) into scannable, high-contrast spatial blocks using 1px hairline borders instead of repetitive 3-column card clones.',
  },
  {
    trend: 'Interactive Service & TCO Configurators',
    verdict: 'ADOPTED',
    rationale:
      'Modern CTOs and Procurement leaders want to test scenarios immediately. Our interactive "24-Hour Talent & TCO Estimator" and "5-Stage Vetting Funnel Explorer" turn passive reading into active engagement.',
  },
  {
    trend: 'Editorial Typography + Tabular Monospace Data',
    verdict: 'ADOPTED',
    rationale:
      'Pairing Plus Jakarta Sans (Display) and DM Sans (Body) with JetBrains Mono (tabular-nums) for SLA metrics, hourly rates, and funnel pass rates projects engineering precision and institutional trust.',
  },
  {
    trend: 'Dual-Audience Journey Personalisation (Client vs. Candidate)',
    verdict: 'ADOPTED',
    rationale:
      'Separates the Enterprise Client hiring experience from the Candidate Careers portal via a dedicated workspace mode switch, preventing funnel confusion while maximizing conversion for both audiences.',
  },
  {
    trend: 'Answer Engine Optimization (AEO) & Structured Knowledge Blocks',
    verdict: 'ADOPTED',
    rationale:
      'Clear executive summaries, comparative matrices, and schema-backed FAQ accordions allow both time-pressed C-level buyers and AI search engines (Google AI Overviews, ChatGPT, Perplexity) to extract verified facts effortlessly.',
  },
  {
    trend: 'Zero-Pill Discipline & High-Restraint Warm Alabaster Canvas',
    verdict: 'ADOPTED',
    rationale:
      'Replaces generic AI-generated dark-purple neon gradients and candy-colored badge clutter with a timeless architectural palette (#FAF9F6 canvas, #0F172A ink, #1E40AF executive cobalt) and clean typographic separators (·).',
  },
  {
    trend: 'Heavy WebGL Shaders, Autoplay Video & Kinetic Text Hijacking',
    verdict: 'REJECTED',
    rationale:
      'Degrades Core Web Vitals (LCP/INP), distracts enterprise decision-makers from evaluating technical capabilities, and violates accessibility reduced-motion standards.',
  },
  {
    trend: 'Decorative Pulsing Dots, Fake Telemetry Tickers & Comment Slashes (//)',
    verdict: 'REJECTED',
    rationale:
      'Hallmarks of generic "AI slop" templates that erode credibility with real software architects and enterprise procurement teams.',
  },
];

export const KEYWORD_STRATEGY_MATRIX: KeywordClusterItem[] = [
  {
    cluster: 'IT Staff Augmentation',
    primaryKeyword: 'IT staff augmentation services',
    secondaryKeywords: 'enterprise staff augmentation, on-demand software engineers, IT staffing services',
    searchIntent: 'Commercial / Transactional',
    difficulty: 'High',
    opportunityScore: '9.4 / 10 (High Enterprise ACV)',
    targetUrl: '/solutions/it-staff-augmentation',
    aeoGeoStrategy: 'Direct comparison table of Staff Augmentation vs. Traditional Outsourcing vs. Internal Hiring with 24h SLA metrics.',
  },
  {
    cluster: 'Remote Developer Hiring',
    primaryKeyword: 'hire remote developers',
    secondaryKeywords: 'pre-vetted remote engineers, hire offshore developers, remote software engineering talent',
    searchIntent: 'Transactional',
    difficulty: 'High',
    opportunityScore: '9.6 / 10 (Core Marketplace Driver)',
    targetUrl: '/solutions/remote-developer-hiring',
    aeoGeoStrategy: 'Structured 5-stage vetting funnel breakdown (Top 1.8% pass rate) and time-zone overlap guarantee blocks.',
  },
  {
    cluster: 'Dedicated Engineering Teams',
    primaryKeyword: 'dedicated development teams',
    secondaryKeywords: 'hire dedicated software team, autonomous engineering pods, offshore development center',
    searchIntent: 'Commercial / Transactional',
    difficulty: 'Medium-High',
    opportunityScore: '9.2 / 10 (Multi-Seat Retainers)',
    targetUrl: '/solutions/dedicated-development-teams',
    aeoGeoStrategy: 'Pod topology blueprint detailing Tech Lead, Senior Devs, SRE, and SDET composition with 72h deployment timeline.',
  },
  {
    cluster: 'AI & LLM Engineering Talent',
    primaryKeyword: 'AI developers for hire',
    secondaryKeywords: 'hire machine learning engineers, LLM RAG architects for hire, MLOps consultants',
    searchIntent: 'Transactional',
    difficulty: 'Medium',
    opportunityScore: '9.8 / 10 (Fastest Growing 2026 Demand)',
    targetUrl: '/technologies/ai-machine-learning',
    aeoGeoStrategy: 'Role-by-role competency matrix covering PyTorch, LangGraph, vLLM, pgvector, and enterprise RAG guardrails.',
  },
  {
    cluster: 'Cloud & DevOps Engineering',
    primaryKeyword: 'cloud engineers for hire',
    secondaryKeywords: 'hire DevOps engineers, Kubernetes SRE consultants, AWS GCP Azure architects',
    searchIntent: 'Transactional',
    difficulty: 'Medium',
    opportunityScore: '9.1 / 10 (High Technical Intent)',
    targetUrl: '/technologies/cloud-devops',
    aeoGeoStrategy: 'Certification and stack verification breakdown for multi-cloud IaC (Terraform, EKS/GKE, OpenTelemetry).',
  },
  {
    cluster: 'Global Workforce & EOR',
    primaryKeyword: 'global workforce solutions',
    secondaryKeywords: 'Employer of Record IT staffing, hire global talent without local entity, international payroll compliance',
    searchIntent: 'Commercial / Transactional',
    difficulty: 'Medium-High',
    opportunityScore: '9.3 / 10 (Competitor Gap vs. Pure Staffing Agencies)',
    targetUrl: '/solutions/global-workforce-solutions',
    aeoGeoStrategy: 'Explicit statutory coverage checklist across 85+ countries, ISO/IEC 27001, GDPR, and zero-entity onboarding steps.',
  },
  {
    cluster: 'Contract IT Staffing',
    primaryKeyword: 'contract IT staffing',
    secondaryKeywords: 'contract-to-hire developers, technical contractor staffing, flexible IT staffing agency',
    searchIntent: 'Transactional',
    difficulty: 'Medium',
    opportunityScore: '8.9 / 10 (Immediate Fill Velocity)',
    targetUrl: '/solutions/contract-staffing',
    aeoGeoStrategy: 'Clear hourly/monthly rate bands ($15–$75/hr by seniority) and 14-day replacement guarantee FAQ schema.',
  },
  {
    cluster: 'Technology Recruitment & RPO',
    primaryKeyword: 'technology recruitment services',
    secondaryKeywords: 'technical recruitment process outsourcing, IT RPO partner, GCC talent acquisition',
    searchIntent: 'Commercial / Transactional',
    difficulty: 'Medium',
    opportunityScore: '8.8 / 10 (Enterprise & GCC Scale)',
    targetUrl: '/solutions/recruitment-process-outsourcing',
    aeoGeoStrategy: 'GCC Entity Setup vs. EOR + RPO decision matrix for CFOs and VPs of Talent Acquisition.',
  },
];

export const PAGE_SEO_PLAN: PageSeoMetadataItem[] = [
  {
    pageName: 'Homepage',
    urlPath: '/',
    seoTitle: 'RapidBrains – Global Technology Talent & Workforce Solutions',
    metaDescription:
      'Hire pre-vetted remote software engineers, AI specialists, and dedicated development teams in 24 hours with full global EOR compliance across 85+ countries.',
    h1Heading: 'Deploy Pre-Vetted Global Engineering Talent & Dedicated Pods in 24 Hours.',
    h2Structure: [
      '01. Enterprise Workforce & Engineering Solutions',
      '02. Deep Technology Practice Areas',
      '03. Interactive Talent & Total Cost Configurator',
      '04. The 5-Stage Principal Architect Vetting Standard',
      '05. Industry-Calibrated Compliance & Delivery',
      '06. Verified Enterprise Impact & Case Studies',
      '07. Global EOR & 85+ Country Compliance Infrastructure',
    ],
    primaryKeyword: 'global technology staffing & remote developer marketplace',
    schemaTypes: 'Organization, WebSite, Service, FAQPage',
    internalLinksTo: '/solutions/*, /technologies/*, /industries, /resources, /careers, /contact',
  },
  {
    pageName: 'IT Staff Augmentation',
    urlPath: '/solutions/it-staff-augmentation',
    seoTitle: 'IT Staff Augmentation Services | Hire Vetted Engineers in 24h – RapidBrains',
    metaDescription:
      'Scale your engineering velocity with RapidBrains IT staff augmentation. Access 500,000+ pre-vetted remote developers across 85+ countries with 24-hour matching.',
    h1Heading: 'IT Staff Augmentation Engineered for High-Velocity Product Teams',
    h2Structure: [
      'Why Enterprise Roadmaps Stall Under Traditional Hiring',
      'How RapidBrains 24-Hour Staff Augmentation Works',
      'Security, IP Protection & HRMS Productivity Telemetry',
      'Frequently Asked Questions on IT Staff Augmentation',
    ],
    primaryKeyword: 'IT staff augmentation services',
    schemaTypes: 'Service, BreadcrumbList, FAQPage',
    internalLinksTo: '/technologies/software-engineering, /technologies/ai-machine-learning, /solutions/dedicated-development-teams',
  },
  {
    pageName: 'Dedicated Development Teams',
    urlPath: '/solutions/dedicated-development-teams',
    seoTitle: 'Dedicated Development Teams | Autonomous Engineering Pods – RapidBrains',
    metaDescription:
      'Hire dedicated software development teams and cross-functional engineering pods. Pre-vetted architects, developers, and QA deployed in 72 hours.',
    h1Heading: 'Autonomous Dedicated Development Teams Built for End-to-End Execution',
    h2Structure: [
      'Anatomy of a RapidBrains Cross-Functional Engineering Pod',
      'Managed Delivery Governance & Build-Operate-Transfer (BOT)',
      'Quantified Cost & Velocity Benchmarks',
    ],
    primaryKeyword: 'dedicated development teams',
    schemaTypes: 'Service, BreadcrumbList, FAQPage',
    internalLinksTo: '/solutions/global-workforce-solutions, /technologies/cloud-devops, /industries',
  },
  {
    pageName: 'Global Workforce & EOR Solutions',
    urlPath: '/solutions/global-workforce-solutions',
    seoTitle: 'Global Workforce Solutions & Employer of Record (EOR) – RapidBrains',
    metaDescription:
      'Hire and pay remote employees across 85+ countries without a local entity. RapidBrains EOR manages global payroll, tax compliance, and local labor laws.',
    h1Heading: 'Compliant Global Workforce & Employer of Record (EOR) Across 85+ Countries',
    h2Structure: [
      'Zero-Entity International Hiring & Statutory Shield',
      'Localized Contracts, Multi-Currency Payroll & Benefits',
      'ISO/IEC 27001, GDPR & HIPAA Security Governance',
    ],
    primaryKeyword: 'global workforce solutions',
    schemaTypes: 'Service, BreadcrumbList, FAQPage',
    internalLinksTo: '/solutions/remote-developer-hiring, /solutions/recruitment-process-outsourcing',
  },
  {
    pageName: 'AI & Machine Learning Practice',
    urlPath: '/technologies/ai-machine-learning',
    seoTitle: 'Hire AI Developers & Machine Learning Engineers in 24h – RapidBrains',
    metaDescription:
      'Hire pre-vetted AI developers, LLM architects, and MLOps engineers. Deploy specialists in PyTorch, RAG, LangGraph, and production AI within 24 hours.',
    h1Heading: 'Hire Production-Tested AI, LLM & Machine Learning Engineers',
    h2Structure: [
      'Enterprise AI Specializations: RAG, Agentic Workflows & MLOps',
      'Vetting Benchmark for Applied AI Architects',
      'Available AI Engineering Roles & Rate Benchmarks',
    ],
    primaryKeyword: 'AI developers for hire',
    schemaTypes: 'Service, BreadcrumbList',
    internalLinksTo: '/technologies/data-engineering, /solutions/dedicated-development-teams',
  },
];

export const MIGRATION_AND_LAUNCH_CHECKLIST = [
  {
    phase: '01. URL Mapping & 301 Redirect Preservation',
    items: [
      'Map legacy /hire-[skill]-developers URLs to corresponding /technologies/* practice hubs or dedicated role anchors via permanent 301 redirects.',
      'Preserve canonical equity on top-performing organic blog and guide URLs under /resources/*.',
      'Verify zero redirect chains (maximum 1 hop) and eliminate all soft 404s.',
    ],
  },
  {
    phase: '02. Technical SEO & AEO Verification',
    items: [
      'Validate JSON-LD @graph (Organization, Service, FAQPage, BreadcrumbList) in Schema Markup Validator.',
      'Confirm /robots.txt allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, PerplexityBot, and ClaudeBot.',
      'Submit updated /sitemap.xml in Google Search Console and Bing Webmaster Tools.',
      'Verify OpenGraph (og:title, og:description, og:url) and Twitter Card rendering.',
    ],
  },
  {
    phase: '03. Core Web Vitals, Accessibility & UX QA',
    items: [
      'Confirm LCP < 2.0s, CLS < 0.02, and INP < 100ms across Desktop (1440px) and Mobile (390px) viewports.',
      'Verify WCAG 2.1 AA contrast ratios (>= 4.5:1 body text), keyboard focus rings, and prefers-reduced-motion compliance.',
      'Ensure mobile sticky header height remains strictly below 15% of viewport height.',
    ],
  },
  {
    phase: '04. Lead Capture, CRM & Analytics Cutover',
    items: [
      'Test all 4 conversion pathways: Request 24h Shortlist, Book Architecture Consultation, Download 2026 Compensation Guide, and Candidate Application.',
      'Verify client-side validation for work email, required scoping fields, and instant confirmation receipts.',
      'Connect form webhook payloads to CRM/ATS pipelines and verify conversion event firing.',
    ],
  },
];
