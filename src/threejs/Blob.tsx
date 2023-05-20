import * as THREE from "three";
import { fragment } from "./shaders/fragment";
import { vertex } from "./shaders/vertex";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const Blob = () => {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      // u_time: {
      //   value: 0.0,
      // },
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
    // const { clock } = state;
    // console.log(clock);
    // mesh.current.material.uniforms.time.value += 0.007;
    // mesh.current.rotateZ(0.004);
    mesh.current.rotation.z += 0.004;
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.004;
    // updateColor(valor)
    // setTimeout(() => {
    //   updateColor(100);
    // }, 2000);
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[2, 2, 2]} attach={"geometry"} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        // wireframe={true}
        // wireframeLinewidth={0.9}
      />
    </mesh>
  );
};

export default Blob;
