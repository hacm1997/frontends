import styles from './styles.module.css'


export default function CardProceso({steps, index, imgSteps}:any) {
    return (
        <>
            <div className={styles.card} key={index}>
                <div className={styles.icon}>
                    <img src={imgSteps} alt="Steps" title="Steps"/>
                </div>
                <div className={styles.content}>
                    <p>{steps}</p>
                </div>
            </div>
        </>
    )
}
