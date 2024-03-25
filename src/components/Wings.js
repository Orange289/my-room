import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"

export default function Wings() {
  const { nodes } = useGLTF("/model/wings.glb")
  const wing1 = useRef()
  const wing2 = useRef()
  const pivot = useRef()

  function findYPoint(mesh) {
    let highestY = -Infinity
    const positionAttribute = mesh.geometry.getAttribute("position")

    for (let i = 0; i < positionAttribute.count; i++) {
      const y = positionAttribute.getY(i)
      if (y > highestY) {
        highestY = y
      }
    }

    return highestY
  }

  function findXPointFirst(mesh) {
    let highestX = -Infinity
    const positionAttribute = mesh.geometry.getAttribute("position")

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i)
      if (x > highestX) {
        highestX = x
      }
    }

    return highestX
  }

  let totalTime = 0
  useFrame((state, delta) => {
    totalTime += delta

    wing1.current.rotation.y =
      0.002 * Math.sin(totalTime * Math.PI * 1.3) + 0.002
    wing2.current.rotation.y =
      0.002 * Math.sin(totalTime * Math.PI * 1.3) + 0.002
  })

  return (
    <group>
      <group ref={wing1} position={[0, -findYPoint(nodes.wing1), 0]}>
        <mesh
          geometry={nodes.wing1.geometry}
          material={nodes.wing1.material}
          position={[0, findYPoint(nodes.wing1), 0]}
        ></mesh>
      </group>

      <group ref={wing2} position={[0, -findYPoint(nodes.wing2), 0]}>
        <mesh
          geometry={nodes.wing2.geometry}
          material={nodes.wing2.material}
          position={[0, findYPoint(nodes.wing1), 0]}
        ></mesh>
      </group>
    </group>
  )
}
