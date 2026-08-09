"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import GlossOrb from "./GlossOrb";

type Quality = "high" | "medium" | "low";

function PointerParallax({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const targetY = (state.pointer.x * Math.PI) / 16;
    const targetX = (-state.pointer.y * Math.PI) / 20;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.04
    );
  });

  return (
    <group ref={group} scale={Math.min(viewport.width / 6, 1.15)}>
      {children}
    </group>
  );
}

export default function HeroCanvas({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const [quality, setQuality] = useState<Quality>("high");

  return (
    <Canvas
      shadows={false}
      dpr={[1, quality === "high" ? 2 : 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 38 }}
      className="!touch-none"
    >
      <PerformanceMonitor
        onDecline={() =>
          setQuality((q) => (q === "high" ? "medium" : "low"))
        }
        onIncline={() => setQuality((q) => (q === "low" ? "medium" : "high"))}
      />
      <Suspense fallback={null}>
        <PointerParallax>
          <GlossOrb quality={quality} reducedMotion={reducedMotion} />
        </PointerParallax>
      </Suspense>
    </Canvas>
  );
}
