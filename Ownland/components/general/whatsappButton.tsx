import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const WhatsappButton = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=573155514590', '_blank')
  }

  return (
    <div>
      <button aria-label="whatsapp" title='whatsapp'
        className="fixed bottom-4 right-4 bg-[#C1F20F] p-2 rounded-full shadow-md z-50 w-14 h-14 lg:hover:scale-125 transform transition"
        onClick={openWhatsApp}
      >
        <AiOutlineWhatsApp className='w-10 h-10 text-[#041D33]' />
      </button>
    </div>
  )
}
