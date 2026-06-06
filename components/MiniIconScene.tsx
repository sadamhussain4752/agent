"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function MiniShape({ variant }: { variant: string }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.85;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.3) * 0.18;
  });

  const color = variant === "ai" ? "#ffd166" : variant === "web" ? "#ffffff" : "#f5a623";

  return (
    <Float speed={1.5} floatIntensity={0.25} rotationIntensity={0.2}>
      <group ref={group}>
        {variant === "seo" ? (
          <mesh>
            <torusKnotGeometry args={[0.55, 0.13, 96, 12]} />
            <meshStandardMaterial color={color} emissive="#f5a623" emissiveIntensity={0.25} roughness={0.28} metalness={0.45} />
          </mesh>
        ) : variant === "ai" ? (
          <>
            <mesh>
              <icosahedronGeometry args={[0.64, 1]} />
              <meshStandardMaterial color={color} emissive="#f5a623" emissiveIntensity={0.3} wireframe />
            </mesh>
            <mesh scale={0.45}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="#ff7a1a" transparent opacity={0.52} />
            </mesh>
          </>
        ) : variant === "ads" ? (
          <mesh rotation={[0.2, 0.3, 0]}>
            <coneGeometry args={[0.58, 1.1, 5]} />
            <meshStandardMaterial color={color} emissive="#ff7a1a" emissiveIntensity={0.22} roughness={0.34} metalness={0.25} />
          </mesh>
        ) : variant === "web" ? (
          <mesh>
            <boxGeometry args={[1.05, 0.72, 0.16]} />
            <meshStandardMaterial color="#f6f1e9" emissive="#f5a623" emissiveIntensity={0.08} roughness={0.18} metalness={0.35} />
          </mesh>
        ) : variant === "content" ? (
          <mesh>
            <octahedronGeometry args={[0.68, 1]} />
            <meshStandardMaterial color={color} emissive="#ffb84d" emissiveIntensity={0.24} roughness={0.32} metalness={0.3} />
          </mesh>
        ) : (
          <mesh scale={[0.78, 1.02, 0.54]}>
            <sphereGeometry args={[0.75, 48, 48]} />
            <meshStandardMaterial color={color} emissive="#ff7a1a" emissiveIntensity={0.22} roughness={0.24} metalness={0.28} />
          </mesh>
        )}
      </group>
    </Float>
  );
}

export default function MiniIconScene({ variant }: { variant: string }) {
  return (
    <div className="h-24 w-24">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3], fov: 42 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.1} />
          <pointLight position={[2, 2, 2]} intensity={7} color="#ffb84d" />
          <MiniShape variant={variant} />
        </Suspense>
      </Canvas>
    </div>
  );
}
