import HeroScene from "@/components/three/HeroScene";
import HeroIntro from "@/components/sections/HeroIntro";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative isolate overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Cinematic background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-[120px] sm:opacity-50"
          style={{
            background:
              "radial-gradient(circle, var(--gold-500) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, var(--ember-500) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-8">
        <HeroIntro />

        {/* 3D column — bounded box, never overlaps text at any breakpoint */}
        <div className="relative h-[380px] w-full sm:h-[440px] lg:h-[620px]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
