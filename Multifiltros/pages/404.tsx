import Link from 'next/link'
import { Main } from '../components/layouts/Main'

function Custom404() {
  return (
    <Main>
      <section className='grid place-content-center mt-14'>
        {/* <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <div className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
            <EmojiPuzzled className=' w-7 h-7' />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          Página no encontrada
          </h1>
          <span className="mt-2 text-gray-500">
          La página que estás buscando no existe.
          </span>
          <div className="flex justify-center w-full mt-8">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 
              transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
              <ArrowLeft className='w-4 h-4' />
              <Link href='/'>
              Volver al inicio
              </Link>
            </button>
          </div>
        </div> */}
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-red-custom text-6xl lg:text-9xl not-italic font-bold  mx-4 lg:mx-0'>Vaya</h2>
          <p className='mt-4 text-[#353535] text-center text-3xl lg:text-5xl not-italic font-medium max-w-[750px] mx-4 lg:mx-0'>
            No hemos podido encontrar la pagina que buscas
          </p>
          <p className='mt-12 text-blue-custom text-3xl not-italic font-extrabold mx-4 lg:mx-0'>Código de error: 404 </p>
          <p className='mt-3 text-[#353535] text-base lg:text-xl not-italic font-medium mx-4 lg:mx-0'>Aqui tienes algunos enlaces que pueden servirte de ayuda:</p>
          <ul className='text-center mt-6 text-blue-custom flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-8 text-xl not-italic font-normal mx-4 lg:mx-0'>
            <li><Link href='/'>Inicio</Link></li>
            <li><Link href='/nosotros'>Nosotros</Link></li>
            <li><Link href='/oferts/todaLasOfertas'>Ofertas</Link></li>
            <li><Link href='/'>Productos</Link></li>
            <li><Link href='/'>Servicios</Link></li>
          </ul>
        </div>
        <div className=''>
          <img className='object-contain' src='/images/404.png' alt='404 Not found'/>
        </div>
      </section>
    </Main>
  )
}

export default Custom404