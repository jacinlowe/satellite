import * as THREE from 'three';
// import React, { useMemo } from 'react';
import { Line,LineBasicMaterial,CircleGeometry } from '@react-three/drei';


function OrbitLine(){
    const geometry = new CircleGeometry(5,32);
    const material = new LineBasicMaterial({color:0xffff00});

    return <Line geometry={geometry} material={material}/>

}

export default OrbitLine;