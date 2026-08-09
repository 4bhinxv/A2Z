import Image from "next/image";
import { MapPin, Wrench, Leaf, Sparkles } from "lucide-react";
import { aboutImage, advantages } from "@/lib/site";
import { FadeUp, ImageReveal, StaggerGroup, StaggerChild } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

const icons = [MapPin, Wrench, Leaf, Sparkles];

export default function About() {
  return (
    <section id="o-nama" className="relative bg-surface-1 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageReveal className="order-1 lg:order-none">
            <div
              className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl"
              style={{ aspectRatio: aboutImage.ratio }}
            >
              <ParallaxImage>
                <Image
                  src={aboutImage.src}
                  alt="AutoGloss — pažljivo očišćen enterijer vozila"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </ParallaxImage>
            </div>
          </ImageReveal>

          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
              O nama
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Detalji koje drugi preskoče, mi ne preskačemo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              AutoGloss je nastao iz jednostavne ideje — vozilo i nameštaj
              zaslužuju istu pažnju kao i svaki drugi vredan predmet u vašem
              domu. Ne koristimo univerzalna rešenja: svaka površina, tkanina
              i mrlja traže drugačiji pristup, zato svaki posao radimo ručno,
              korak po korak, bez žurbe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Dolazimo opremljeni profesionalnom ekstrakcionom tehnikom i
              ozon generatorom, spremni da rešimo i ono što deluje
              nemoguće — stare mrlje, uporne mirise, zapuštenu tapaciranu
              površinu.
            </p>
          </FadeUp>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {advantages.map((adv, i) => {
            const Icon = icons[i];
            const metallic = i % 2 === 1;
            return (
              <StaggerChild
                key={adv.title}
                className="group relative bg-surface-2 p-8 transition-colors duration-500 hover:bg-surface-3"
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-full border transition-transform duration-500 group-hover:scale-110 ${
                    metallic
                      ? "border-silver-400/30 bg-silver-400/10 text-silver-300"
                      : "border-gold-500/30 bg-gold-500/10 text-gold-400"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {adv.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {adv.description}
                </p>
              </StaggerChild>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
