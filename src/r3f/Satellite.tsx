import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface SatelliteProps {
  rotationSpeed?: number;
  stopRotation?: boolean;
}

const Satellite: React.FC<SatelliteProps> = () => {
  const gltf = useLoader(GLTFLoader, '/models/ISS_stationary.glb');
  const scaleSize = [0.001, 0.001, 0.001];
  const mesh = useRef<THREE.Mesh>(null);

  gltf.scene.position.x = 1.6;

  return <primitive object={gltf.scene} scale={scaleSize} ref={mesh} />;
};

export default Satellite;