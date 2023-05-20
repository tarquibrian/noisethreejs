import React from "react";
import { Canvas } from "@react-three/fiber";
import Effect from "./Effect";

interface Props {
  label?: string;
}

const ThreeScene: React.FC<Props> = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Blob/>
        <Effect />
      </Canvas>
      ;
    </>
  );
};

export default ThreeScene;
