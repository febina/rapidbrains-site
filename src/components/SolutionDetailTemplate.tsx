import React from 'react';
import { SolutionItem, SOLUTIONS_DATA } from '../data/platformData';
import { ModalIntent } from './ConversionModal';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, HelpCircle } from 'lucide-react';

interface SolutionDetailTemplateProps {
  solution: SolutionItem;
  onSelectSolution: (sol: SolutionItem) => void;
  onBackHome: () => void;
  onOpenModal: (intent: ModalIntent, context?: string) => void;
}

export const SolutionDetailTemplate: React.FC<SolutionDetailTemplateProps> = ({
  solution,
  onSelectSolution,
  onBackHome,
  onOpenModal,
}) => {
  return (
    <div className="bg-[#F3F7FD] text-slate-900 pb-20">
      {/* Solution Switcher Sub-Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Enterprise Solutions</span>
          </button>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {SOLUTIONS_DATA.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectSolution(item)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  item.id === solution.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
          <span>Solution {solution.index}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-tabular">{solution.slug}</span>
          <span aria-hidden="true">·</span>
          <span className="text-blue-800 font-medium">SLA: {solution.timeToShortlist}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.12]">
          {solution.title}: {solution.tagline}
        </h1>
        <p className="text-base md:text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">
          {solution.summary}
        </p>

        <div className="pt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenModal('shortlist', `${solution.title} Shortlist Request`)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Request 24-Hour Shortlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('proposal', `${solution.title} Enterprise Proposal`)}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-800 bg-white border border-slate-300 hover:border-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Request Custom Workforce Proposal</span>
          </button>
        </div>

        {/* 4-Column Solution KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200">
          <div>
            <div className="text-xs text-slate-500">Time to Vetted Shortlist</div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900 mt-1">
              {solution.timeToShortlist}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Engagement Structure</div>
            <div className="text-sm font-bold text-slate-900 mt-1">{solution.typicalEngagement}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Capital Efficiency</div>
            <div className="text-sm font-bold text-emerald-800 mt-1">{solution.costEfficiency}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Security & Legal Governance</div>
            <div className="text-sm font-bold text-slate-900 mt-1">{solution.complianceModel}</div>
          </div>
        </div>
      </section>

      {/* Executive Challenge vs. RapidBrains Architecture */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <div className="text-xs font-medium text-slate-500 mb-2">
              The Enterprise Bottleneck
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Why Traditional Hiring Models Fall Short
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">{solution.executiveChallenge}</p>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-900 mb-3">
                Designed Specifically For:
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {solution.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0A192F] text-white rounded-xl p-6 md:p-8">
            <div className="text-xs font-medium text-blue-300 mb-2">
              The RapidBrains Execution Model
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Architect-Vetted Delivery & Zero-Friction Governance
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {solution.rapidBrainsArchitecture}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="text-xs font-semibold text-white mb-3">
                Included Enterprise Deliverables:
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {solution.keyDeliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Covered & AEO FAQ Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium text-blue-800 mb-1">
              Specialized Talent Coverage
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Core Engineering & Leadership Roles Deployed
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
              {solution.rolesCovered.map((role, idx) => (
                <div key={role} className="p-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-900">
                    0{idx + 1}. {role}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenModal('shortlist', `${role} (${solution.shortTitle})`)}
                    className="text-xs font-semibold text-blue-800 hover:underline whitespace-nowrap shrink-0"
                  >
                    Request Profile →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs font-medium text-blue-800 mb-1">
              Answer Engine Optimized (AEO) Knowledge Block
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions: {solution.shortTitle}
            </h2>
            <div className="space-y-4">
              {solution.faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* On-Page SEO Metadata Transparency Box */}
            <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-900">
                Active Technical SEO & Schema Configuration for {solution.slug}
              </div>
              <div>
                <span className="font-medium">Title Tag:</span> {solution.seoTitle}
              </div>
              <div>
                <span className="font-medium">Primary Keyword:</span>{' '}
                <span className="font-mono-tabular text-blue-800">{solution.primaryKeyword}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="font-medium">Secondary:</span>{' '}
                {solution.secondaryKeywords.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
