import { useGLTF } from "@react-three/drei"

export default function Netflix() {
  const model = useGLTF("/model/netflix.glb")

  return <primitive object={model.scene}></primitive>
}
