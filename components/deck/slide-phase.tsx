import { motion } from "framer-motion";

import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlidePhase() {
  const { phase } = deckData;

  return (
    <SlideSurface
      eyebrow={phase.eyebrow}
      title={phase.title}
      description={phase.subtitle}
      accent="value"
      className="min-h-0"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 min-h-0 flex-col gap-6 overflow-y-auto overscroll-y-contain pr-4 pb-6"
      >
        {phase.phases.map((stage, index) => (
          <motion.div
            key={stage.title}
            variants={riseIn}
            className={
              index === 0
                ? "rounded-[2rem] border border-emerald-400/16 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
                : "rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.018))] p-6"
            }
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p
                  className={
                    index === 0
                      ? "font-mono text-[11px] uppercase tracking-[0.34em] text-emerald-100/70"
                      : "font-mono text-[11px] uppercase tracking-[0.34em] text-slate-500"
                  }
                >
                  {stage.label}
                </p>
                <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
                  {stage.title}
                </p>
                <p className="text-base leading-7 text-slate-300">
                  {stage.description}
                </p>
              </div>

              <div className="lg:max-w-[32rem] lg:flex-1">
                <div
                  className={
                    index === 0
                      ? "grid gap-4"
                      : "grid gap-4"
                  }
                >
                  {stage.modules.map((module) => (
                    <div
                      key={module.title}
                      className={
                        index === 0
                          ? "rounded-[1.45rem] border border-emerald-400/10 bg-slate-950/28 p-5"
                          : "rounded-[1.45rem] border border-white/8 bg-slate-950/28 p-5"
                      }
                    >
                      <p className="text-lg font-medium tracking-[-0.04em] text-white">
                        {module.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {module.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideSurface>
  );
}
