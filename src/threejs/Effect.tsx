import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { DotScreenShader } from "./shaders/customShader.js";
// import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/'

const Effect = () => {
  const { gl, scene, camera, size } = useThree();

  const [bloom, final] = useMemo(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xeeeeee, 1);
    // gl.physicallyCorrectLights = true;
    // gl.outputEncoding = THREE.sRGBEncoding;

    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms["scale"].value = 4;
    comp.addPass(effect1);

    return [comp, effect1];
  }, [gl, scene, size, camera]);

  useEffect(() => {
    bloom.setSize(size.width, size.height);
    final.setSize(size.width, size.height);
  }, [bloom, final, size]);

  useFrame(() => {
    bloom.render();
  }, 1);
  return null;
};

export default Effect;
