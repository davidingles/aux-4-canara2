/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/7D CANARA.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQQ_ARD-geom001"].geometry}
          material={materials["TQQ_ARD_front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQQ_ARD-geom001_1"].geometry}
          material={materials.TQQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQQ_ARD-geom001_2"].geometry}
          material={materials.TQQ_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/7D CANARA.gltf");
