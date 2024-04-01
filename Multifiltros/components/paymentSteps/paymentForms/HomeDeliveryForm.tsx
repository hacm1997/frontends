import React, { useEffect, useState } from 'react'
import { shipping } from '../PaymentSteps'
import { CITIES } from '../../../data/select'

export const HomeDeliveryForm = (homeDelivery: shipping) => {
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    homeDelivery.setDpto({
      city: selectedCity as string
    })
  }, [selectedCity])

  return (
    <div className='mt-10 max-w-[800px] border-[1px] rounded-lg pt-10 pb-16 px-10 sm:px-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-shrink-0 w-full'>
      <form onSubmit={homeDelivery.prevEvent}>
        <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-8'>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
          Nombre
            <input
              className='border-[1px] rounded-lg p-2 border-[#353535]' 
              type="text"
              name='name'
              required 
              onChange={homeDelivery.onChange} 
              value={homeDelivery.homeDelivery?.name}
            />
          </label>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
          Apellido
            <input
              className='border-[1px] rounded-lg p-2 border-[#353535]' 
              type="text"
              name='lastName'
              required
              onChange={homeDelivery.onChange} value={homeDelivery.homeDelivery?.lastName} 
            />
          </label>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Tipo de documento
            <select 
              className='text-[#3F3E41] text-lg not-italic font-semibold border-[1px] rounded-lg p-2 border-[#353535]'
              name='documentType'
              onChange={homeDelivery.onChangeSelect}
              value={homeDelivery.homeDelivery?.documentType}
            >
              <option> - </option>
              <option> Cedula de ciudadanía </option>
              <option> Cedula extranjera </option>
              <option> RUT </option>
            </select>
          </label>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
            Identificación
            <input
              className='border-[1px] rounded-lg p-2 border-[#353535]' 
              type="number"
              name='id'
              required 
              onChange={homeDelivery.onChange} 
              value={homeDelivery.homeDelivery?.id === null || Number(homeDelivery.homeDelivery?.id) === 0 ? '' : Number(homeDelivery.homeDelivery?.id)}
            />
          </label>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
            Correo
            <input
              className='border-[1px] rounded-lg p-2 border-[#353535]' 
              type="email"
              name='email'
              required 
              onChange={homeDelivery.onChange} value={homeDelivery.homeDelivery?.email}
            />
          </label>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
            Telefono
            <input
              className='border-[1px] rounded-lg p-2 border-[#353535]' 
              type="number"
              name='phone'
              required 
              onChange={homeDelivery.onChange} 
              value={homeDelivery.homeDelivery?.phone === null || Number(homeDelivery.homeDelivery?.phone) === 0 ? '' : Number(homeDelivery.homeDelivery?.phone)}
            />
          </label>

          <div className='flex flex-col'>
            <label
              className='self-start mb-2 text-blue-custom text-base not-italic font-semibold'
            >
                Ciudad
            </label>           
            <select
              value={selectedCity}
              name='city'
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-2 py-4 bg-[#FAFAFC] mb-4 w-[85%]"
            >
              <option value="">Seleccionar Ciudad</option>
              {
                CITIES.map((item) => (
                  <option value={item.label.toLowerCase()} key={item.id}>
                    {item.label}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='mt-8'>
          <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
            Dirección
            <textarea
              className='border-[1px] border-[#3F3E41] rounded-lg p-4'
              name='address'
              onChange={homeDelivery.onTextAreaChange}
              value={homeDelivery.homeDelivery?.address}
            />
          </label>
        </div>
      </form>
    </div>
  )
}
