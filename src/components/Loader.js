import { useProgress } from "@react-three/drei"
import { Html } from "@react-three/drei"
import styles from "../styles/Loader.module.css"

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html center className={styles.loader}>
      {progress.toFixed(2)} % loaded
      {total}
    </Html>
  )
}
