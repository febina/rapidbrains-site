import React, { useState, useMemo, memo } from 'react';
import { TECHNOLOGIES_DATA } from '../data/platformData';
import { ModalIntent } from './ConversionModal';
import { ArrowRight, Download, TrendingUp } from 'lucide-react';
import { AreaChart, Area, Tooltip, YAxis } from 'recharts';

interface SalaryBenchmarkToolProps {
  onOpenModal: (intent: ModalIntent, context?: string) => void;
}

type PayPeriod = 'annual' | 'monthly' | 'hourly';

interface SparklinePoint {
  month: string;
  value: number;
  formatted: string;
}

interface LightweightSparklineProps {
  id: string;
  data: SparklinePoint[];
  strokeColor: string;
  fillColor: string;
  width?: number;
  height?: number;
  showTooltip?: boolean;
}

/**
 * Memoized, fixed-dimension Recharts sparkline component.
 * Eliminates ResizeObserver overhead per card for instantaneous rendering.
 */
const LightweightSparkline: React.FC<LightweightSparklineProps> = memo(
  ({ id, data, strokeColor, fillColor, width = 112, height = 36, showTooltip = true }) => {
    const gradientId = `rb-spark-${id}`;
    return (
      <AreaChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 4, right: 2, left: 2, bottom: 2 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fillColor} stopOpacity={0.28} />
            <stop offset="95%" stopColor={fillColor} stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <YAxis domain={['dataMin * 0.985', 'dataMax * 1.01']} hide />
        {showTooltip && (
          <Tooltip
            isAnimationActive={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const pt = payload[0].payload as SparklinePoint;
                return (
                  <div className="bg-[#0A192F] text-white text-[10px] font-mono-tabular px-2.5 py-1 rounded border border-[#2563EB]/40 shadow-sm">
                    {pt.month}: {pt.formatted}
                  </div>
                );
              }
              return null;
            }}
          />
        )}
        <Area
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={1.75}
          fill={`url(#${gradientId})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    );
  }
);
LightweightSparkline.displayName = 'LightweightSparkline';

interface RegionBenchmarkConfig {
  id: string;
  name: string;
  shortName: string;
  hubs: string;
  costMultiplier: number;
  eorStatutoryTaxPct: number;
  yoyGrowthPct: number;
  monthlyCurveWeights: number[];
  timezoneOverlap: string;
  domesticTimeToHire: string;
  rapidBrainsSla: string;
}

const MONTH_LABELS = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
];

const GLOBAL_REGIONS: RegionBenchmarkConfig[] = [
  {
    id: 'india-south-asia',
    name: 'India & South Asia Hubs',
    shortName: 'India & South Asia',
    hubs: 'Bengaluru · Kochi · Hyderabad · Pune',
    costMultiplier: 0.34,
    eorStatutoryTaxPct: 12,
    yoyGrowthPct: 11.4,
    monthlyCurveWeights: [0.0, 0.06, 0.14, 0.22, 0.31, 0.42, 0.51, 0.62, 0.73, 0.82, 0.91, 1.0],
    timezoneOverlap: '4–6 hrs US EST · Full UK/EU',
    domesticTimeToHire: '45–60 Days',
    rapidBrainsSla: '24 Hours',
  },
  {
    id: 'latam-nearshore',
    name: 'Latin America Nearshore',
    shortName: 'Latin America (LATAM)',
    hubs: 'São Paulo · Bogotá · Buenos Aires · Mexico City',
    costMultiplier: 0.48,
    eorStatutoryTaxPct: 22,
    yoyGrowthPct: 12.6,
    monthlyCurveWeights: [0.0, 0.09, 0.18, 0.26, 0.35, 0.46, 0.54, 0.65, 0.76, 0.85, 0.93, 1.0],
    timezoneOverlap: 'Full 8 hr US Synchronous',
    domesticTimeToHire: '55–70 Days',
    rapidBrainsSla: '24–48 Hours',
  },
  {
    id: 'cee-eastern-europe',
    name: 'Central & Eastern Europe',
    shortName: 'Eastern Europe (CEE)',
    hubs: 'Warsaw · Krakow · Bucharest · Prague',
    costMultiplier: 0.52,
    eorStatutoryTaxPct: 19,
    yoyGrowthPct: 9.8,
    monthlyCurveWeights: [0.0, 0.08, 0.15, 0.21, 0.29, 0.38, 0.49, 0.58, 0.69, 0.79, 0.9, 1.0],
    timezoneOverlap: '5–6 hrs US EST · Full UK/EU',
    domesticTimeToHire: '60–75 Days',
    rapidBrainsSla: '24–48 Hours',
  },
  {
    id: 'apac-sea',
    name: 'Southeast Asia & APAC',
    shortName: 'Southeast Asia (APAC)',
    hubs: 'Ho Chi Minh City · Manila · Kuala Lumpur',
    costMultiplier: 0.38,
    eorStatutoryTaxPct: 15,
    yoyGrowthPct: 10.5,
    monthlyCurveWeights: [0.0, 0.07, 0.14, 0.23, 0.32, 0.41, 0.52, 0.61, 0.72, 0.83, 0.92, 1.0],
    timezoneOverlap: 'Full APAC · 4–5 hrs UK/EU',
    domesticTimeToHire: '50–65 Days',
    rapidBrainsSla: '24–48 Hours',
  },
  {
    id: 'mena-gcc',
    name: 'Middle East & MENA Hubs',
    shortName: 'Middle East & MENA',
    hubs: 'Dubai · Riyadh · Cairo · Amman',
    costMultiplier: 0.56,
    eorStatutoryTaxPct: 14,
    yoyGrowthPct: 13.2,
    monthlyCurveWeights: [0.0, 0.05, 0.14, 0.24, 0.36, 0.48, 0.59, 0.68, 0.78, 0.87, 0.94, 1.0],
    timezoneOverlap: 'Full EU/UK/GCC · 4 hrs US',
    domesticTimeToHire: '60–80 Days',
    rapidBrainsSla: '48 Hours',
  },
  {
    id: 'uk-western-europe',
    name: 'UK & Western Europe',
    shortName: 'UK & Western Europe',
    hubs: 'London · Berlin · Amsterdam · Dublin',
    costMultiplier: 0.78,
    eorStatutoryTaxPct: 24,
    yoyGrowthPct: 6.4,
    monthlyCurveWeights: [0.0, 0.08, 0.16, 0.24, 0.31, 0.4, 0.48, 0.57, 0.67, 0.78, 0.89, 1.0],
    timezoneOverlap: 'Full UK GMT / EU CET',
    domesticTimeToHire: '82–105 Days',
    rapidBrainsSla: '48 Hours',
  },
  {
    id: 'us-north-america',
    name: 'United States & Canada',
    shortName: 'US & Canada Onshore',
    hubs: 'San Francisco · New York · Austin · Toronto',
    costMultiplier: 1.0,
    eorStatutoryTaxPct: 28,
    yoyGrowthPct: 7.9,
    monthlyCurveWeights: [0.0, 0.07, 0.15, 0.25, 0.34, 0.43, 0.53, 0.63, 0.72, 0.81, 0.91, 1.0],
    timezoneOverlap: 'Full US EST / CST / PST',
    domesticTimeToHire: '94–120 Days',
    rapidBrainsSla: '48 Hours',
  },
];

interface RoleSeniorityTier {
  id: string;
  label: string;
  experienceYears: string;
  seniorityFactor: number;
  growthBonusPct: number;
}

const SENIORITY_TIERS: RoleSeniorityTier[] = [
  {
    id: 'mid',
    label: 'Mid-Level (3–5 Yrs)',
    experienceYears: '3–5 Years',
    seniorityFactor: 0.76,
    growthBonusPct: 0.0,
  },
  {
    id: 'senior',
    label: 'Senior (5–8 Yrs)',
    experienceYears: '5–8 Years',
    seniorityFactor: 1.0,
    growthBonusPct: 1.4,
  },
  {
    id: 'pod-lead',
    label: 'Tech / Pod Lead (7+ Yrs)',
    experienceYears: '7–10+ Years',
    seniorityFactor: 1.22,
    growthBonusPct: 2.2,
  },
  {
    id: 'staff-principal',
    label: 'Principal Architect (8+ Yrs)',
    experienceYears: '8–12+ Years',
    seniorityFactor: 1.32,
    growthBonusPct: 3.1,
  },
];

const PRACTICE_US_SENIOR_BASE: Record<
  string,
  {
    baseAnnualUsd: number;
    scarcityIndex: string;
    practiceGrowthBoost: number;
    stackModifiers: { stackName: string; premiumMultiplier: number; demandNote: string }[];
  }
> = {
  'ai-machine-learning': {
    baseAnnualUsd: 192000,
    scarcityIndex: 'Extreme Demand (+16% YoY)',
    practiceGrowthBoost: 4.5,
    stackModifiers: [
      {
        stackName: 'LangGraph · RAG · vLLM · Vector DBs',
        premiumMultiplier: 1.08,
        demandNote: 'Production AI agents & low-latency retrieval',
      },
      {
        stackName: 'PyTorch · LLM Fine-Tuning · CUDA',
        premiumMultiplier: 1.14,
        demandNote: 'Specialized GPU kernel & model training',
      },
      {
        stackName: 'MLOps · Kubeflow · Triton · Bedrock',
        premiumMultiplier: 1.04,
        demandNote: 'Production model governance & inference',
      },
    ],
  },
  'cloud-devops': {
    baseAnnualUsd: 174000,
    scarcityIndex: 'High Demand (+11% YoY)',
    practiceGrowthBoost: 2.1,
    stackModifiers: [
      {
        stackName: 'Kubernetes (EKS/GKE) · Terraform · ArgoCD',
        premiumMultiplier: 1.05,
        demandNote: 'Cloud-native platform engineering standard',
      },
      {
        stackName: 'Multi-Cloud SRE · OpenTelemetry · Cilium',
        premiumMultiplier: 1.09,
        demandNote: 'High-availability & eBPF observability',
      },
      {
        stackName: 'Cloud FinOps & DevSecOps Automation',
        premiumMultiplier: 1.06,
        demandNote: 'Cloud cost governance & security automation',
      },
    ],
  },
  'software-engineering': {
    baseAnnualUsd: 162000,
    scarcityIndex: 'Core Demand (+8% YoY)',
    practiceGrowthBoost: 0.8,
    stackModifiers: [
      {
        stackName: 'React 19 · Next.js · TypeScript · Node.js',
        premiumMultiplier: 1.0,
        demandNote: 'High talent liquidity with 24-hour matching',
      },
      {
        stackName: 'Go (Golang) · Rust · Apache Kafka · gRPC',
        premiumMultiplier: 1.12,
        demandNote: 'High-concurrency distributed backend systems',
      },
      {
        stackName: 'Java Spring Boot · .NET Core · PostgreSQL',
        premiumMultiplier: 1.02,
        demandNote: 'Enterprise microservices modernization',
      },
    ],
  },
  'data-engineering': {
    baseAnnualUsd: 176000,
    scarcityIndex: 'High Demand (+13% YoY)',
    practiceGrowthBoost: 2.8,
    stackModifiers: [
      {
        stackName: 'Databricks · Apache Spark · Iceberg',
        premiumMultiplier: 1.08,
        demandNote: 'Enterprise medallion lakehouse architecture',
      },
      {
        stackName: 'Snowflake · dbt · Apache Airflow · Python',
        premiumMultiplier: 1.03,
        demandNote: 'Cloud analytics & semantic data modeling',
      },
      {
        stackName: 'Apache Kafka · Apache Flink · Real-Time CDC',
        premiumMultiplier: 1.1,
        demandNote: 'Sub-second event streaming pipelines',
      },
    ],
  },
  cybersecurity: {
    baseAnnualUsd: 184000,
    scarcityIndex: 'High Shortage (+14% YoY)',
    practiceGrowthBoost: 3.4,
    stackModifiers: [
      {
        stackName: 'Zero-Trust Cloud Security · Wiz · IAM',
        premiumMultiplier: 1.09,
        demandNote: 'Multi-cloud posture & identity governance',
      },
      {
        stackName: 'OSCP Offensive Security · API Pentesting',
        premiumMultiplier: 1.11,
        demandNote: 'Certified red-teaming & AI security',
      },
      {
        stackName: 'SecOps · Sentinel · CrowdStrike · ISO 27001',
        premiumMultiplier: 1.03,
        demandNote: 'SOC automation & regulatory compliance',
      },
    ],
  },
  'enterprise-applications': {
    baseAnnualUsd: 170000,
    scarcityIndex: 'Enterprise Surge (+10% YoY)',
    practiceGrowthBoost: 1.6,
    stackModifiers: [
      {
        stackName: 'SAP S/4HANA · ABAP RAP · SAP BTP',
        premiumMultiplier: 1.09,
        demandNote: 'Global ERP modernization & migration',
      },
      {
        stackName: 'Salesforce Architecture · Apex · MuleSoft',
        premiumMultiplier: 1.06,
        demandNote: 'Multi-org CRM & middleware integration',
      },
      {
        stackName: 'ServiceNow ITOM/ITSM · Workday',
        premiumMultiplier: 1.04,
        demandNote: 'Enterprise workflow & HRIS automation',
      },
    ],
  },
  'quality-engineering': {
    baseAnnualUsd: 144000,
    scarcityIndex: 'Steady Growth (+7% YoY)',
    practiceGrowthBoost: 0.5,
    stackModifiers: [
      {
        stackName: 'Playwright · Cypress · TypeScript CI/CD',
        premiumMultiplier: 1.03,
        demandNote: 'End-to-end automated regression suites',
      },
      {
        stackName: 'k6 · JMeter · High-Load Performance SDET',
        premiumMultiplier: 1.08,
        demandNote: 'Distributed stress & chaos engineering',
      },
      {
        stackName: 'Appium · RestAssured · Contract Testing',
        premiumMultiplier: 1.0,
        demandNote: 'Mobile & microservice API verification',
      },
    ],
  },
};

export const SalaryBenchmarkTool: React.FC<SalaryBenchmarkToolProps> = ({ onOpenModal }) => {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('ai-machine-learning');
  const [selectedStackIdx, setSelectedStackIdx] = useState<number>(0);
  const [selectedSeniorityId, setSelectedSeniorityId] = useState<string>('senior');
  const [selectedRegionId, setSelectedRegionId] = useState<string>('india-south-asia');
  const [payPeriod, setPayPeriod] = useState<PayPeriod>('annual');
  const [includeStatutoryOverhead, setIncludeStatutoryOverhead] = useState<boolean>(true);

  const currentPractice = useMemo(
    () =>
      TECHNOLOGIES_DATA.find((t) => t.id === selectedPracticeId) || TECHNOLOGIES_DATA[0],
    [selectedPracticeId]
  );

  const practiceBenchmarkConfig =
    PRACTICE_US_SENIOR_BASE[selectedPracticeId] ||
    PRACTICE_US_SENIOR_BASE['ai-machine-learning'];

  const safeStackIdx =
    selectedStackIdx < practiceBenchmarkConfig.stackModifiers.length ? selectedStackIdx : 0;
  const activeStack = practiceBenchmarkConfig.stackModifiers[safeStackIdx];

  const activeSeniority =
    SENIORITY_TIERS.find((s) => s.id === selectedSeniorityId) || SENIORITY_TIERS[1];

  const activeRegion =
    GLOBAL_REGIONS.find((r) => r.id === selectedRegionId) || GLOBAL_REGIONS[0];

  const convertPeriodValue = (annualUsd: number, period: PayPeriod) => {
    if (period === 'annual') return Math.round(annualUsd);
    if (period === 'monthly') return Math.round(annualUsd / 12);
    return Math.round(annualUsd / 1920);
  };

  const formatBandValue = (annualUsd: number, period: PayPeriod) => {
    if (period === 'annual') {
      return `$${Math.round(annualUsd / 1000)}k`;
    }
    if (period === 'monthly') {
      return `$${Math.round(annualUsd / 12).toLocaleString()}`;
    }
    return `$${Math.round(annualUsd / 1920)}`;
  };

  const formatExactCurrency = (annualUsd: number, period: PayPeriod) => {
    if (period === 'annual') {
      return `$${Math.round(annualUsd).toLocaleString()} / yr`;
    }
    if (period === 'monthly') {
      return `$${Math.round(annualUsd / 12).toLocaleString()} / mo`;
    }
    return `$${Math.round(annualUsd / 1920)} / hr`;
  };

  const buildTrendSeries = (
    targetEndAnnual: number,
    yoyPct: number,
    weights: number[],
    period: PayPeriod
  ): SparklinePoint[] => {
    const startAnnual = targetEndAnnual / (1 + yoyPct / 100);
    const delta = targetEndAnnual - startAnnual;
    return weights.map((w, idx) => {
      const currentVal = startAnnual + delta * w;
      return {
        month: MONTH_LABELS[idx],
        value: convertPeriodValue(currentVal, period),
        formatted: formatBandValue(currentVal, period),
      };
    });
  };

  const regionalComparisons = useMemo(() => {
    const baseUsSenior = practiceBenchmarkConfig.baseAnnualUsd;
    const roleStackAdjustedUs =
      baseUsSenior * activeSeniority.seniorityFactor * activeStack.premiumMultiplier;

    const stackGrowthBonus = Math.round((activeStack.premiumMultiplier - 1) * 35 * 10) / 10;

    return GLOBAL_REGIONS.map((region) => {
      const rawRegionalMedian = roleStackAdjustedUs * region.costMultiplier;
      const statutoryMultiplier = includeStatutoryOverhead
        ? 1 + region.eorStatutoryTaxPct / 100
        : 1.0;

      const p50Median = Math.round(rawRegionalMedian * statutoryMultiplier);
      const p25 = Math.round(p50Median * 0.86);
      const p75 = Math.round(p50Median * 1.15);
      const p90 = Math.round(p50Median * 1.28);

      const totalYoYGrowthPct = Number(
        (
          region.yoyGrowthPct +
          practiceBenchmarkConfig.practiceGrowthBoost +
          activeSeniority.growthBonusPct +
          stackGrowthBonus
        ).toFixed(1)
      );

      return {
        region,
        p25,
        p50Median,
        p75,
        p90,
        totalYoYGrowthPct,
        trendSeries: buildTrendSeries(
          p50Median,
          totalYoYGrowthPct,
          region.monthlyCurveWeights,
          payPeriod
        ),
      };
    });
  }, [
    practiceBenchmarkConfig,
    activeSeniority,
    activeStack,
    includeStatutoryOverhead,
    payPeriod,
  ]);

  const activeRegionStats =
    regionalComparisons.find((rc) => rc.region.id === activeRegion.id) ||
    regionalComparisons[0];

  const usOnshoreStats =
    regionalComparisons.find((rc) => rc.region.id === 'us-north-america') ||
    regionalComparisons[regionalComparisons.length - 1];

  const savingsVsUsPct = Math.round(
    ((usOnshoreStats.p50Median - activeRegionStats.p50Median) / usOnshoreStats.p50Median) * 100
  );
  const annualDollarSavingsVsUs = Math.max(
    0,
    usOnshoreStats.p50Median - activeRegionStats.p50Median
  );

  const periodUnitLabel =
    payPeriod === 'annual' ? 'Annual USD' : payPeriod === 'monthly' ? 'Monthly USD' : 'Hourly USD';

  const handlePracticeChange = (newPracticeId: string) => {
    setSelectedPracticeId(newPracticeId);
    setSelectedStackIdx(0);
  };

  const shortlistContext = `Salary Benchmark Match: ${activeSeniority.label} · ${
    currentPractice.shortTitle
  } (${activeStack.stackName}) · Region: ${activeRegion.shortName} · Target Band: ${formatExactCurrency(
    activeRegionStats.p50Median,
    payPeriod
  )}`;

  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
      {/* TIER 1: 4-COLUMN RESPONSIVE CONTROL GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pb-8 border-b border-slate-100">
        {/* Control 1: Practice */}
        <div className="space-y-2">
          <label
            htmlFor="benchmark-practice-select"
            className="block text-xs font-semibold text-[#0A192F]"
          >
            01. Technology Practice
          </label>
          <select
            id="benchmark-practice-select"
            value={selectedPracticeId}
            onChange={(e) => handlePracticeChange(e.target.value)}
            className="w-full px-3.5 py-3 text-xs sm:text-sm font-medium bg-[#F3F7FD] border border-blue-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-[#0A192F]"
          >
            {TECHNOLOGIES_DATA.map((tech) => (
              <option key={tech.id} value={tech.id}>
                {tech.title}
              </option>
            ))}
          </select>
        </div>

        {/* Control 2: Stack */}
        <div className="space-y-2">
          <label
            htmlFor="benchmark-stack-select"
            className="block text-xs font-semibold text-[#0A192F]"
          >
            02. Production Stack
          </label>
          <select
            id="benchmark-stack-select"
            value={safeStackIdx}
            onChange={(e) => setSelectedStackIdx(Number(e.target.value))}
            className="w-full px-3.5 py-3 text-xs sm:text-sm font-medium bg-[#F3F7FD] border border-blue-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-[#0A192F]"
          >
            {practiceBenchmarkConfig.stackModifiers.map((mod, idx) => (
              <option key={mod.stackName} value={idx}>
                {mod.stackName}
              </option>
            ))}
          </select>
        </div>

        {/* Control 3: Role Seniority */}
        <div className="space-y-2">
          <label
            htmlFor="benchmark-seniority-select"
            className="block text-xs font-semibold text-[#0A192F]"
          >
            03. Role &amp; Seniority
          </label>
          <select
            id="benchmark-seniority-select"
            value={selectedSeniorityId}
            onChange={(e) => setSelectedSeniorityId(e.target.value)}
            className="w-full px-3.5 py-3 text-xs sm:text-sm font-medium bg-[#F3F7FD] border border-blue-200 rounded-xl focus:outline-none focus:border-[#2563EB] text-[#0A192F]"
          >
            {SENIORITY_TIERS.map((tier) => (
              <option key={tier.id} value={tier.id}>
                {tier.label}
              </option>
            ))}
          </select>
        </div>

        {/* Control 4: Pay Period Unit Switcher */}
        <div className="space-y-2">
          <span className="block text-xs font-semibold text-[#0A192F]">
            04. Compensation Period
          </span>
          <div className="grid grid-cols-3 gap-1 p-1 bg-[#F3F7FD] border border-blue-200 rounded-xl">
            {(
              [
                { id: 'annual', label: 'Annual' },
                { id: 'monthly', label: 'Monthly' },
                { id: 'hourly', label: 'Hourly' },
              ] as const
            ).map((unit) => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setPayPeriod(unit.id)}
                className={`py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  payPeriod === unit.id
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A192F]'
                }`}
              >
                {unit.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TIER 2: SELECTED REGION SPOTLIGHT GRID (12-COLUMN HORIZONTAL EXECUTIVE SUMMARY) */}
      <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Col 1–5: Selected Region Median + Sparkline */}
        <div className="lg:col-span-5 space-y-3 lg:border-r border-slate-800 lg:pr-8">
          <div className="flex items-center justify-between text-xs text-blue-300">
            <span className="font-semibold">{activeRegion.name}</span>
            <span className="font-mono-tabular">SLA: {activeRegion.rapidBrainsSla}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono-tabular text-white tracking-tight">
                {formatExactCurrency(activeRegionStats.p50Median, payPeriod)}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Median (P50) ·{' '}
                <span className="text-blue-300 font-mono-tabular font-semibold">
                  +{activeRegionStats.totalYoYGrowthPct}% 12M YoY
                </span>
              </div>
            </div>

            <div className="shrink-0" aria-label="Selected region 12 month salary trend">
              <LightweightSparkline
                id={`spotlight-${activeRegion.id}`}
                data={activeRegionStats.trendSeries}
                strokeColor="#60A5FA"
                fillColor="#2563EB"
                width={104}
                height={40}
                showTooltip={false}
              />
            </div>
          </div>

          <div className="text-xs text-slate-300 pt-1">
            {savingsVsUsPct > 0 ? (
              <span className="text-emerald-400 font-mono-tabular font-semibold">
                Saves {savingsVsUsPct}% (${annualDollarSavingsVsUs.toLocaleString()}/yr per engineer) vs. US Onshore
              </span>
            ) : (
              <span>Domestic US Onshore Reference Benchmark ({activeRegion.hubs})</span>
            )}
          </div>
        </div>

        {/* Col 6–9: 4-Column Percentile Distribution Grid */}
        <div className="lg:col-span-4 space-y-3 lg:border-r border-slate-800 lg:pr-8">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Percentile Distribution ({periodUnitLabel})</span>
            <span className="text-slate-400 font-mono-tabular">{activeSeniority.label}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 font-mono-tabular">
            <div className="bg-[#172A45]/90 border border-slate-800 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-slate-400">25th (P25)</div>
              <div className="text-sm font-bold text-white mt-0.5">
                {formatBandValue(activeRegionStats.p25, payPeriod)}
              </div>
            </div>
            <div className="bg-[#2563EB] border border-blue-400 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-blue-100">Median (P50)</div>
              <div className="text-sm font-bold text-white mt-0.5">
                {formatBandValue(activeRegionStats.p50Median, payPeriod)}
              </div>
            </div>
            <div className="bg-[#172A45]/90 border border-slate-800 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-slate-400">75th (P75)</div>
              <div className="text-sm font-bold text-white mt-0.5">
                {formatBandValue(activeRegionStats.p75, payPeriod)}
              </div>
            </div>
            <div className="bg-[#172A45]/90 border border-slate-800 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-slate-400">Top 1.8% (P90)</div>
              <div className="text-sm font-bold text-blue-300 mt-0.5">
                {formatBandValue(activeRegionStats.p90, payPeriod)}
              </div>
            </div>
          </div>
        </div>

        {/* Col 10–12: Action CTAs */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-3">
          <button
            type="button"
            onClick={() => onOpenModal('shortlist', shortlistContext)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <span>Request 24h Shortlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              onOpenModal(
                'guide',
                `2026 Compensation Guide (${currentPractice.shortTitle} · ${activeRegion.shortName})`
              )
            }
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-[#172A45]/70 hover:bg-[#172A45] rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download 2026 PDF Guide</span>
          </button>
        </div>
      </div>

      {/* TIER 3: RESPONSIVE CSS GRID OF REGIONAL SALARY BAND CARDS + 12M SPARKLINES */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#2563EB]" />
            <h4 className="text-base font-bold text-[#0A192F]">
              Global Regional Salary Bands &amp; 12-Month Growth Trajectory
            </h4>
          </div>

          <label className="inline-flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includeStatutoryOverhead}
              onChange={(e) => setIncludeStatutoryOverhead(e.target.checked)}
              className="rounded border-slate-300 accent-[#2563EB]"
            />
            <span>Include Employer Statutory Taxes &amp; EOR Overhead</span>
          </label>
        </div>

        {/* Responsive 1 / 2 / 3 Column CSS Grid of Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {regionalComparisons.map((item) => {
            const isSelected = item.region.id === activeRegion.id;
            const maxScale = usOnshoreStats.p90 * 1.05;
            const leftPct = Math.max(4, Math.round((item.p25 / maxScale) * 100));
            const widthPct = Math.max(
              8,
              Math.round(((item.p75 - item.p25) / maxScale) * 100)
            );
            const medianPct = Math.min(96, Math.round((item.p50Median / maxScale) * 100));
            const regionSavings = Math.round(
              ((usOnshoreStats.p50Median - item.p50Median) / usOnshoreStats.p50Median) * 100
            );
            const strokeColor = isSelected ? '#2563EB' : '#0A192F';

            return (
              <div
                key={item.region.id}
                onClick={() => setSelectedRegionId(item.region.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedRegionId(item.region.id);
                  }
                }}
                className={`text-left p-5 rounded-2xl border transition-colors cursor-pointer flex flex-col justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#F3F7FD] border-[#2563EB] shadow-xs'
                    : 'bg-white border-blue-100 hover:border-[#2563EB]/60'
                }`}
              >
                {/* Card Top: Region Title & Savings vs US */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-[#0A192F]">
                      {item.region.shortName}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                      {item.region.timezoneOverlap}
                    </div>
                  </div>
                  {regionSavings > 0 ? (
                    <span className="text-xs font-mono-tabular font-semibold text-[#2563EB] shrink-0">
                      -{regionSavings}% vs US
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono-tabular text-slate-400 shrink-0">
                      US Baseline
                    </span>
                  )}
                </div>

                {/* Card Middle: Median Value + Range Bar */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 font-mono-tabular mb-2">
                    <span className="text-lg font-bold text-[#0A192F]">
                      {formatBandValue(item.p50Median, payPeriod)}{' '}
                      <span className="text-[11px] font-sans font-normal text-slate-500">
                        median
                      </span>
                    </span>
                    <span className="text-xs text-slate-500">
                      P25–P75: {formatBandValue(item.p25, payPeriod)} –{' '}
                      {formatBandValue(item.p75, payPeriod)}
                    </span>
                  </div>

                  <div className="relative h-2 w-full bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 bottom-0 rounded-full ${
                        isSelected ? 'bg-[#2563EB]' : 'bg-[#0A192F]/55'
                      }`}
                      style={{
                        left: `${leftPct}%`,
                        width: `${widthPct}%`,
                      }}
                    />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-[#0A192F]"
                      style={{ left: `${medianPct}%` }}
                    />
                  </div>
                </div>

                {/* Card Bottom: Recharts 12-Month Sparkline + YoY Growth */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="font-mono-tabular">
                    <div
                      className={`text-xs font-bold ${
                        isSelected ? 'text-[#2563EB]' : 'text-[#0A192F]'
                      }`}
                    >
                      +{item.totalYoYGrowthPct}% YoY
                    </div>
                    <div className="text-[10px] text-slate-400">12M Salary Trend</div>
                  </div>

                  <LightweightSparkline
                    id={`card-${item.region.id}`}
                    data={item.trendSeries}
                    strokeColor={strokeColor}
                    fillColor={strokeColor}
                    width={112}
                    height={34}
                    showTooltip={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
