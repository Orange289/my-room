import "./styles/index.css"

import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import Overlay from "./components/Overlay"
import { Loader } from "@react-three/drei"
// import Loader from "./components/Loader"
import { Suspense } from "react"
import { useState } from "react"

const root = ReactDOM.createRoot(document.querySelector("#root"))

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  // You can adjust your Canvas styles based on the loading state
  const canvasStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 1s ease-out",
  }

  return (
    <>
      <div className="container" style={canvasStyle}>
        <h1>
          "Isometric Room"<br></br>
          Three.js journey
        </h1>
        <Canvas
          flat
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 2, 12],
          }}
        >
          <Suspense fallback={null}>
            <Experience onLoaded={() => setIsLoaded(true)} />
          </Suspense>
        </Canvas>
      </div>

      <Loader
        containerStyles={{ backgroundColor: "#e8baaa" }}
        initialState={(active) => active}
        dataStyles={{ fontSize: "24px", fontWeight: "bold", color: "#ffffff" }}
        innerStyles={{
          width: "300px",
          backgroundColor: "#c09788",
        }}
        barStyles={{ width: "300px" }}
      />

      <div className="note">
        Created by <a href="mailto:apelsanna@gmail.com">Ansu</a>
      </div>
    </>
  )
}

root.render(<App />)
