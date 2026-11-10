import React, { useState } from 'react';
import { ArrowRight, Calculator, Check } from 'lucide-react';
import { ModalIntent } from './ConversionModal';

interface TalentTcoConfiguratorProps {
  onOpenModal: (intent: ModalIntent, context?: string) => void;
}

const PRACTICE_RATES: Record<
  string,
  { label: string; rapidMonthlySenior: number; domesticMonthlySenior: number; stack: string }
> = {
  ai: {
    label: 'AI, LLM & Machine Learning',
    rapidMonthlySenior: 6200,
    domesticMonthlySenior: 16800,
    stack: 'Python · PyTorch · LangGraph · vLLM · RAG',
  },
  cloud: {
    label: 'Cloud, DevOps & Kubernetes SRE',
    rapidMonthlySenior: 5400,
    domesticMonthlySenior: 15200,
    stack: 'AWS/GCP · Kubernetes · Terraform · OpenTelemetry',
  },
  software: {
    label: 'Full-Stack & Distributed Systems',
    rapidMonthlySenior: 4600,
    domesticMonthlySenior: 13800,
    stack: 'TypeScript · React · Node.js · Go · PostgreSQL',
  },
  data: {
    label: 'Data Engineering & Lakehouse',
    rapidMonthlySenior: 5500,
    domesticMonthlySenior: 15400,
    stack: 'Databricks · Snowflake · Apache Spark · Kafka · dbt',
  },
  security: {
    label: 'Cybersecurity & Zero-Trust',
    rapidMonthlySenior: 6000,
    domesticMonthlySenior: 16200,
    stack: 'Cloud IAM · OSCP Pentesting · SIEM/SOAR · ISO 27001',
  },
  enterprise: {
    label: 'Enterprise Apps (SAP / Salesforce)',
    rapidMonthlySenior: 5800,
    domesticMonthlySenior: 15800,
    stack: 'SAP S/4HANA · Salesforce Apex · ServiceNow · MuleSoft',
  },
};

