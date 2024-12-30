import {  useRef } from 'react';
import * as THREE from 'three'; 
import { useLoader, useFrame  } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


// eslint-disable-next-line react/prop-types
interface MoonProps {
  rotationSpeed: number;
  stopRotation: boolean;
}

const Moon = ({ rotationSpeed, stopRotation }: MoonProps) => {
    
  const gltf = useLoader(GLTFLoader,'/models/Moon.glb')
  const scaleSize = [0.001,0.001,0.001];
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if(!stopRotation){
      if (mesh.current) {
        mesh.current.position.x = 10;
        mesh.current.rotation.y += (0.0005*rotationSpeed)
      }
    }
  });
  
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} scale={scaleSize} ref={mesh}/>
}

export default Moon;




