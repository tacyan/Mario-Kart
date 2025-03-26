/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 c:\Users\mouli\dev\r3f-vite-starter\public\models\mariokarttest.glb -o c:\Users\mouli\dev\r3f-vite-starter\public\models\mariokarttest.tsx --types 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mt_kart_Mario_S: THREE.Mesh
    mt_Kart_Mario_Tire_S001: THREE.Mesh
    mt_Kart_Mario_Tire_S002: THREE.Mesh
    mt_Kart_Mario_Tire_S003: THREE.Mesh
    mt_mario: THREE.Mesh
  }
  materials: {
    mt_kart_Mario_S: THREE.MeshStandardMaterial
    mt_Kart_Mario_Tire_S: THREE.MeshStandardMaterial
    mt_mario: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mariokarttest.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mt_kart_Mario_S.geometry} material={materials.mt_kart_Mario_S} />
      <mesh geometry={nodes.mt_Kart_Mario_Tire_S001.geometry} material={materials.mt_Kart_Mario_Tire_S} position={[0, 0.22, -0.347]} />
      <mesh geometry={nodes.mt_Kart_Mario_Tire_S002.geometry} material={materials.mt_Kart_Mario_Tire_S} position={[0.384, 0.193, 0.441]} />
      <mesh geometry={nodes.mt_Kart_Mario_Tire_S003.geometry} material={materials.mt_Kart_Mario_Tire_S} position={[-0.393, 0.193, 0.441]} rotation={[-Math.PI, 0, 0]} scale={-1} />
      <mesh geometry={nodes.mt_mario.geometry} material={materials.mt_mario} />
    </group>
  )
}

useGLTF.preload('/mariokarttest.glb')
