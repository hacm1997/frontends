import React from 'react'
interface InformativeModalProps {
  showModal: boolean
  closeModal: () => void
}

export const InformativeModal = ({showModal, closeModal}:InformativeModalProps) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
            focus:outline-none mx-4 lg:mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Cita agendada exitosamente
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-[#F2F4FE] mx-4 rounded-xl my-4">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Su cita a sido agendada de manera exitosa, el equipo de multifiltros se pondrá en contacto con usted via
                    email con los detalles de la cita
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none 
                    mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-custom hover:text-white rounded-lg"
                    type="button"
                    onClick={() => {closeModal; window.location.reload()}}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
