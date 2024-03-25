import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Ball() {
  const { nodes } = useGLTF("/model/ball.glb")
  const ball = useRef()
  let totalTime = 0

  useFrame((state, delta) => {
    totalTime += delta
    ball.current.position.y = 0.05 * Math.sin((totalTime * Math.PI) / 2) + 0.05
  })

  return (
    <mesh
      ref={ball}
      geometry={nodes.ball.geometry}
      material={nodes.ball.material}
    ></mesh>
  )
}
