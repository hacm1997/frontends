import styles from "./styles.module.css";
import inicio from "../../../../../../../services/inicio.json"

export default function Content({content}:any) {

    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>{content.titlespan}</span>
                    {content.titleh1 === 'Tornillería' ?
                        <h1>{content.titleh1}</h1>
                    : <h2>{content.titleh1}</h2>}

                </div>
                <p>{content.contentp}</p>

            </div>
        </>
    )
}
