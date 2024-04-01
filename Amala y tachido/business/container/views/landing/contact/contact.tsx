import styles from './styles.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [linkWsp, setLinkWsp] = useState('')
  const [openDiv1, setOpenDiv1] = useState(false)
  const [openDiv2, setOpenDiv2] = useState(false)

  const handlerLocation = (e: any) => {
    const value = e.target.value
    // console.log("Value => ", typeof value)
    if (value === '1') {
      setLinkWsp('https://api.whatsapp.com/send?phone=573054305536&text=Hola👋%2C%20vengo%20de%20su%20sitio%20web%20y%20me%20gustaría%20realizar%20un%20pedido📑.')
    } else if (value === '2') {
      setLinkWsp('https://api.whatsapp.com/send?phone=573233799032&text=Hola👋%2C%20vengo%20de%20su%20sitio%20web%20y%20me%20gustaría%20realizar%20un%20pedido📑.')
    } else {
      setLinkWsp('')
    }
  }

  const hanlderOpen1 = (e: any) => {
    console.log(e)
    setOpenDiv1(true)
  }
  console.log('openDiv1 => ', openDiv1)
  return (
    <>
      <div className={styles.grid_container} id="contact">
        <div className={styles.content_amala}>
          <div className={styles.amala}>

          </div>
          <div className={styles.line_amala}>
            <hr />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.location}>
            <label>Por favor elige tu ubicación más cercana</label><br />
            <select onChange={handlerLocation}>
              <option value="">Elige una ubicación...</option>
              <option value={1}>Crespo</option>
              <option value={2}>Los Calamares</option>
            </select>
          </div>

          <div className={styles.content_contact}>
            <a href={linkWsp} target="_blank" style={{ pointerEvents: !linkWsp ? 'none' : 'all' }}>
              <button>
                <Image
                  src={'/images/landing/logo-wsp.png'}
                  alt={'Logo-WhatsApp'}
                  width={30}
                  height={30}
                  className={styles.logo}
                />
                <a className={styles.text_contact}>Haz tu pedido aquí</a>
              </button>
            </a>
          </div>

          <div className={styles.social_networks}>

            <div onMouseEnter={() => setOpenDiv1(true)} onMouseLeave={() => setOpenDiv1(false)}>
              <div className={styles.network_float} style={{ transition: 'all .8s', visibility: !openDiv1 ? 'hidden' : 'visible', opacity: !openDiv1 ? '0' : '1' }}>
                <a href="https://www.instagram.com/amalapizzacol/" target="_blank">
                  <div className={styles.network_icon}>
                    <i className='bx bxl-instagram'></i>
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064254241072" target="_blank">
                  <div className={styles.network_icon}>
                    <i className='bx bxl-facebook'></i>
                  </div>
                </a>
              </div>
              <Image src={'/images/landing/amala-logo-v2.png'} alt={'Logo-Amala'} width={70} height={70} className={styles.logo_contact} />
            </div>

            <div className={styles.network_content} onMouseEnter={() => setOpenDiv2(true)} onMouseLeave={() => setOpenDiv2(false)}>
              <div className={styles.network_float} style={{ transition: 'all .8s', visibility: !openDiv2 ? 'hidden' : 'visible', opacity: !openDiv2 ? '0' : '1' }}>
                <a href="https://www.instagram.com/tachidocol/" target="_blank">
                  <div className={styles.network_icon}>
                    <i className='bx bxl-instagram'></i>
                  </div>
                </a>
                <a href="https://www.facebook.com/tachidocol" target="_blank">
                  <div className={styles.network_icon}>
                    <i className='bx bxl-facebook'></i>
                  </div>
                </a>
              </div>
              <Image src={'/images/landing/tachido-logo-v2.png'} alt={'Logo-Ta\'chido'} width={70} height={70} className={styles.logo_contact} />
            </div>
            <div className={styles.hours}>
              <p>
                Horario de atención<br />
                9:00 am a 7:00 pm
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content_tachido}>

          <div className={styles.tachido}>

          </div>
          <div className={styles.line_tachido}>
            <hr />
          </div>

        </div>

      </div>
    </>
  )
}
