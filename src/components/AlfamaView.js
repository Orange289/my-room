import { useGLTF } from "@react-three/drei"

export default function AlfamaView() {
  const model = useGLTF("/model/alfamaView-2.glb")

  return <primitive object={model.scene}></primitive>
}
