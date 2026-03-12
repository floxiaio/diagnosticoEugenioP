"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const easing = [0.22, 1, 0.36, 1] as const;

export const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const riseIn = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: easing,
    },
  },
};

export const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.74,
      ease: easing,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
    scale: 0.985,
    transition: {
      duration: 0.42,
      ease: easing,
    },
  }),
};

const badgeVariantMap = {
  neutral: "default",
  value: "value",
  risk: "risk",
} as const;

interface SlideSurfaceProps {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: keyof typeof badgeVariantMap;
  children: ReactNode;
  className?: string;
}

export function SlideSurface({
  eyebrow,
  title,
  description,
  accent = "neutral",
  children,
  className,
}: SlideSurfaceProps) {
  return (
    <div
      className={cn(
        "mx-auto flex h-full w-full max-w-[88rem] flex-col px-6 py-6 sm:px-10 lg:px-14 xl:px-16 2xl:pr-28",
        className
      )}
    >
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="flex h-full flex-col"
      >
        <motion.div variants={riseIn} className="space-y-5">
          <Badge variant={badgeVariantMap[accent]}>{eyebrow}</Badge>
          <div className="max-w-5xl space-y-4">
            {title ? (
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3.65rem] sm:leading-[0.98] lg:text-[3.85rem] lg:leading-[0.97]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-4xl text-base leading-7 text-slate-300 sm:text-[1.02rem] sm:leading-[1.85] lg:text-[1.08rem]">
                {description}
              </p>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="mt-8 flex min-h-0 flex-1 flex-col"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

interface AccentLineProps {
  accent: "neutral" | "value" | "risk";
}

export function AccentLine({ accent }: AccentLineProps) {
  const className =
    accent === "value"
      ? "from-emerald-400/60 via-sky-300/30 to-transparent"
      : accent === "risk"
        ? "from-amber-300/70 via-rose-300/20 to-transparent"
        : "from-sky-400/70 via-cyan-300/20 to-transparent";

  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r via-white/[0.06]",
        className
      )}
    />
  );
}
