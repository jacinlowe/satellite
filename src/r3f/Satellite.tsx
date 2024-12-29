import React,{  useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame, primitive } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';



interface SatelliteProps {
  rotationSpeed: number;
  stopRotation: boolean;
}

const Satellite:React.FC<SatelliteProps> = ({rotationSpeed=1, stopRotation=false})=>{
    
  const gltf = useLoader(GLTFLoader,'/models/ISS_stationary.glb')
  const scaleSize = [0.001,0.001,0.001];
  const mesh = useRef<THREE.Mesh>(null);
  
//   useFrame(() => {
    
//     if(!stopRotation){
//         mesh.current.rotation.y += (0.0005*rotationSpeed)
//         }
//     });
  
    gltf.scene.position.x = 3;
    // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} scale={scaleSize} ref={mesh}/>
}

export default Satellite;