export const TalentTcoConfigurator: React.FC<TalentTcoConfiguratorProps> = ({ onOpenModal }) => {
  const [practiceKey, setPracticeKey] = useState<string>('ai');
  const [seniority, setSeniority] = useState<'senior' | 'principal'>('senior');
  const [teamSize, setTeamSize] = useState<number>(5);
  const [timezone, setTimezone] = useState<'US EST/PST' | 'UK GMT / EU CET' | 'APAC / Middle East'>('US EST/PST');

  const selectedPractice = PRACTICE_RATES[practiceKey];
  const seniorityMultiplier = seniority === 'principal' ? 1.28 : 1.0;

  // Pod volume efficiency discount for 5+ engineers
  const podEfficiency = teamSize >= 5 ? 0.94 : 1.0;

  const monthlyPerEngineer = Math.round(
    selectedPractice.rapidMonthlySenior * seniorityMultiplier * podEfficiency
  );
  const domesticPerEngineer = Math.round(
    selectedPractice.domesticMonthlySenior * seniorityMultiplier
  );

  const totalRapidMonthly = monthlyPerEngineer * teamSize;
  const totalDomesticMonthly = domesticPerEngineer * teamSize;
  const annualSavings = (totalDomesticMonthly - totalRapidMonthly) * 12;
  const savingsPercent = Math.round(
    ((totalDomesticMonthly - totalRapidMonthly) / totalDomesticMonthly) * 100
  );

  const summaryContext = `${teamSize}x ${
    seniority === 'principal' ? 'Principal/Architect' : 'Senior'
  } ${selectedPractice.label} (${timezone} Overlap)`;

  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="text-xs font-semibold text-[#2563EB] mb-2">
            Interactive Engineering Pod &amp; Total Cost Configurator
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] tracking-tight">
            Model Your Engineering Pod &amp; Capital Efficiency
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
          Compare fully burdened domestic hiring costs (salary, 28% statutory taxes/benefits, and 94-day recruiting lag) against RapidBrains 24-hour deployment.
        </p>
      </div>

      {/* TIER 1: RESPONSIVE 3-COLUMN CONFIGURATION CSS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* Column 1: Technology Practice Area */}
        <div className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <label
              htmlFor="tco-practice-select"
              className="block text-xs font-semibold text-[#0A192F] mb-2.5"
            >
              01. Technology Practice Area
            </label>
            <select
              id="tco-practice-select"
              value={practiceKey}
              onChange={(e) => setPracticeKey(e.target.value)}
              className="w-full px-4 py-3 text-sm font-medium bg-white border border-blue-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-[#0A192F]"
            >
              {Object.entries(PRACTICE_RATES).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-4 border-t border-blue-200/60">
            <div className="text-[11px] font-semibold text-slate-500 mb-1">
              Verified Production Stack
            </div>
            <div className="text-xs font-mono-tabular text-[#0A192F] font-medium">
              {selectedPractice.stack}
            </div>
          </div>
        </div>

        {/* Column 2: Seniority & Synchronous Time-Zone Overlap */}
        <div className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-6 flex flex-col justify-between space-y-5">
          <div>
            <span className="block text-xs font-semibold text-[#0A192F] mb-2.5">
              02. Engineering Seniority Tier
            </span>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white border border-blue-100 rounded-xl">
              <button
                type="button"
                onClick={() => setSeniority('senior')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  seniority === 'senior'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A192F]'
                }`}
              >
                Senior (5–8 Yrs)
              </button>
              <button
                type="button"
                onClick={() => setSeniority('principal')}
                className={`py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  seniority === 'principal'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A192F]'
                }`}
              >
                Principal (8+ Yrs)
              </button>
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold text-[#0A192F] mb-2.5">
              03. Synchronous Time-Zone Overlap
            </span>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-white border border-blue-100 rounded-xl">
              {(['US EST/PST', 'UK GMT / EU CET', 'APAC / Middle East'] as const).map((tz) => (
                <button
                  key={tz}
                  type="button"
                  onClick={() => setTimezone(tz)}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors truncate ${
                    timezone === tz
                      ? 'bg-[#0A192F] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0A192F]'
                  }`}
                >
                  {tz.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Team / Pod Size Slider + Quick Presets */}
        <div className="bg-[#F3F7FD] border border-blue-100 rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label htmlFor="team-size-slider" className="text-xs font-semibold text-[#0A192F]">
                04. Team / Pod Size
              </label>
              <span className="text-sm font-bold font-mono-tabular text-[#2563EB]">
                {teamSize} {teamSize === 1 ? 'Engineer' : 'Engineers'}
              </span>
            </div>

            <input
              id="team-size-slider"
              type="range"
              min={1}
              max={20}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-[#2563EB] cursor-pointer my-2"
            />

            <div className="grid grid-cols-4 gap-1.5 mt-3">
              {[
                { size: 1, label: '1 Seat' },
                { size: 5, label: '5 Pod' },
                { size: 10, label: '10 Squad' },
                { size: 20, label: '20 GCC' },
              ].map((preset) => (
                <button
                  key={preset.size}
                  type="button"
                  onClick={() => setTeamSize(preset.size)}
                  className={`py-1.5 text-[11px] font-mono-tabular font-semibold rounded-lg border transition-colors ${
                    teamSize === preset.size
                      ? 'bg-[#0A192F] text-white border-[#0A192F]'
                      : 'bg-white text-slate-600 border-blue-100 hover:border-[#2563EB]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-blue-200/60 text-xs text-slate-600">
            {teamSize >= 5
              ? 'Includes Dedicated Pod Lead & 6% volume retainer efficiency'
              : 'Flexible individual staff augmentation with 24h matching'}
          </div>
        </div>
      </div>

      {/* TIER 2: RESPONSIVE 4-COLUMN EXECUTIVE TCO SUMMARY BAR */}
      <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {/* Metric 1: Annual Capital Savings */}
        <div className="sm:border-r border-slate-800 sm:pr-6">
          <div className="text-xs text-blue-300 font-medium">
            Annual Capital Savings ({savingsPercent}% TCO Reduction)
          </div>
          <div className="text-3xl font-bold font-mono-tabular text-white tracking-tight mt-1.5">
            ${annualSavings.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-400 font-mono-tabular mt-1">
            Saved per year vs. US/UK hiring
          </div>
        </div>

        {/* Metric 2: RapidBrains vs Domestic Monthly */}
        <div className="lg:border-r border-slate-800 lg:pr-6 font-mono-tabular">
          <div className="text-xs font-sans text-slate-400">Monthly Investment Comparison</div>
          <div className="text-xl font-bold text-white mt-1.5">
            ${totalRapidMonthly.toLocaleString()} / mo
          </div>
          <div className="text-xs text-slate-400 mt-1">
            vs. <span className="line-through">${totalDomesticMonthly.toLocaleString()}/mo</span>{' '}
            domestic
          </div>
        </div>

        {/* Metric 3: Included Governance */}
        <div className="sm:border-r border-slate-800 sm:pr-6 space-y-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>24-hour vetted shortlist SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>85+ country EOR &amp; IP shield</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>14-day risk-free trial period</span>
          </div>
        </div>

        {/* Metric 4: Primary Action */}
        <div className="flex flex-col justify-center">
          <button
            type="button"
            onClick={() => onOpenModal('shortlist', summaryContext)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Request 24h Pod Shortlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
