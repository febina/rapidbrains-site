import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';

export type ModalIntent = 'shortlist' | 'consultation' | 'proposal' | 'guide' | 'candidate' | null;

interface ConversionModalProps {
  intent: ModalIntent;
  preselectedContext?: string;
  onClose: () => void;
}

const MODAL_CONFIG: Record<
  Exclude<ModalIntent, null>,
  {
    kicker: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    slaBadge: string;
  }
> = {
  shortlist: {
    kicker: '24-Hour Talent Matching SLA',
    title: 'Request a Pre-Vetted Engineering Shortlist',
    subtitle:
      'Share your stack, seniority, and time-zone overlap requirements. A Principal Architect will deliver 3–5 interview-ready profiles within 24 hours.',
    ctaLabel: 'Request 24-Hour Shortlist',
    slaBadge: '14-Day Risk-Free Trial · Zero Upfront Recruiting Fee',
  },
  consultation: {
    kicker: 'Executive Advisory Session',
    title: 'Talk to Our Workforce & Architecture Experts',
    subtitle:
      'Schedule a 30-minute technical discovery call to scope Staff Augmentation, Dedicated Development Pods, or Global EOR compliance.',
    ctaLabel: 'Confirm Consultation Request',
    slaBadge: 'Direct Principal Architect Scoping · NDA Protected',
  },
  proposal: {
    kicker: 'Enterprise Workforce Proposal',
    title: 'Request a Custom Pod, RPO, or Global EOR Proposal',
    subtitle:
      'Receive a tailored Total Cost of Ownership (TCO) breakdown, pod topology recommendation, and country compliance roadmap.',
    ctaLabel: 'Generate Custom Proposal',
    slaBadge: 'ISO/IEC 27001 · GDPR & HIPAA Compliant Delivery',
  },
  guide: {
    kicker: '2026 Executive Benchmark Report',
    title: 'Download the 2026 Global Tech Compensation & EOR Guide',
    subtitle:
      'Instant access to verified hourly and monthly engineering rate bands across 85+ countries plus country-by-country EOR statutory rules.',
    ctaLabel: 'Unlock & Download 2026 Report',
    slaBadge: '64-Page PDF + Rate Matrix · Updated Q4 2026',
  },
  candidate: {
    kicker: 'RapidBrains Global Talent Network',
    title: 'Apply to Join Top 1.8% Remote Engineering Roles',
    subtitle:
      'Connect with long-term remote roles at high-growth global enterprises. Transparent vetting, timely USD/EUR/GBP payouts, and zero agency friction.',
    ctaLabel: 'Submit Engineering Profile',
    slaBadge: '500,000+ Global Network · 100% Remote Opportunities',
  },
};

