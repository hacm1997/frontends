import styles from "./styles.module.css";
export default function Banner(props:any) {
    return(
        <>
            <div className={styles.banner}>
               <div className={styles.title}>
                   <h1>{props.title}</h1>
                   <div className={styles.enlace}>
                   </div>
               </div>
            </div>
        </>
    )
}