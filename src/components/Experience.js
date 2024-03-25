import {
  Center,
  useGLTF,
  useTexture,
  OrbitControls,
  useHelper,
  Image,
  TransformControls,
  Sparkles,
  shaderMaterial,
  Stars,
  Sky,
  Decal,
} from "@react-three/drei"
import { useControls } from "leva"
import * as THREE from "three"
import { useLoader, useThree } from "@react-three/fiber"
import { useState } from "react"
import { useRef } from "react"
import viewImg from "../textures/alfamaView.jpg"

// import { RectArealightWithHelper } from "./helpers/RectAreaLightWithHelper"
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js"
import Plant from "./Plant"
import Longboard from "./Longboard"
import Tower from "./Tower"

import Wings from "./Wings"
import Windows from "./Windows"
import Ball from "./Ball"
import View from "./View"
import AlfamaView from "./AlfamaView"
import Remote from "./Remote"
import Netflix from "./Netflix"

export default function Experience() {
  const { nodes } = useGLTF("/model/my-room-5.glb")
  // console.log(nodes)

  const model = useGLTF("/model/my-room-5.glb")

  const bakedTexture = useTexture("/model/baked-14.jpg")
  bakedTexture.flipY = false

  const directionalLight = useRef()
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  const [showNetflix, setShowNetflix] = useState(false)

  const screen = useGLTF("/model/screenContent.glb")

  const { objectRotation } = useControls({
    objectRotation: {
      value: { x: 0.3, y: -0.7, z: 0 },
      step: 0.1,
    },
  })

  const { dLight2Position, dLight2Intensity } = useControls(
    "directionalLight",
    {
      dLight2Position: {
        value: { x: 3.0, y: -1.8, z: 11.3 },
        step: 0.1,
      },
      dLight2Intensity: {
        value: 3.5,
        step: 0.1,
      },
    }
  )

  const dLightPosition = { x: 3.0, y: 5.4, z: -0.8 }
  const dLightIntensity = 2.5

  const rLightPosition = { x: 5.7, y: 2, z: 7.7 }
  const rLightIntensity = 0.6
  const rLightWidth = 10
  const rLightHeight = 10
  const rLightRotation = { x: 2, y: 2, z: 3 }

  const { scene } = useThree()

  // RectAreaLightUniformsLib.init()

  // const rectLight = new THREE.RectAreaLight(
  //   "#ffffff",
  //   rLightIntensity,
  //   rLightWidth,
  //   rLightHeight
  // )
  // rectLight.position.set(rLightPosition.x, rLightPosition.y, rLightPosition.z)
  // scene.add(rectLight)

  function onRemoteEnter() {
    document.body.style.cursor = "pointer"
  }

  function onRemoteLeave() {
    document.body.style.cursor = "default"
  }

  function onRemoteClick() {
    setShowNetflix(!showNetflix)
  }

  return (
    <>
      {/* <TransformControls mode="rotate"> */}
      <color args={["#030202"]} attach="background" />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />

      {/* <Sky sunPosition={[0.5, 6, 6]} /> */}
      <directionalLight
        castShadow
        position={[dLightPosition.x, dLightPosition.y, dLightPosition.z]}
        intensity={dLightIntensity}
      />

      <directionalLight
        castShadow
        ref={directionalLight}
        position={[dLight2Position.x, dLight2Position.y, dLight2Position.z]}
        intensity={dLightIntensity}
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

          {/* <Windows /> */}

          {/* <mesh
            geometry={screen.nodes.screenContent.geometry}
            position={screen.nodes.screenContent.position}
          >
            <meshBasicMaterial color="red"></meshBasicMaterial>
          </mesh> */}

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

          {/* <View /> */}
        </group>
      </Center>
      {/* </TransformControls> */}
    </>
  )
}
