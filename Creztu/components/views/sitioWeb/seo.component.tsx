import styles from './seo.module.css'
import Tilt from 'react-parallax-tilt'

export const Seo = () => {
  return (
    <>
      <div className="mb-10 mx-4">
        <div className=' mx-4 flex items-start flex-col md:w-[90%] pb-10' data-aos="fade-down">
          <div className="pl-5">
            <h1 className={` text-3xl sm:text-5xl lg:text-7xl 
            font-semibold bg-gradient-to-r from-orange-400 via-violet-600 to-orange-400 bg-clip-text 
            text-transparent`}>
              SEO
            </h1>
            <p className='text-black font-semibold text-xl sm:text-2xl'>Sé la opción que los clientes encuentran primero</p>
          </div>
          <div className="flex flex-col-reverse justify-around items-center pt-12 xl:flex-row w-[100%] md:w-full">
            <div className=" w-[100%] md:w-[50%] flex justify-center items-center pt-10 md:pt-0 pb-10">
              <Tilt tiltReverse={true}>
                <img src="/img/sitioWeb/seo.png" alt="seo" title="seo" className={styles.seoImg} />
              </Tilt>
            </div>
            <div className=" w-[100%] md:w-[50%]">
              <Tilt tiltReverse={true}>
                <div className="flex flex-col justify-center mx-auto xl:flex-row md:justify-around items-center w-full">
                  <img
                    src="/img/sitioWeb/seo2.webp"
                    alt="seo2"
                    title="seo2"
                    style={{width: '250px'}}
                    className="w-[100%] md:w-[50%]"
                  />
                  <p className='text-[#7D8184] w-full  md:pt-5 pl-5 text-lg md:text-[26px] font-normal'>
                    <strong className='font-bold text-black'>Aborda la nave</strong> y acelera con dirección{' '}
                    <span className='font-bold text-[#EF5A0F]'>hacia la cima</span> de <strong className='text-[#EF5A0F] font-bold'>Google </strong>
                conquistando la <span className='text-[#EF5A0F] font-bold'>primera posición</span> de la inmensidad
                del
                    <strong className='text-[#EF5A0F] font-bold'> ciberespacio</strong>
                  </p>
                </div>
              </Tilt>
              <Tilt tiltReverse={true}>
                <div className="flex flex-col xl:flex-row-reverse justify-around items-center w-[100%]">
                  <img
                    src="/img/sitioWeb/seo3.webp"
                    alt="seo3"
                    title="seo3"
                    className="w-[100%] md:w-[50%]"
                  />
                  <p className='text-[#7D8184]  md:h-[150px] md:pt-5 pl-5 text-lg md:text-[26px] font-normal'>
                Profesionales <span className='text-regal-orange font-bold'>reales</span> en <strong className='text-black font-bold'>Google</strong>     que elevan a las mejores marcas a
                la <span className='text-regal-orange font-bold'>verdadera cima</span>
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col justify-center items-center pb-10">
          <p className='text-regal-orange text-center text-4xl font-semibold'>Mereces lo excepcional</p>
          <p className='text-2xl font-medium'>Convertimos la presencia digital en la joya más codiciada de los navegadores</p>
          <div className='relative pt-5 w-[90%] flex justify-center items-center'>
            <button className="w-[100%] md:w-[373px] p-4 rounded-3xl bg-regal-orange text-white">
              <a href="#prices" title="shopHome" className="text-lg md:text-2xl font-semibold">Obtener oferta</a>
            </button>
            <img
              loading="lazy"
              src="/img/sitioWeb/arrow.webp"
              alt="arrow"
              title="arrow"
              className="absolute top-9 left-[68%] md:left-[55%]"
            />
          </div>
        </div>
      </footer>
    </>
  )
}