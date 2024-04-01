import { User } from 'iconoir-react'
import React from 'react'
import { changeStep } from '../Schedule'
import { Select } from '../../Select'
import { TYPEID } from '../../../../data/select'

export const ThirdForm = (currentStep: changeStep) => {
  return (
    <div className='rounded-lg px-8 pt-10 pb-6 max-w-[600px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <label 
        htmlFor=""
        className='text-blue-custom text-xl sm:text-2xl not-italic font-semibold flex gap-4 items-center'
      >
        <User className='text-red-custom'/>
          Ingresa tus datos personales
      </label>
      <p
        className='text-[#353535] text-base sm:text-lg not-italic font-normal mt-6'
      >
          Déjanos tus datos personales para comunicarnos contigo en el menor tiempo posible y brindarte una mejor experiencia de servicio.
      </p>
      <form className='flex flex-col'>
        <label 
          htmlFor=""
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Nombre
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          type="text" 
          name='name'
          onChange={currentStep.onChange}
          value={currentStep.dataStepThree?.name}
          required
        />
        <label 
          htmlFor=""
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Apellido
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          type="text" 
          name='lastName'
          onChange={currentStep.onChange} 
          value={currentStep.dataStepThree?.lastName}
          required
        />
        <Select clasName='mt-6 mb-2' label='Tipo de indentificacion' name='typeId' onChange={currentStep.onChangeSelect} options={TYPEID}/>
        <p className='text-red-custom mb-4'>{currentStep.dataStepThree?.typeId ? `Seleccionado: ${currentStep.dataStepThree?.typeId}` : null}</p>
        <label 
          htmlFor=""
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Numero de identificación
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          type="number" 
          name='id'
          onChange={currentStep.onChange}
          value={currentStep.dataStepThree?.id === null || Number(currentStep.dataStepThree?.id) === 0 ? '' : Number(currentStep.dataStepThree?.id)}
          required
        />
        <label 
          htmlFor=""
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Teléfono de contacto
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          type="number" 
          name='phone'
          onChange={currentStep.onChange} 
          value={currentStep.dataStepThree?.phone === null || Number(currentStep.dataStepThree?.phone) === 0 ? '' : Number(currentStep.dataStepThree?.phone)}
          required
          maxLength={10}
        />
        <label 
          htmlFor=""
          className='text-blue-custom text-sm font-bold ml-2 mt-4'
        >
            Correo electrónico
        </label>
        <input 
          className='block w-full rounded bg-[#F2F4FE] text-blue-custom sm:text-sm py-2 px-2'
          type="email" 
          name='email'
          onChange={currentStep.onChange}
          value={currentStep.dataStepThree?.email}
          required
        />
        <div className='flex gap-1 mt-10'>
          <button
            onClick={() => currentStep.backStep()} 
            className='border-[1px] rounded-lg w-full text-xl py-2 text-[#696969] border-blue-custom hover:bg-blue-custom hover:text-white'>Atrás</button>
          <button
            onClick={() => currentStep.handlerStep()} 
            className='border-[1px] rounded-lg w-full text-xl py-2 text-white bg-blue-custom hover:bg-red-custom'>Continuar</button>
        </div>
      </form>
    </div>
  )
}
