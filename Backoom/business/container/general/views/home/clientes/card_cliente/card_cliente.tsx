import styles from "./styles.module.css";
export default function Card_cliente({ img, alt, index }: any) {
    return (
        <>
            <div className={styles.card} key={index} >
                <img src={img} alt={alt} title={alt}/>
            </div>
        </>
    )
}
