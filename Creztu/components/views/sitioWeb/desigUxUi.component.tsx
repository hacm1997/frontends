import { UxCard } from './cards/uxCard'
import { UiCard } from './cards/uiCard'
import styles from './design.module.css'

export const DesigUxUi = () => {
  return (
    <div className='w-full mt-32 mb-8'>
      <div className='mx-auto w-[95%] border-[1px] rounded-xl bg-[#FEF8F5] px-4'>
        <p
        
          className={`${styles.title} text-2xl sm:text-3xl md:text-7xl font-semibold text-center 
          bg-clip-text text-transparent pt-4`}
        >
          Diseño UX/UI
        </p>
        <p className='pt-5 text-xl md:text-3xl font-semibold text-center pb-8 sm:pb-20'>
          El poder de la facilidad y lo atractivo
        </p>
        <div className='flex justify-around mb-8 flex-col 2xl:flex-row'>
          <div data-aos="fade-down">
            <UxCard/>
          </div>
          <div className='2xl:mt-40 mt-8' data-aos="fade-up">
            <UiCard/>
          </div>
        </div>
      </div>
    </div>
  )
}
