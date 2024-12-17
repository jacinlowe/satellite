import React, { Suspense,useRef,useState } from 'react';
import { Canvas, useFrame,  } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva';

import Stars from './Stars';
import Earth from './Earth';
// import OrbitLine from './OrbitLines';


function TestBox(props){
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += 0.01));
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color='orange'/>
    </mesh>
  )
}

const R3FCanvas = () => {
  const  earthRotationSettings  = useControls({rotationSpeed: 1, stopRotation:false});
  return (
    <Canvas style={{ background: 'black' }}>      
    <Suspense fallback={null}>
      
      <ambientLight />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> 
      {/* <OrbitLine/> */}
      <Earth stopRotation={earthRotationSettings.stopRotation} rotationSpeed={earthRotationSettings.rotationSpeed} />
      {/* <TestBox position={[-1.2,0,0]} /> 
      <TestBox position={[1.2,0,0]} />  */}
      <Stars/>
      <OrbitControls/>
      <Stats/>
    </Suspense>
    </Canvas>
  );
};

export default R3FCanvas;