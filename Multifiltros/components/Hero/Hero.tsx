import { CATEGORIES } from '../../data/categories'
import { GridCategories } from '../Categories/GridCategories'
import { Filters } from '../UtilComponents/Filters'

export const Hero = () => {
  return (
    <div id='#productos'>
      <section className='h-full mx-auto mb-20 max-w-6xl'>
        <div className='flex flex-col gap-y-6 py-6 lg:py-10 lg:gap-y-7 text-center'>
          <h2 className='font-bold text-blue-custom text-2xl lg:text-2.5xl text-center'>
          Elige la categoria que buscas
          </h2>
          <div className='grid grid-cols-2 gap-4 mx-auto sm:gap-4 sm:inline-grid sm:grid-cols-5 lg:grid-cols-9'>
            <GridCategories items={CATEGORIES} />
          </div>
        </div>
        <div className='pt-6 flex flex-col gap-y-6 sm:gap-y-8 mx-auto'>
          <div className='mx-auto text-center'>
            <h2 className='font-bold text-blue-custom text-2xl lg:text-2.5xl pl-2
        border-l-4 border-red-custom'>
            Si no sabes qué <span className='text-red-custom'>filtro</span> elegir,
            nosotros te armamos tu <span className='text-red-custom'>kit</span>
            </h2>
            <h3 className='text-lg text-gray-600 lg:text-xl font-medium mt-2'>
            Llena los siguientes datos y te daremos el mejor kit para ti
            </h3>
          </div>
        </div>
      </section>
      <Filters />
    </div>
  )
}
