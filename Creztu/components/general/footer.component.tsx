import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[--color-primary]'>
      <div className='flex justify-center pb-10'>
        <div className='w-52 h-11'>
          <Link title='home' href="/">
            <img src="/img/CrezTu_logo_blanco.webp" alt="crezTu_logo" className='pt-6 w-full' />
          </Link>
        </div>        
      </div>
      <div className='block text-center md:flex md:justify-center md:mx-3'>
        <p className='pr-5 text-white font-semibold text-sm  md:text-base'>&copy; Todos los derechos reservados Creztu</p>
        <div className='text-center text-base  md:text-xl flex justify-center pt-3 md:pt-0 pb-5'>
          <p className='pr-5 text-white font-semibold text-sm  md:text-base'>Politicas de privacidad</p>
          <p className='text-white font-semibold text-sm  md:text-base'>Términos y condiciones</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer