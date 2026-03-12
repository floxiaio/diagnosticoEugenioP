import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { deckData } from "@/lib/deck-data";

import { riseIn, staggerParent } from "./slide-primitives";

export function SlideVision() {
  const { vision } = deckData;

  return (
    <div className="mx-auto flex h-full w-full max-w-[88rem] flex-col px-6 py-6 sm:px-10 lg:px-14 xl:px-16">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex h-full flex-col gap-3"
      >
        <motion.div variants={riseIn} className="space-y-3">
          <Badge variant="value">{vision.eyebrow}</Badge>
          <div className="max-w-4xl space-y-2.5">
            <h2 className="text-balance text-[2.55rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.85rem] sm:leading-[0.98]">
              {vision.title}
            </h2>
            <p className="max-w-3xl text-[0.94rem] leading-6 text-slate-300 sm:text-[0.98rem] sm:leading-6.5">
              {vision.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-2.5">
          {vision.transformations.map((item, index) => (
            <motion.div
              key={`${item.fromTitle}-${item.toTitle}`}
              variants={riseIn}
              className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.018))] px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-slate-600">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/8 to-transparent" />
              </div>

              <div className="mt-2.5 grid grid-cols-[1fr_auto_1fr] gap-2.5">
                <div className="rounded-[1.1rem] border border-white/[0.07] bg-slate-950/24 px-3 py-2.5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-500">
                    {item.fromLabel}
                  </p>
                  <p className="mt-1.5 text-[0.92rem] font-medium leading-5 tracking-[-0.03em] text-slate-100">
                    {item.fromTitle}
                  </p>
                  <p className="mt-1.5 text-[0.8rem] leading-[1.35] text-slate-400">
                    {item.fromDescription}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/16 bg-emerald-400/[0.05] font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/75">
                    →
                  </div>
                </div>

                <div className="rounded-[1.1rem] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(16,185,129,0.07),rgba(255,255,255,0.02))] px-3 py-2.5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-emerald-100/65">
                    {item.toLabel}
                  </p>
                  <p className="mt-1.5 text-[0.92rem] font-medium leading-5 tracking-[-0.03em] text-white">
                    {item.toTitle}
                  </p>
                  <p className="mt-1.5 text-[0.8rem] leading-[1.35] text-slate-300">
                    {item.toDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={riseIn}
          className="mt-auto rounded-[1.2rem] border border-white/8 bg-white/[0.025] px-4 py-3"
        >
          <p className="max-w-4xl whitespace-pre-line text-balance text-[0.94rem] font-semibold leading-5.5 tracking-[-0.03em] text-white sm:text-[1rem] sm:leading-6">
            {vision.closingStatement}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
