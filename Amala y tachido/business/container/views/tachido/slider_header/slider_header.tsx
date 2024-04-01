import styles from './styles.module.css'
import Swipers from './swipers/swipers'
import Item_slider from './item_slider/item_slider'
import Modal from '../../../general/modal/Modal'
import { SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SliderHeader() {
  const route = useRouter()
  return (
    <>
      <Head>
        <link rel="icon" href={route.asPath.includes('/tachido') ? '/tachido.ico' : '/amala.ico'} />
      </Head>
      <section className={styles.section}>
        <div className={styles.general}>
          <Swipers className={styles.swiper_sli}>
            <SwiperSlide>
              <Item_slider imgProducto='' title='' titleSpan=''
                imgSlider={'banner.webp'} alt='banner Tachido' />
            </SwiperSlide>
          </Swipers>

          <a className={styles.button} href="#menu">
            <i className='bx bx-chevrons-down'></i>
          </a>
          <Modal />
          <a
            href='https://api.whatsapp.com/send?phone=573233799032&text=Hola, me gustaria realizar un pedido'
            target='_blank'
            className={styles.wpBtn}
          >
          </a>
        </div>
      </section>
    </>
  )
}