export const ConversionModal: React.FC<ConversionModalProps> = ({
  intent,
  preselectedContext,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyOrRole, setCompanyOrRole] = useState('');
  const [engagementScope, setEngagementScope] = useState(
    preselectedContext || 'IT Staff Augmentation (1–4 Engineers)'
  );
  const [technicalNotes, setTechnicalNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedContext) {
      setEngagementScope(preselectedContext);
    }
  }, [preselectedContext]);

  if (!intent) return null;
  const config = MODAL_CONFIG[intent];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid work or professional email address.');
      return;
    }

    if (companyOrRole.trim().length < 2) {
      setErrorMsg(
        intent === 'candidate'
          ? 'Please specify your primary engineering specialization and years of experience.'
          : 'Please enter your company name.'
      );
      return;
    }

    const refCode = `RB-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-xl my-8">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="py-4">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 mb-3">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Request Confirmed · Reference {submittedRef}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {intent === 'guide'
                ? 'Your 2026 Compensation & EOR Benchmark Report is Ready'
                : intent === 'candidate'
                ? 'Engineering Profile Received for Stage 01 Review'
                : 'Your Request Has Been Assigned to a Principal Architect'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {intent === 'guide'
                ? `We have sent a copy to ${email} and unlocked the executive rate summary below.`
                : intent === 'candidate'
                ? `Thank you, ${fullName}. Our talent assessment guild will review your background for ${engagementScope} and send your Stage 02 technical assessment link to ${email} within 24 hours.`
                : `Thank you, ${fullName}. Our US/UK enterprise delivery desk has logged your inquiry for ${companyOrRole} (${engagementScope}). You will receive your calibrated shortlist or calendar invite at ${email} within 4 business hours.`}
            </p>

            <div className="bg-[#F3F7FD] border border-slate-200 rounded-lg p-4 mb-6 text-xs text-slate-700 space-y-2">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Submitted By</span>
                <span className="font-medium text-slate-900">
                  {fullName} ({email})
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">
                  {intent === 'candidate' ? 'Primary Track' : 'Organization'}
                </span>
                <span className="font-medium text-slate-900">{companyOrRole}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Scope</span>
                <span className="font-medium text-blue-800">{engagementScope}</span>
              </div>
            </div>

            {intent === 'guide' && (
              <div className="bg-slate-900 text-white rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-300">
                    Instant Executive Summary · 2026 Global Rate Bands
                  </span>
                  <FileText className="w-4 h-4 text-blue-300" />
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono-tabular border-t border-slate-800 pt-3">
                  <div>
                    <div className="text-slate-400">Senior Full-Stack / Cloud</div>
                    <div className="text-white font-semibold">$24 – $48 / hr USD</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Principal AI / LLM Architect</div>
                    <div className="text-white font-semibold">$45 – $75 / hr USD</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Dedicated 5-Engineer Pod</div>
                    <div className="text-white font-semibold">$22,500 – $36,000 / mo</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Global EOR Compliance</div>
                    <div className="text-white font-semibold">85+ Countries Covered</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Return to RapidBrains Platform
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="text-xs font-medium text-blue-800">{config.kicker}</div>
            <h3 id="modal-title" className="text-2xl font-bold text-slate-900 tracking-tight pr-6">
              {config.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{config.subtitle}</p>

            {errorMsg && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700"
              >
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="rb-name">
                  Full Name *
                </label>
                <input
                  id="rb-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Elena Rostova"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F3F7FD] border border-slate-300 rounded-lg focus:outline-none focus:border-blue-800 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="rb-email">
                  {intent === 'candidate' ? 'Email Address *' : 'Work Email *'}
                </label>
                <input
                  id="rb-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={intent === 'candidate' ? 'elena@domain.com' : 'elena@enterprise.com'}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F3F7FD] border border-slate-300 rounded-lg focus:outline-none focus:border-blue-800 text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="rb-org">
                  {intent === 'candidate'
                    ? 'Primary Stack & Years of Experience *'
                    : 'Company & Title *'}
                </label>
                <input
                  id="rb-org"
                  type="text"
                  required
                  value={companyOrRole}
                  onChange={(e) => setCompanyOrRole(e.target.value)}
                  placeholder={
                    intent === 'candidate'
                      ? 'e.g., Senior Go/Kubernetes · 7 yrs'
                      : 'e.g., Acme FinTech · VP Engineering'
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F3F7FD] border border-slate-300 rounded-lg focus:outline-none focus:border-blue-800 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="rb-scope">
                  {intent === 'candidate' ? 'Preferred Engagement Track' : 'Solution or Talent Scope'}
                </label>
                <select
                  id="rb-scope"
                  value={engagementScope}
                  onChange={(e) => setEngagementScope(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F3F7FD] border border-slate-300 rounded-lg focus:outline-none focus:border-blue-800 text-slate-900"
                >
                  {intent === 'candidate' ? (
                    <>
                      <option value="AI & Machine Learning Practice">AI & Machine Learning Practice</option>
                      <option value="Cloud, DevOps & SRE Practice">Cloud, DevOps & SRE Practice</option>
                      <option value="Full-Stack & Distributed Backend">Full-Stack & Distributed Backend</option>
                      <option value="Data Engineering & Databricks/Snowflake">
                        Data Engineering & Databricks/Snowflake
                      </option>
                      <option value="Cybersecurity & Enterprise Apps (SAP/Salesforce)">
                        Cybersecurity & Enterprise Apps
                      </option>
                    </>
                  ) : (
                    <>
                      <option value="IT Staff Augmentation (1–4 Engineers)">
                        IT Staff Augmentation (1–4 Engineers)
                      </option>
                      <option value="Dedicated Development Pod (5–15+ Engineers)">
                        Dedicated Development Pod (5–15+ Engineers)
                      </option>
                      <option value="Applied AI, LLM & Data Engineering Specialists">
                        Applied AI, LLM & Data Engineering Specialists
                      </option>
                      <option value="Global EOR & Compliance Onboarding (85+ Countries)">
                        Global EOR & Compliance Onboarding
                      </option>
                      <option value="Enterprise RPO / GCC Build-Operate-Transfer">
                        Enterprise RPO / GCC Buildout
                      </option>
                      <option value="Contract or Permanent Technical Recruitment">
                        Contract or Permanent Recruitment
                      </option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="rb-notes">
                {intent === 'candidate'
                  ? 'GitHub / LinkedIn URL & Time-Zone Overlap Availability'
                  : 'Required Tech Stack, Seniority & Target Time-Zone Overlap (Optional)'}
              </label>
              <textarea
                id="rb-notes"
                rows={3}
                value={technicalNotes}
                onChange={(e) => setTechnicalNotes(e.target.value)}
                placeholder={
                  intent === 'candidate'
                    ? 'e.g., linkedin.com/in/profile · Available for US EST or UK GMT 5h overlap, 2 weeks notice.'
                    : 'e.g., Need 2 Senior Python/RAG Engineers + 1 Go Backend Architect with 4+ hrs US EST overlap starting within 2 weeks.'
                }
                className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-slate-300 rounded-lg focus:outline-none focus:border-blue-800 text-slate-900"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                <span>{config.slaBadge}</span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{config.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
