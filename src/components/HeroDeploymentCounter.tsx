import React, { useEffect, useState } from 'react';
import {
  HERO_DEPLOYMENT_COUNTER_DATA,
  HeroDeploymentCounterData,
} from '../data/platformData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroDeploymentCounterProps {
  data?: HeroDeploymentCounterData;
}

export const HeroDeploymentCounter: React.FC<HeroDeploymentCounterProps> = ({
  data = HERO_DEPLOYMENT_COUNTER_DATA,
}) => {
  const [animatedCount, setAnimatedCount] = useState<number>(data.baseCount - 640);
  const [liveIncrement, setLiveIncrement] = useState<number>(0);
  const [activeFeedIndex, setActiveFeedIndex] = useState<number>(0);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState<boolean>(false);

  // Smooth count-up animation to 12,500 on mount
  useEffect(() => {
    let frameId: number;
    const startValue = data.baseCount - 640;
    const endValue = data.baseCount;
    const duration = data.animationDurationMs;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out for smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startValue + (endValue - startValue) * easedProgress);
      setAnimatedCount(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setAnimatedCount(endValue);
        setIsInitialAnimationDone(true);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [data.baseCount, data.animationDurationMs]);

  // Real-time rotation through mock deployment records
  useEffect(() => {
    if (!isInitialAnimationDone || data.recentDeployments.length === 0) return;

    const interval = setInterval(() => {
      setActiveFeedIndex((prev) => (prev + 1) % data.recentDeployments.length);
      setLiveIncrement((prev) => (prev < 18 ? prev + 1 : prev));
    }, data.liveCycleIntervalMs);

    return () => clearInterval(interval);
  }, [isInitialAnimationDone, data.recentDeployments.length, data.liveCycleIntervalMs]);

  const totalDisplayedCount = animatedCount + liveIncrement;
  const formattedCounter = `${totalDisplayedCount.toLocaleString('en-US')}+`;
  const activeDeployment =
    data.recentDeployments[activeFeedIndex] || data.recentDeployments[0];

  const handleCycleNext = () => {
    setActiveFeedIndex((prev) => (prev + 1) % data.recentDeployments.length);
  };

  return (
    <div
      className="mt-8 bg-[#F3F7FD] border border-blue-200/80 rounded-2xl p-5 sm:p-6 transition-colors"
      aria-live="polite"
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        {/* Left: Real-time Dynamic Counter */}
        <div className="sm:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
            </span>
            <span>Real-Time Global Placement Counter</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-2.5">
            <span className="text-2xl sm:text-3xl font-bold font-mono-tabular text-[#0A192F] tracking-tight">
              {formattedCounter}
            </span>
            <span className="text-base sm:text-lg font-bold text-[#0A192F] tracking-tight">
              {data.headlineLabel}
            </span>
          </div>

          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {data.subLabel} ·{' '}
            <span className="font-mono-tabular font-semibold text-[#0A192F]">
              {data.retentionRate}
            </span>{' '}
            client retention
          </p>
        </div>

        {/* Right: Latest Verified Placement from Mock Data Object */}
        <div className="sm:col-span-5 sm:border-l sm:border-blue-200/80 sm:pl-5 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500 mb-1">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Latest Verified Match</span>
            </span>
            <button
              type="button"
              onClick={handleCycleNext}
              className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#2563EB] hover:text-[#0A192F] transition-colors"
              title="View next recent engineering placement"
            >
              <span>
                {activeFeedIndex + 1}/{data.recentDeployments.length}
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-xs font-bold text-[#0A192F] truncate">
            {activeDeployment.role}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 mt-1 font-mono-tabular">
            <span>{activeDeployment.clientIndustry}</span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span className="text-[#2563EB] font-semibold">
              Matched in {activeDeployment.slaHours}h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
