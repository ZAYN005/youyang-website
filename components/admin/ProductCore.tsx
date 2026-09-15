"use client";


import {Canvas,useFrame} from "@react-three/fiber";
import {
Box,
OrbitControls
} from "@react-three/drei";

import {useRef} from "react";
import * as THREE from "three";



function CameraModel(){


const ref=useRef<THREE.Mesh>(null);


useFrame(()=>{

if(ref.current){

ref.current.rotation.y +=0.01;

}

});


return (

<Box
ref={ref}
args={[1.5,1,1]}
>


<meshStandardMaterial

color="#0ea5e9"

metalness={0.8}

roughness={0.2}

/>


</Box>

)

}



export default function ProductCore(){


return (

<div className="
h-[400px]
rounded-3xl
border
border-yellow-400/20
bg-black/40
">


<Canvas>

<ambientLight intensity={1}/>


<pointLight
position={[3,3,3]}
intensity={5}
/>


<CameraModel/>


<OrbitControls/>

</Canvas>


</div>

)

}