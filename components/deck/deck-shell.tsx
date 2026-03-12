"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import {
  type ComponentType,
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

import { SlideCost } from "@/components/deck/slide-cost";
import { SlideCover } from "@/components/deck/slide-cover";
import { SlideArchitecture } from "@/components/deck/slide-architecture";
import { SlideNextStep } from "@/components/deck/slide-next-step";
import { SlidePhase } from "@/components/deck/slide-phase";
import { SlidePricing } from "@/components/deck/slide-pricing";
import { slideVariants } from "@/components/deck/slide-primitives";
import { SlideUnderstanding } from "@/components/deck/slide-understanding";
import { SlideVision } from "@/components/deck/slide-vision";
import { Button } from "@/components/ui/button";
import { deckData } from "@/lib/deck-data";
import { SlideKey } from "@/lib/types";
import { cn } from "@/lib/utils";

const slideRegistry: Record<SlideKey, ComponentType> = {
  cover: SlideCover,
  understanding: SlideUnderstanding,
  cost: SlideCost,
  vision: SlideVision,
  architecture: SlideArchitecture,
  phase: SlidePhase,
  pricing: SlidePricing,
  "next-step": SlideNextStep,
};

const FRAME_WIDTH = 1920;
const FRAME_HEIGHT = 1080;
const FRAME_PADDING = 24;

export function DeckShell() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewportSize, setViewportSize] = useState({
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
  });
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = deckData.navigation.length;
  const activeSlide = deckData.navigation[activeIndex];
  const progressWidth = `${((activeIndex + 1) / totalSlides) * 100}%`;
  const ActiveSlideComponent = slideRegistry[activeSlide.key];
  const availableWidth = Math.max(viewportSize.width - FRAME_PADDING * 2, 320);
  const availableHeight = Math.max(viewportSize.height - FRAME_PADDING * 2, 320);
  const scale = Math.min(
    availableWidth / FRAME_WIDTH,
    availableHeight / FRAME_HEIGHT
  );

  const goToSlide = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= totalSlides || nextIndex === activeIndex) {
      return;
    }

    setDirection(nextIndex > activeIndex ? 1 : -1);
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  };

  const handleKeyNavigation = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      goToSlide(Math.min(activeIndex + 1, totalSlides - 1));
    }

    if (event.key === "ArrowLeft") {
      goToSlide(Math.max(activeIndex - 1, 0));
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyNavigation);

    return () => {
      window.removeEventListener("keydown", handleKeyNavigation);
    };
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) {
      return;
    }

    const updateSize = (width: number, height: number) => {
      setViewportSize((current) => {
        if (current.width === width && current.height === height) {
          return current;
        }

        return { width, height };
      });
    };

    updateSize(node.clientWidth, node.clientHeight);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }

      updateSize(entry.contentRect.width, entry.contentRect.height);
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-background text-foreground">
      <div
        ref={viewportRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-[2rem] border border-white/[0.06] bg-background shadow-[0_28px_120px_rgba(0,0,0,0.42)]"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(77,180,255,0.18),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(20,184,166,0.11),transparent_22%),linear-gradient(90deg,rgba(255,255,255,0.015),transparent_26%,transparent_74%,rgba(255,255,255,0.015))]" />

          <aside className="absolute right-8 top-1/2 z-30 flex -translate-y-1/2">
            <div className="w-56 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
              <div className="mb-3 px-2 pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-slate-500">
                  Navigation
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                {deckData.navigation.map((slide, index) => (
                  <button
                    key={slide.key}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "group grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.15rem] px-3 py-3 text-left transition-all duration-250",
                      index === activeIndex
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.04]"
                    )}
                    aria-label={`Ir a slide ${slide.index}: ${slide.label}`}
                  >
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full border border-white/25 transition-all duration-300",
                        index === activeIndex
                          ? "border-sky-300/60 bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.45)]"
                          : "bg-white/[0.08] group-hover:border-white/45 group-hover:bg-white/20"
                      )}
                    />
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-[11px] uppercase tracking-[0.28em] transition-colors",
                          index === activeIndex
                            ? "text-slate-100"
                            : "text-slate-400 group-hover:text-slate-200"
                        )}
                      >
                        {slide.label}
                      </p>
                      <p
                        className={cn(
                          "mt-1 truncate text-[10px] uppercase tracking-[0.24em]",
                          index === activeIndex
                            ? "text-slate-500"
                            : "text-slate-600 group-hover:text-slate-500"
                        )}
                      >
                        {slide.kicker}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.22em]",
                        index === activeIndex ? "text-sky-200" : "text-slate-600"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <header className="absolute left-10 right-10 top-6 z-20 flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-slate-500">
                Diagnostico Eugenio
              </p>
              <p className="mt-1.5 text-sm text-slate-300">
                FloxIA / {deckData.meetingContext}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500 transition-colors hover:text-slate-300"
              >
                Volver
              </Link>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-300">
                {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </div>
            </div>
          </header>

          <main className="absolute left-0 right-[18rem] top-[4.6rem] bottom-[7.1rem] z-10 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.section
                key={activeSlide.key}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <ActiveSlideComponent />
              </motion.section>
            </AnimatePresence>
          </main>

          <footer className="absolute bottom-5 left-10 right-[19rem] z-20 flex flex-col gap-3">
            <div className="h-px w-full bg-white/[0.08]">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 transition-all duration-500"
                style={{ width: progressWidth }}
              />
            </div>

            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  {activeSlide.kicker}
                </p>
                <p className="mt-1.5 text-sm text-slate-300">
                  Navega con teclado o con los controles inferiores.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goToSlide(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => goToSlide(activeIndex - 1)}
                  disabled={activeIndex === 0}
                >
                  <ArrowLeft className="size-4" />
                  Anterior
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => goToSlide(activeIndex + 1)}
                  disabled={activeIndex === totalSlides - 1}
                >
                  Siguiente
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goToSlide(activeIndex + 1)}
                  disabled={activeIndex === totalSlides - 1}
                  aria-label="Slide siguiente"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
