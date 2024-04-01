import Image from "next/image";
import styles from "./styles.module.css";

export default function Logo() {
    return (
        <>
            <img className={styles.logo} src="/favicon.ico" width={70} height={60}/>
        </>
    )
}
