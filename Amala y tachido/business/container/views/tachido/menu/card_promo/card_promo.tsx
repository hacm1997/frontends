import styles from './styles.module.css'

interface CardProductoProps {
    nombre: string,
    img: string,
    alt: string,
    clase: string
}

const CardPromo: React.FC<CardProductoProps> = ({nombre, img, alt, clase}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.singleImg + " " + `${styles[clase]}`}>
                    <img src={`/images/tachido/fondo/${img}.jpg`} alt={alt}/>
                </div>
                <div className={styles.content}>
                    <h2>{nombre}</h2>
                </div>
            </div>
        </>
    )
}

export default CardPromo