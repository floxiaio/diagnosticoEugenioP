import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

export function SlideCost() {
  const { cost } = deckData;

  return (
    <SlideSurface
      eyebrow={cost.eyebrow}
      title={cost.title}
      accent="risk"
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col gap-6"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cost.blocks.map((block, index) => (
            <motion.div key={block.title} variants={riseIn}>
              <Card className="h-full rounded-[1.9rem]">
                <CardContent className="flex h-full flex-col gap-8 p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[1.8rem] font-semibold tracking-[-0.06em] text-white">
                      {block.title}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-amber-100/70">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-lg font-medium leading-7 tracking-[-0.03em] text-slate-100">
                    {block.kicker}
                  </p>
                  <p className="text-sm leading-6 text-slate-200">
                    {block.summary}
                  </p>
                  <p className="text-base leading-7 text-slate-300">
                    {block.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={riseIn}
          className="mt-auto rounded-[2rem] border border-amber-300/16 bg-[linear-gradient(180deg,rgba(245,158,11,0.08),rgba(255,255,255,0.03))] p-8"
        >
          <p className="max-w-5xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2rem]">
            {cost.highlightedStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
