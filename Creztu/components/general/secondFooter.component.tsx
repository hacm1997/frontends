import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { CiClock2 } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaTiktok } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

export const SecondFooter = () => {
  return (
    <footer className='flex flex-col justify-center items-center pb-10 '>
      <div>
        <p className='not-italic text-center text-regal-orange text-6xl font-bold'>¿Aún tienes dudas?</p>
        <p className='mt-6 not-italic text-black text-2xl font-normal text-center'>¿Aún tienes dudas o quieres personalizar un plan para ti?</p>
        <div className='relative flex flex-col items-center'>
          <button className='bg-regal-orange rounded-3xl px-6 sm:px-16 py-2 
    text-white mt-8 mb-4 text-2xl font-semibold'>
            <a 
              href="#prices" 
              title="Oportunidad"
            >
      Unirme ahora
            </a>
          </button>
          <img
            loading="lazy"
            src="/img/sitioWeb/arrow.webp"
            alt="arrow"
            title="arrow"
            className="absolute top-[50%] sm:top-[40%] right-[152px]"
          />
        </div>
        <div className='flex justify-center items-center mt-8'>
          <button 
            className='rounded-3xl border-2 border-regal-orange flex gap-2 justify-center items-center py-1 px-8
            text-regal-orange font-medium text-xl bg-[#FEF8F5]'
          >
            Comunicate con nosotros <FaWhatsapp className='text-2xl'/>
          </button>
        </div>
      </div>
      <div className='w-full sm:px-8 lg:px-20 mt-16 sm:animate-bounce sm:animate-duration-[4000ms]'>
        <div className='bg-regal-orange sm:rounded-3xl w-full px-8 py-10 flex lg:justify-around flex-col gap-4 sm:grid sm:grid-cols-2 
        sm:gap-2 lg:flex lg:flex-row items-baseline'
        >
          <div className='flex gap-2 lg:justify-center items-center'>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <CiLocationOn className='text-white text-3xl' />
            </p>
            <p className='text-white w-6/12'>
            Transversal 54 # 21a 120 edificio Bosque Ejecutivo Oficina 602
            </p>
          </div>
          <div className='flex gap-2 lg:justify-center items-center'>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <FiPhone className='text-white text-3xl' />
            </p>
            <p className='text-white'>
            +57 324 5450191
            </p>
          </div>
          <div className='flex gap-2 lg:justify-center items-center'>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <CiClock2 className='text-white text-3xl' />
            </p>
            <p className='text-white w-6/12'>
            Lunes a Viernes 8:00 a.m a 5:00 p.m
            </p>
          </div>
          <div className='flex gap-2 lg:justify-center items-center'>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <FaInstagram className='text-white text-3xl' />
            </p>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <BiLogoFacebook className='text-white text-3xl' />
            </p>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <FaTiktok className='text-white text-3xl' />
            </p>
            <p className='border-[1px] p-2 border-white rounded-full'>
              <FaLinkedinIn className='text-white text-3xl' />
            </p>
          </div>
        </div>
        <img 
          width={500}
          height={500}
          src='/img/footer-girl.png' 
          alt='girl-footer' 
          className='float-right mt-[-440px] hidden 3xl:block'
        />
      </div>
    </footer>
  )
}
