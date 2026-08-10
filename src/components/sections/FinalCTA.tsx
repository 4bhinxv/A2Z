import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { siteConfig, ctaImage } from "@/lib/site";
import { ScaleReveal } from "@/components/motion/reveal";

export default function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-surface-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScaleReveal className="relative overflow-hidden rounded-[2.5rem] border border-gold-500/30 px-6 py-16 text-center shadow-[0_0_80px_-20px_oklch(0.655_0.088_66_/_35%)] sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(130% 100% at 50% 110%, oklch(0.32 0.07 55) 0%, oklch(0.16 0.03 50) 45%, oklch(0.08 0.012 50) 100%)",
              }}
            />
            <Image
              src={ctaImage.src}
              alt=""
              fill
              aria-hidden
              className="object-cover opacity-[0.05] mix-blend-overlay"
            />
            <div
              className="absolute bottom-0 left-1/2 h-[380px] w-[560px] -translate-x-1/2 translate-y-1/4 opacity-70 blur-[90px]"
              style={{
                background:
                  "radial-gradient(ellipse, var(--gold-500) 0%, var(--ember-500) 55%, transparent 75%)",
              }}
            />
          </div>

          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Vreme je za{" "}
            <span className="font-accent text-[1.15em] font-semibold text-gold-300 italic">
              AutoGloss
            </span>{" "}
            iskustvo.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zakažite termin danas i osetite razliku koju donosi pažnja
            posvećena svakom detalju — na vašem vozilu ili nameštaju.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.655_0.088_66_/_55%)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <InstagramIcon className="size-4" />
              Zakažite termin
            </Link>
            <Link
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <InstagramIcon className="size-4" />
              {siteConfig.instagram.handle}
            </Link>
            <Link
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pratite nas
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
