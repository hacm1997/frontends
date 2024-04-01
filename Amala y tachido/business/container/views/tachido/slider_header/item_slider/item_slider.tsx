/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import styles from './styles.module.css'

interface PropsItemSlider {
  imgProducto: string
  alt: string
  title: string
  titleSpan: string
  imgSlider: string
}

const ItemSlider: React.FC<PropsItemSlider> = ({ imgSlider }) => {
  const route = useRouter()
  return (
    <>
      <div className={styles.slider}>
        {
          route.asPath.includes('/tachido')
            ? <img src={`/images/tachido/fondo/${imgSlider}`} alt="Slider Tachido" className={styles.heroImage} />
            : <img src={'/images/amala/fondo/banner-amala.webp'} alt="Slider Amala" className={styles.heroImage} />
        }
      </div>

    </>
  )

}

export default ItemSlider