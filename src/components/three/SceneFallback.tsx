export default function SceneFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="h-[55%] w-[55%] rounded-full opacity-80 blur-sm"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, var(--gold-200), var(--gold-500) 55%, var(--gold-700) 100%)",
        }}
      />
      <div
        className="absolute h-[70%] w-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, transparent 55%, oklch(0.655 0.088 66 / 25%) 70%, transparent 78%)",
        }}
      />
    </div>
  );
}
