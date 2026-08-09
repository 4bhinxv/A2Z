"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import SceneFallback from "./SceneFallback";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <CanvasErrorBoundary fallback={<SceneFallback />}>
      <HeroCanvas reducedMotion={reducedMotion} />
    </CanvasErrorBoundary>
  );
}
