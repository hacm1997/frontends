import React, { useState } from 'react'
import styles from './pricing.module.css'
import FormWspComponent from './modals/formWsp.component'
import { formatNumber } from '../../../../utils/formatNumberCop'

export interface PlanInterface {
 id: string
 name: string
 price: string
 priceYear: string
 priceMonth: string
 features: string[]
}

interface Props {
  planes?: PlanInterface[]
}

// const planes = [
//   {
//     id:'1',
//     name:'PLAN E-COMMERCE FULL',
//     price:'499000',
//     priceYear: '4999900',
//     priceMonth:'499000',
//     features:[
//     ]
//   },
//   {
//     id:'2',
//     name:'PLAN ALTO IMPACTO',
//     price:'299000',
//     priceYear: '2999900',
//     priceMonth:'299000',
//     features:[
//     ]
//   },
//   {
//     id:'3',
//     name:'PLAN DESPEGUE',
//     price:'199000',
//     priceYear: '1999900',
//     priceMonth:'199000',   
//     features:[
     
//     ]
//   }
// ]
const Pricing = ({planes}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [infoModal, setInfoModal] = useState<PlanInterface>({
    id:'',
    name:'',
    price:'',
    priceYear: '',
    priceMonth:'',
    features:[]
  })

  const handlerPlanModal = (id: string) => {
    const dataFilter = planes.filter((item: PlanInterface) => item.id === id)
    setInfoModal(dataFilter[0])
    setIsOpen(true)
  }

  return (
    <>
      <main className={`${styles.main} ${styles.flow}`}>
        <h2 className={styles.titleFooter} id="prices">Navega hacia una inversión rentable</h2>
        <div className={`${styles.main__cards} ${styles.cards}`}>
          <div className={styles.cards__inner}>
            {planes.map(({id,name,priceYear})=>(
              <div key={id} className={`${styles.cardOverflow} ${styles.cards__card}`}>
                <div className={styles.title}>
                  <h2 className={styles.card__heading}>{name}</h2>
                  <p className={styles.card__price}>{formatNumber(Number(priceYear))} x mes</p>
                  {/* <p>o {formatNumber(Number(priceYear))} (Anual)</p> */}
                </div>
                <div className='h-[300px]'>

                </div>
                <div className={styles.boton}>
                  <div className={styles.containerIcons}>
                    <button className={styles.btn} onClick={() => handlerPlanModal(id)}>
                      <a href="#prices" title="pricing">Comprar ahora</a>
                    </button> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.overlay} ${styles.cards__inner}`}></div>
        </div>
      </main>
      <FormWspComponent isOpen ={isOpen} setIsOpen={setIsOpen} infoModal={infoModal}/>
    </>
  )
}

export default Pricing
