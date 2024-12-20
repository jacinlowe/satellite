import * as THREE from 'three';
import { useRef,useFrame } from 'react';
import { Line,LineBasicMaterial,CircleGeometry, Circle } from '@react-three/drei';


// function OrbitLine(){
//     const geometry = new CircleGeometry(5,32);
//     const material = new LineBasicMaterial({color:0xffff00});

//     return <Line geometry={geometry} material={material}/>

// }

export default OrbitLine;

// function OrbitLine() {
//     const ref = useRef(null);
//     // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
 
//     return (
//        <mesh
//           visible
//           position={[0, 0, 0]}
//           rotation={[0, 0, 0]}
//           castShadow
//           ref={ref}>
//              <ringBufferGeometry args={[1, 4, 32]} />
//              <meshBasicMaterial attach="material" color="hotpink" />
//        </mesh>
//     );
//  }

function OrbitLine() {
    return <Circle/> 
}