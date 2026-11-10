import React, { useState } from 'react';
import {
  EXISTING_WEBSITE_AUDIT,
  COMPETITOR_BENCHMARK_MATRIX,
  DESIGN_TRENDS_2026,
  KEYWORD_STRATEGY_MATRIX,
  PAGE_SEO_PLAN,
  MIGRATION_AND_LAUNCH_CHECKLIST,
} from '../data/strategyDossierData';
import { ArrowLeft, CheckCircle2, FileCode2, Globe, Layers, Search, Shield } from 'lucide-react';

interface StrategyDossierViewProps {
  onBackToLiveSite: () => void;
}

type DossierTab = 'audit' | 'competitors' | 'architecture' | 'wireframe-design' | 'seo-aeo' | 'launch';

export const StrategyDossierView: React.FC<StrategyDossierViewProps> = ({ onBackToLiveSite }) => {
  const [activeTab, setActiveTab] = useState<DossierTab>('audit');
  const [auditFilter, setAuditFilter] = useState<string>('All');

  const filteredAudit =
    auditFilter === 'All'
      ? EXISTING_WEBSITE_AUDIT
      : EXISTING_WEBSITE_AUDIT.filter((item) => item.actionDirective === auditFilter);

  return (
    <div className="min-h-screen bg-[#F3F7FD] text-slate-900 pb-20">
      {/* Dossier Header Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="text-xs text-slate-400">
              <span>Global Website Strategy, UI/UX, SEO/AEO & Engineering Dossier</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Deliverables 01 – 16 Complete</span>
            </div>
            <button
              type="button"
              onClick={onBackToLiveSite}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Live Redesigned Website</span>
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-6 max-w-3xl">
            RapidBrains Global Re-Architecture: Strategic Audit, Competitor Intelligence & SEO Masterplan
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            Comprehensive agency blueprint transforming <span className="text-white font-medium">rapidbrains.com</span> from a price-led offshore staffing portal into an institutional-grade global technology talent and Employer of Record (EOR) platform competing with Toptal, Andela, Turing, Deel, and TEKsystems.
          </p>

          {/* Interactive Dossier Section Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-8 p-1.5 bg-slate-950/70 rounded-xl border border-slate-800">
            {[
              { id: 'audit', label: '01. Existing Site Audit (12-Pt)' },
              { id: 'competitors', label: '02. 13-Competitor Matrix' },
              { id: 'architecture', label: '03. Brand, Trends & Sitemap' },
              { id: 'wireframe-design', label: '04. Wireframe & Design System' },
              { id: 'seo-aeo', label: '05. SEO, AEO & GEO Strategy' },
              { id: 'launch', label: '06. Tech Stack, CWV & Launch' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as DossierTab)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dossier Body Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        {activeTab === 'audit' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="text-xs font-medium text-blue-800 mb-1">
                  Deliverable 01 · Phase 1 Deep Research
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  12-Point Diagnostic Audit of Existing RapidBrains.com
                </h2>
              </div>
              <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start">
                {(['All', 'Redesign', 'Rewrite', 'Improve', 'Retain'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setAuditFilter(filter)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      auditFilter === filter
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredAudit.map((item) => (
                <div
                  key={item.dimension}
                  className="bg-white border border-slate-200 rounded-xl p-6 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <h3 className="text-base font-bold text-slate-900">{item.dimension}</h3>
                    <div className="text-xs font-mono-tabular text-slate-600">
                      <span>Action Directive:</span>{' '}
                      <strong className="text-blue-800 uppercase">{item.actionDirective}</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1">
                        Existing Website State
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.currentState}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1">
                        Critical Conversion & Brand Diagnosis
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.criticalDiagnosis}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-800 mb-1">
                        Implemented Redesign Solution
                      </div>
                      <p className="text-slate-900 font-medium leading-relaxed">
                        {item.strategicRecommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'competitors' && (
          <div className="space-y-8">
            <div className="pb-6 border-b border-slate-200">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 02 · Phase 2 Competitor Intelligence
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                13-Competitor Benchmarking Matrix (8 Primary + 5 Additional Leaders)
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Evaluating Toptal, Andela, Turing, Deel, TEKsystems, Randstad Digital, Robert Half, Staffing.com, plus BairesDev, Globant, EPAM Systems, Gun.io, and Terminal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {COMPETITOR_BENCHMARK_MATRIX.map((comp) => (
                <div key={comp.name} className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{comp.name}</h3>
                      <div className="text-xs text-slate-500 mt-0.5">
                        <span>{comp.category}</span>
                        <span className="mx-2" aria-hidden="true">·</span>
                        <span className="font-mono-tabular">{comp.url}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs leading-relaxed">
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-slate-900">Hero & Positioning: </span>
                        <span className="text-slate-600">{comp.heroHeadlineAndPositioning}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Navigation & Taxonomy: </span>
                        <span className="text-slate-600">{comp.navigationAndArchitecture}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-slate-900">Visual & UX Execution: </span>
                        <span className="text-slate-600">{comp.visualStorytellingAndUX}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Lead Gen & SEO: </span>
                        <span className="text-slate-600">
                          {comp.leadGenAndConversion} {comp.seoAndContentStrategy}
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#F3F7FD] border border-slate-200/80 rounded-lg p-3.5 space-y-2">
                      <div>
                        <span className="font-semibold text-slate-900">Strategic Takeaway: </span>
                        <span className="text-slate-700">{comp.keyLessonForRapidBrains}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-800">RapidBrains Differentiation Wedge: </span>
                        <span className="text-slate-900 font-medium">{comp.differentiationGapToExploit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-10">
            {/* 2026 Design Trends Selection */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 03 · Phase 3 Design Trend Selection
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                2026 B2B Technology Website Trends: Adopted vs. Rejected
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DESIGN_TRENDS_2026.map((item) => (
                  <div
                    key={item.trend}
                    className="p-4 rounded-lg bg-[#F3F7FD] border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm font-bold text-slate-900">{item.trend}</h3>
                        <span
                          className={`text-xs font-mono-tabular font-semibold ${
                            item.verdict === 'ADOPTED' ? 'text-emerald-700' : 'text-red-700'
                          }`}
                        >
                          {item.verdict}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Positioning & Dual Persona Matrix */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 04 & 05 · Phase 4 Brand Strategy & Phase 5 Sitemap Architecture
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                New Brand Positioning & Recommended Sitemap Architecture
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                <strong>Core Positioning Statement:</strong> RapidBrains is the unified global technology workforce platform that combines a top-1.8% architect-vetted engineering network (500,000+ specialists) with zero-entity Global Employer of Record (EOR) compliance across 85+ countries—deploying autonomous pods or augmented engineers within 24 hours at up to 60% lower total cost.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200 text-xs">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Primary Sitemap Hierarchy (Solutions & Tech)
                  </h3>
                  <ul className="space-y-1.5 text-slate-600 font-mono-tabular">
                    <li>/ (Executive Homepage)</li>
                    <li>/solutions/it-staff-augmentation</li>
                    <li>/solutions/dedicated-development-teams</li>
                    <li>/solutions/contract-staffing</li>
                    <li>/solutions/remote-developer-hiring</li>
                    <li>/solutions/global-workforce-solutions (EOR)</li>
                    <li>/solutions/permanent-recruitment</li>
                    <li>/solutions/recruitment-process-outsourcing</li>
                    <li>/technologies/ai-machine-learning</li>
                    <li>/technologies/data-engineering</li>
                    <li>/technologies/cloud-devops</li>
                    <li>/technologies/software-engineering</li>
                    <li>/technologies/cybersecurity</li>
                    <li>/technologies/enterprise-applications</li>
                    <li>/technologies/quality-engineering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Industries, Proof, Resources & Candidate Hub
                  </h3>
                  <ul className="space-y-1.5 text-slate-600 font-mono-tabular">
                    <li>/industries/fintech-banking</li>
                    <li>/industries/healthcare-lifesciences</li>
                    <li>/industries/enterprise-saas</li>
                    <li>/industries/gcc-global-enterprises</li>
                    <li>/industries/retail-ecommerce</li>
                    <li>/hire-talent (Interactive TCO & Shortlist Flow)</li>
                    <li>/resources/case-studies</li>
                    <li>/resources/insights</li>
                    <li>/resources/guides (2026 Compensation & EOR PDF)</li>
                    <li>/resources/blogs</li>
                    <li>/about (HashRoot Heritage, ISO 27001, Global Offices)</li>
                    <li>/contact (US Delaware & UK London Desks)</li>
                    <li>/careers (Separated Candidate Portal)</li>
                  </ul>
                </div>
                <div className="bg-[#F3F7FD] border border-slate-200 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Why This Sitemap Beats Competitors
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    1. Consolidates thin role pages into authoritative Practice & Solution hubs to dominate commercial B2B SEO.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    2. Explicitly introduces <strong>Global Capability Centers (GCCs)</strong> and <strong>Global EOR</strong> in the main taxonomy, capturing enterprise multi-seat contracts.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    3. Cleanly segregates the Candidate application funnel (/careers) from the Enterprise Client funnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'wireframe-design' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 06 & 08 · Homepage Structural Wireframe & Visual Design System
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                18-Section Conversion Architecture & Design System Specification
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3">
                    Homepage Narrative Sequence (Proposition → Mechanism → Proof → Action)
                  </h3>
                  <ol className="space-y-2 text-xs text-slate-600 font-mono-tabular">
                    <li>01. Top Bar Contract (Wordmark · 5 Primary Links · Primary "Hire Talent" CTA)</li>
                    <li>02. Executive Sub-Bar (Client vs. Candidate Switch · 24h SLA · Talk to Experts)</li>
                    <li>03. Split Hero Section (Business Outcome Headline + Architectural Studio Visual)</li>
                    <li>04. Full-Width Quantitative KPI Strip (500K+ Talent · 24h SLA · 85+ Countries · 60% TCO)</li>
                    <li>05. Enterprise Credibility & Governance Bar (ISO/IEC 27001 · GDPR · HIPAA · HashRoot)</li>
                    <li>06. Core Value Proposition & Strategic Comparison Matrix (vs. Legacy & DIY Entity)</li>
                    <li>07. 7 Workforce Solutions Asymmetric Explorer (Staff Aug, Pods, EOR, Contract, RPO)</li>
                    <li>08. 7 Deep Technology Practice Areas & Live Role/Rate Matrix</li>
                    <li>09. Interactive Workforce & TCO Configurator (Real-Time Savings Calculator)</li>
                    <li>10. 5-Stage Principal Architect Vetting & Quality Assurance Funnel (Top 1.8%)</li>
                    <li>11. How RapidBrains Works (3-Step 24-Hour Deployment Protocol)</li>
                    <li>12. Industry-Calibrated Solutions (FinTech, Healthcare, SaaS, GCCs, Retail)</li>
                    <li>13. Why Global Enterprises Choose RapidBrains (HRMS Portal + Legal Shield)</li>
                    <li>14. Verified Enterprise Case Studies & Quantified Impact</li>
                    <li>15. Attributable Executive Testimonials & Trustpilot/Clutch Reputation</li>
                    <li>16. Global Workforce & 85+ Country EOR Compliance Map</li>
                    <li>17. Executive Resources, Insights & 2026 Compensation Guide</li>
                    <li>18. High-Intent Conversion Banner & Institutional Footer</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    Visual Design System Tokens
                  </h3>
                  <div className="p-4 rounded-lg bg-[#F3F7FD] border border-slate-200 text-xs space-y-3">
                    <div>
                      <div className="font-semibold text-slate-900">60-30-10 Color Architecture</div>
                      <div className="text-slate-600 mt-1">
                        60% Warm Alabaster Canvas (<span className="font-mono-tabular">#F3F7FD</span> &amp; <span className="font-mono-tabular">#FFFFFF</span>) · 30% Deep Obsidian Ink &amp; Slate Surfaces (<span className="font-mono-tabular">#0F172A</span>, <span className="font-mono-tabular">#F3F2EE</span>, <span className="font-mono-tabular">#E2E8F0</span>) · 10% High-Intent Executive Cobalt (<span className="font-mono-tabular">#1E40AF</span>).
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">2+1 Typographic Pairing</div>
                      <div className="text-slate-600 mt-1">
                        Display &amp; Headings: <strong>Plus Jakarta Sans</strong> (600/700, tight tracking, balanced wrap) · Body Prose: <strong>DM Sans</strong> (400/500, 1.6 line height) · Metrics &amp; Rates: <strong>JetBrains Mono</strong> (<span className="font-mono-tabular">tabular-nums</span>).
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Component & Anti-Slop Governance</div>
                      <div className="text-slate-600 mt-1">
                        Single-elevation cards with 1px hairline borders; zero static pill badges (all metadata rendered with clean middle-dot <span className="font-mono-tabular">·</span> separators); zero pulsing decorative dots; compositor-only 150ms hover transitions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo-aeo' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 10 · Commercial & Transactional Keyword Research
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Target Keyword Clusters & AEO / GEO Optimization Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-3 pr-4 font-semibold">Cluster</th>
                      <th className="py-3 px-4 font-semibold">Primary Keyword</th>
                      <th className="py-3 px-4 font-semibold">Search Intent</th>
                      <th className="py-3 px-4 font-semibold">Opportunity</th>
                      <th className="py-3 px-4 font-semibold">Target URL</th>
                      <th className="py-3 pl-4 font-semibold">AEO / GEO Answer Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {KEYWORD_STRATEGY_MATRIX.map((row) => (
                      <tr key={row.cluster} className="hover:bg-slate-50">
                        <td className="py-3 pr-4 font-semibold text-slate-900">{row.cluster}</td>
                        <td className="py-3 px-4 font-mono-tabular text-blue-800">{row.primaryKeyword}</td>
                        <td className="py-3 px-4 text-slate-600">{row.searchIntent}</td>
                        <td className="py-3 px-4 font-mono-tabular text-slate-900">{row.opportunityScore}</td>
                        <td className="py-3 px-4 font-mono-tabular text-slate-500">{row.targetUrl}</td>
                        <td className="py-3 pl-4 text-slate-600">{row.aeoGeoStrategy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 11 · Page-by-Page On-Page SEO & Schema Blueprint
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Page-Level SEO Metadata, H1/H2 Hierarchy & Schema Mapping
              </h2>
              <div className="space-y-4">
                {PAGE_SEO_PLAN.map((page) => (
                  <div key={page.urlPath} className="p-4 rounded-lg bg-[#FAF9F6] border border-slate-200 text-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-900">{page.pageName}</span>
                      <span className="font-mono-tabular text-blue-800">{page.urlPath}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">SEO Title: </span>
                      <span className="text-slate-900">{page.seoTitle}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Meta Description: </span>
                      <span className="text-slate-600">{page.metaDescription}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">H1 Heading: </span>
                      <span className="text-slate-900 font-medium">{page.h1Heading}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Schema.org Types: </span>
                      <span className="font-mono-tabular text-slate-600">{page.schemaTypes}</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span className="font-semibold text-slate-700">Internal Links: </span>
                      <span className="font-mono-tabular text-slate-600">{page.internalLinksTo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'launch' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <FileCode2 className="w-5 h-5 text-blue-800 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Recommended Production Stack
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  React 19 + TypeScript + Tailwind CSS v4 with SSR/SSG pre-rendering for all Solution, Technology, and Industry routes, paired with edge caching and live JSON-LD structured data injection.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Globe className="w-5 h-5 text-blue-800 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Technical SEO & AEO Artifacts Live
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Served at <span className="font-mono-tabular">/robots.txt</span> (with explicit GPTBot, OAI-SearchBot &amp; PerplexityBot rules), <span className="font-mono-tabular">/sitemap.xml</span>, and embedded <span className="font-mono-tabular">@graph</span> JSON-LD in <span className="font-mono-tabular">index.html</span>.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Shield className="w-5 h-5 text-blue-800 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Core Web Vitals & Accessibility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero external layout-shifting scripts, explicit image aspect ratios with resilient CSS fallbacks, WCAG AA contrast compliance (&gt;7:1 primary text), and reduced-motion support.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="text-xs font-medium text-blue-800 mb-1">
                Deliverable 15 & 16 · Pre-Cutover QA & Migration Checklist
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Zero-Loss SEO Migration & Launch Checklist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MIGRATION_AND_LAUNCH_CHECKLIST.map((group) => (
                  <div key={group.phase} className="p-5 rounded-lg bg-[#FAF9F6] border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">{group.phase}</h3>
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
