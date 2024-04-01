import React, { useEffect, useState } from 'react'
import { StoreIcon } from '../../../public/icons/utilsIcons/storeIcon'
import { PinAlt, WarningTriangle } from 'iconoir-react'
import { useCookies } from 'react-cookie'
import { shipping } from '../PaymentSteps'

interface Store {
  id: number;
  name: string;
  address: string;
}

const CARTAGENASQURE: Store[] = [
  {
    id: 1,
    name: 'Multifiltros Cartagena Principal',
    address: 'Transversal 54 # 21J-119 9 Barrio El Bosque.',
  },
  {
    id: 2,
    name: 'Multifiltros Cartagena Serviteca',
    address: 'Transversal 54 #21E-06 Barrio Bosque.'
  }
]

const BARRANQUILLASQUARE: Store[] = [
  {
    id: 1,
    name: 'Multifiltros Barranquilla',
    address: 'Calle 42 #23 - 08 Esquina. Barrio Montes'
  },
  {
    id: 2,
    name : 'Multifiltros Barranquilla la 41',
    address : 'Carrera 41 #57-25 Barrio El Recreo'
  },
  {
    id: 3,
    name: 'Multifiltros Barranquilla la 21',
    address: 'Calle 44 #21-33 Barrio San José'
  }
]

export const StorePickupForm = (storePickup: shipping) => {
  const [cookies] = useCookies(['OriginCity'])
  const [selectedStore, setSelectedStore] = useState<number | null>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const storesToMap = cookies.OriginCity === 'Cartagena' ? CARTAGENASQURE : BARRANQUILLASQUARE

  const handleStoreSelection = (storeId: number) => {
    setSelectedStore(storeId)
    // Obtener el objeto de la tienda seleccionada
    const selectedStoreObj = storesToMap.find((store) => store.id === storeId)
    // Actualizar storePickup.campus con el nombre de la tienda seleccionada
    if (selectedStoreObj) {
      const event = {
        target: {
          name: 'campus',
          value: selectedStoreObj.name,
        },
      }
      if (storePickup.onChange && typeof storePickup.onChange === 'function') {
        storePickup.onChange(event as React.ChangeEvent<HTMLInputElement>)
      }
    }
  }

  useEffect(() => {
    // Al cambiar de ciudad, desmarcar la tienda seleccionada
    setSelectedStore(null)
  }, [cookies.OriginCity])

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    if (storePickup && typeof storePickup.onWhoPicksChange === 'function') {
      storePickup.onWhoPicksChange(option)
    }
  }

  
  
  return (
    <div className='w-full'>
      <div className='max-w-[900px] mx-auto'>
        <div className='mt-10 border-[1px] rounded-lg pt-10 pb-16 px-10 sm:px-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-shrink-0 w-full'>
          <form onSubmit={storePickup.prevEvent}>
            <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-8'>
              {storesToMap.map((item) => (
                <div key={item.id}>
                  <label
                    className='text-blue-custom text-lg not-italic font-bold flex items-center gap-2'
                  >
                    <StoreIcon width={24} />
                    <input
                      type='radio'
                      name='campus'
                      id={`storeSelection_${item.id}`}
                      checked={selectedStore === item.id}
                      onChange={() => handleStoreSelection(item.id)}
                    />
                    {item.name}
                  </label>
                  <label
                    className='text-[#353535] text-base not-italic font-normal flex items-center gap-2'
                  >
                    <PinAlt className='text-red-custom' />
                    {item.address}
                  </label>
                </div>
              ))}
            </div>
            <div className='mt-8'>
              <p
                className='text-blue-custom text-lg not-italic font-bold'
              >
                  ¿Quién retirara el perdido?
              </p>
              <div className='mt-4 gap-4 flex flex-col base:flex base:flex-row'>
                <button
                  type="button"
                  className={`py-2 px-4 border-[1px] border-blue-custom rounded-full focus:outline-none text-base not-italic font-medium ${
                    selectedOption === 'yo retiraré' ? 'bg-blue-custom text-white' : 'bg-white text-blue-custom'
                  }`}
                  onClick={() => handleOptionClick('yo retiraré')}
                >
                  Yo retiraré
                </button>

                <button
                  type="button"
                  className={`py-2 px-4 border-[1px] border-blue-custom rounded-full focus:outline-none text-base not-italic font-medium ${
                    selectedOption === 'otraPersona' ? 'bg-blue-custom text-white' : 'bg-white text-blue-custom'
                  }`}
                  onClick={() => handleOptionClick('otraPersona')}
                >
                  Otra persona
                </button>
              </div>
              <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 mt-8'>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Nombre
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    name='name'
                    type="text"
                    required 
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.name}
                  />
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Apellido
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    name='lastName'
                    type="text"
                    required 
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.lastName}
                  />
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Tipo de documento
                  <select 
                    className='text-[#3F3E41] text-lg not-italic font-semibold border-[1px] rounded-lg p-2 border-[#353535]'
                    name='documentType'
                    onChange={storePickup.onChangeSelect}
                    value={storePickup.storePickup?.documentType}
                  >
                    <option> - </option>
                    <option> Cedula de ciudadanía </option>
                    <option> Cedula extranjera </option>
                    <option> RUT </option>
                  </select>
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                N° de documento
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    type="number"
                    name='id'
                    required
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.id === null || Number(storePickup.storePickup?.id) === 0 ? '' : Number(storePickup.storePickup?.id)}
                  />
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                Teléfono de contacto
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    type="number"
                    name='phone'
                    required 
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.phone === null || Number(storePickup.storePickup?.phone) === 0 ? '' : Number(storePickup.storePickup?.phone)}
                  />
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Correo
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    type="email"
                    name='email'
                    required
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.email}
                  />
                </label>
                <label className='flex flex-col text-[#3F3E41] text-lg not-italic font-semibold'>
                    Nota
                  <input
                    className='border-[1px] rounded-lg p-2 border-[#353535]' 
                    type="text"
                    name='note'
                    required
                    placeholder='Llegare tipo 3 de la tarde' 
                    onChange={storePickup.onChange}
                    value={storePickup.storePickup?.note}
                  />
                </label>
              </div>
              <label
                className='flex mt-4 bg-[#FFE7E7] px-2 py-3 gap-2'
              >
                <WarningTriangle className='text-red-custom'/> Deberás mostrar tu cedula a la hora de retirar la compra.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
