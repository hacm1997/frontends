import styles from './styles.module.css'

export default function CardMaquina(props: any) {
    // console.log("alt y props => ",props.alt)
    return (
        <>
            <div className={styles.card}>
                <img src={props.img} alt={props.alt} title={props.alt}/>
            </div>
        </>
    )
}
