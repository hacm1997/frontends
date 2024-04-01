import { Menu } from 'iconoir-react'

interface Props {
  toggleMenu: () => void
}

export const MobileMenu = ({ toggleMenu }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <img
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        src="/icons/logo.webp"
        alt="Multifiltros"
      />
      <div className="flex lg:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="toggle menu"
          className='relative z-30'
        >
          <Menu color='#ffff' />
        </button>
      </div>
    </div>
  )
}
