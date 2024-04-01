import styles from './styles.module.css'
export default function ApoyoGrafico(props: any) {
    return(
        <>
            <div className={styles.apoyoGrafico}>
                <img src={props.img} alt="Apoyo grafico" title="graphic"/>
            </div>
        </>
    )
}
