"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { siteConfig } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function HeroIntro() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-2xl pb-4 lg:pb-24"
    >
      <motion.div
        variants={item}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-gold-300 backdrop-blur-sm"
      >
        <Sparkles className="size-3.5" strokeWidth={2.2} />
        Profesionalan auto detailing · {siteConfig.location.region}
      </motion.div>

      <motion.h1
        variants={item}
        className="text-balance font-display text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]"
      >
        Vaše vozilo i nameštaj, iznova{" "}
        <span className="font-accent text-[1.05em] font-semibold text-gold-300 italic">
          besprekorni.
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Dubinsko pranje enterijera vozila, tapaciranog nameštaja i ozon
        tretman bez hemikalija. Dolazimo na vašu adresu u Smederevu i
        okolini, sa opremom koja radi ono što obična kućna sprema ne može.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <Link
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.655_0.088_66_/_55%)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Zakažite termin
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
        <a
          href="#usluge"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
        >
          Pogledajte usluge
        </a>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
      >
        <InstagramIcon className="size-4" strokeWidth={2} />
        <Link
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold-300"
        >
          {siteConfig.instagram.handle}
        </Link>
      </motion.div>
    </motion.div>
  );
}
