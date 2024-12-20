import {  useRef } from 'react';
import { useLoader,useFrame  } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


// eslint-disable-next-line react/prop-types
const Satellite = ({rotationSpeed=1, stopRotation=false})=>{
    
  const gltf = useLoader(GLTFLoader,'/models/ISS_stationary.glb')
  const scaleSize = [0.003,0.003,0.003];
  const mesh = useRef();
  
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

