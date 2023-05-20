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
        value: new THREE.Color("red"),
      },
      color2: {
        value: new THREE.Color("purple"),
      },
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
      <shaderMaterial
        fragmentShader={`
        
        uniform vec3 color1;
        uniform vec3 color2;
      
        varying vec2 vUv;
        
        void main() {
          
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
        }
       `}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
          `}
        // side={THREE.DoubleSide}
        // extensions={{
        //   derivatives: "#extension GL_OES_standard_derivatives : enable",
        // }}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );
};

export default Blob;
