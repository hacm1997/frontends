import React from 'react'
import styles from './problems.module.css';
import useTranslation from 'next-translate/useTranslation';

const ProblemsComponent = (props:any) => {
  const { t, lang } = useTranslation(`services`);
  return (
    <div>
      <div>
        <video className='h-full w-full'
            src={t(`${props.typeService}.${props.service}.over_video.video`)}
            autoPlay={true}
            playsInline={true}
            muted
            loop
        />
      </div>
      <section className='lg:absolute top-36 lg:text-white md:px-10 xl:px-28 py-8 2xl:pt-10 xl:pt-0 px-3'>
        <aside className='flex items-center '>
          <section className='md:flex md:gap-10 2xl:gap-24'>

            <div className='pt-5 md:pt-0 border-r pr-0 md:pr-10 md:w-[33%] 2xl:w-full'>
              <h2 className='text-base md:text-[16px] 2xl:text-2xl font-bold text-center pb-2 md:h-24 2xl:h-[120px] '>
                {t(`${props.typeService}.${props.service}.over_video.question1`)}
              </h2><br/>
              <div className='md:pl-1 pb-5'>
                <img className='w-[90%]' src={t(`${props.typeService}.${props.service}.over_video.img1`)} title='Retrasos' alt='retrasos'/>
              </div>
              <p className='text-sm 2xl:text-lg text-justify'>{t(`${props.typeService}.${props.service}.over_video.description1`)}</p>
            </div>

            <div className='pt-5 md:pt-0 border-r pr-0 md:pr-10 md:w-[33%] 2xl:w-full'>
              <h2 className='text-base md:text-[16px] 2xl:text-2xl font-bold text-center pb-2 md:h-24 2xl:h-[120px] 2xl:w-[95%]'>
                {t(`${props.typeService}.${props.service}.over_video.question2`)}
              </h2><br/>
              <div className='md:pl-1 pb-5'>
                <img className='w-[90%]' src={t(`${props.typeService}.${props.service}.over_video.img2`)} title='Petición' alt='peticion'/>
              </div>
              <p className='text-sm 2xl:text-lg text-justify'>{t(`${props.typeService}.${props.service}.over_video.description2`)}</p>
            </div>

            <div className='pt-5 md:pt-0 pr-0 md:pr-10 md:w-[33%] 2xl:w-full'>
              <h2 className='text-base md:text-[16px] 2xl:text-2xl font-bold text-center pb-2 md:h-24 2xl:h-[120px]'>
                {t(`${props.typeService}.${props.service}.over_video.question3`)}
              </h2><br/>
              <div className='md:pl-1 pb-5'>
                <img className='w-[90%]' src={t(`${props.typeService}.${props.service}.over_video.img3`)} title='Decisión judicial' alt='decision-judicial'/>
              </div>
              <p className='text-sm 2xl:text-lg text-justify'>{t(`${props.typeService}.${props.service}.over_video.description3`)}</p>
            </div>

          </section>
          
        </aside>
        <div className={'flex gap-16 pt-5 justify-center '+styles.general_button} >
        <a onClick={props.gaEventTracker(`Clic Agendar cita 4 - ${t(`${props.typeService}.${props.service}.title`)}`)} href='#Form'>
            <button>
                {t('general_button')}
            </button>
        </a>
        <a className='flex items-center' onClick={props.gaEventTracker(`Clic WhatsApp - ${t(`${props.typeService}.${props.service}.title`)}`)} href='https://wa.me/573242382277' target='_blank'>
            <button className='pl-5 pt-1'>
            <i className='bx bxl-whatsapp absolute left-2 top-2' style={{fontSize: '24px'}}></i>Escríbenos
            </button>
        </a>
        </div>
      </section>
    </div>
  )
}

export default ProblemsComponent