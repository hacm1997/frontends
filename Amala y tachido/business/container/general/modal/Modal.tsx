import { useState } from 'react'
import { SEDES } from '../../../../data/locations'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSwitchModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {
        isOpen
          ?
          <i
            className='bx bx-x bx-lg bx-border-circle'
            onClick={handleSwitchModal}
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              position: 'fixed',
              borderColor: 'white',
              cursor: 'pointer',
              zIndex: 99,
              right: 32,
              bottom: 32
            }}
          />
          :
          <i
            className='bx bxl-whatsapp bx-lg bx-tada-hover bx-border-circle'
            onClick={handleSwitchModal}
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              position: 'fixed',
              borderColor: 'white',
              cursor: 'pointer',
              zIndex: 99,
              right: 32,
              bottom: 32
            }}
          />
      }
      {
        isOpen && (
          <motion.div
            initial={{
              y: 30,
              opacity: 0
            }}
            animate={{
              y: -10,
              opacity: 1
            }}
            exit={{
              y: 30,
              opacity: 0
            }}
            className={styles.wrapper}
            onClick={handleSwitchModal}
          >
            <div className={styles.modal_body}>
              <h2>¡Hola! Selecciona tu sede más cercana</h2>
              {
                SEDES.map((sede: any) => (
                  <a key={sede.id} href={sede.href} target='_blank'>
                    {sede.label}
                  </a>
                ))
              }
            </div>
          </motion.div>
        )
      }
    </div>
  )
}

export default Modal