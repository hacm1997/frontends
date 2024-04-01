import { useRouter } from 'next/router';
import styles from './styles.module.css'
import { LOCATIONS, SOCIAL_AMALA, SOCIAL_TACHIDO } from '../../../../locales/es/footer';

export default function Footer() {
  const route = useRouter()
  // const social_item_tachido = FOOTER_ITEMS.social.item
  // const social_item_amala = FOOTER_ITEMS.social.itemAmala
  return (
    <>
      <footer className={route.asPath.includes("/tachido") ? styles.footer : styles.footer2}>
        <div className={styles.general}>
          <div className={styles.content_1}>
            <div className={styles.logo}>
              {
                route.asPath.includes("/tachido") ? <img src="/images/tachido/logo/tachido.png" alt="Tachido" /> : <img src="/images/amala/logo/amala.png" alt="Amala" />
              }
              <h2>Redes sociales</h2>
              <div className={route.asPath.includes("tachido") ? styles.social : styles.social2}>
                {route.asPath.includes("tachido") ?
                  SOCIAL_TACHIDO?.map((item: any, index: number) => {
                    return (
                      <a key={index} href={item.link} target="_blank"> <i className={item.icon}></i></a>
                    )
                  })
                  :
                  SOCIAL_AMALA?.map((item: any, index: number) => {
                    return (
                      <a key={index} href={item.link} target="_blank"> <i className={item.icon}></i></a>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className={styles.content_2}>
            <h2>Ubicación</h2>
            <div className={styles.infoUbi}>
              <div className={route.asPath.includes("tachido") ? styles.itenUbi : styles.itenUbi2}>
                <ul className={styles.socialNetworks}>
                  {
                    LOCATIONS.map(location => (
                      <li key={location.id} style={{ alignItems: 'center', display: 'flex', columnGap: '8px', listStyle: 'none' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                            <i className='bx bx-map' />
                            {location.name}
                          </span>
                          {
                            location.address && (
                              <span style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                                <i className='bx bx-map' />
                                {location.address}
                              </span>
                            )
                          }
                          <span style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                            <i className='bx bx-phone' />
                            {location.Tel}
                          </span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.next_footer}>
        <p>Medios de pago</p>
        <img src='/images/payment.png' alt='Medios de pago' title='Medios de pago' />
        <img src='/images/security.png' alt='Sitio webs eguro' title='Sitio seguro' />
      </div>
    </>
  )
}
