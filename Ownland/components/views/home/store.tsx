import React, { useState } from 'react'
import ButtonComponent from '../../button/button'
import emailService from '../../../service/emailService'

const Store = () => {

  const [form, setForm] = useState({
    name: '',
    email_send: '',
    email: 'contacto@ownlandco.com',
    cel: ''
  })
  function handleInputChange(e:any) {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const sendMail = (e:any) => {
    e.preventDefault()
    emailService(form)
  }
  
  return (
    <div className='bg-[#041D33] lg:flex xl:pl-[100px] xl:pt-20 w-full h-auto py-4'>
      <aside className='flex flex-col-reverse 1xl:flex 1xl:flex-row justify-center items-center gap-10 relative '>
        <div className='mx-4 xl:w-[30%] flex flex-col justify-center items-center text-center'>
          <h2 className='text-5xl lg:6xl xl:text-7xl font-black text-[#ffffff] leading-normal lg:leading-[70px]'>OWN-CLUB</h2>
          <h2 className='text-[50px] font-black text-[#C1F20F] lg:leading-[70px]  italic  hover:not-italic'>¡Muy pronto!</h2>
        </div>

        <div className='xl:w-[30%] flex flex-col justify-center items-center mx-12 lg:mx-0'>
          <p className='text-base text-[#F9F9F9] pb-10 lg:pl-6 font-normal text-center xl:text-start'>Suscríbete para conocer más sobre nuestra marca, nuestros productos, promociones exclusivas e información importante para tu proceso de transformación.</p>
          <form onSubmit={sendMail}>
            <input className='bg-[#041D33] border-[#C1F20F] border-[1px] md:w-96 text-white' type="email" name='email_send' placeholder='E-mail' onChange={handleInputChange} required/>
            <div className='pt-5 flex justify-center lg:flex lg:justify-start'>
              <ButtonComponent name={'NOTIFICARME'} link={'#'} classTailw={'bg-[#C1F20F] mt-[20px] text-[#041D33] text-[16px] font-black w-[170px] h-[40px]'}  />
            </div>
          </form>
        </div>

        <div >
          <img className='bg-cover md:w-9/12 lg:w-10/12' src="/images/store/atleta3.webp" alt="atleta3" title='atleta' />
        </div>
        
      </aside>
    </div>
  )
}

export default Store