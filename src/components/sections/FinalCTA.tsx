import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { siteConfig, ctaImage } from "@/lib/site";
import { FadeUp, ImageReveal } from "@/components/motion/reveal";

export default function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-surface-2 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-0 h-[600px] w-[700px] -translate-y-1/2 opacity-[0.14] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, var(--gold-500) 0%, var(--ember-500) 45%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gold-300">
              <MapPin className="size-3.5" />
              {siteConfig.location.region}
            </div>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Vreme je za{" "}
              <span className="text-gradient-gold">novo lice</span> vašeg
              vozila i nameštaja
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Pošaljite nam poruku na Instagram i dogovorite termin —
              dolazimo na vašu adresu u Smederevu i okolini.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.655_0.088_66_/_55%)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <InstagramIcon className="size-4" />
                Pišite nam na {siteConfig.instagram.handle}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pratite naš rad na Instagramu
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeUp>

          <ImageReveal>
            <div
              className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              style={{ aspectRatio: ctaImage.ratio }}
            >
              <Image
                src={ctaImage.src}
                alt="AutoGloss — enterijer vozila posle obrade"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
