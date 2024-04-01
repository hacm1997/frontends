import { GridCategories } from '../Categories/GridCategories'
import { FILTERSUBCATEGORIES } from '../../data/filtersSubcategories'

export const SubCategories = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <h2 className='text-blue-custom text-center text-3xl lg:text-5xl font-extrabold'><span className='text-red-custom'>|</span>Encuentra los mejores filtros para tu vehículo</h2>
      <p className='text-[#353535] text-center text-xl not-italic font-normal'>Filtra tus productos según tu necesidad</p>
      <p className='text-blue-custom text-center text-2xl lg:text-4xl not-italic font-bold mt-4'>Elige la sub categoría que buscas</p>
      <div className='grid grid-cols-2 sm:flex sm:flex-row gap-4 mt-6'>
        <GridCategories items={FILTERSUBCATEGORIES} />
      </div>
    </div>
  )
}
