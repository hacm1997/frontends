import { NavArrowLeft, PinAlt } from 'iconoir-react'
import React, { useState } from 'react'
import { Select } from '../../Select'
import { CITY } from '../../../../data/select'
import { changeStep } from '../Schedule'

const cities = [
  {
    name: 'Cartagena',
    address: [
      {
        id: 1,
        adress: 'Transversal 54 # 21J-119 9 Barrio El Bosque.'
      },
      {
        id: 2,
        adress: 'Transversal 54 #21E-06 Barrio Bosque.'
      }
    ]
  },
  {
    name: 'Barranquilla',
    address: [
      {
        id: 1,
        adress: 'Calle 42 #23 - 08 Esquina. Barrio Montes'
      },
      {
        id: 2,
        adress: 'Carrera 41 #57-25 Barrio El Recreo'
      },
      {
        id: 3,
        adress: 'Calle 44 #21-33 Barrio San José'
      }
    ]
  }
]

export const FouthForm = (currentStep: changeStep) => {
  const [city, setCity] = useState('')
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const handlerCity = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    setCity(value)
    setSelectedAddress('')
  }

  const getData = (city: string, address: string) => {
    if (currentStep.setDataStepFour) {
      currentStep.setDataStepFour({
        city: city,
        address: address,
      })
    }
  }

  const handleCheckboxChange = (address: string) => {
    setSelectedAddress(address)
    getData(city, address)
  }

  return (
    <div className='rounded-lg px-8 pt-10 pb-6 max-w-[600px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div>
        <button
          onClick={() => currentStep.backStep()} 
          className='flex gap-2 items-center hover:underline text-blue-custom text-xl not-italic font-semibold'
        >
          <NavArrowLeft className='text-white bg-red-custom rounded-full'/> Volver
        </button>
      </div>
      <div className='bg-blue-custom max-w-[100px] rounded-lg mx-auto'>
        <img src='/icons/logo.webp' alt='Logo-multifiltros'/>
      </div>
      <p className='text-blue-custom text-xl not-italic font-semibold text-center mt-6'>Lleva tu carro a la sucursal Multifiltro mas cercana </p>
      <p className='text-[#353535] text-base not-italic font-normal mt-2'>Programa tu cita y lleva tu automóvil a la sucursal seleccionada por ti </p>
      <form onSubmit={currentStep.handleSubmit}>
        <Select label=' Elige tu ciudad' name='ciudades' options={CITY} required={true} onChange={handlerCity} />
        <div className='pt-8 grid grid-rows-2 grid-flow-col items-center justify-center gap-8'>
          {cities.filter((item) => item.name === city).map((item) => {
            return item.address.map((it, index) => (
              <div className='max-w-[300px] pb-2 px-6 rounded-lg border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' key={index}>
                <input
                  className='accent-red-custom relative top-[4px] left-[-16px]'
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => handleCheckboxChange(it.adress)}
                  checked={selectedAddress === it.adress}
                  onChange={() => {}}
                />
                <p className='text-blue-custom text-lg not-italic font-bold'>{item.name} serviteca</p>
                <p className='flex text-[#353535] text-base not-italic font-normal gap-1'>
                  <PinAlt className=' text-red-custom' />{it.adress}
                </p>
              </div>
            ))
          })}
        </div>
        <div className='flex justify-center mt-10'>
          <button
            className='border-[1px]  rounded-lg w-[50%] text-xl py-2 text-white bg-red-custom hover:bg-blue-custom'>Agendar
          </button>
        </div>
      </form>
    </div>
  )
}
