
interface stepProps {
  stepNumber: number
}
export const Steps = (step: stepProps) => {
  const notActive = 'flex justify-center items-center border-[1px] border-blue-custom rounded-full w-10 h-10 text-blue-custom text-2xl not-italic font-bold text-blue-custom'
  const styleActive = 'flex justify-center items-center border-[1px] border-blue-custom rounded-full w-10 h-10 text-blue-custom text-2xl not-italic font-bold text-white bg-blue-custom'
  const activeCard = ' bg-red-custom rounded-lg w-[85%] py-2 text-center text-white text-base sm:text-lg not-italic font-semibold px-2'
  const notActiveCard = 'border-[1px] border-blue-custom rounded-lg w-[85%] py-2 text-center text-blue-custom text-base sm:text-lg px-2 not-italic font-semibold'

  return (
  
    <div className="rounded-lg px-8 pt-10 pb-6 max-w-[700px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <p className="text-blue-custom text-xl sm:text-2xl not-italic font-bold text-center">
          Pasos para agendar una cita
      </p>
      <div className='flex flex-col gap-6 mt-8 mb-4'>
        <div className="flex gap-4 items-center">
          <label
            className={ step.stepNumber === 1 ? styleActive : notActive}
            htmlFor=""
          >
              1
          </label>
          <label
            className={step.stepNumber === 1 ? activeCard : notActiveCard}
            htmlFor=""
          >
              Selecciona tus servicios
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <label
            className={ step.stepNumber === 2 ? styleActive : notActive}
            htmlFor=""
          >
              2
          </label>
          <label
            className={step.stepNumber === 2 ? activeCard : notActiveCard}
            htmlFor=""
          >
              Confirma los datos del vehículo
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <label
            className={ step.stepNumber === 3 ? styleActive : notActive}
            htmlFor=""
          >
              3
          </label>
          <label
            className={step.stepNumber === 3 ? activeCard : notActiveCard}
            htmlFor=""
          >
              Ingresa tus datos personales
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <label
            className={ step.stepNumber === 4 ? styleActive : notActive}
            htmlFor=""
          >
              4
          </label>
          <label
            className={step.stepNumber === 4 ? activeCard : notActiveCard}
            htmlFor=""
          >
              Agenda una cita
          </label>
        </div>
      </div>
    </div>
  )
}
