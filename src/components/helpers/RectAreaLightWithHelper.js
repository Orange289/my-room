import * as THREE from "three"
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js"
import { useThree } from "@react-three/fiber"

export const RectArealightWithHelper = ({
  position,
  intensity,
  width,
  height,
  rotation,
}) => {
  // Besides the useThree hook, all of this is taken straight from one of the examples on threejs.org: https://threejs.org/examples/#webgl_lights_rectarealight.

  const { scene } = useThree()

  // This somehow changes the texture of the ground-plane and makes it more shiny? Very interesting
  RectAreaLightUniformsLib.init()

  const rectLight = new THREE.RectAreaLight("#ffffff", intensity, width, height)
  rectLight.position.set(position[0], position[1], position[2])
  scene.add(rectLight)
  scene.add(new RectAreaLightHelper(rectLight))

  return null
}
