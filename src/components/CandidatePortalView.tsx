import React, { useState } from 'react';
import { ASSETS, OPEN_ROLES_DATA, VETTING_STAGES } from '../data/platformData';
import { ModalIntent } from './ConversionModal';
import { SalaryBenchmarkTool } from './SalaryBenchmarkTool';
import { ArrowRight, ArrowLeft, Globe, ShieldCheck, Briefcase } from 'lucide-react';

interface CandidatePortalViewProps {
  onSwitchToClient: () => void;
  onOpenModal: (intent: ModalIntent, context?: string) => void;
}

export const CandidatePortalView: React.FC<CandidatePortalViewProps> = ({
  onSwitchToClient,
  onOpenModal,
}) => {
  const [selectedPractice, setSelectedPractice] = useState<string>('All');
  const [imgError, setImgError] = useState(false);

  const practices = [
    'All',
    'AI & Machine Learning',
    'Software Engineering',
    'Cloud & DevOps',
    'Data Engineering',
  ];

  const filteredRoles =
    selectedPractice === 'All'
      ? OPEN_ROLES_DATA
      : OPEN_ROLES_DATA.filter((r) => r.practice === selectedPractice);

  return (
    <div className="bg-[#F3F7FD] text-slate-900">
      {/* Candidate Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-600 mb-4">
                <span>RapidBrains Global Talent Network</span>
                <span aria-hidden="true">·</span>
                <span>100% Remote Engineering Careers</span>
                <span aria-hidden="true">·</span>
                <span>85+ Countries</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                Build Mission-Critical Systems for Global Enterprises—From Anywhere.
              </h1>
              <p className="text-base text-slate-600 mt-5 leading-relaxed max-w-2xl">
                Join a network of 500,000+ technology professionals. Once you pass our Principal Architect assessment, you gain direct access to long-term, high-impact remote engineering engagements with US, UK, and European technology leaders—with zero agency bidding wars and guaranteed on-time multi-currency compensation.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal('candidate', 'General Global Talent Network Application')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Apply to Join Talent Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onSwitchToClient}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:border-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Looking to Hire? Switch to Enterprise Client View</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
              {!imgError ? (
                <img
                  src={ASSETS.candidateNetwork}
                  alt="Senior cloud and AI systems engineer working remotely in a contemporary sunlit workspace"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-end p-6 bg-slate-900 text-white">
                  <Globe className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-lg font-bold">Global Engineering Community</div>
                  <div className="text-xs text-slate-400 mt-1">
                    500,000+ Engineers Across 85+ Countries
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs text-slate-300">
                  <span>Verified Remote Career Progression</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>Direct USD / EUR / GBP / Local Payouts</span>
                </div>
                <div className="text-base font-semibold mt-1">
                  Vet Once. Access Long-Term Enterprise Engineering Pods.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Candidate Value Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-200">
          <div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900">6–24+ Months</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Long-Term Engagements</div>
            <p className="text-xs text-slate-500 mt-1">
              Embedded directly into enterprise product squads rather than short gig-economy tasks.
            </p>
          </div>
          <div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900">100% On-Time</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Guaranteed Global Payroll</div>
            <p className="text-xs text-slate-500 mt-1">
              Paid reliably in USD, EUR, GBP, or local currency with full statutory EOR benefits.
            </p>
          </div>
          <div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900">1-Time Vetting</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Architect-Led Evaluation</div>
            <p className="text-xs text-slate-500 mt-1">
              Pass our 5-stage technical assessment once and get matched continuously across clients.
            </p>
          </div>
          <div>
            <div className="text-xl font-bold font-mono-tabular text-slate-900">AI, Cloud & Data</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Modern Production Stacks</div>
            <p className="text-xs text-slate-500 mt-1">
              Work on greenfield LLM/RAG systems, Kubernetes platforms, and high-scale microservices.
            </p>
          </div>
        </div>
      </section>

      {/* Open Remote Engineering Requisitions */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-medium text-blue-800 mb-1">
              Priority Enterprise Requisitions
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Open Remote Engineering Positions
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
            {practices.map((practice) => (
              <button
                key={practice}
                type="button"
                onClick={() => setSelectedPractice(practice)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedPractice === practice
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {practice}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium text-blue-800">{role.practice}</span>
                  <span aria-hidden="true">·</span>
                  <span>{role.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{role.timezone}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular">{role.experienceLevel}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
                <div className="text-xs text-slate-500 pt-1">
                  <span className="font-semibold text-slate-700">Core Stack: </span>
                  <span className="font-mono-tabular">{role.stackSummary}</span>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                <div className="text-left lg:text-right">
                  <div className="text-xs text-slate-500">Monthly Compensation</div>
                  <div className="text-sm font-bold font-mono-tabular text-slate-900">
                    {role.compensationRange}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenModal('candidate', `${role.title} (${role.practice})`)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Apply for This Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Compensation Benchmark Explorer */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 border-b border-slate-200">
        <SalaryBenchmarkTool onOpenModal={onOpenModal} />
      </section>

      {/* Candidate Vetting Expectations */}
      <section className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="mb-8">
          <div className="text-xs font-medium text-blue-800 mb-1">
            Transparent Evaluation Process
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            How Our 5-Stage Engineering Assessment Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {VETTING_STAGES.map((stage) => (
            <div key={stage.stage} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs font-mono-tabular text-blue-800 font-semibold mb-2">
                Stage {stage.stage} · {stage.passRate}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{stage.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
