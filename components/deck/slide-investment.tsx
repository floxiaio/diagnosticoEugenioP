import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { deckData } from "@/lib/deck-data";

import { AccentLine, riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideInvestment() {
  const { investment } = deckData;

  return (
    <SlideSurface
      eyebrow={investment.eyebrow}
      title={investment.title}
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="grid flex-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div variants={riseIn}>
          <Card className="h-full rounded-[2rem]">
            <CardContent className="flex h-full flex-col p-8">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  Entregables
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {investment.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-8">
                <AccentLine accent="neutral" />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                    Duración estimada
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {investment.duration}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={riseIn}>
          <Card className="h-full rounded-[2rem] border-sky-400/15 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(255,255,255,0.03))]">
            <CardContent className="flex h-full flex-col justify-between p-8">
              <div className="space-y-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-sky-100/70">
                  {investment.investmentLabel}
                </p>
                <div className="space-y-4">
                  <p className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
                    {investment.investmentAmount}
                  </p>
                  <p className="max-w-md text-base leading-7 text-slate-200">
                    Una propuesta seria para construir una primera capa útil,
                    visible y defendible desde la lógica de operación.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    Nota
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {investment.note}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    Lectura comercial
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    El valor no está en “otra herramienta”. Está en recuperar
                    control directivo y reducir el costo invisible de coordinar
                    la operación manualmente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
