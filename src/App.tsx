/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ASSETS,
  HERO_DEPLOYMENT_COUNTER_DATA,
  VERIFIED_METRICS,
  SOLUTIONS_DATA,
  TECHNOLOGIES_DATA,
  INDUSTRIES_DATA,
  VETTING_STAGES,
  CASE_STUDIES_DATA,
  RESOURCES_DATA,
  SolutionItem,
  TechnologyItem,
  ResourceItem,
} from './data/platformData';
import { ConversionModal, ModalIntent } from './components/ConversionModal';
import { TalentTcoConfigurator } from './components/TalentTcoConfigurator';
import { StrategyDossierView } from './components/StrategyDossierView';
import { CandidatePortalView } from './components/CandidatePortalView';
import { SolutionDetailTemplate } from './components/SolutionDetailTemplate';
import { TechnologyDetailTemplate } from './components/TechnologyDetailTemplate';
import { SalaryBenchmarkTool } from './components/SalaryBenchmarkTool';
import { HeroDeploymentCounter } from './components/HeroDeploymentCounter';
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Globe,
  Building2,
  FileText,
  ChevronRight,
} from 'lucide-react';

type ActiveViewMode =
  | { type: 'home' }
  | { type: 'solution'; item: SolutionItem }
  | { type: 'technology'; item: TechnologyItem }
  | { type: 'candidates' }
  | { type: 'dossier' };

