import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import { useRef } from "react";
import Link from "next/link";

export default function BotonSelect() {

  const constraintsRef = useRef(null)

  return (
    <>
      <div className={styles.boton} ref={constraintsRef}>
        <motion.div className={styles.circle}
          drag={(screen.width < 950) ? 'y' : 'x'}
          onDragEnd={(event, info) => {
            if (info.offset.x > 0) {
              window.location.href = '/amala'
            }

            if (info.offset.x < 0) {
              window.location.href = '/tachido'
            }

            if (info.offset.y > 0) {
              window.location.href = '/amala'
            }

            if (info.offset.y < 0) {
              window.location.href = '/tachido'
            }
          }}
          dragConstraints={constraintsRef}
          dragSnapToOrigin
        />

        <div className={styles.left}>
          <Link href="/tachido">
            <a>tachido</a>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/amala">
            <a>amala</a>
          </Link>
        </div>
      </div>
    </>
  )
}