"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { Environment } from "@react-three/drei";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
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

  return (
    <Canvas
      ref={scene}
      style={{ background: "#0d0d0d" }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50, near: 1, far: 20 }}
    >
      <Model title={title} rotation={scrollYProgress} />
      <ambientLight intensity={0.01} />
      <directionalLight intensity={5} position={[1, 0, -.25]} />
    </Canvas>
  );
}