export default function App() {
  const [viewMode, setViewMode] = useState<ActiveViewMode>({ type: 'home' });
  const [modalIntent, setModalIntent] = useState<ModalIntent>(null);
  const [modalContext, setModalContext] = useState<string | undefined>(undefined);

  // Interactive states on Homepage
  const [activeToolTab, setActiveToolTab] = useState<'salary' | 'tco'>('salary');
  const [activeTechTab, setActiveTechTab] = useState<string>(TECHNOLOGIES_DATA[0].id);
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES_DATA[0].id);
  const [activeVettingStage, setActiveVettingStage] = useState<string>('03');
  const [resourceFilter, setResourceFilter] = useState<string>('All');
  const [readingResource, setReadingResource] = useState<ResourceItem | null>(null);

  // Image fallback states
  const [heroImgErr, setHeroImgErr] = useState(false);
  const [vettingImgErr, setVettingImgErr] = useState(false);
  const [workforceImgErr, setWorkforceImgErr] = useState(false);

  const openConversionModal = (intent: ModalIntent, context?: string) => {
    setModalContext(context);
    setModalIntent(intent);
  };

  const navigateToSection = (sectionId: string) => {
    if (viewMode.type !== 'home') {
      setViewMode({ type: 'home' });
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedTechnology =
    TECHNOLOGIES_DATA.find((t) => t.id === activeTechTab) || TECHNOLOGIES_DATA[0];
  const selectedIndustry =
    INDUSTRIES_DATA.find((ind) => ind.id === activeIndustryId) || INDUSTRIES_DATA[0];
  const selectedVetting =
    VETTING_STAGES.find((v) => v.stage === activeVettingStage) || VETTING_STAGES[2];

  const filteredResources =
    resourceFilter === 'All'
      ? RESOURCES_DATA
      : RESOURCES_DATA.filter((r) => r.category === resourceFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F7FD] text-[#0A192F]">
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-8 px-6 lg:px-10 py-5 bg-white/95 backdrop-blur-xs border-b border-blue-100">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setViewMode({ type: 'home' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight text-[#0A192F] whitespace-nowrap shrink-0 font-display"
        >
          RapidBrains
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('solutions');
            }}
            className="hover:text-[#2563EB] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Solutions
          </a>
          <a
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('technologies');
            }}
            className="hover:text-[#2563EB] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Technologies
          </a>
          <a
            href="#industries"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('industries');
            }}
            className="hover:text-[#2563EB] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Industries
          </a>
          <a
            href="#resources"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('resources');
            }}
            className="hover:text-[#2563EB] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Resources
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('about');
            }}
            className="hover:text-[#2563EB] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => openConversionModal('shortlist', 'Executive Top Bar · Hire Talent')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Hire Talent
          </button>
        </div>
      </header>

      {/* CLEAN, AIRY WORKSPACE & AUDIENCE BAR */}
      <div className="bg-[#F3F7FD] border-b border-blue-100/80 px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-blue-100 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode({ type: 'home' })}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                viewMode.type === 'home' ||
                viewMode.type === 'solution' ||
                viewMode.type === 'technology'
                  ? 'bg-[#0A192F] text-white'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Enterprise Client Platform
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode({ type: 'candidates' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                viewMode.type === 'candidates'
                  ? 'bg-[#0A192F] text-white'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Candidate Careers Portal
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode({ type: 'dossier' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                viewMode.type === 'dossier'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#2563EB] hover:bg-blue-50'
              }`}
            >
              Agency Strategy &amp; SEO Dossier
            </button>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-600">
            <button
              type="button"
              onClick={() => navigateToSection('salary-benchmark')}
              className="font-semibold text-[#2563EB] hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0"
            >
              2026 Salary Benchmark
            </button>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <button
              type="button"
              onClick={() =>
                openConversionModal('consultation', '30-Minute Architecture & Workforce Call')
              }
              className="font-semibold text-[#0A192F] hover:text-[#2563EB] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Talk to Our Experts →
            </button>
          </div>
        </div>
      </div>

      {/* MAIN VIEW ROUTER */}
      <main id="top" className="flex-1">
        {viewMode.type === 'dossier' && (
          <StrategyDossierView onBackToLiveSite={() => setViewMode({ type: 'home' })} />
        )}

        {viewMode.type === 'candidates' && (
          <CandidatePortalView
            onSwitchToClient={() => setViewMode({ type: 'home' })}
            onOpenModal={openConversionModal}
          />
        )}

        {viewMode.type === 'solution' && (
          <SolutionDetailTemplate
            solution={viewMode.item}
            onSelectSolution={(sol) => {
              setViewMode({ type: 'solution', item: sol });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackHome={() => setViewMode({ type: 'home' })}
            onOpenModal={openConversionModal}
          />
        )}

        {viewMode.type === 'technology' && (
          <TechnologyDetailTemplate
            technology={viewMode.item}
            onSelectTechnology={(tech) => {
              setViewMode({ type: 'technology', item: tech });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackHome={() => setViewMode({ type: 'home' })}
            onOpenModal={openConversionModal}
          />
        )}

        {viewMode.type === 'home' && (
          <div>
            {/* SECTION 01: SPACIOUS EXECUTIVE HERO */}
            <section className="bg-white border-b border-blue-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                  {/* Left Column: 7 Cols */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 mb-6">
                        <span className="font-semibold text-[#2563EB]">
                          Global Technology Talent &amp; Workforce Partner
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Top 1.8% Architect-Vetted</span>
                        <span aria-hidden="true">·</span>
                        <span>85+ Country EOR</span>
                      </div>

                      <h1
                        className="font-bold tracking-tight text-[#0A192F] leading-[1.1]"
                        style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.75rem)' }}
                      >
                        Deploy Pre-Vetted Global Engineering Talent in 24 Hours.
                      </h1>

                      <p className="text-base md:text-lg text-slate-600 mt-6 leading-relaxed max-w-2xl">
                        RapidBrains connects enterprise technology leaders with{' '}
                        <strong className="text-[#0A192F] font-semibold">
                          500,000+ pre-vetted engineers, AI architects, and cloud specialists
                        </strong>{' '}
                        across 85+ countries. Scale via flexible staff augmentation, dedicated pods, or zero-entity Employer of Record (EOR)—reducing workforce costs by up to 60%.
                      </p>

                      <HeroDeploymentCounter data={HERO_DEPLOYMENT_COUNTER_DATA} />
                    </div>

                    <div className="pt-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            openConversionModal(
                              'shortlist',
                              'Hero CTA · Request 24-Hour Talent Shortlist'
                            )
                          }
                          className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs"
                        >
                          <span>Hire Talent — Get 24h Shortlist</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            openConversionModal(
                              'consultation',
                              'Hero Secondary CTA · Talk to Our Experts'
                            )
                          }
                          className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-[#0A192F] bg-[#F3F7FD] border border-blue-200 hover:border-[#2563EB] rounded-xl transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>Talk to Our Experts</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-6">
                        <span>14-Day Risk-Free Trial</span>
                        <span aria-hidden="true">·</span>
                        <span>100% IP Protection</span>
                        <span aria-hidden="true">·</span>
                        <span>ISO/IEC 27001 · GDPR · HIPAA Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 5 Cols Editorial Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden border border-blue-100 bg-[#0A192F]">
                      {!heroImgErr ? (
                        <img
                          src={ASSETS.heroEngineering}
                          alt="Global technology leadership and principal software architects collaborating in a modern engineering studio"
                          referrerPolicy="no-referrer"
                          onError={() => setHeroImgErr(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full p-8 flex flex-col justify-end bg-[#0A192F] text-white">
                          <Globe className="w-10 h-10 text-blue-400 mb-4" />
                          <div className="text-xl font-bold">Global Engineering Command</div>
                          <p className="text-xs text-slate-300 mt-2">
                            500,000+ Vetted Engineers Across 85+ Countries
                          </p>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/35 to-transparent flex flex-col justify-end p-8 text-white">
                        <div className="text-xs text-blue-300 font-medium">
                          Principal Architect Vetted Network
                        </div>
                        <div className="text-lg font-bold mt-1.5 leading-snug">
                          5-stage technical &amp; architectural screening before any profile reaches your desk.
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300 mt-4 pt-4 border-t border-white/15 font-mono-tabular">
                          <span>Pass Rate: Top 1.8%</span>
                          <span>SLA: 24 Hours</span>
                          <span>Retention: 96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FULL-WIDTH 4-COLUMN QUANTITATIVE KPI STRIP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-100">
                  {VERIFIED_METRICS.map((metric) => (
                    <div key={metric.label} className="space-y-1.5">
                      <div className="text-3xl md:text-4xl font-bold font-mono-tabular text-[#2563EB] tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-base font-bold text-[#0A192F]">{metric.label}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{metric.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 02: WORKFORCE & ENGINEERING SOLUTIONS (CLEAN, AIRY BENTO GRID) */}
            <section id="solutions" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                    01. Enterprise Delivery Models
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
                    Flexible Workforce &amp; Engineering Solutions
                  </h2>
                </div>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  From single-engineer staff augmentation to autonomous development pods and 85-country Employer of Record compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {SOLUTIONS_DATA.map((sol, idx) => {
                  const isWide = idx === 0;
                  return (
                    <div
                      key={sol.id}
                      className={`${
                        isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                      } bg-white border border-blue-100 rounded-2xl p-8 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-2xs`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                          <span className="font-mono-tabular font-semibold text-[#2563EB]">
                            {sol.index} · {sol.shortTitle}
                          </span>
                          <span className="font-mono-tabular">SLA: {sol.timeToShortlist}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A192F] tracking-tight mb-3">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {sol.tagline}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setViewMode({ type: 'solution', item: sol });
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>Explore Architecture</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => openConversionModal('shortlist', sol.title)}
                          className="text-xs font-semibold text-[#2563EB] hover:underline whitespace-nowrap shrink-0"
                        >
                          Request Shortlist
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 03: DEEP TECHNOLOGY EXPERTISE (SPACIOUS PRACTICE EXPLORER) */}
            <section id="technologies" className="bg-white border-y border-blue-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                      02. Domain-Specialized Engineering Practices
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
                      Technology Expertise Across the Enterprise Stack
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode({ type: 'technology', item: selectedTechnology });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline whitespace-nowrap shrink-0"
                  >
                    <span>Open Full {selectedTechnology.shortTitle} Practice Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Clean Practice Tabs */}
                <div className="flex flex-wrap items-center gap-2 p-2 bg-[#F3F7FD] border border-blue-100 rounded-2xl mb-10">
                  {TECHNOLOGIES_DATA.map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => setActiveTechTab(tech.id)}
                      className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 ${
                        activeTechTab === tech.id
                          ? 'bg-[#2563EB] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#0A192F] hover:bg-white'
                      }`}
                    >
                      {tech.index}. {tech.shortTitle}
                    </button>
                  ))}
                </div>

                {/* Active Practice Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#F3F7FD] border border-blue-100 rounded-2xl p-8 md:p-10">
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 mb-3">
                        <span className="font-mono-tabular font-semibold text-[#2563EB]">
                          {selectedTechnology.availableTalentCount}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Match SLA: {selectedTechnology.avgTimeToMatch}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] tracking-tight">
                        {selectedTechnology.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        {selectedTechnology.summary}
                      </p>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mt-6">
                        {selectedTechnology.specializations.slice(0, 4).map((spec) => (
                          <li key={spec} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 border-t border-blue-200/60 text-xs text-slate-600">
                      <span className="font-semibold text-[#0A192F]">Core Production Stack: </span>
                      <span className="font-mono-tabular">
                        {selectedTechnology.coreStack.join(' · ')}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-blue-100 rounded-2xl p-7">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                        <span className="text-sm font-bold text-[#0A192F]">
                          Ready-to-Deploy Roles &amp; Rate Bands
                        </span>
                        <span className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                          24h Shortlist SLA
                        </span>
                      </div>

                      <div className="space-y-4">
                        {selectedTechnology.sampleRoles.map((sample) => (
                          <div
                            key={sample.role}
                            className="p-4 rounded-xl bg-[#F3F7FD] border border-blue-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                          >
                            <div>
                              <div className="text-sm font-bold text-[#0A192F]">{sample.role}</div>
                              <div className="text-xs text-slate-500 mt-1">
                                {sample.coreCompetencies}
                              </div>
                            </div>
                            <div className="sm:text-right shrink-0">
                              <div className="text-sm font-bold font-mono-tabular text-[#2563EB]">
                                {sample.rateRange}
                              </div>
                              <div className="text-[11px] text-slate-500">{sample.experience}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setViewMode({ type: 'technology', item: selectedTechnology });
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0A192F] underline underline-offset-4 whitespace-nowrap shrink-0"
                      >
                        Inspect Vetting Benchmark →
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          openConversionModal(
                            'shortlist',
                            `Hire ${selectedTechnology.shortTitle} Engineers`
                          )
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Request {selectedTechnology.shortTitle} Shortlist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 04: UNIFIED INTERACTIVE INTELLIGENCE SUITE (SALARY BENCHMARK + POD TCO CALCULATOR IN CLEAN TABS) */}
            <section id="salary-benchmark" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                    03. Interactive Workforce &amp; Compensation Intelligence
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
                    Benchmark Global Salaries or Configure Your Engineering Pod
                  </h2>
                </div>

                {/* Clean 2-Tool Switcher to Prevent Stacked Congestion */}
                <div className="flex items-center gap-1.5 p-1.5 bg-white border border-blue-100 rounded-xl self-start md:self-auto">
                  <button
                    type="button"
                    onClick={() => setActiveToolTab('salary')}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      activeToolTab === 'salary'
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#0A192F]'
                    }`}
                  >
                    Global Salary &amp; 12M Sparkline Benchmark
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveToolTab('tco')}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      activeToolTab === 'tco'
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#0A192F]'
                    }`}
                  >
                    Team &amp; Pod Savings Calculator
                  </button>
                </div>
              </div>

              {activeToolTab === 'salary' ? (
                <SalaryBenchmarkTool onOpenModal={openConversionModal} />
              ) : (
                <TalentTcoConfigurator onOpenModal={openConversionModal} />
              )}
            </section>

            {/* SECTION 05: 5-STAGE PRINCIPAL ARCHITECT VETTING & QUALITY ASSURANCE */}
            <section className="bg-white border-y border-blue-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                        04. Quality Assurance &amp; Technical Screening
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight mb-4">
                        Inside Our 5-Stage Principal Architect Vetting Funnel
                      </h2>
                      <p className="text-base text-slate-600 leading-relaxed mb-8">
                        Only the top 1.8% of applicants across our 500,000+ global network pass all five evaluation stages. Select any stage below to inspect our engineering assessment criteria.
                      </p>

                      <div className="space-y-3">
                        {VETTING_STAGES.map((item) => (
                          <button
                            key={item.stage}
                            type="button"
                            onClick={() => setActiveVettingStage(item.stage)}
                            className={`w-full text-left p-5 rounded-2xl border transition-colors ${
                              activeVettingStage === item.stage
                                ? 'bg-[#0A192F] text-white border-[#0A192F]'
                                : 'bg-[#F3F7FD] text-[#0A192F] border-blue-100 hover:border-[#2563EB]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-sm sm:text-base font-bold">
                                Stage {item.stage}. {item.title}
                              </span>
                              <span
                                className={`text-xs font-mono-tabular font-semibold ${
                                  activeVettingStage === item.stage
                                    ? 'text-blue-300'
                                    : 'text-[#2563EB]'
                                }`}
                              >
                                {item.passRate}
                              </span>
                            </div>
                            {activeVettingStage === item.stage && (
                              <div className="mt-3.5 pt-3.5 border-t border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                                <p className="leading-relaxed">{item.description}</p>
                                <div className="font-mono-tabular text-xs text-blue-300 pt-1">
                                  Included Deliverable: {item.deliverable} ({item.duration})
                                </div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden border border-blue-100 bg-[#0A192F]">
                      {!vettingImgErr ? (
                        <img
                          src={ASSETS.vettingLab}
                          alt="Two senior software architects reviewing distributed systems architecture on a workstation"
                          referrerPolicy="no-referrer"
                          onError={() => setVettingImgErr(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full p-8 flex flex-col justify-end bg-[#0A192F] text-white">
                          <ShieldCheck className="w-8 h-8 text-blue-400 mb-3" />
                          <div className="text-lg font-bold">Architect-Vetted Screening Lab</div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/40 to-transparent flex flex-col justify-end p-8 text-white">
                        <div className="text-xs font-mono-tabular text-blue-300">
                          Stage {selectedVetting.stage} · {selectedVetting.passRate}
                        </div>
                        <div className="text-xl font-bold mt-1.5">{selectedVetting.title}</div>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {selectedVetting.deliverable} included with every candidate shortlist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 06: INDUSTRY SOLUTIONS & VERIFIED CASE STUDIES */}
            <section id="industries" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                    05. Regulated &amp; High-Scale Verticals
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
                    Industry-Calibrated Engineering &amp; Client Impact
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-blue-100 rounded-xl">
                  {INDUSTRIES_DATA.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setActiveIndustryId(ind.id)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        activeIndustryId === ind.id
                          ? 'bg-[#2563EB] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#0A192F]'
                      }`}
                    >
                      {ind.title.split(',')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spacious Industry Highlight Card */}
              <div className="bg-white border border-blue-100 rounded-2xl p-8 md:p-10 mb-16">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A192F]">{selectedIndustry.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                      {selectedIndustry.summary}
                    </p>
                  </div>
                  <div className="text-xs font-mono-tabular text-[#2563EB] font-semibold">
                    {selectedIndustry.complianceStandards}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-3">
                      Sector Engineering Challenges
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedIndustry.engineeringChallenges.map((ch) => (
                        <li key={ch} className="flex items-start gap-2">
                          <span className="text-[#2563EB] font-bold">·</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-3">
                      Deployed RapidBrains Solutions
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedIndustry.deployedSolutions.map((sol) => (
                        <li key={sol} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F3F7FD] border border-blue-100 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-1.5">
                        Verified Sector Benchmark
                      </div>
                      <p className="text-sm sm:text-base font-bold text-[#0A192F] leading-snug mb-4">
                        {selectedIndustry.benchmarkOutcome}
                      </p>
                      <div className="text-xs text-slate-600">
                        <span className="font-semibold text-[#0A192F]">Key Roles: </span>
                        {selectedIndustry.keyRoles.join(' · ')}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openConversionModal(
                          'shortlist',
                          `${selectedIndustry.title} Engineering Shortlist`
                        )
                      }
                      className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#2563EB] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Hire {selectedIndustry.title.split(',')[0]} Specialists</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Spacious Case Study Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {CASE_STUDIES_DATA.map((cs) => (
                  <div
                    key={cs.id}
                    className="bg-white border border-blue-100 rounded-2xl p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
                        <span className="font-semibold text-[#2563EB]">{cs.industry}</span>
                        <span aria-hidden="true">·</span>
                        <span>{cs.region}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0A192F] leading-snug mb-5">
                        {cs.headline}
                      </h3>

                      <div className="grid grid-cols-3 gap-3 py-4 my-5 border-y border-slate-100 font-mono-tabular">
                        {cs.quantifiedOutcomes.map((out) => (
                          <div key={out.label}>
                            <div className="text-lg font-bold text-[#2563EB]">{out.metric}</div>
                            <div className="text-[11px] font-sans text-slate-500 leading-tight mt-1">
                              {out.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-100">
                      <blockquote className="text-xs italic text-slate-600 leading-relaxed mb-2.5">
                        “{cs.quote}”
                      </blockquote>
                      <div className="text-xs font-bold text-[#0A192F]">{cs.authorRole}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 07: GLOBAL EOR COMPLIANCE, RESOURCES & ABOUT */}
            <section id="resources" className="bg-white border-t border-blue-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
                {/* Global Workforce & EOR Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pb-24 border-b border-slate-100">
                  <div className="lg:col-span-5">
                    <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden border border-blue-100 bg-[#0A192F]">
                      {!workforceImgErr ? (
                        <img
                          src={ASSETS.globalWorkforce}
                          alt="International enterprise headquarters overlooking a global financial district skyline"
                          referrerPolicy="no-referrer"
                          onError={() => setWorkforceImgErr(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full p-8 flex flex-col justify-end bg-[#0A192F] text-white">
                          <Building2 className="w-8 h-8 text-blue-400 mb-3" />
                          <div className="text-lg font-bold">85+ Country EOR &amp; Compliance</div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/35 to-transparent flex flex-col justify-end p-8 text-white">
                        <div className="text-xs text-blue-300 font-medium">
                          Zero-Entity Global Expansion
                        </div>
                        <div className="text-xl font-bold mt-1.5">
                          Hire, Pay &amp; Manage Remote Teams Across 85+ Jurisdictions
                        </div>
                        <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Localized employment contracts, statutory tax filings, and built-in HRMS work tracking.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                        06. Global Employer of Record (EOR) &amp; HRMS Governance
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight mb-4">
                        One Unified Platform for Global Sourcing, Legal Shield &amp; Daily Telemetry
                      </h2>
                      <p className="text-base text-slate-600 leading-relaxed mb-8">
                        Eliminate the 9-month legal delay of foreign entity incorporation. RapidBrains acts as your compliant Employer of Record while giving you real-time sprint, attendance, and productivity visibility.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-6">
                          <h3 className="text-base font-bold text-[#0A192F] mb-2">
                            85+ Country EOR Shield
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Localized employment contracts, multi-currency payroll, statutory benefits, and worker classification protection.
                          </p>
                        </div>
                        <div className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-6">
                          <h3 className="text-base font-bold text-[#0A192F] mb-2">
                            Built-In HRMS Portal
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Track daily timesheets, monitor work hours, assign sprint tasks, and export consolidated invoices in one dashboard.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          openConversionModal(
                            'proposal',
                            'Global EOR & Workforce Expansion Proposal'
                          )
                        }
                        className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#2563EB] rounded-xl transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Request Global EOR &amp; Compliance Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Resources & Insights */}
                <div className="pt-24">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                        07. Executive Research &amp; Workforce Intelligence
                      </div>
                      <h2 className="text-3xl font-bold text-[#0A192F] tracking-tight">
                        Resources, Hiring Guides &amp; Engineering Insights
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F3F7FD] border border-blue-100 rounded-xl">
                      {(['All', 'Guides', 'Insights', 'Blogs'] as const).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setResourceFilter(cat)}
                          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                            resourceFilter === cat
                              ? 'bg-[#2563EB] text-white shadow-xs'
                              : 'text-slate-600 hover:text-[#0A192F]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredResources.map((res) => (
                      <div
                        key={res.id}
                        className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-8 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                            <span className="font-semibold text-[#2563EB]">{res.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{res.readTime}</span>
                          </div>

                          <h3 className="text-lg font-bold text-[#0A192F] leading-snug mb-3">
                            {res.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                            {res.summary}
                          </p>
                        </div>

                        <div className="pt-5 border-t border-blue-200/60 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => setReadingResource(res)}
                            className="text-xs font-semibold text-[#0A192F] hover:text-[#2563EB] underline underline-offset-4 whitespace-nowrap shrink-0"
                          >
                            Read Executive Briefing →
                          </button>

                          {res.category === 'Guides' && (
                            <button
                              type="button"
                              onClick={() => openConversionModal('guide', res.title)}
                              className="text-xs font-semibold text-[#2563EB] hover:underline whitespace-nowrap shrink-0"
                            >
                              Download PDF
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {readingResource && (
                    <div className="mt-10 bg-[#F3F7FD] border border-blue-200 rounded-2xl p-8">
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-200/60">
                        <div className="text-xs text-slate-600">
                          <span className="font-semibold text-[#2563EB]">
                            {readingResource.category}
                          </span>
                          <span className="mx-2" aria-hidden="true">
                            ·
                          </span>
                          <span>{readingResource.author}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setReadingResource(null)}
                          className="text-xs font-semibold text-slate-600 hover:text-[#0A192F]"
                        >
                          Close Briefing ✕
                        </button>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A192F] mb-4">
                        {readingResource.title}
                      </h3>
                      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                        {readingResource.fullContent.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* SECTION 08: ABOUT RAPIDBRAINS & HIGH-INTENT CONVERSION BANNER */}
            <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-semibold text-[#2563EB]">
                    Institutional Heritage &amp; Global Presence
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A192F] tracking-tight">
                    Backed by 16+ Years of HashRoot Enterprise Engineering Excellence
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    RapidBrains is the global talent marketplace and Employer of Record division of{' '}
                    <strong className="text-[#0A192F]">HashRoot</strong>—an ISO/IEC 27001 and ISO 9001 certified global technology organization serving 1,500+ enterprise clients worldwide.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => openConversionModal('guide', '2026 Compensation & EOR Guide')}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#0A192F] bg-white border border-blue-200 hover:border-[#2563EB] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <FileText className="w-4 h-4 text-[#2563EB]" />
                      <span>Download 2026 Compensation &amp; EOR Benchmark Guide</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white border border-blue-100 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-1">
                        North America Desk
                      </div>
                      <h3 className="text-lg font-bold text-[#0A192F]">United States</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        Enterprise Advisory, North American EOR &amp; US EST/PST Aligned Engineering Pods.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 text-sm font-mono-tabular text-[#0A192F] font-bold">
                      +1 (302) 306 6020
                    </div>
                  </div>

                  <div className="bg-white border border-blue-100 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#2563EB] mb-1">
                        UK &amp; European Desk
                      </div>
                      <h3 className="text-lg font-bold text-[#0A192F]">United Kingdom &amp; EU</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        GDPR-Compliant Staff Augmentation, UK IR35 Shield &amp; European Dedicated Squads.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 text-sm font-mono-tabular text-[#0A192F] font-bold">
                      +44 (203) 808 8373
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacious Executive Conversion Banner */}
              <div className="bg-[#0A192F] text-white rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="text-xs font-medium text-blue-300 mb-3">
                    24-Hour Talent Shortlist · 14-Day Risk-Free Trial
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Ready to Accelerate Your Product Roadmap at Up to 60% Lower Workforce Cost?
                  </h2>
                  <p className="text-base text-slate-300 mt-4 leading-relaxed">
                    Share your required stack, seniority, or pod topology. Our Principal Architects will deliver a calibrated shortlist within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      openConversionModal(
                        'shortlist',
                        'Bottom Conversion Banner · Request Shortlist'
                      )
                    }
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Hire Talent — Request 24h Shortlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      openConversionModal(
                        'consultation',
                        'Bottom Conversion Banner · Book Consultation'
                      )
                    }
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-[#172A45] hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Talk to Our Experts</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* INSTITUTIONAL FOOTER */}
      <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xl font-bold text-white font-display">RapidBrains</div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Global technology talent marketplace, IT staff augmentation, dedicated development pods, and Employer of Record (EOR) workforce solutions across 85+ countries. A HashRoot Brand.
              </p>
              <div className="pt-2 text-xs font-mono-tabular text-slate-300 space-y-1">
                <div>US: +1 (302) 306 6020</div>
                <div>UK: +44 (203) 808 8373</div>
                <div>ISO/IEC 27001 · GDPR · HIPAA Compliant</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-xs font-bold text-white mb-3.5">Workforce Solutions</div>
              <ul className="space-y-2.5 text-xs">
                {SOLUTIONS_DATA.map((sol) => (
                  <li key={sol.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode({ type: 'solution', item: sol });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {sol.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-xs font-bold text-white mb-3.5">Technology Practices</div>
              <ul className="space-y-2.5 text-xs">
                {TECHNOLOGIES_DATA.map((tech) => (
                  <li key={tech.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode({ type: 'technology', item: tech });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {tech.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-xs font-bold text-white mb-3.5">Platform &amp; Portals</div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => openConversionModal('shortlist', 'Footer · Hire Talent')}
                    className="text-blue-400 font-semibold hover:underline text-left"
                  >
                    Hire Talent (24h SLA)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode({ type: 'candidates' });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white text-left"
                  >
                    Candidate Careers Portal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openConversionModal('guide', 'Footer · 2026 Compensation Guide')}
                    className="text-slate-400 hover:text-white text-left"
                  >
                    2026 Compensation Guide
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode({ type: 'dossier' });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white text-left"
                  >
                    Agency Audit &amp; SEO Dossier
                  </button>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    XML Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} RapidBrains (A HashRoot Brand). All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>Privacy Policy</span>
              <span aria-hidden="true">·</span>
              <span>ISO/IEC 27001 Security</span>
              <span aria-hidden="true">·</span>
              <span>Global EOR Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* CONVERSION MODAL FOR ALL 5 FUNNELS */}
      <ConversionModal
        intent={modalIntent}
        preselectedContext={modalContext}
        onClose={() => setModalIntent(null)}
      />
    </div>
  );
}
