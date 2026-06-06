"use client";

import { Environment, Float, Line, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import type React from "react";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type CursorState = {
  x: number;
  y: number;
};

function MangoCore({ cursor }: { cursor: CursorState }) {
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const scroll = useRef(0);

  useFrame((state, delta) => {
    scroll.current = THREE.MathUtils.lerp(scroll.current, Math.min(window.scrollY / 900, 1.35), 0.05);
    if (!group.current) return;

    group.current.rotation.y += delta * 0.32;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, cursor.y * 0.28 + scroll.current * 0.16, 0.08);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -cursor.x * 0.18, 0.08);
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.025 + scroll.current * 0.16;
    group.current.scale.setScalar(scale);

    if (light.current) {
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, cursor.x * 5, 0.08);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, 1.5 + cursor.y * 3, 0.08);
    }
  });

  return (
    <group ref={group}>
      <pointLight ref={light} color="#ffb84d" intensity={24} distance={11} position={[2, 2.4, 3]} />
      <Float speed={1.7} rotationIntensity={0.18} floatIntensity={0.38}>
        <mesh castShadow receiveShadow rotation={[0.25, -0.4, 0.18]}>
          <sphereGeometry args={[1.45, 96, 96]} />
          <MangoMaterial />
        </mesh>
        <mesh position={[0.44, 0.3, 0.18]} rotation={[0.2, -0.7, 0.5]} scale={[0.68, 1.08, 0.42]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#ffb84d" emissive="#f5a623" emissiveIntensity={0.08} roughness={0.26} metalness={0.22} transparent opacity={0.46} />
        </mesh>
        <mesh position={[-0.36, -0.22, -0.18]} rotation={[0.4, 0.35, -0.35]} scale={[0.92, 0.7, 0.58]}>
          <sphereGeometry args={[0.94, 64, 64]} />
          <meshStandardMaterial color="#ff7a1a" emissive="#ff7a1a" emissiveIntensity={0.12} roughness={0.34} metalness={0.18} transparent opacity={0.58} />
        </mesh>
      </Float>
    </group>
  );
}

function MangoMaterial() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent
      uniforms={{
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color("#ffcf66") },
        uColorB: { value: new THREE.Color("#ff7a1a") }
      }}
      vertexShader={`
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;

        void main() {
          vUv = uv;
          vNormal = normal;
          vec3 p = position;
          p.x *= 1.0 + 0.22 * sin(p.y * 2.4 + uTime * 0.7);
          p.y *= 1.12 + 0.1 * cos(p.x * 3.0);
          p.z *= 0.72 + 0.08 * sin(p.x * 4.0 + uTime);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `}
      fragmentShader={`
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;

        void main() {
          float glow = pow(0.72 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.0);
          float pulse = 0.5 + 0.5 * sin(uTime * 1.3 + vUv.y * 8.0);
          vec3 color = mix(uColorB, uColorA, vUv.y + pulse * 0.12);
          gl_FragColor = vec4(color + glow * vec3(1.0, 0.45, 0.05), 0.86);
        }
      `}
    />
  );
}

function NeuralParticles({ cursor }: { cursor: CursorState }) {
  const points = useRef<THREE.Points>(null);
  const connections = useMemo(() => {
    const paths: THREE.Vector3[][] = [];
    for (let i = 0; i < 28; i += 1) {
      const a = new THREE.Vector3(Math.sin(i) * 2.4, Math.cos(i * 1.8) * 1.4, Math.sin(i * 0.7) * 1.8);
      const b = new THREE.Vector3(Math.sin(i + 1.6) * 2.8, Math.cos(i * 1.4) * 1.6, Math.cos(i) * 1.9);
      paths.push([a, b]);
    }
    return paths;
  }, []);

  const positions = useMemo(() => {
    const array = new Float32Array(950 * 3);
    for (let i = 0; i < 950; i += 1) {
      const radius = 2.3 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.68;
      array[i * 3 + 2] = radius * Math.cos(phi);
    }
    return array;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.045;
    points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, cursor.y * 0.08, 0.05);
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, cursor.x * 0.28, 0.04);
    const material = points.current.material as THREE.PointsMaterial;
    material.opacity = 0.42 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.028} color="#ffd166" transparent opacity={0.46} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      {connections.map((path, index) => (
        <Line key={index} points={path} color={index % 3 === 0 ? "#f5a623" : "#ffffff"} transparent opacity={index % 3 === 0 ? 0.32 : 0.12} lineWidth={1} />
      ))}
    </group>
  );
}

