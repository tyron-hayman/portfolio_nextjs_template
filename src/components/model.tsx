import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { motion } from "framer-motion-3d";

type Model = {
  title?: any;
  rotation?: any;
};

export default function Model({ title, rotation }: Model) {

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/color.jpg",
    "/normal.png",
    "/occlusion.jpg",
  ]);

  return (
    <group dispose={null}>
      <motion.mesh scale={1.4} rotation-y={rotation}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </group>
  );
}