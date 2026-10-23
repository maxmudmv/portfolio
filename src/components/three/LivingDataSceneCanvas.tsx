"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

export interface DataNodeInfo {
  id: string;
  label: string;
  metric: string;
  position: [number, number, number];
  color: string;
}

interface SceneProps {
  nodes: DataNodeInfo[];
  activeNodeId: string;
  onSelectNode: (id: string) => void;
}

function AnalyticalBars() {
  const barsRef = useRef<THREE.Group>(null);
  const barHeights = useMemo(() => [0.65, 1.05, 0.85, 1.45, 1.2, 1.75, 1.55], []);

  useFrame(({ clock }) => {
    if (!barsRef.current) return;
    const t = clock.getElapsedTime();
    barsRef.current.children.forEach((child, idx) => {
      const baseH = barHeights[idx] ?? 1;
      const scaleY = 1 + Math.sin(t * 1.4 + idx * 0.7) * 0.12;
      child.scale.y = scaleY;
      child.position.y = -0.8 + (baseH * scaleY) / 2;
    });
  });

  return (
    <group ref={barsRef} position={[-0.95, 0, -0.2]}>
      {barHeights.map((h, i) => {
        const isPeak = i >= 5;
        return (
          <mesh key={i} position={[i * 0.32, -0.8 + h / 2, 0]}>
            <boxGeometry args={[0.18, h, 0.18]} />
            <meshStandardMaterial
              color={isPeak ? "#F59E0B" : "#D4AF37"}
              emissive={isPeak ? "#B45309" : "#7F5D15"}
              emissiveIntensity={0.45}
              metalness={0.75}
              roughness={0.22}
              transparent
              opacity={0.92}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function DataNetworkNodes({ nodes, activeNodeId, onSelectNode }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  const linePoints = useMemo(() => {
    const pts: [number, number, number][] = nodes.map((n) => n.position);
    if (pts.length > 0) {
      pts.push(pts[0]);
    }
    return pts;
  }, [nodes]);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.35 + Math.sin(t * 0.25) * 0.12,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.2 + 0.08,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      {/* Base holographic platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 0]}>
        <ringGeometry args={[1.45, 2.15, 64]} />
        <meshBasicMaterial
          color="#D4AF37"
          side={THREE.DoubleSide}
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.96, 0]}>
        <circleGeometry args={[1.42, 48]} />
        <meshStandardMaterial
          color="#090B10"
          metalness={0.8}
          roughness={0.3}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Analytical 3D bar chart cluster */}
      <AnalyticalBars />

      {/* Connecting data stream lines */}
      <Line
        points={linePoints}
        color="#D4AF37"
        lineWidth={1.5}
        transparent
        opacity={0.45}
      />

      {/* Interactive Data Nodes */}
      {nodes.map((node) => {
        const isActive = node.id === activeNodeId;
        return (
          <Float
            key={node.id}
            speed={1.6}
            rotationIntensity={0.25}
            floatIntensity={0.35}
          >
            <group position={node.position}>
              <mesh
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(node.id);
                }}
              >
                <octahedronGeometry args={[isActive ? 0.22 : 0.16, 1]} />
                <meshStandardMaterial
                  color={isActive ? "#FBBF24" : node.color}
                  emissive={isActive ? "#F59E0B" : "#92400E"}
                  emissiveIntensity={isActive ? 0.95 : 0.4}
                  metalness={0.85}
                  roughness={0.15}
                />
              </mesh>
              {/* Outer selection halo */}
              <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                <torusGeometry args={[isActive ? 0.34 : 0.25, 0.012, 16, 48]} />
                <meshBasicMaterial
                  color={isActive ? "#FBBF24" : "#D4AF37"}
                  transparent
                  opacity={isActive ? 0.85 : 0.32}
                />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 75;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random distribution for consistent SSR/hydration safety
      const seed = i + 1;
      arr[i * 3] = Math.sin(seed * 12.9898) * 2.6;
      arr[i * 3 + 1] = Math.cos(seed * 78.233) * 1.8;
      arr[i * 3 + 2] = Math.sin(seed * 37.719) * 1.8;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FBBF24"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function LivingDataSceneCanvas({
  nodes,
  activeNodeId,
  onSelectNode,
}: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.55, 4.3], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 4]} intensity={1.6} color="#FDE68A" />
      <pointLight position={[-3, 2, -2]} intensity={1.2} color="#F59E0B" />
      <pointLight position={[2, -2, 3]} intensity={0.8} color="#D4AF37" />

      <DataNetworkNodes
        nodes={nodes}
        activeNodeId={activeNodeId}
        onSelectNode={onSelectNode}
      />
      <AmbientParticles />
    </Canvas>
  );
}
