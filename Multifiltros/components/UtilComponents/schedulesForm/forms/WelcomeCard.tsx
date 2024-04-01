import React from 'react'

interface WelcomeCardProps {
  onContinue: () => void;
  onGoBack: () => void;
}

export const WelcomeCard = ({onContinue, onGoBack}: WelcomeCardProps) => {
  return (
    <div className='w-full mt-10'>
      <div className='mx-auto max-w-[1000px] py-10 px-6 rounded-lg border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <p className='text-blue-custom text-3xl not-italic font-bold text-center'>Bienvenidos a la serviteca de Multifiltro</p>
        <div className='bg-[#F2F4FE] text-center font-medium text-[#353535] not-italic text-xl pt-4 pb-8 px-10 rounded-lg mt-4'>
          <p className='font-bold'>¡Reserva tu cita en Serviteca hoy mismo!</p>

          <p className='mt-8'>
            Descubre nuestros servicios de mecánica rápida, mecánica general, anticorrosivo, sincronización y escáner, mantenimiento de frenos, 
            cambio de aceite y lubricación, alineación, balanceo, montaje y nitrógeno de planta disponibles en <span className='text-red-custom font-bold'>Cartagena y Barranquilla.</span>
          </p>

          <p className='mt-8'>
          Agenda tu visita seleccionando <span className='text-red-custom font-bold'>Continuar</span> y asegura el cuidado óptimo de tu vehículo con nosotros. <span className='text-red-custom font-bold'>¡Esperamos atenderte pronto!</span>
          </p>
        </div>
        <div className='flex flex-col sm:flex sm:flex-row items-center justify-center gap-6 mt-10'>
          <button onClick={onGoBack} className='border-[1px] rounded-lg w-[80%] sm:w-[30%] text-xl py-2 text-[#696969] border-blue-custom hover:bg-blue-custom hover:text-white'>Volver al inicio</button>
          <button onClick={onContinue} className='border-[1px] rounded-lg w-[80%] sm:w-[30%] text-xl py-2 text-white bg-red-custom hover:bg-blue-custom'>Continuar</button>
        </div>
      </div>
    </div>
  )
}
