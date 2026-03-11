import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideNextStep() {
  const { nextStep } = deckData;

  return (
    <SlideSurface
      eyebrow={nextStep.eyebrow}
      title={nextStep.title}
      accent="value"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="grid flex-1 gap-6 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <motion.div variants={riseIn}>
          <Card className="h-full rounded-[2rem]">
            <CardContent className="flex h-full flex-col gap-6 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-500">
                {nextStep.intro}
              </p>
              <div className="space-y-4">
                {nextStep.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                  >
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                    <p className="text-base text-slate-100">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={riseIn} className="flex flex-col gap-6">
          <Card className="rounded-[2rem] border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.1),rgba(255,255,255,0.03))]">
            <CardContent className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-emerald-100/70">
                {nextStep.kickoffTitle}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {nextStep.kickoffItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[1.3rem] border border-emerald-400/10 bg-slate-950/40 px-4 py-4 text-sm text-slate-100"
                  >
                    <ArrowRight className="size-4 text-emerald-200" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="text-balance text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2rem]">
              {nextStep.closingStatement}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
