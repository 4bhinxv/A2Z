import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="#pocetna" className="flex items-center gap-2.5">
              <Image
                src="/images/brand/logo-mark.jpg"
                alt={`${siteConfig.name} logo`}
                width={34}
                height={34}
                className="rounded-full ring-1 ring-white/10"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                AUTO<span className="text-gold-400">GLOSS</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-gold-400" />
              {siteConfig.location.region}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Navigacija
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold-300"
                >
                  <InstagramIcon className="size-4" />
                  {siteConfig.instagram.handle}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                Zakazivanje isključivo putem Instagram poruke
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-3 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Sva prava
            zadržana.
          </p>
          <p>{siteConfig.location.city}, Srbija</p>
        </div>
      </div>
    </footer>
  );
}
