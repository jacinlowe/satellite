import {  useRef } from 'react';
import * as THREE from 'three'; 
import { useLoader,useFrame  } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


// eslint-disable-next-line react/prop-types
interface EarthProps {
  rotationSpeed: number;
  stopRotation: boolean;
}

const Earth = ({ rotationSpeed, stopRotation }: EarthProps) => {
    
  const gltf = useLoader(GLTFLoader,'/models/EarthModel.glb')
  const scaleSize = [0.003,0.003,0.003];
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    
    if(!stopRotation){
      if (mesh.current)
        mesh.current.rotation.y += (0.0005*rotationSpeed)
        }
    });
  
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} scale={scaleSize} ref={mesh}/>
}

export default Earth;

Earth.rotationSpeed = {

}


