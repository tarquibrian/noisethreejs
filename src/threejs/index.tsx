import React from "react";
import { Canvas } from "@react-three/fiber";
import Effect from "./Effect";
import Blob from "./Blob";
import { OrbitControls } from "@react-three/drei";

interface Props {
  label?: string;
}

const ThreeScene: React.FC<Props> = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Blob />
        <OrbitControls/>
        <Effect />
      </Canvas>
    </>
  );
};

export default ThreeScene;
