import SliderNav from '../views/sitioWeb/sliderNav.component'
import styles  from './explore.module.css'

interface Props {
  videoWeb?: string
  videoMobile?: string
  title?: string
  logo?: string
  subtitle?: string
  bannerButton?: string
  buttonIcon?: string,
  submenu?: string[]
}

export const ExploreWorld = ({bannerButton,buttonIcon,subtitle,logo,title,videoWeb,videoMobile, submenu}: Props) => {
  return (
    <>
      {
        title ? 
          <div>
            <video loop autoPlay muted playsInline={true} className="w-full h-full block md:hidden" src={videoMobile} />
            <video loop autoPlay muted playsInline={true} className="w-full h-full hidden md:block" src={videoWeb} />
            <div className="absolute top-24 w-full">
              <div className="flex flex-col">
                <div className="pt-1 w-full flex justify-center items-center">
                  {logo ? <img src="/images/e-commerce/logoCreztu.webp" alt="logo creztu" title="logo creztu" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] pr-1" /> : null}
                  <h1 className={`text-4xl w-full -mt-3 sm:text-5xl md:text-7xl font-semibold pt-5 pb-5 ${styles.titleHeader}`}>{title}</h1>
                </div>
              </div>
            </div>
            <SliderNav submenu={submenu}/>
            <div className="mt-0 md: md:-mt-[275px] md:pt-10 w-full">
              <div className="flex flex-col mx-auto mt-8 text-center w-[90%] md:w-full md:mt-0">
                <div className='relative pt-3'>
                  <h3 className={`text-4xl md:text-6xl font-bold ${styles.subtitleHeader}`}>{subtitle}</h3>
                  <a href="#prices" title="shopHome" className="text-lg md:text-2xl font-semibold">
                    <button className="mt-3 w-[90%] md:w-[300px] h-[50px] rounded-3xl bg-regal-orange text-white">
                      {bannerButton}
                    </button>
                  </a>
                  <img
                    loading="lazy"
                    src={buttonIcon}
                    alt="arrow"
                    title="arrow"
                    className="hidden md:block absolute top-5 left-[68%] md:top-[100px] md:left-[55%] w-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <video loop autoPlay muted playsInline={true} className="w-full h-full block md:hidden" src={videoMobile} />
            <video loop autoPlay muted playsInline={true} className="w-full h-full hidden md:block" src={videoWeb} />
            <SliderNav submenu={submenu}/> 
          </div>
      }
    </>
  )
}
