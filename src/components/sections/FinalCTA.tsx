import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Send } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { siteConfig, ctaImage } from "@/lib/site";
import { FadeUp, SlideIn } from "@/components/motion/reveal";

const contactRows = [
  {
    icon: InstagramIcon,
    label: "Instagram DM",
    value: siteConfig.instagram.handle,
    href: siteConfig.instagram.url,
  },
  {
    icon: MapPin,
    label: "Područje rada",
    value: siteConfig.location.region,
    href: undefined,
  },
] as const;

export default function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-surface-2 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={ctaImage.src}
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-2 via-surface-2/95 to-surface-2" />
        <div
          className="absolute top-1/2 left-0 h-[600px] w-[700px] -translate-y-1/2 opacity-[0.14] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, var(--gold-500) 0%, var(--ember-500) 45%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gold-300">
            <Send className="size-3.5" />
            Kontakt
          </div>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Vreme je za{" "}
            <span className="text-gradient-gold">novo lice</span> vašeg
            vozila i nameštaja
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Pošaljite nam poruku i dogovorite termin — dolazimo na vašu
            adresu u Smederevu i okolini.
          </p>
        </FadeUp>

        <SlideIn className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-surface-3/60 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {contactRows.map((row) => {
              const Icon = row.icon;
              const content = (
                <>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {row.label}
                    </p>
                    <p className="mt-0.5 truncate font-display text-base font-semibold text-foreground">
                      {row.value}
                    </p>
                  </div>
                  {row.href && (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300" />
                  )}
                </>
              );
              return row.href ? (
                <Link
                  key={row.label}
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-7"
                >
                  {content}
                </Link>
              ) : (
                <div key={row.label} className="flex items-center gap-4 p-6 sm:p-7">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 p-6 sm:p-7">
            <Link
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.655_0.088_66_/_55%)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Pišite nam na Instagramu
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
