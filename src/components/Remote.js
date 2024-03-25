import { useGLTF, Text } from "@react-three/drei"

export default function Remote({
  onRemoteEnter,
  onRemoteLeave,
  onRemoteClick,
}) {
  const model = useGLTF("/model/remote.glb")

  // const curTxt = document.createElement("div")

  // curTxt.id = "hint"
  // curTxt.innerHTML = "Click me!"

  // const curTxtLen = [curTxt.offsetWidth, curTxt.offsetHeight]

  // curTxt.style.position = "absolute"

  // curTxt.style.opacity = 0
  // curTxt.style.zIndex = 100

  function onHover(e) {
    document.body.style.cursor = "pointer"
    // document.body.appendChild(curTxt)

    // curTxt.style.left = e.clientX - curTxtLen[0] + "px"
    // curTxt.style.top = e.clientY - curTxtLen[1] + "px"
    // curTxt.style.opacity = 1
  }

  function onLeaveHover() {
    document.body.style.cursor = "default"
    // curTxt.style.opacity = 1
    // document.body.removeChild(curTxt)
  }

  return (
    <group>
      <primitive
        object={model.scene}
        onPointerEnter={onRemoteEnter}
        onPointerLeave={onRemoteLeave}
        onClick={onRemoteClick}
      ></primitive>
    </group>
  )
}
