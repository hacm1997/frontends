import Tilt from 'react-parallax-tilt'
import styles from './oportunidad.module.css'

interface Props {
  title?: string
  image?: string
  titlePt2?: string
}

export default function Oportunidad({title, image, titlePt2}: Props) {
  return (
    <>
      <div className='mt-20'>
        <div className='bg-[#FEF8F5] flex flex-col justify-center items-center'>
          <p className={`${styles.title} text-center text-2xl sm:text-3xl md:text-5xl font-semibold pt-10 pb-2`}
          >
            {title} <br/>{titlePt2 ? `${titlePt2}` : null}</p>
          <div className="w-[90%] pt-5 flex flex-col justify-center items-center">
            <Tilt tiltReverse={true}> 
              <img
                loading="lazy"
                src={image}
                alt="pauta"
                title="pauta"
                data-aos="fade-right"
                data-aos-duration={'700'}
              />
            </Tilt>
          </div>
          <div className='relative flex justify-center items-center'>
            <a 
              href="#prices" 
              title="Oportunidad"
            >
              <button className='bg-regal-orange rounded-3xl px-16 py-2 
              text-white mt-8 mb-4 text-2xl font-semibold flex justify-center 
              items-center'>
                Unirme ahora
              </button>
            </a>
            <img
              loading="lazy"
              src="/img/sitioWeb/arrow.webp"
              alt="arrow"
              title="arrow"
              className="absolute top-[40%] right-[-6px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}