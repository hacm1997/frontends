import React, { useEffect, useState } from 'react'

export const CookiesNotice = () => {
  const [showNotice, setShowNotice] = useState(true)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies')
  
    if (hasAcceptedCookies === 'false') {
      setShowNotice(true)
    } else if (hasAcceptedCookies === 'true') {
      setShowNotice(false)
    }
  }, [])
  const handleAcceptCookie = () => {
    localStorage.setItem('acceptedCookies', 'true')
    setShowNotice(false)
  }

  const handleRejectCookie = () => {
    localStorage.setItem('acceptedCookies', 'false')
    setShowNotice(false)
  }

  return (
    <>
      {showNotice && (
        <div className='fixed bottom-4 left-4 z-10'>
          <div className='p-4 bg-blue-custom max-w-[400px] mx-4'>
            <p className='text-white font-medium'>
              Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios.{' '}
              <a href='#' className='underline'>
                Leer más información
              </a>
            </p>
            <div className='flex flex-col justify-center gap-8 mt-4'>
              <button onClick={handleAcceptCookie} className='text-black bg-white hover:text-white hover:bg-red-custom border-[1px] p-1'>
                Aceptar todas las cookies
              </button>
              <button onClick={handleRejectCookie} className='text-black bg-white hover:text-white hover:bg-red-custom border-[1px] p-1'>
                Rechazar todas las cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

