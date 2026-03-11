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
        className="flex flex-1 flex-col gap-6"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {understanding.blocks.map((block) => (
            <motion.div key={block.title} variants={riseIn}>
              <Card className="h-full rounded-[1.9rem]">
                <CardHeader className="gap-5 p-7">
                  <div
                    className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${accentClassMap[block.accent]}`}
                  />
                  <CardTitle className="text-2xl text-white">
                    {block.title}
                  </CardTitle>
                  <div className="space-y-3">
                    {block.items.map((item) => (
                      <CardDescription
                        key={item}
                        className="flex items-start gap-3 text-base leading-7 text-slate-300"
                      >
                        <Check className="mt-1 size-4 shrink-0 text-slate-500" />
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
          className="surface-glow mt-auto rounded-[2rem] border border-white/10 bg-white/[0.045] p-8"
        >
          <p className="max-w-4xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2rem]">
            {understanding.highlightedStatement}
          </p>
        </motion.div>
      </motion.div>
    </SlideSurface>
  );
}
