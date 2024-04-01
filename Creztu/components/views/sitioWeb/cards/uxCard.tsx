import { UxCardIcon } from '../../../../public/img/sitioWeb/uxCardIcon'

export const UxCard = () => {
  return (
    <div className='mx-auto flex flex-col sm:flex-row max-w-[700px]'>
      <div className='bg-[#454446] sm:rounded-l-3xl sm:rounded-t-none rounded-t-3xl p-4'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d6030a4daf25cea4565de54e258eecfadc98986e6e80f85f08506730415061?apiKey=b06eb1b4e56a4d27b53867ba7907a8cc&"
          className="img"
          alt="Logo"
          title="Logo"
        />
        <p
          className='text-3xl font-semibold text-white'
        >
              Diseño ux
        </p>
        <p
          className='text-xl font-normal text-white'
        >
                La experiencia del usuario llevada a la perfección. Con el{' '}
          <strong className='text-white'>UX líder</strong> en el mundo, hacemos que la navegación por
                tu tienda sea única y natural.
        </p>
      </div>
      <div className='bg-gradient-to-r from-orange-400 via-violet-600 to-orange-400 px-4 pt-4 
      sm:rounded-r-3xl sm:rounded-b-none rounded-b-3xl flex justify-center'
      >
        <UxCardIcon/>
      </div>
    </div>
  )
}
