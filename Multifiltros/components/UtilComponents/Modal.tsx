/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BoxIcon } from '../../public/icons/utilsIcons/boxIcon'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Select } from './Select'
import { CITIES } from '../../data/select'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (selectedCity: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onContinue }) => {
  const [cookies, setCookie] = useCookies()
  const [selectedCity, setSelectedCity] = useState('')
  const city: any[] = []

  const handleContinueClick = () => {
    onContinue(selectedCity)
    onClose()
    setCookie('OriginCity', selectedCity, {path: '/'})
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-[500px] mx-2 sm:mx-0">
            {/* <div className='flex justify-end'>
              <button
                className="px-4 py-2 mr-2 rounded text-4xl"
                onClick={onClose}
              >
                ×
              </button>
            </div> */}
            <div>
              <div className='flex justify-center'>
                <BoxIcon/>
              </div>
              <p
                className='text-blue-custom text-xl not-italic font-semibold text-center mt-4'
              >
                En qué ciudad te ubicas
              </p>
              <p
                className='text-[##353535] text-sm not-italic font-normal text-center'
              >
              Cuéntanos dónde estás ubicado para que puedas recibir tus productos.
              </p>
            </div>
            <div className='mt-4 mb-8 flex flex-col justify-center items-center'>
              <Select onChange={(e) => setSelectedCity(e.target.value)} name='city' label='Selecciona tu ciudad' options={CITIES}/>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-red-custom text-white px-4 py-2 rounded-lg text-base not-italic font-bold"
                onClick={handleContinueClick}
              >
                Guardar ubicación
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
