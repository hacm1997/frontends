import styles from "./styles.module.css"
import blog from "../../../../../../services/blog.json"

export default function Card() {
    return (
        <>
            <div className={styles.card}>
                <span>17 de enero de 2022</span>
                <div className={styles.portada}>
                    <img src="/images/blog/portada-principal-que-es-tornillo.jpg" alt="que-es-tornillo" title="Qué es tornillo"/>
                </div>
                <div className={styles.content}>
                    <h2><i className='bx bxs-circle'></i> Tipos de tornillos</h2>
                    <p>{blog.que_es_tornillo.description}</p>
                    <a href={blog.que_es_tornillo.link} title="Leer más">Leer más</a>
                </div>
            </div>
        </>
    )
}
