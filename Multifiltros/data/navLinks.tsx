import { BoxIso, Gift, PinAlt, SimpleCart } from 'iconoir-react'
import { PhoneIcon } from '../public/icons/utilsIcons/phoneIcon'
import { ShopIcon } from '../public/icons/utilsIcons/shopIcon'

export const NavItems = [
  {
    id: 1,
    label: 'Inicio',
    url: '/#'
  },
  {
    id: 2,
    label: 'Nosotros',
    url: '/nosotros'
  }
]

export const ExtraNavItems = [
  {
    id: 4,
    label: 'Productos',
    url: '/filterProducts',
    icon: <ShopIcon style='text-white' />
  },
  {
    id: 5,
    label: 'Ofertas',
    url: '/oferts/todaLasOfertas',
    icon: <Gift />
  },
  {
    id: 6,
    label: 'Ubicacion',
    url: '#',
    icon: <PinAlt className='text-red-custom'/>
  },
  {
    id: 7,
    label: 'Rastreo',
    url: '#',
    icon: <BoxIso />
  },
  {
    id: 8,
    label: 'Agenda tu cita',
    url: '/schedule',
    icon: <PhoneIcon/>
  },
  {
    id: 9,
    label: 'Carrito',
    url: '/shopingCar',
    icon: <SimpleCart className=' text-red-custom'/>,
    cartItemCount: true
  }
]

