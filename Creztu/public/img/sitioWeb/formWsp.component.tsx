import { useState } from 'react';
import styles from './formWsp.module.css';
import Modal from 'react-modal'
import Tilt from "react-parallax-tilt";

export default function FormWspComponent(props: any) {
    const handleClose = () => {
        props.setIsOpen(false)
        document.body.style.overflow = 'unset';
    };
    const dataModal = [
        {
            title: 'Experiencia',
            description: 'Más que una tienda, una EXPERIENCIA visual. Llegó el pináculo del DISEÑO de e-commerce en Latinoamérica.',
            img: '/images/e-commerce/modal-2.webp',
            imgMobil: '/images/e-commerce/modal-2Movile.webp'
          },
        {
          title: 'Conversión',
          description: 'Cada detalle, cada gráfico, es una obra maestra destinada a convertir visitantes en clientes leales.',
          img: '/images/e-commerce/modal-1.webp',
          imgMobil: '/images/e-commerce/modal-1Movile.webp'
        }
        ]
      
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={handleClose}
                className={styles.modal}
            >
                <div className={styles.contentModal}>
                <a onClick={handleClose} title='Cerrar'><i className='bx bx-x'></i></a>
                {
                    dataModal.map((item ,index)=>(
                    <div key={index}>
                        <h1 className={styles.titulo +' text-3xl md:text-7xl font-bold pl-5 md:pl-10 pt-5'}>{item.title}</h1>
                        <p className='text-lg md:text-2xl font-bold pl-5 md:pl-10 pt-5 w-[90%] md:w-[692px] xl:w-[475px]'>{item.description}</p>
                        <img src={item.img} alt={item.title} title={item.title} className='hidden md:block mt-[-100px] pb-10' />
                        <img src={item.imgMobil} alt={item.title} title={item.title} className='block md:hidden pb-10' />
                        {
                            index === 0 ? <hr className='flex mx-auto font-bold text-[20px] w-[95%]' /> : ''
                        }
                    </div>                   
                    ))
                }
                </div>
                
            </Modal>
        </>
    )
}