import styles from "./styles.module.css";

export default function bienvenido() {
    return (
        <>
            <div className={styles.bienvenido}>
                <h1>¡Bienvenida <span>Laura!</span></h1>
            </div>
        </>
    )
}
