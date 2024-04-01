/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import styles from './styles.module.css'
import Link from "next/link";

interface CardProductoProps {
  id: number,
  nombre: string,
  precio: string,
  descripcion: string,
  link: string,
  image: string
}

const CardProducto: React.FC<CardProductoProps> = ({ id, nombre, precio, descripcion, link, image }) => {
  const route = useRouter();

  return (
    <>
      <div className={styles.card}>
        <div className={styles.singleImg}>
          {route.asPath.includes("/amala") ?
            <img src={image} alt={nombre} />
            : <img src={image} alt={nombre} />}
        </div>
        <div className={styles.content}>
          <div className={styles.price}>
            <h3>{precio}</h3>
            <span><i className='bx bxs-star'></i> Popular</span>
          </div>
          <div className={styles.description}>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
          </div>
          <div className={route.asPath.includes("/tachido") ? styles.callToAction : styles.callToAction2}>
            <Link href={link}>
              <a className={styles.btn}>Comprar</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardProducto