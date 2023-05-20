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
      time: { value: 0 },
      color: { value: 0.8 },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  useFrame(() => {
    // const { clock } = state;
    // console.log(clock);
    // mesh.current.material.uniforms.time.value += 0.007;
    // mesh.current.rotateZ(0.004);
    // mesh.current.rotation.z += 0.004;
    // updateColor(valor)
    // setTimeout(() => {
    //   updateColor(100);
    // }, 2000);
  });

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={[1.5, 32, 32]} attach="geometry" />
      {/* <boxBufferGeometry args={[1, 1, 1]} attach={"geometry"} /> */}
      <meshLambertMaterial color={"#F00"} emissive={"#0FF"} />
      {/* <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        side={THREE.DoubleSide}
        extensions={{
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        }}
        uniforms={uniforms}
      /> */}
    </mesh>
  );
};

export default Blob;
