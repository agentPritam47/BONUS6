import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Bloom, BrightnessContrast, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

const Scene = ({ interact,color }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 30 }} flat>
      <color attach="background" args={["#1b1b1b"]} />
      <Experience interact={interact} color={color} />
      {/* <Stage adjustCamera={false} /> */}
      <Environment preset="city" />
      <directionalLight position={[1, 2, 3]} intensity={5} />
      <OrbitControls enablePan={false} enableZoom={false} />

      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={.5} />
        <BrightnessContrast brightness={0.1} contrast={0.5} />
      </EffectComposer>

      <directionalLight position={[1,-5,3]} intensity={5} />
    </Canvas>
  );
};

export default Scene;
