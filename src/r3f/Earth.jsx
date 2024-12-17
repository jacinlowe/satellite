import {  useRef } from 'react';
import { useLoader,useFrame  } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


// eslint-disable-next-line react/prop-types
const Earth = ({rotationSpeed, stopRotation})=>{
    
  const gltf = useLoader(GLTFLoader,'/models/EarthModel.glb')
  const scaleSize = [0.003,0.003,0.003];
  const mesh = useRef();
  
  useFrame(() => {
    
    if(!stopRotation){
        mesh.current.rotation.y += (0.0005*rotationSpeed)
        }
    });
  
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} scale={scaleSize} ref={mesh}/>
}

export default Earth;

Earth.rotationSpeed = {

}


