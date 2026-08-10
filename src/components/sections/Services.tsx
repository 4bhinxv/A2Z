import Image from "next/image";
import { Check, SprayCan } from "lucide-react";
import { services } from "@/lib/site";
import { FadeUp, StaggerGroup, StaggerChild } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export default function Services() {
  const photoServices = services.filter((s) => s.image);
  const iconServices = services.filter((s) => !s.image);

  return (
    <section id="usluge" className="relative bg-surface-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl">
          <SectionEyebrow>Usluge</SectionEyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Obrada koja ide dublje od{" "}
            <span className="font-accent text-[1.1em] font-semibold text-gold-300 italic">
              površine
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Od enterijera vozila do omiljene fotelje — svaka usluga je
            osmišljena da vrati stvarima izgled i miris kakav imaju kad su
            nove.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {photoServices.map((service) => (
            <StaggerChild
              key={service.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/30"
            >
              <div className="w-full overflow-hidden bg-muted">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: service.image!.ratio }}
                >
                  <Image
                    src={service.image!.src}
                    alt={service.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-gold-400"
                        strokeWidth={2.5}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>

        {iconServices.length > 0 && (
          <StaggerGroup className="mt-6">
            {iconServices.map((service) => (
              <StaggerChild
                key={service.id}
                className="group flex flex-col gap-6 rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/30 sm:flex-row sm:items-center sm:gap-8 sm:p-9"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-transform duration-500 group-hover:scale-110">
                  <SprayCan className="size-6" strokeWidth={1.7} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <ul className="grid shrink-0 grid-cols-1 gap-2.5 sm:w-64">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-gold-400"
                        strokeWidth={2.5}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerChild>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  );
}
