import React from 'react';
import { TechnologyItem, TECHNOLOGIES_DATA } from '../data/platformData';
import { ModalIntent } from './ConversionModal';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Cpu, ShieldCheck } from 'lucide-react';

interface TechnologyDetailTemplateProps {
  technology: TechnologyItem;
  onSelectTechnology: (tech: TechnologyItem) => void;
  onBackHome: () => void;
  onOpenModal: (intent: ModalIntent, context?: string) => void;
}

export const TechnologyDetailTemplate: React.FC<TechnologyDetailTemplateProps> = ({
  technology,
  onSelectTechnology,
  onBackHome,
  onOpenModal,
}) => {
  return (
    <div className="bg-[#F3F7FD] text-slate-900 pb-20">
      {/* Technology Practice Switcher Sub-Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Technology Practices</span>
          </button>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {TECHNOLOGIES_DATA.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTechnology(item)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  item.id === technology.id
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

      {/* Practice Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
          <span>Practice {technology.index}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-tabular">{technology.slug}</span>
          <span aria-hidden="true">·</span>
          <span className="text-blue-800 font-medium">{technology.availableTalentCount}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.12]">
          {technology.title} Practice
        </h1>
        <p className="text-base md:text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">
          {technology.summary}
        </p>

        <div className="pt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() =>
              onOpenModal('shortlist', `Hire ${technology.title} Engineers (24h Shortlist)`)
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Hire {technology.shortTitle} Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              onOpenModal('consultation', `${technology.title} Architecture Scoping Call`)
            }
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-800 bg-white border border-slate-300 hover:border-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book Practice Architect Call</span>
          </button>
        </div>

        {/* Practice Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
          <div>
            <div className="text-xs text-slate-500">Vetted Practice Pool</div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900 mt-1">
              {technology.availableTalentCount}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Average Shortlist Turnaround</div>
            <div className="text-xl font-bold font-mono-tabular text-blue-800 mt-1">
              {technology.avgTimeToMatch}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Seniority Distribution</div>
            <div className="text-sm font-bold text-slate-900 mt-1">{technology.senioritySplit}</div>
          </div>
        </div>
      </section>

      {/* Specializations & Stack */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <div className="text-xs font-medium text-blue-800 mb-2">
              Core Engineering Capabilities
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Production Specializations in {technology.shortTitle}
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {technology.specializations.map((spec) => (
                <li key={spec} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-1" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#0A192F] text-white rounded-xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-medium text-blue-300 mb-2">
                Architect Vetting Benchmark
              </div>
              <h2 className="text-xl font-bold text-white mb-3">
                How We Vet {technology.shortTitle} Talent
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {technology.vettingBenchmark}
              </p>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400 mb-2">
                  Verified Production Stack & Frameworks
                </div>
                <div className="text-xs font-mono-tabular text-slate-200 leading-relaxed">
                  {technology.coreStack.join(' · ')}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span>Architectural Focus: </span>
              <span className="text-slate-200">{technology.architecturalFocus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Rate Benchmark Table */}
      <section className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="mb-6">
          <div className="text-xs font-medium text-blue-800 mb-1">
            Transparent Rate & Competency Matrix
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Ready-to-Deploy {technology.shortTitle} Roles
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {technology.sampleRoles.map((roleItem) => (
            <div
              key={roleItem.role}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono-tabular font-semibold text-slate-800">
                    {roleItem.experience} Experience
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-medium">
                    Availability: {roleItem.availability}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{roleItem.role}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Core Competencies: </span>
                  {roleItem.coreCompetencies}
                </p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                <div className="text-left md:text-right">
                  <div className="text-xs text-slate-500">Indicative Rate Band</div>
                  <div className="text-base font-bold font-mono-tabular text-slate-900">
                    {roleItem.rateRange}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenModal('shortlist', `${roleItem.role} (${technology.shortTitle})`)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0A192F] hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Request Shortlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
