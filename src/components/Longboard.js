import { useGLTF } from "@react-three/drei"

export default function Longboard() {
  const model = useGLTF("/model/longboard.glb")

  return <primitive object={model.scene}></primitive>
}
