import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sun = () => {
  const sunRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
      </mesh>
      <pointLight color="yellow" intensity={2} distance={50} />
    </group>
  );
};

export default Sun;