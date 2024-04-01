import React, { useState } from 'react'
import { WhatsAppIcon } from '../../public/icons/utilsIcons/whastappIcon'

export const WhatsappButton = () => { 
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true)

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=573117601313', '_blank')
  }

  const handleWhatsAppAsesor = () => {
    window.open('https://api.whatsapp.com/send/?phone=573004332067', '_blank')
  }
  
  const handleCloseClick = () => {
    setIsChatOpen(false)
  }
  
  return (
    <>
      {isChatOpen && (
        <div className=" fixed bottom-4 right-4 border-blue-custom bg-white p-4 rounded-md flex items-center gap-4 shadow-[0px_1px_10px_1px_#EB4648] z-10">
          <div className="mr-4 w-[1px] relative top-[-71px] left-[-16px]">
            <WhatsAppIcon />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-blue-custom text-center not-italic font-semibold mb-2">
            Envíanos un mensaje o agenda un<br/> servicio en la serviteca
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-red-custom text-white px-4 py-1 rounded-md hover:bg-blue-custom text-sm font-bold mr-4"
            >
            Agenda tu servicio
            </button>
            <button
              onClick={handleWhatsAppAsesor}
              className="bg-blue-custom text-white px-4 py-1 rounded-md hover:bg-red-custom text-sm font-bold mr-4"
            >
            Habla con un asesor
            </button>
          </div>
          <div className='absolute left-[123px] top-[-85px]'>
            <div className='rounded-full bg-gradient-to-b from-[#040F61] to-[#EB4648] p-1'>
              <img
                className="w-24 rounded-full"
                src="/images/whatsapp-image.png"
                alt="Asesor"
                width={40}
                height={40}
              />
            </div>
          </div>
          <button
            onClick={handleCloseClick}
            className="ml-2 w-8 h-8 text-white rounded-full bg-blue-custom absolute top-[-17px] right-[-14px]"
          >
            X
          </button>
        
        </div>
      )}

      
    </>
  )
}
