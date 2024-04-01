import styles from './styles.module.css'

export default function CardEmpresa(props:any) {
    console.log(props.data)
    return (
        <>
            <div className={styles.card}>
                <img src={props.data.image} alt={props.data.alt} title={props.data.alt}/>
            </div>
        </>
    )
}
