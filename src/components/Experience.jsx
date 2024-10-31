import { Billboard, Float } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Phone } from "./Phone";
import gsap from "gsap";
import * as THREE from "three";

const Experience = ({ interact, color }) => {
  const one = useRef();
  const two = useRef();



  useEffect(() => {
    gsap.to(one.current.position, {
      y: interact ? 4.7 : 2.7,
      duration: 2,
      ease: "expo.inOut",
    });
    gsap.to(two.current.position, {
      y: interact ? -4.7 : -2.7,
      duration: 2,
      ease: "expo.inOut",
    });
  }, [interact]);

  return (
    <>
      <Billboard>
        <group position-y={2.7} ref={one}>
          <mesh>
            <cylinderGeometry args={[1.5, 1.5, 2, 60, 60]} />
            <meshPhysicalMaterial color="black" roughness={0.5} metalness={1} />
          </mesh>
          <mesh scale={0.73} rotation-x={-Math.PI / 2} position-y={-1.01}>
            <ringGeometry args={[1.9, 2, 60]} />
            <meshPhysicalMaterial
              emissive="#fff"
              emissiveIntensity={1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        <group position-y={-2.7} ref={two}>
          <mesh>
            <cylinderGeometry args={[1.5, 1.5, 2, 60, 60]} />
            <meshPhysicalMaterial color="#1c1c1c" roughness={1} metalness={1} />
          </mesh>
          <mesh scale={0.73} rotation-x={-Math.PI / 2} position-y={1.01} >
            <ringGeometry args={[1.9, 2, 60]} />
            <meshPhysicalMaterial
              emissive="#fff"
              emissiveIntensity={1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </Billboard>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Phone scale={0.015} rotation-y={1.57 * 2} interact={interact} color={color} />
      </Float>
    </>
  );
};

export default Experience;
