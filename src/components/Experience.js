import { Center, useGLTF, useTexture, OrbitControls } from "@react-three/drei"
import { useState, useEffect, useRef } from "react"
import Plant from "./Plant"
import Longboard from "./Longboard"
import Tower from "./Tower"
import Wings from "./Wings"
import Ball from "./Ball"
import AlfamaView from "./AlfamaView"
import Remote from "./Remote"
import Netflix from "./Netflix"

export default function Experience({ onLoaded }) {
  const { nodes } = useGLTF("/model/my-room-5.glb")

  const bakedTexture = useTexture("/model/baked-14.jpg")
  bakedTexture.flipY = false

  const [showNetflix, setShowNetflix] = useState(false)

  const objectRotation = {
    x: 0.3,
    y: -0.7,
    z: 0,
  }

  const dLightPosition = { x: 3.0, y: 5.4, z: -0.8 }
  const dLightIntensity = 2.5

  const dLight2Position = { x: 3.0, y: -1.8, z: 11.3 }
  const dLight2Intensity = 3.5

  function onRemoteEnter() {
    document.body.style.cursor = "pointer"
  }

  function onRemoteLeave() {
    document.body.style.cursor = "default"
  }

  function onRemoteClick() {
    setShowNetflix(!showNetflix)
  }

  useEffect(() => {
    onLoaded()
  }, [onLoaded])

  return (
    <>
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />

      <directionalLight
        castShadow
        position={[dLightPosition.x, dLightPosition.y, dLightPosition.z]}
        intensity={dLightIntensity}
      />

      <directionalLight
        castShadow
        position={[dLight2Position.x, dLight2Position.y, dLight2Position.z]}
        intensity={dLight2Intensity}
      />

      <Center>
        <group
          rotation-x={objectRotation.x}
          rotation-y={objectRotation.y}
          rotation-z={objectRotation.z}
        >
          <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>

          <Plant />

          <Longboard />

          <Tower />

          <Wings />

          <Remote
            onRemoteClick={onRemoteClick}
            onRemoteEnter={onRemoteEnter}
            onRemoteLeave={onRemoteLeave}
          />

          <Netflix />

          <mesh
            geometry={nodes.screen.geometry}
            position={nodes.screen.position}
          >
            <meshBasicMaterial
              color="#000000"
              transparent
              opacity={showNetflix ? 0 : 1}
            ></meshBasicMaterial>
          </mesh>

          <Ball />
          <AlfamaView />
        </group>
      </Center>
    </>
  )
}
