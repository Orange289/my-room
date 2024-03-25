import { useGLTF } from "@react-three/drei"

export default function Windows() {
  const { nodes } = useGLTF("/model/windows.glb")

  return (
    <group>
      <mesh geometry={nodes.window1.geometry} position={nodes.window1.position}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
        ></meshPhysicalMaterial>
      </mesh>
      <mesh geometry={nodes.window2.geometry} position={nodes.window2.position}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
        ></meshPhysicalMaterial>
      </mesh>
    </group>
  )
}
