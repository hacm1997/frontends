import styles from "./seo.module.css";
import Tilt from "react-parallax-tilt";
const Seo = () => {
  return (
    <>
    <div className="mb-10">
      <div className={`${styles.box} flex items-start flex-col md:w-[90%] pb-10`} data-aos="fade-down">
        <div className="pl-5">
          <h1 className={`${styles.title} text-[80px] font-semibold`}>SEO</h1>
          <p className='text-[#C3A18F] font-semibold text-2xl'>Se la opción que los clientes encuentran primero</p>
        </div>
        <div className="flex flex-col-reverse justify-around items-center pt-12 md:flex-row w-[100%] md:w-full">
        <div className=" w-[100%] md:w-[50%] flex justify-center items-center pt-10 md:pt-0 pb-10">
        <Tilt tiltReverse={true}>
            <img src="/images/e-commerce/seo.webp" alt="seo" title="seo" className={styles.seoImg} />
        </Tilt>
        </div>
        <div className=" w-[100%] md:w-[50%]">
        <Tilt tiltReverse={true}>
        <div className="flex flex-col justify-center mx-auto md:flex-row md:justify-around items-center w-[100%]">
        <img
                src="/images/e-commerce/seo2.webp"
                alt="seo2"
                title="seo2"
                style={{width: '250px'}}
                className="w-[100%] md:w-[50%]"
              />
              <p className={`${styles.descrption} text-white w-[100%] md:w-[961px] md:h-[150px] md:pt-5 pl-5 text-lg md:text-[26px] font-normal`}>
                <strong>Aborda la nave</strong> y acelera con dirección{" "}
                <span>hacia la cima</span> de <strong>Google </strong>
                conquistando la <span>primera posición</span> de la inmensidad
                del
                <strong> ciberespacio</strong>
              </p>
        </div>
        </Tilt>
        <Tilt tiltReverse={true}>
        <div className="flex flex-col md:flex-row-reverse justify-around items-center w-[100%]">
        <img
                src="/images/e-commerce/seo3.webp"
                alt="seo3"
                title="seo3"
                className="w-[100%] md:w-[50%]"
              />
              <p className={`${styles.descrption} text-white w-[100%] md:w-[961px] md:h-[150px] md:pt-5 pl-5 text-lg md:text-[26px] font-normal`}>
                Profesionales <span>reales</span> en <strong>Google</strong>     que elevan a las mejores marcas a
                la <span>verdadera cima</span>
              </p>
        </div>
        </Tilt>
        </div>
      </div>
      </div>
    </div>
    <footer className="flex flex-col items-center justify-center">
      <div className="w-[90%] flex flex-col justify-center items-center pb-10">
        <h1 className={`${styles.descrption2} hidden md:block text-center text-4xl font-semibold w-[1227px] h-[152px ]`}><strong className="text-5xl">Mereces lo excepcional</strong><br /> Convertimos la presencia digital en la joya más codiciada de los navegadores</h1>        
        <h1 className={`${styles.descrption} block md:hidden text-[22px] w-[90%] text-center font-semibold`}>Mereces lo <span>excepcional</span>, convertimos la presencia digital en la <span>joya</span> más codiciada de los navegadores</h1>
        <div className={`${styles.buton} relative pt-5 w-[90%] flex justify-center items-center`}>
            <button className="w-[100%] md:w-[373px] p-4 rounded-3xl bg-gradient-to-r from-orange-500 to-purple-800">
              <a href="#prices" title="shopHome" className="text-lg md:text-2xl font-semibold">Obtener ya</a>
              </button>
            <img
              loading="lazy"
              src="/images/e-commerce/arrow.webp"
              alt="arrow"
              title="arrow"
              className="absolute top-9 left-[68%] md:left-[55%]"
            />
            </div>
      </div>
      <div className='w-full flex justify-start md:justify-end relative mb-12 h-auto' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
       <img
            loading="lazy"
            src="/images/e-commerce/piedra.webp"
            alt="shop"
            title="shop"
            className='w-[350px] h-[250px] md:w-[671px] md:h-[299px] absolute md:-top-40 -top-14 -left-32'
            />
          </div>
    </footer>
    </>
  )
}
export default Seo;