import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { deckData } from "@/lib/deck-data";

import { riseIn, SlideSurface, staggerParent } from "./slide-primitives";

const accentClassMap = {
  neutral: "from-sky-400/30 to-white/0",
  value: "from-emerald-400/30 to-white/0",
  risk: "from-amber-300/30 to-white/0",
} as const;

export function SlideUnderstanding() {
  const { understanding } = deckData;

  return (
    <SlideSurface
      eyebrow={understanding.eyebrow}
      title={understanding.title}
      description={understanding.summary}
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col gap-5"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {understanding.blocks.map((block) => (
            <motion.div key={block.title} variants={riseIn}>
              <Card className="h-full rounded-[1.9rem]">
                <CardHeader className="gap-4 p-5">
                  <div
                    className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${accentClassMap[block.accent]}`}
                  />
                  <CardTitle className="text-[1.45rem] leading-[1.08] tracking-[-0.04em] text-white">
                    {block.title}
                  </CardTitle>
                  <div className="space-y-2.5">
                    {block.items.map((item) => (
                      <CardDescription
                        key={item}
                        className="flex items-start gap-2.5 text-[0.98rem] leading-6 text-slate-300"
                      >
                        <Check className="mt-1 size-3.5 shrink-0 text-slate-500" />
                        <span>{item}</span>
                      </CardDescription>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={riseIn}
          className="surface-glow mt-auto rounded-[1.85rem] border border-white/10 bg-white/[0.045] px-6 py-5"
        >
          <p className="max-w-4xl text-[1.45rem] font-semibold leading-[1.3] tracking-[-0.04em] text-white sm:text-[1.6rem] lg:text-[1.72rem]">
            {understanding.highlightedStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