function GrowthGraph() {
  const graph = useRef<THREE.Group>(null);
  const points = useMemo(
    () => [
      new THREE.Vector3(-2.5, -1.3, 0.7),
      new THREE.Vector3(-1.45, -0.9, 0.35),
      new THREE.Vector3(-0.45, -0.62, 0.1),
      new THREE.Vector3(0.5, 0.02, -0.2),
      new THREE.Vector3(1.55, 0.55, -0.42),
      new THREE.Vector3(2.45, 1.15, -0.68)
    ],
    []
  );

  useFrame((state) => {
    if (!graph.current) return;
    const scroll = Math.min(window.scrollY / 1000, 1);
    graph.current.scale.x = THREE.MathUtils.lerp(graph.current.scale.x, 0.55 + scroll * 0.65, 0.08);
    graph.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.08 - 0.2;
  });

  return (
    <group ref={graph} position={[0, -1.2, 0.6]}>
      <Line points={points} color="#ffb84d" lineWidth={3} transparent opacity={0.82} />
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.06 + index * 0.006, 16, 16]} />
          <meshBasicMaterial color={index === points.length - 1 ? "#ffffff" : "#f5a623"} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingSymbols() {
  const symbols = [
    { text: "SEO", position: [-2.8, 1.2, 0.3] },
    { text: "AI", position: [2.45, 1.55, -0.2] },
    { text: "UX", position: [-2.25, -1.7, -0.1] },
    { text: "ROAS", position: [2.35, -1.25, 0.25] },
    { text: "</>", position: [0.25, 2.15, -0.45] }
  ] as const;

  return (
    <group>
      {symbols.map(({ text, position }, index) => (
        <Float key={text} speed={1.2 + index * 0.18} floatIntensity={0.45} rotationIntensity={0.16}>
          <group position={position}>
            <mesh>
              <boxGeometry args={[0.74, 0.34, 0.08]} />
              <MeshTransmissionMaterial color="#ffb84d" thickness={0.25} roughness={0.2} transmission={0.45} transparent opacity={0.48} />
            </mesh>
            <Text position={[0, 0, 0.07]} fontSize={0.13} color="#fff7df" anchorX="center" anchorY="middle">
              {text}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

function CameraRig({ cursor, targetX }: { cursor: CursorState; targetX: number }) {
  const { camera } = useThree();
  useFrame(() => {
    const scroll = Math.min(window.scrollY / 1200, 1);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX * 0.28 + cursor.x * 0.5, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.35 + cursor.y * 0.32 - scroll * 0.2, 0.035);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.2 - scroll * 0.75, 0.035);
    camera.lookAt(targetX, 0, 0);
  });
  return null;
}

function SceneContent({ cursor }: { cursor: CursorState }) {
  const { size } = useThree();
  const isWide = size.width >= 980;
  const targetX = isWide ? 1.55 : 0;

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 6, 13]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 3]} intensity={2.2} color="#ffe0a3" />
      <spotLight position={[-3, 4, 5]} angle={0.38} penumbra={0.7} intensity={2.4} color="#ff7a1a" />
      <group position={[targetX, isWide ? 0 : 0.22, 0]} scale={isWide ? 0.84 : 0.66}>
        <MangoCore cursor={cursor} />
        <NeuralParticles cursor={cursor} />
        <GrowthGraph />
        <FloatingSymbols />
      </group>
      <CameraRig cursor={cursor} targetX={targetX} />
      <Environment preset="city" environmentIntensity={0.9} />
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.18} mipmapBlur intensity={0.86} radius={0.62} />
      </EffectComposer>
    </>
  );
}

export default function GrowthEngineScene() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 1.8,
      y: -((event.clientY - rect.top) / rect.height - 0.5) * 1.8
    });
  };

  return (
    <div className="canvas-wrap h-full min-h-screen w-full" onPointerMove={handlePointerMove}>
      <Canvas
        dpr={[1, 1.7]}
        camera={{ position: [0, 0.35, 6.2], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        shadows
      >
        <Suspense fallback={null}>
          <SceneContent cursor={cursor} />
        </Suspense>
      </Canvas>
    </div>
  );
}
