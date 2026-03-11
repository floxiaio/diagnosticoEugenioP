import { motion } from "framer-motion";

import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideArchitecture() {
  const { architecture } = deckData;
  const [moduleOne, moduleTwo, moduleThree, moduleFour, moduleFive] =
    architecture.modules;

  return (
    <SlideSurface
      eyebrow={architecture.eyebrow}
      title={architecture.title}
      description={architecture.subtitle}
      accent="value"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 min-h-0 flex-col gap-6 overflow-y-auto pr-2"
      >
        <div className="relative hidden min-h-[45rem] xl:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[23%] h-[40%] w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/8 to-white/0" />
            <div className="absolute left-[28%] top-[39%] h-px w-[16%] bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
            <div className="absolute right-[28%] top-[39%] h-px w-[16%] bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
            <div className="absolute left-1/2 bottom-[18%] h-[10%] w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/8 to-white/0" />
            <div className="absolute left-[23%] top-[24%] h-px w-[18%] rotate-[12deg] bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
            <div className="absolute right-[23%] top-[24%] h-px w-[18%] -rotate-[12deg] bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
          </div>

          <motion.div
            variants={riseIn}
            className="absolute left-1/2 top-[39%] z-10 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-[2.1rem] border border-emerald-400/14 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.02))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-emerald-100/65">
              Núcleo central
            </p>
            <p className="mt-4 text-[1.65rem] font-semibold tracking-[-0.05em] text-white">
              {architecture.centralModule.title}
            </p>
            <p className="mt-4 text-[0.98rem] leading-7 text-slate-300">
              {architecture.centralModule.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {architecture.centralModule.items.map((item) => (
                <span
                  key={item}
                  className="text-sm leading-6 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <ArchitectureNode
            className="absolute left-0 top-0 w-[21rem]"
            module={moduleOne}
            index={1}
          />
          <ArchitectureNode
            className="absolute right-0 top-0 w-[21rem]"
            module={moduleTwo}
            index={2}
          />
          <ArchitectureNode
            className="absolute left-0 top-[64%] w-[21rem] -translate-y-1/2"
            module={moduleThree}
            index={3}
          />
          <ArchitectureNode
            className="absolute right-0 top-[64%] w-[21rem] -translate-y-1/2"
            module={moduleFour}
            index={4}
          />
          <ArchitectureNode
            className="absolute left-1/2 bottom-0 w-[26rem] -translate-x-1/2"
            module={moduleFive}
            index={5}
          />
        </div>

        <div className="grid gap-4 xl:hidden">
          <ArchitectureNode
            className=""
            module={architecture.centralModule}
            index={0}
            isCentral
          />
          {architecture.modules.map((module, index) => (
            <ArchitectureNode
              key={module.title}
              className=""
              module={module}
              index={index + 1}
            />
          ))}
        </div>

        <motion.div
          variants={riseIn}
          className="rounded-[1.55rem] border border-white/8 bg-white/[0.025] px-6 py-5"
        >
          <p className="max-w-4xl whitespace-pre-line text-balance text-[1.18rem] font-medium leading-8 tracking-[-0.03em] text-slate-100">
            {architecture.supportStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}

function ArchitectureNode({
  module,
  index,
  className,
  isCentral = false,
}: {
  module: (typeof deckData.architecture.centralModule);
  index: number;
  className: string;
  isCentral?: boolean;
}) {
  return (
    <motion.div
      variants={riseIn}
      className={className}
    >
      <div
        className={
          isCentral
            ? "rounded-[1.9rem] border border-emerald-400/14 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.02))] p-6"
            : "rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.016))] p-5"
        }
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            {isCentral ? "00" : `0${index}`}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="mt-4 space-y-4">
          <p
            className={
              isCentral
                ? "max-w-md text-[1.45rem] font-semibold tracking-[-0.045em] text-white"
                : "max-w-md text-[1.18rem] font-semibold tracking-[-0.04em] text-white"
            }
          >
            {module.title}
          </p>
          <p className="text-[0.94rem] leading-6.5 text-slate-300">
            {module.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {module.items.map((item) => (
              <span key={item} className="text-sm leading-6 text-slate-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
