import { useFrame, extend } from "@react-three/fiber"
import { useProgress } from "@react-three/drei"

export default function Overlay() {
  const overlayVertexShader = `
    void main()
    {
        gl_Position = vec4(position, 1.0);
    }
  `
  const overlayFragmentShader = `
    uniform float uAlpha;
    void main()
    {
        gl_FragColor = vec4(0.010, 0.162, 0.168, uAlpha);
    }
  `

  return (
    <mesh>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        uniforms={{
          uAlpha: { value: 1 },
        }}
        transparent
        vertexShader={overlayVertexShader}
        fragmentShader={overlayFragmentShader}
      />
      {/* <meshBasicMaterial color="#1A7072" /> */}
    </mesh>
  )
}
