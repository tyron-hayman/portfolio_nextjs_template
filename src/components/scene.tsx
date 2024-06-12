"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { Environment } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState, useRef } from "react";

type Scene = {
  title?: any;
};

export default function Index({ title }: Scene) {
  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0,1], [0, -2]);
  const scale = useTransform(scrollYProgress, [0,1], [1.5, 1.6]);
  const x = useTransform(scrollYProgress, [0,1],[4, -2]);
  const z = useTransform(scrollYProgress,[0,1], [4,-4])
  const y = useTransform(scrollYProgress,[0,1], [0.7,-0.1])

  return (
    <Canvas
      ref={scene}
      style={{ background: "#050505" }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50, near: 1, far: 20 }}
    >
      <Model title={title} rotation={rotation} scale={scale} x={x} z={2} y={y} />
      <ambientLight intensity={0.01} />
      <motion.directionalLight intensity={5} position={[1, 0, z]} />
    </Canvas>
  );
}
