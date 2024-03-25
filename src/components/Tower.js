import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Tower() {
  const model = useGLTF("/model/tower.glb")
  const { nodes } = useGLTF("/model/bricks.glb")

  const brick1 = useRef()
  const brick2 = useRef()
  const brick3 = useRef()

  let totalTime = 0

  useFrame((state, delta) => {
    totalTime += delta
    const offset = 0.035
    const delay = 0.4

    brick1.current.position.z =
      offset * Math.sin(totalTime * (Math.PI / 2)) + offset

    brick2.current.position.z =
      offset * Math.sin(totalTime * (Math.PI / (2 + delay))) - offset

    brick3.current.position.x =
      offset * Math.sin(totalTime * (Math.PI / (2 + delay * 1.2))) - offset
  })

  return (
    <group>
      <primitive object={model.scene}></primitive>
      <mesh
        ref={brick1}
        geometry={nodes.brick1.geometry}
        position={nodes.brick1.position}
        material={nodes.brick1.material}
      ></mesh>
      <mesh
        ref={brick2}
        geometry={nodes.brick2.geometry}
        position={nodes.brick2.position}
        material={nodes.brick2.material}
      ></mesh>
      <mesh
        ref={brick3}
        geometry={nodes.brick3.geometry}
        position={nodes.brick3.position}
        material={nodes.brick3.material}
      ></mesh>
    </group>
  )
}
