import { CardIcon } from '../public/icons/utilsIcons/card'
import { DeliveryIcon } from '../public/icons/utilsIcons/delivery'
import { GiftIcon } from '../public/icons/utilsIcons/gift'
import { HeadphoneIcon } from '../public/icons/utilsIcons/headphones'

export const BENEFITS = [
  {
    id: 1,
    title: 'Envíos gratis',
    text: (
      <p className='text-base text-[#353535] font-medium text-center'>En <span className='text-red-custom font-bold'>Cartagena</span>, resto del país por compras de <span className='text-red-custom font-bold'>kits de filtros</span></p>
    ),
    icon: <DeliveryIcon/>
  },
  {
    id: 2,
    title: 'Ofertas',
    text: (
      <p className='text-[#353535] text-base font-medium text-center'>Variedad de descuentos en los productos</p>
    ),
    icon: <GiftIcon/>
  },
  {
    id: 3,
    title: 'Servicio al cliente ',
    text: <p className='text-[#353535] text-base font-medium text-center'>Asistencia a la hora de tu compra</p>,
    icon: <HeadphoneIcon/>
  },
  {
    id: 4,
    title: 'Pagos seguros',
    text: <p className='text-[#353535] text-base font-medium text-center'>Variedad en los métodos de pago</p>,
    icon: <CardIcon width={40}/>
  }
]