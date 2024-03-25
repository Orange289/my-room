import { useGLTF } from "@react-three/drei"

export default function View() {
  const model = useGLTF("/model/view.glb")

  return <primitive object={model.scene}></primitive>
}
