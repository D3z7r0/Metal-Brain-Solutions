'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube({ position, size = 1, speed = 1 }: { position: [number, number, number]; size?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05 * speed;
      meshRef.current.rotation.y += delta * 0.06 * speed;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        {/* Opacidad al 80% y color brillante para comprobar visibilidad */}
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.2} />      </mesh>
    </Float>
  );
}

export default function BackgroundCanvas() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10, /* ¡Cambio clave aquí! De -10 a 0 */
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1} />
        {/* Cubos centrados y grandes */}
        <RotatingCube position={[-2.5, 1, 1]} size={1.8} speed={1} />
        <RotatingCube position={[2.5, -1, 1]} size={2} speed={0.8} />
        <RotatingCube position={[0, 0, -1]} size={2.2} speed={0.5} />
      </Canvas>
    </div>
  );
}