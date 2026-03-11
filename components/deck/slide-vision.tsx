import { motion } from "framer-motion";

import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideVision() {
  const { vision } = deckData;

  return (
    <SlideSurface
      eyebrow={vision.eyebrow}
      title={vision.title}
      description={vision.subtitle}
      accent="value"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 min-h-0 flex-col gap-6 overflow-y-auto pr-2"
      >
        <div className="grid gap-5">
          {vision.transformations.map((item, index) => (
            <motion.div
              key={`${item.fromTitle}-${item.toTitle}`}
              variants={riseIn}
              className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.018))] px-6 py-6 sm:px-7 sm:py-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/8 to-transparent" />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
                <div className="rounded-[1.5rem] border border-white/[0.07] bg-slate-950/24 px-5 py-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                    {item.fromLabel}
                  </p>
                  <p className="mt-3 text-[1.28rem] font-medium leading-7 tracking-[-0.045em] text-slate-100">
                    {item.fromTitle}
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-7 text-slate-400">
                    {item.fromDescription}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/16 bg-emerald-400/[0.05] font-mono text-sm uppercase tracking-[0.32em] text-emerald-200/75">
                    →
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(16,185,129,0.07),rgba(255,255,255,0.02))] px-5 py-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-100/65">
                    {item.toLabel}
                  </p>
                  <p className="mt-3 text-[1.28rem] font-medium leading-7 tracking-[-0.045em] text-white">
                    {item.toTitle}
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-7 text-slate-300">
                    {item.toDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={riseIn}
          className="mt-auto rounded-[1.7rem] border border-white/8 bg-white/[0.025] px-6 py-5 sm:px-7"
        >
          <p className="max-w-4xl whitespace-pre-line text-balance text-[1.32rem] font-semibold leading-8 tracking-[-0.04em] text-white sm:text-[1.55rem] sm:leading-9">
            {vision.closingStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
