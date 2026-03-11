import { motion } from "framer-motion";
import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideCover() {
  const { cover } = deckData;

  return (
    <SlideSurface
      eyebrow={cover.eyebrow}
      title=""
      description=""
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-14"
      >
        <motion.div
          variants={riseIn}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-20 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(88,166,255,0.16),rgba(88,166,255,0.05)_34%,transparent_68%)] blur-3xl" />
          <div className="absolute right-14 top-16 hidden h-56 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 lg:block" />
        </motion.div>

        <div className="relative flex flex-1 flex-col justify-center">
          <motion.div variants={riseIn} className="max-w-[70rem] space-y-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-slate-500">
                FLOXIA / MISSION AUDIT
              </div>
              <div className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2 py-[0.275rem] font-mono text-[9px] uppercase tracking-[0.26em] text-slate-500">
                FOLLOW-UP CON EUGENIO
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="max-w-[58rem] text-balance text-[3.25rem] font-semibold tracking-[-0.078em] text-white sm:text-[4.45rem] lg:text-[5.65rem] lg:leading-[0.95]">
                {cover.title}
              </h1>
              <p className="max-w-[56rem] text-balance text-lg leading-8 text-slate-300 sm:text-[1.15rem] sm:leading-8 lg:text-[1.34rem] lg:leading-[1.7]">
                Diagnóstico ejecutivo y roadmap propuesto
                <br />
                para reducir fricción operativa, recuperar tiempo directivo
                <br />
                y construir una capa real de control multiproyecto.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={riseIn}
          className="relative mt-16 border-t border-white/[0.06] pt-5"
        >
          <div className="flex flex-col gap-3 text-slate-300 md:flex-row md:items-center md:gap-8">
            {cover.callouts.map((callout, index) => (
              <div
                key={callout}
                className="flex items-center gap-3.5"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-slate-700">
                  0{index + 1}
                </span>
                <span className="text-sm tracking-[-0.01em] text-slate-400 sm:text-[0.95rem]">
                  {callout}
                </span>
                {index < cover.callouts.length - 1 ? (
                  <span className="hidden h-px w-10 bg-white/[0.06] md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
