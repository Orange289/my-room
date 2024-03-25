import { useGLTF } from "@react-three/drei"

export default function Plant() {
  const { nodes, materials } = useGLTF("/model/plant.glb")

  return (
    <group>
      <mesh geometry={nodes.pot.geometry} material={materials.darkBlue}></mesh>
      <mesh geometry={nodes.soil.geometry} material={materials.soil}></mesh>
      <mesh
        geometry={nodes.stem.geometry}
        material={materials.stemGreen}
      ></mesh>
      <mesh geometry={nodes.leaves.geometry} material={materials.leaf2}></mesh>
    </group>
  )
}
