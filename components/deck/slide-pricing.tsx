import { motion } from "framer-motion";

import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlidePricing() {
  const { pricing } = deckData;

  return (
    <SlideSurface
      eyebrow={pricing.eyebrow}
      title={pricing.title}
      description={pricing.subtitle}
      className="min-h-0"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 min-h-0 flex-col gap-5 overflow-y-auto overscroll-y-contain pr-3 pb-4"
      >
        <motion.div
          variants={riseIn}
          className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.028),rgba(255,255,255,0.014))] px-5 py-5 sm:px-6"
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {pricing.framing.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-white/6 bg-slate-950/24 px-4 py-3"
              >
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:px-6 lg:px-7"
        >
          <div className="grid grid-cols-[0.85fr_2.1fr_1.1fr_1.35fr] gap-5 border-b border-white/8 pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {pricing.columns.phase}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {pricing.columns.include}
            </p>
            <p className="text-right font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {pricing.columns.purchase}
            </p>
            <p className="text-right font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {pricing.columns.modular}
            </p>
          </div>

          <div className="divide-y divide-white/8">
            {pricing.rows.map((row) => (
              <div
                key={row.phase}
                className="grid grid-cols-[0.85fr_2.1fr_1.1fr_1.35fr] gap-5 py-5"
              >
                <div className="pr-2">
                  <p className="text-lg font-semibold tracking-[-0.04em] text-white">
                    {row.phase}
                  </p>
                </div>
                <p className="max-w-xl text-base leading-7 text-slate-200">
                  {row.include}
                </p>
                <p className="text-right text-lg font-semibold tracking-[-0.04em] text-white">
                  {row.purchase}
                </p>
                <p className="text-right text-lg font-semibold tracking-[-0.04em] text-white">
                  {row.modular}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.012))] px-5 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
              Modelos
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.2rem] border border-white/6 bg-slate-950/24 px-4 py-4">
                <p className="text-base font-semibold tracking-[-0.03em] text-white">
                  Compra
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {pricing.modelNotes.purchase}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-white/6 bg-slate-950/24 px-4 py-4">
                <p className="text-base font-semibold tracking-[-0.03em] text-white">
                  Modular
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {pricing.modelNotes.modular}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-sky-400/16 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(255,255,255,0.02))] px-5 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky-100/70">
              Recomendación Floxia
            </p>
            <p className="mt-4 text-base leading-8 text-white">
              {pricing.recommendation}
            </p>
          </div>
        </motion.div>

        <motion.div variants={riseIn} className="flex justify-between px-1">
          <p className="text-sm text-slate-400">{pricing.note}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
            Floxia
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
