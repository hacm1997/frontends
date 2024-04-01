import { DemostrationCard } from '../Product/DemostrationCard'

const PRODUCTS = [
  {
    id: 1,
    label: 'FILTRO DE AIRE KIA K2700 / K3000S',
    image: '/images/first.png',
    alt: 'filtro de aire kia',
    price: 123000
  },
  {
    id: 2,
    label: 'FILTRO DE AIRE INTERNO HINO',
    image: '/images/second.png',
    alt: 'filtro de aire hino',
    price: 123000
  },
  {
    id: 3,
    label: 'FILTRO DE AIRE EXTERNO FORD CARGO 1721',
    image: '/images/third.png',
    alt: 'filtro de aire externo',
    price: 123000
  },
  {
    id: 4,
    label: 'FILTRO DE AIRE JMC',
    image: '/images/fourth.png',
    alt: 'filtro de aire jmc',
    price: 123000
  }
]

export const SliderCatalogue = () => {
  return (
    <div className='flex flex-col mx-auto justify-center items-center'>
      <div className='flex mx-auto lg:mx-4 medium:mx-auto flex-col mt-12'>
        <span className='text-red-custom font-medium text-center lg:text-start mb-2'>
        Nuestros productos de fabricación propia marca multifiltros
        </span>
        <h2 className='border-l-4 border-red-custom pl-2 text-blue-custom text-center font-bold text-xl lg:text-2.5xl lg:text-start'>
        Catálogo de filtros fabricados por nosotros
        </h2>
      </div>
      <div className='w-9/12 flex flex-wrap justify-center items-start mt-8 gap-4'>
        {
          PRODUCTS.map(item => (
            <DemostrationCard key={item.id} title={item.label} image={item.image} alt={item.alt} price={item.price}/>
          ))
        }
      </div>
      <a
        title='catalogo multifiltros'
        href='/Catalogo Ordenado.pdf'
        target='_blank'
        className='bg-blue-custom text-white mt-8 p-2 rounded-lg text-xl font-bold'
      >
          Ver todo el catalogo
      </a>
    </div>
  )
}
