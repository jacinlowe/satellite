import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Skybox = () => {
  const texture = useLoader(THREE.TextureLoader, '/milky_way.png');
  const skyboxRef = useRef();

  useFrame(({ camera }) => {
    if (skyboxRef.current) {
      skyboxRef.current.position.copy(camera.position);
    }
  });

  return (
    <mesh ref={skyboxRef}>
      <sphereGeometry args={[1000, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

export default Skybox;