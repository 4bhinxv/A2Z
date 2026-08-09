import { ChevronRight } from "lucide-react";
import { processSteps } from "@/lib/site";
import { FadeUp, StaggerGroup, StaggerChild } from "@/components/motion/reveal";

export default function Process() {
  return (
    <section id="kako-radimo" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            Kako radimo
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Od poruke do besprekornog rezultata
          </h2>
        </FadeUp>

        <StaggerGroup className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {processSteps.flatMap((step, i) => {
            const nodes = [
              <StaggerChild
                key={step.step}
                className="group flex-1 rounded-2xl border border-white/10 bg-surface-1 p-7 transition-colors duration-500 hover:bg-surface-2"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-gold-500/10 font-display text-sm font-semibold text-gold-400 ring-1 ring-gold-500/30 transition-transform duration-500 group-hover:scale-110">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </StaggerChild>,
            ];
            if (i < processSteps.length - 1) {
              nodes.push(
                <div
                  key={`${step.step}-connector`}
                  className="hidden shrink-0 items-center justify-center lg:flex"
                  aria-hidden
                >
                  <ChevronRight className="size-4 text-gold-500/40" />
                </div>
              );
            }
            return nodes;
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
