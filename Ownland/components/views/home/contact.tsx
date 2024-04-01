import React, { useState } from 'react'
import ButtonComponent from '../../button/button'
import emailService from '../../../service/emailService'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    cel: null,
    email_send: '',
    email: 'contacto@ownlandco.com',
  })
  function handleInputChange(e:any) {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }
  const whatsapp_link = `https://api.whatsapp.com/send?phone=573155514590&text=Hola%20%F0%9F%91%8B%20soy%20${form.name.toUpperCase()}%2C%20vengo%20del%20sitio%20web%20de%20ownland%20%F0%9F%91%95%20y%20quisiera%20tener%20mas%20informaci%C3%B3n%20acerca%20de%20sus%20servicios.%0AMi%20celular%20es%20${form.cel}%20%0AMi%20correo%20es%20${form.email}`
  const openWhatsapp = (e:any) => {
    e.preventDefault()
    window.open(whatsapp_link,'_blank')
  }
  const sendMail = (e:any) => {
    e.preventDefault()
    emailService(form)
  }
  return (
    <>
      
      <section className='flex flex-col lg:flex lg:flex-row pt-16 w-full' >
      
        <div className='xl:w-[50%] flex justify-center'>
          <img className='w-[650px]' src="/images/contact/atletas.webp" alt="atletas" title='atletas'/>
        </div>

        <div className='lg:w-[50%] pt-2 text-center lg:text-start'>
          <h2 className='text-4xl mx-2 1xl:mx-0 1xl:text-6xl font-black text-[#4900FC] leading-none pt-2'>CONTÁCTANOS AHORA</h2>
          <h3 className='text-2xl mx-2 1xl:mx-0 lg:text-5xl font-black text-[#041D33] leading-none py-4 lg:pr-8'>Es momento que decidas por ti y tu bienestar</h3>
          <div className='bg-[#4900FC] w-full h-[376px] relative flex justify-center lg:flex lg:justify-start' >
            <form className='flex flex-col gap-5 pt-10 w-[370px] mx-4 md:mx-0 md:w-96 md:pl-16 ' onSubmit={openWhatsapp}>
              <input className='h-14 pl-5' type="text"  placeholder='Nombre completo*' name='name' onChange={handleInputChange} required/>
              <input className='h-14 pl-5 z-10' type="text" placeholder='Tel/Cel*' name='cel' onChange={handleInputChange} required/>
              <input className='h-14 pl-5 z-10' type="email" placeholder='E-mail*' name='email_send' onChange={handleInputChange} required/>
              <div className='z-10' onClick={sendMail}><ButtonComponent name={'Contáctame'} link={whatsapp_link} classTailw={'bg-[#C1F20F]  text-[#041D33] font-black w-[90%] md:w-[320px] h-[56px]'}   /></div>
            </form>
            <div className='absolute bottom-3 right-1'>
              <img src="/images/contact/Trazado.png" alt="trazado" title='trazado' />
            </div>
            <div className='absolute bottom-24 right-1'>
              <img src="/images/contact/Trazado2.png" alt="trazado" title='trazado' />
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Contact