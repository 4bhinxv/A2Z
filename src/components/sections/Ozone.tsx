import Image from "next/image";
import { Wind } from "lucide-react";
import { ozoneContent } from "@/lib/site";
import { FadeUp, ImageReveal, StaggerGroup, StaggerChild } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";

export default function Ozone() {
  return (
    <section id="ozon-tretman" className="relative bg-surface-3 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 h-[420px] w-[420px] opacity-[0.1] blur-[110px]"
          style={{
            background: "radial-gradient(circle, var(--ember-400) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-ember-400">
              <Wind className="size-3.5" strokeWidth={2.2} />
              {ozoneContent.eyebrow}
            </div>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {ozoneContent.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {ozoneContent.description}
            </p>

            <StaggerGroup className="mt-7 flex flex-wrap gap-2.5">
              {ozoneContent.removes.map((item) => (
                <StaggerChild
                  key={item}
                  className="rounded-full border border-white/10 bg-surface-2 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {item}
                </StaggerChild>
              ))}
            </StaggerGroup>
          </FadeUp>

          <ImageReveal>
            <div
              className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl"
              style={{ aspectRatio: ozoneContent.image.ratio }}
            >
              <ParallaxImage>
                <Image
                  src={ozoneContent.image.src}
                  alt="Ozon generator u toku tretmana vozila"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </ParallaxImage>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
