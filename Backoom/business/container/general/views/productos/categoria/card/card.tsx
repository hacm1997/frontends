import styles from "./styles.module.css";
export default function Card(props: any) {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.multimedia}>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className={styles.content}>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </>
    )
}