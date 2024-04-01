import { useState } from 'react'
import { Cancel } from 'iconoir-react'

export const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      {
        isVisible && (
          <div className={`flex items-center justify-center gap-4 bg-red-custom px-4 py-2 text-white 
          transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <span className="text-sm text-center font-medium flex-1">
            ¡Envío gratis en la compra de cualquier kit! Disponible para Bogotá, Medellín, Pereira, Bucaramanga, Barranquilla, Ibagué, Sincelejo, Cúcuta y Cartagena.
            </span>
            <button
              aria-label="Dismiss"
              className="rounded-md bg-black/10 p-1 transition hover:bg-black/20"
              onClick={() => setIsVisible(false)}
            >
              <Cancel color='#fecaca' className='w-5 h-5' />
            </button>
          </div>
        )
      }
    </>
  )
}
