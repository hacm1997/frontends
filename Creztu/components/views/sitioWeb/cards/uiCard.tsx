import { UiCardIcon } from '../../../../public/img/sitioWeb/uiCardIcon'

export const UiCard = () => {
  return (
    <div className='mx-auto flex flex-col sm:flex-row max-w-[700px]'>
      <div className='bg-[#454446] sm:rounded-l-3xl sm:rounded-t-none rounded-t-3xl p-4'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d6030a4daf25cea4565de54e258eecfadc98986e6e80f85f08506730415061?apiKey=b06eb1b4e56a4d27b53867ba7907a8cc&"
          alt="Logo"
          title="Logo2"
        />
        <p
          className='text-3xl font-semibold text-white'
        >
              Diseño ui
        </p>
        <p
          className='text-xl font-normal text-white'
        >
                Experiencias visualmente atractivas, que potencia la <strong className='text-white'>interacción </strong>
                de manera que cada clic y desplazamiento sea gratificante, donde la <strong className='text-white'>funcionalidad</strong> y 
                lo <strong className='text-white'>atractivo</strong> convergen en una navegación de usuario <strong className='text-white'>incomparable.</strong>
        </p>
      </div>
      <div 
        className='bg-gradient-to-r from-orange-400 via-violet-600 to-orange-400 px-10 pt-10 
        sm:rounded-r-3xl sm:rounded-b-none rounded-b-3xl flex justify-center'
      >
        <UiCardIcon/>
      </div>
    </div>
  )
}
