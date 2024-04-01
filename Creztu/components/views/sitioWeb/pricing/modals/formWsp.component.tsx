// import { useState } from 'react'
import styles from './formWsp.module.css'
import EpaycoCheckout from '../../../../../services/epaycoCheckout'
import { XmarkCircle } from 'iconoir-react'
import { formatNumber } from '../../../../../utils/formatNumberCop'

export default function FormWspComponent(props: any) {
  // const [timePlan, setTimePlan] = useState<Boolean>(false)
  // const [timePlan2, setTimePlan2] = useState<string>('Mensual')
  let priceTotal = ''
  const handleClose = () => {
    props.setIsOpen(false)
    document.body.style.overflow = 'unset'
    //setTimePlan(false)
    //setTimePlan2('Mensual')
  }
  // const handleChangePlan = (e: any) => {
  //   if (e.target.value === 'Mensual') {
  //     setTimePlan(false)
  //     setTimePlan2('Mensual')
  //   }
  //   if (e.target.value === 'Anual') {
  //     setTimePlan(true)
  //     setTimePlan2('Anual')
  //   }
  // }
  if (!props.isOpen) return null
  return (
    <>
      <div
        className={`${styles.modal} fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
      >
        <div className={styles.contentModal}>
          <div className='flex justify-end mr-8 text-xl text-regal-orange'>
            <a className='cursor-pointer' onClick={handleClose} title="Cerrar">
              <XmarkCircle/>
            </a>
          </div>
          <h2>{props.infoModal.name}</h2>
          <div className={styles.formContent}>
            <div className="flex w-full justify-around items-start">
              <p className='text-regal-orange text-2xl font-bold'>
                {' '}
                {formatNumber(
                  Number(props.infoModal.priceYear)
                )}{' '}
                  COP
              </p>
              {/*!timePlan ? (
                <p className='text-regal-orange text-2xl font-bold'>
                  {' '}
                  {formatNumber(
                    Number(props.infoModal.priceMonth)
                  )}{' '}
                  COP
                </p>
              ) : (
                <p className='text-regal-orange text-2xl font-bold'>
                  {' '}
                  {formatNumber(
                    Number(props.infoModal.priceYear)
                  )}{' '}
                  COP
                </p>
                  )*/}
              {/* <select
                name="Selectplan"
                onChange={handleChangePlan}
                id={props.infoModal.id}
                className="w-[190px] h-[50px] text-[#FB8501] bg-none"
              >
                <option value="Mensual" className="text-[#FB8501]">
                  Mensual
                </option>
                <option value="Anual" className="text-[#FB8501]">
                  Anual
                </option>
              </select> */}
            </div>
            <div className={styles.feature}>
              <ul>
                {props.infoModal.features?.map((feature: any) => (
                  <li key={feature}> {feature}</li>
                ))}
              </ul>
            </div>
            {priceTotal}
          </div>
          <div className={styles.botonEpayco}>
            <EpaycoCheckout
              amount={props.infoModal.priceYear}
              name={props.infoModal.name}
            />
            {/*timePlan2 === 'Mensual' ? (
              <EpaycoCheckout
                amount={props.infoModal.priceMonth}
                name={props.infoModal.name}
              />
            ) : (
              <EpaycoCheckout
                amount={props.infoModal.priceYear}
                name={props.infoModal.name}
              />
            )*/}
          </div>
        </div>
      </div>
    </>
  )
}
