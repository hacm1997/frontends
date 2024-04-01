import { useState } from 'react'
import styles from './formWsp.module.css'
import Modal from 'react-modal'
import EpaycoCheckout from '../../../../../services/epaycoCheckout'


export default function FormWspComponent(props: any) {
  const [timePlan, setTimePlan]  = useState<Boolean>(false)
  const [timePlan2, setTimePlan2]  = useState<string>('Mensual')
  const handleClose = () =>{
    props.setIsOpen(false)
    document.body.style.overflow = 'unset'
    setTimePlan2('Mensual')
  }
  const handleChangePlan = (e: any) =>{
    if(e.target.value === 'Mensual') {
      setTimePlan(false)
      setTimePlan2('Mensual')
    }
    if(e.target.value === 'Anual') {
      setTimePlan(true)
      setTimePlan2('Anual')
    }
  }
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={handleClose}
        className={styles.modal}
      >
        <div className={styles.contentModal}>
          <a onClick={handleClose} title='Cerrar'><i className='bx bx-x'></i></a>
          <h2>{props.infoModal.name}</h2>
          <div className={styles.formContent}>
            <div className='flex w-full justify-around items-start'>
              {                            
                !timePlan 
                  ? <h3>$ {new Intl.NumberFormat().format(Number(props.infoModal.priceMonth))}  COP</h3>
                  : <h3>$ {new Intl.NumberFormat().format(Number(props.infoModal.priceYear))}  COP</h3>
              }
              <select name="Selectplan" onChange={handleChangePlan}  id={props.infoModal.id} className='w-[190px] h-[50px] text-[#FB8501] bg-none'>
                <option value="Mensual" className='text-[#FB8501]'>Mensual</option>
                <option value="Anual" className='text-[#FB8501]'>Anual</option>    
              </select>
            </div>
            <div className={styles.feature}>
              <ul>
                {props.infoModal.features?.map((feature: any) => (
                  <li key={feature}> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.botonEpayco}>
            {
              timePlan2 === 'Mensual' 
                ? <EpaycoCheckout  amount={props.infoModal.priceMonth} name={props.infoModal.name} />
                : <EpaycoCheckout amount={props.infoModal.priceYear} name={props.infoModal.name} />
            }
          </div>
        </div>
                
      </Modal>
            
    </>
  )
}