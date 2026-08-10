import Image from "next/image";
import { beforeAfterItems } from "@/lib/site";
import { FadeUp, SlideIn } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export default function BeforeAfter() {
  return (
    <section id="pre-posle" className="relative bg-surface-1 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Pre i posle</SectionEyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Razlika koju odmah{" "}
            <span className="font-accent text-[1.1em] font-normal text-gold-300 italic">
              vidite
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Ovo su stvarne fotografije sa naših intervencija — bez filtera i
            bez prepravki.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {beforeAfterItems.map((item, i) => (
            <SlideIn
              key={item.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <figure className="flex flex-col">
                  <span className="mb-2.5 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase">
                    Pre
                  </span>
                  <div
                    className="relative w-full overflow-hidden rounded-2xl border border-white/10"
                    style={{ aspectRatio: item.ratio }}
                  >
                    <Image
                      src={item.before}
                      alt={`${item.title} — pre obrade`}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </figure>

                <figure className="flex flex-col">
                  <span className="mb-2.5 inline-flex w-fit items-center rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-primary-foreground uppercase">
                    Posle
                  </span>
                  <div
                    className="relative w-full overflow-hidden rounded-2xl border border-gold-500/30"
                    style={{ aspectRatio: item.ratio }}
                  >
                    <Image
                      src={item.after}
                      alt={`${item.title} — posle obrade`}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
