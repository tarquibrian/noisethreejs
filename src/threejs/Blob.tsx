import * as THREE from "three";
import { fragment } from "./shaders/fragment";
import { vertex } from "./shaders/vertex";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const Blob = () => {
  const mesh = useRef<any>();
  const uniforms = useMemo(
    () => ({
      color1: {
        value: new THREE.Color("#ebf4f5"),
      },
      color2: {
        value: new THREE.Color("#133a94"),
      },
    }),
    []
  );

  useFrame(() => {
    mesh.current.rotation.z += 0.004;
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[2, 2, 2]} attach={"geometry"} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        // wireframe={true}
      />
    </mesh>
  );
};

export default Blob;
