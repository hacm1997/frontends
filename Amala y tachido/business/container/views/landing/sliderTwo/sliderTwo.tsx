import styles from './styles.module.css'
import Image from 'next/image'

export default function SecondContentSlider(props: any) {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.menuCard} style={{ transition: 'all .8s', visibility: props.hidden ? 'hidden' : 'visible', opacity: props.hidden ? '0' : '2' }}>
            <div className={styles.logo}>
              <Image
                src="/images/landing/tachido-logo.png"
                alt="Tachido-logo"
                width={70}
                height={70}
                style={{ marginTop: '5px' }}
              />
            </div>
            <p>Menú</p>
          </div>
        </div>
      </div>
    </>
  )
}
