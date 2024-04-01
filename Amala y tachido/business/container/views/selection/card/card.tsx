import styles from "./styles.module.css";

interface CardProps {
    img: string;
    alt: string;

    content: string;

}

const Card: React.FC<CardProps> = ({img, alt, content}) => {
    return (
        <>
            <div className={styles.card}>

                <div className={styles.singleImg}>
                    <img src={`/images/logo/${img}.png`} alt={alt}/>
                </div>
                <div className={styles.content}>
                    <h1>{content}</h1>
                </div>
            </div>
        </>
    )
}

export default Card