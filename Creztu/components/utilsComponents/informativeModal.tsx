import { XmarkCircle } from 'iconoir-react'
import React, { ReactNode } from 'react'
import { ModalInterface } from './webSite.component'
import styles from './informativeModal.module.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  images: string[];
  children?: ReactNode;
  informativeModal?: ModalInterface
}

export const InformativeModal = ({isOpen, onClose, informativeModal}: ModalProps) => {
  if (!isOpen) return null
  return (
    <div
      className={`${styles.modal} fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
    >
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/* Contenido del modal */}
        <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none focus:outline-none bg-[#FEF8F5] h-[500px] lg:h-[650px] overflow-y-auto scrollBar">
          {/* Cabecera del modal */}
          <div className="flex items-start justify-between p-5 rounded-t">
            <h3 className="text-3xl font-semibold text-regal-orange">{informativeModal.title1}</h3>
            <button
              className="text-regal-orange background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={onClose}
            >
              <XmarkCircle className='text-xl'/>
            </button>
          </div>
          {/* Cuerpo del modal */}
          <div className="relative p-6 flex-auto">
            <div className='flex gap-8'>
              {informativeModal.description1}
              <img src={informativeModal.icon1} alt='carrito' className='hidden sm:block'/>
            </div>
            {/* Puedes agregar aquí lógica para mostrar imágenes según tu necesidad */}
            <img src={informativeModal.image1} alt='imge-1' className='hidden sm:block'/>
            <img src={informativeModal.image1Movil} alt='imge-1' className='sm:hidden'/>
            <hr/>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="text-3xl font-semibold text-regal-orange">
              {informativeModal.title2}
            </p>
            <div className='flex gap-8'>
              {informativeModal.description2}
              <img src={informativeModal.icon2} alt='bolsas' className='hidden sm:block'/>
            </div>
            {/* Puedes agregar aquí lógica para mostrar imágenes según tu necesidad */}
            <img src={informativeModal.image2} alt='imge-1' className='hidden sm:block'/>
            <img src={informativeModal.image2Movil} alt='imge-1' className='sm:hidden'/>
          </div>
          {/* Pie del modal */}
          
        </div>
      </div>
    </div>
  )
}
