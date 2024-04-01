import styles from "./styles.module.css"
import blog from "../../../../../../services/blog.json"

export default function SingleBlog() {



    return (
        <>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h1>
                        <i className='bx bxs-circle'></i>{blog.que_es_tornillo.title}
                    </h1>
                    <p>
                        {blog.que_es_tornillo.description}
                    </p>

                </div>
                <div className={styles.multimedia}>
                    <img src="/images/blog/portada-single.png" alt="Portada-blogs-Backoom" title="Portada blogs Backoom"/>
                </div>
                <div className={styles.content}>
                    {blog.que_es_tornillo.content.description.map((e: any, index: any) => {
                        return (
                            <p key={index}><strong>{e.shading}</strong> {e.item}</p>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
