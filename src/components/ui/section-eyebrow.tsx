export function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase ${className}`}
    >
      <span className="h-px w-6 bg-gold-500/50" aria-hidden />
      {children}
    </span>
  );
}
