import { faqItems } from "@/lib/site";
import { FadeUp, StaggerGroup, StaggerChild } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-surface-1 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeUp className="text-center">
          <SectionEyebrow>Pitanja</SectionEyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Često postavljana{" "}
            <span className="font-accent text-[1.1em] font-semibold text-gold-300 italic">
              pitanja
            </span>
          </h2>
        </FadeUp>

        <StaggerGroup className="mt-14">
          <Accordion className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-surface-2 px-6 sm:px-8">
            {faqItems.map((item) => (
              <StaggerChild key={item.question}>
                <AccordionItem
                  value={item.question}
                  className="border-b-0 py-2"
                >
                  <AccordionTrigger className="py-5 font-display text-base font-medium text-foreground hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerChild>
            ))}
          </Accordion>
        </StaggerGroup>
      </div>
    </section>
  );
}
