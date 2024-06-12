import { useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { motion } from "framer-motion-3d";

type Model = {
  title?: any;
  rotation: any;
  scale: any;
  x: any;
  z: any;
  y: any;
};

export default function Model({ title, rotation, scale, x, z, y }: Model) {
  const { viewport } = useThree()

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/color.jpg",
    "/normal.png",
    "/occlusion.jpg",
  ]);

  const [moon_color, moon_aoMap] = useLoader(TextureLoader, [
    "/moon_color.jpeg",
    "/moon_occlusion.jpeg",
  ]);

  return (
    <group dispose={null}>
      <motion.mesh
        rotation-y={rotation}
        translateY={rotation}
        translateZ={scale}
        position={[0,0,-1]}
      >
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
      <motion.mesh rotation-y={rotation} position={[x, y, 2]}>
        <sphereGeometry args={[0.1, 64, 64]} />
        <meshStandardMaterial map={moon_color} aoMap={moon_aoMap} />
      </motion.mesh>
    </group>
  );
}
