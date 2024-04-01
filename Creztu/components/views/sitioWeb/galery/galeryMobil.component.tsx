import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import styles from './galery.module.css'
import { PropsGallery, galleryElements } from '../../../utilsComponents/principalSlider.component'

const GaleryMobil = ({galleryData}: PropsGallery) => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  // const videos = [
  //   {
  //     id: 1,
  //     url: '/videos/Holograma.mp4',
  //     urlMovil: '/videos/Holograma-Vista-Movil.mp4',
  //     title: 'Velocidad que empodera tu tienda online'
    
  //   },
  //   {
  //     id: 2,
  //     url: '/videos/oficina.mp4',
  //     urlMovil: '/videos/oficina-Vista-Movil.mp4',
  //     title: 'No hay fallos'
  //   },
  //   {
  //     id: 3,
  //     url: '/videos/Creztu.mp4',
  //     urlMovil: '/videos/Creztu-Vista-Movil.mp4',
  //     title: ' Elasticidad para crecer sin límites'
  //   }
  // ]
  //   interface videosSldier {
  //     id: number
  //     url: string
  //     urlMovil: string
  //     title: string
  // }
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: '-210vw',
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom-=635',
        toggleActions: 'play none none reverse',
        scrub: 0.6,
        pin: true
      }
    })

    return () => {
      pin.kill()
    }
  }, [])

  return(
    <>
      <section className="overflow-hidden pl-[20px] pb-12]">
        <div ref={triggerRef} className="h-[100vh]">
          <div ref={sectionRef} className="h-[40vh] w-[300vw] flex gap-7">
            {galleryData.map((item: galleryElements, index: number) => (
              <div key={index}>
                <div className="flex justify-center text-center -ml-5 items-end w-[90%] h-[100px] text-2xl pb-3 mt-3">
                  <p className={styles.contentTitle}>{item.title}</p>
                </div>
                <div  className="h-[30vh] w-[100%] flex justify-center">
                  <video
                    src={item.videoMovil}
                    autoPlay
                    muted
                    loop
                    width={756}
                    height={522}
                  />
                </div>
                <div className={`${styles.title} pl-[40px] pt-5 w-[90%]`}>
                  {
                    index+1 === 1 ? item.text
                      : ''
                  }
                  {
                    index+1 === 2 ? item.text
                      : ''
                  }
                  {
                    index+1 === 3 ? item.text
                      : ''
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export  default GaleryMobil