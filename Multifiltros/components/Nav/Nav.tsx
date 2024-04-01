import { useContext, useEffect, useState } from 'react'
import { ExtraNavItems, NavItems } from '../../data/navLinks'
import { MobileMenu } from './MobileMenu'
import { Search } from '../UtilComponents/Search'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import Modal from '../UtilComponents/Modal'
import { useCookies } from 'react-cookie'
// import { useRouter } from 'next/router'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {cart} = useContext(EcommerceContext)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showChild, setShowChild] = useState(false)
  // const route = useRouter()
  
  useEffect(() => {
    // if(route.asPath.includes('paymentSteps') || route.asPath.includes('epaycoShop')){
    //   removeCookie('emailStatus')
    // }
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsModalOpen(false) // Cierra el modal al abrir el menú móvil
  }
  
  const handleUbicacionClick = () => {
    setIsModalOpen(true)
  }

  const deleteCookieAllProducts = () => {
    removeCookie('searchTag')
  }

  return (
    <nav className={`bg-blue-custom ${isOpen}`}>
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-center">
          <MobileMenu toggleMenu={toggleMenu} />
          <div
            className={`absolute inset-x-0 z-10 w-full px-6 py-4 transition-all duration-300 ease-in-out shadow-shadow-custom lg:shadow-none
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full hidden'} 
              bg-blue-custom lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto 
              lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:flex lg:items-center lg:justify-around lg:flex-1`
            }
          >
            <div className="mt-2 flex flex-col text-white font-medium capitalize lg:mt-0 lg:flex lg:gap-x-6 lg:flex-row lg:items-center">
              {
                NavItems.map(item => (
                  <a
                    onClick={deleteCookieAllProducts}
                    key={item.id}
                    href={item.url}
                    className="my-2 py-1 transition-colors duration-200 border-b-transparent border-b-2
                    hover:border-b-2 hover:border-red-custom lg:py-0"
                  >
                    {item.label}
                  </a>
                ))
              }
            </div>
            <Search />
            <div className="grid grid-rows-2 grid-flow-col gap-y-4 sm:gap-y-0 sm:flex sm:flex-row gap-x-8 justify-center mt-6 lg:flex lg:mt-0">
              {ExtraNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="flex flex-col items-center w-full text-white font-medium duration-200 hover:text-red-custom"
                  onClick={item.label === 'Ubicacion' ? handleUbicacionClick : undefined}
                >
                  {item.label === 'Carrito' && cart.length > 0 ? (
                    <div className="relative">
                      <div className="bg-white rounded-full p-2">
                        {item.icon}
                      </div>
                      <span className="text-xs absolute top-[-6px] right-[-9px] bg-red-custom text-white rounded-full px-2 w-5 h-5 items-center flex justify-center">
                        {cart.length}
                      </span>
                    </div>
                  ) : (
                    <>
                      {item.label === 'Agenda tu cita' ? (
                        <div className="bg-white px-4 py-1 flex gap-2 rounded-lg items-center">
                          <div>
                            {item.icon}
                          </div>
                          <span className="text-xs mt-1 text-blue-custom font-bold">{item.label}</span>
                        </div>
                      ) : (
                        <>
                          {item.icon}
                          <span className="text-xs text-center">{item.label === 'Ubicacion' ? 'Estás en '+cookies.OriginCity as string : item.label}</span>
                        </>
                      )}
                    </>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onContinue={(selectedCity) => {
      // Lógica que deseas ejecutar al continuar en el modal
        console.log(`Seleccionaste la ciudad: ${selectedCity}`)
      }} />
    </nav>
  )
}
