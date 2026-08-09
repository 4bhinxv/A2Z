"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#cb9e69";
const GOLD_LIGHT = "#eacea3";
const EMBER = "#c9593b";

type GlossOrbProps = {
  quality: "high" | "medium" | "low";
  reducedMotion: boolean;
};

function Droplets({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.6 + (i % 3) * 0.35;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.3) * 1.1,
          Math.sin(angle) * radius * 0.6 - 0.5,
        ] as [number, number, number],
        scale: 0.08 + (i % 4) * 0.035,
        speed: 0.6 + (i % 5) * 0.15,
      };
    });
  }, [count]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.06;
  });

  return (
    <group ref={group}>
      {items.map((d, i) => (
        <Float
          key={i}
          speed={d.speed}
          floatIntensity={1.2}
          rotationIntensity={0.4}
        >
          <mesh position={d.position} scale={d.scale}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshPhysicalMaterial
              color={i % 3 === 0 ? EMBER : GOLD_LIGHT}
              metalness={0.3}
              roughness={0.05}
              clearcoat={1}
              transmission={0.4}
              thickness={1}
              envMapIntensity={1.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function GlossOrb({ quality, reducedMotion }: GlossOrbProps) {
  const orbRef = useRef<THREE.Mesh>(null);
  const distort = quality === "low" ? 0.25 : 0.35;
  const dropletCount = quality === "high" ? 10 : quality === "medium" ? 6 : 0;
  const sparkleCount = quality === "high" ? 90 : quality === "medium" ? 45 : 0;

  useFrame((state, delta) => {
    if (!orbRef.current) return;
    if (!reducedMotion) {
      orbRef.current.rotation.y += delta * 0.15;
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <spotLight
        position={[6, 8, 6]}
        angle={0.35}
        penumbra={1}
        intensity={220}
        color={GOLD_LIGHT}
      />
      <pointLight position={[-6, -3, -4]} intensity={40} color={EMBER} />
      <pointLight position={[0, -4, 4]} intensity={18} color={GOLD} />

      <Float
        speed={reducedMotion ? 0 : 1.1}
        floatIntensity={reducedMotion ? 0 : 0.6}
        rotationIntensity={0}
      >
        <mesh ref={orbRef} castShadow>
          <icosahedronGeometry args={[1.6, quality === "low" ? 4 : 8]} />
          <MeshDistortMaterial
            color={GOLD}
            metalness={0.55}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.08}
            distort={distort}
            speed={reducedMotion ? 0 : 1.4}
            envMapIntensity={1.6}
          />
        </mesh>
      </Float>

      {dropletCount > 0 && <Droplets count={dropletCount} />}
      {sparkleCount > 0 && (
        <Sparkles
          count={sparkleCount}
          scale={[7, 5, 5]}
          size={2.2}
          speed={reducedMotion ? 0 : 0.25}
          color={GOLD_LIGHT}
          opacity={0.55}
        />
      )}

      <Environment preset="city" environmentIntensity={0.6} />
    </>
  );
}
