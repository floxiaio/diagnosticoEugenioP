import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 py-16 text-foreground sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,180,255,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,181,153,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.34em] text-slate-300">
            Diagnostico Eugenio / FloxIA
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Deck ejecutivo listo para follow-up comercial.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Presentacion web premium, con el diagnóstico inicial para Eugenio
              Pérez Rivero.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/deck"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-sky-400 px-7 text-slate-950 hover:bg-sky-300"
              )}
            >
              Abrir presentación
              <ArrowRight className="size-4" />
            </Link>
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
              Next.js App Router / TypeScript / Tailwind / shadcn/ui
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/[0.08] bg-slate-950/70 p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  Mission Audit
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Diagnóstico ejecutivo y propuesta de Fase 1
                </p>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200">
                8 slides
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Operación actual",
                "Problema real",
                "Costo de seguir igual",
                "Fase 1 propuesta",
                "Inversión y siguiente paso",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                  <div className="h-2 w-20 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                      style={{ width: `${52 + index * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
