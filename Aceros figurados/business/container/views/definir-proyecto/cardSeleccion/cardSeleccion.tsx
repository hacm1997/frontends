import styles from './styles.module.css'

export default function CardSeleccion(props: any) {
    return (
        <>
            <div className={styles.cardSelect}>
                <div className={`${styles[props.pantalla]}`} onClick={props.handleSelect}>
                    <h2>Pantallas y barretes</h2>
                </div>
                <div className={`${styles[props.pilotaje]}`} onClick={props.handleSelect}>
                    <h2>Pilotaje</h2>
                </div>

            </div>
        </>
    )
}
