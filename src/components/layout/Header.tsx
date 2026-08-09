"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { InstagramIcon } from "@/components/icons/instagram";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-white/10 bg-surface-2/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-white/5 bg-surface-2/50 backdrop-blur-md"
        }`}
      >
        <Link href="#pocetna" className="flex items-center gap-2.5 pl-1">
          <Image
            src="/images/brand/logo-mark.jpg"
            alt={`${siteConfig.name} logo`}
            width={38}
            height={38}
            className="rounded-full ring-1 ring-gold-400/30"
            priority
          />
          <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
            AUTO<span className="text-gold-400">GLOSS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.instagram.handle}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-gold-400/30 hover:text-gold-300"
          >
            <InstagramIcon className="size-4" />
          </Link>
          <Link
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Zakažite termin
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            aria-label="Otvori meni"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 text-foreground lg:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-white/10 bg-background text-foreground"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-left text-lg">
                AUTO<span className="text-gold-400">GLOSS</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  }
                />
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-3 px-4">
              <SheetClose
                render={
                  <Link
                    href={siteConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={siteConfig.instagram.handle}
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted-foreground"
                  >
                    <InstagramIcon className="size-4.5" />
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    href={siteConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Zakažite termin
                    <ArrowRight className="size-3.5" />
                  </Link>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
