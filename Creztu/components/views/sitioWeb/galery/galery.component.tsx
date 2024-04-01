import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './galery.module.css'
import { PropsGallery, galleryElements } from '../../../utilsComponents/principalSlider.component'

const Galery = ({galleryData}: PropsGallery) => {
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

  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: '-130vw',
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'center center',
        end: '2000 top',
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
      <section className="overflow-hidden pl-[150px]">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="h-[100vh] w-[300vw] flex gap-10">
            {galleryData.map((item: galleryElements, index: number) => (
              <div key={index} className="mt-20">
                <p className={`${styles.contentTitle} w-[300px] md:w-full text-2xl md:text-3xl`}>{item.title}</p>
                <div className="relative h-[80vh] w-[70vw] flex justify-center">
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    className="hidden md:block rounded-3xl"
                  />
                  <video
                    src={item.videoMovil}
                    autoPlay
                    muted
                    loop
                    className="block md:hidden rounded-3xl  "
                  />
                  <div className={`${styles.title} text-black md:text-white absolute w-[300px] md:w-[652px] left-5 mt-14 pl-10`}>
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
                    {/* <p className="pl-5">{item.title}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerImg3d}>
          <img
            loading="lazy"
            src="/img/ecommerce/cube.webp"
            alt="cube"
            title="cube"
            className={`${styles.cube} hidden md:block`}
          />
        </div>
      </section>
    </>
  )
}
export default Galery