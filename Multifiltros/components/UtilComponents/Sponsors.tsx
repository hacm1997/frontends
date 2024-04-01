import { BrandCard } from './BrandCard'

const BRANDS = [
  {
    id: 1,
    title: 'ABRO',
    image: '/images/sponsor/abro.webp',
    alt: 'ABRO'
  },
  {
    id: 2,
    title: 'BALDWIN FILTERS',
    image: '/images/sponsor/baldwin.webp',
    alt: 'BALDWIN FILTERS'
  },
  {
    id: 3,
    title: 'BOSCH',
    image: '/images/sponsor/bosch.webp',
    alt: 'BOSCH'
  },
  {
    id: 4,
    title: 'FILTORS MASTER',
    image: '/images/sponsor/Filtros-Master.webp',
    alt: 'FILTORS MASTER'
  },
  {
    id: 5,
    title: 'FILTROS PARTMO',
    image: '/images/sponsor/Partmo.webp',
    alt: 'FILTROS PARTMO'
  },
  {
    id: 6,
    title: 'SUPER FILT',
    image: '/images/sponsor/super-filt.webp',
    alt: 'SUPER FILT'
  },
  {
    id: 7,
    title: 'PREMIUM FILTERS',
    image: '/images/sponsor/premiun-filters.webp',
    alt: 'PREMIUM FILTERS'
  }
]

export const Sponsors = () => {
  return (
    <>
      <h2 className='text-blue-custom font-bold text-center text-3xl lg:text-5xl mb-16'>
        Marcas Alidas de multi<span className='text-red-custom'>filtros</span>
      </h2>
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 lg:flex gap-8 justify-center items-center mx-4'>
        {
          BRANDS.map(brand => (
            <BrandCard
              key={brand.id}
              image={brand.image}
              altDescription={brand.alt}
            />
          ))
        }
      </div>
    </>
  )
}
