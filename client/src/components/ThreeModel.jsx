import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Box() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
    </Float>
  );
}

export default function ThreeModel() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Box />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}