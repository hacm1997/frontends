import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className=' text-white lg:py-10 pt-6 lg:pt-9 '>
      <aside className='bg-[#041D33] flex flex-col gap-5 lg:flex lg:flex-row lg:justify-around text-xs lg:text-2xl items-center text-center font-medium pb-11 pt-8 px-5 '>
        <section>
          <div className='flex justify-center'>
            <img src="/images/footer/truck2.png" alt="truck" title='truck' />
          </div>
          <h4>Envíos nacionales a</h4><h4>toda Colombia</h4>
        </section>

        <section>
          <div className='flex justify-center'>
            <img src="/images/footer/medal.png" alt="medal" title='medal' />
          </div>
          <h4>Calidad incomparable</h4><h4>tela fresca y confortable</h4>
        </section>

        <section>
          <div className='flex justify-center'>
            <img src="/images/footer/t-shirt.png" alt="t-shirt" title='t-shirt' />
          </div>
          <h4>Fabricante colombiano</h4>
          <h4>diseñamos y fabricamos</h4>
        </section>

        <section>
          <div className='flex justify-center'>
            <img src="/images/footer/card.png" alt="card" title='card' />
          </div>
          <h4>Recibimos todos</h4>
          <h4>los medios de pago</h4>
        </section>
       
      </aside>

       
      <div className='flex justify-center px-1 py-12 text-center text-[#041D33] bg-white 1xl:h-[150px] 2xl:h-auto'> 

        <section className='lg:flex lg:gap-10 2xl:gap-20 3xl:gap-36'>
        
          <div className='flex justify-center items-center cursor-pointer '>
            <Link href="/"><img className='w-[50%] lg:w-auto xl:w-[70%] 2xl:w-auto 3xl:w-auto' src="/images/ownland.png" alt="ownland" title='ownland' /></Link>
          </div>

          <div className='flex flex-col pt-5 lg:pt-0'>
            <div className='lg:text-3xl pb-5 font-bold'>
              <h4>Información legal</h4>
            </div>
            <div className='flex gap-12 text-xs lg:text-xl font-semibold'>
              <div><a href="/documents/Política-de-Envío.pdf" target='_blank' title='Políticas de envío'><h4> Políticas de envío </h4> </a></div> 
              <div><a href="/documents/Política-de-devoluciones.pdf" target='_blank' title='Políticas de devoluciones'><h4> Política de cambio y devoluciones </h4></a></div> 
              <div><a href="/documents/Política-de-privacidad.pdf" target='_blank' title='Políticas de privacidad'><h4> Políticas de privacidad </h4></a></div>
            </div>
          </div>

          <div className='flex flex-col pt-5 lg:pt-0'>
            <div className='lg:text-4xl pb-5'>
              <h3>Redes Sociales</h3>
            </div>
            <div className='flex justify-center pt-2 gap-3'>
              <a href="https://www.instagram.com/ownland.co/" target='_blank' title='instagram'><img src="/images/footer/instagram.png" alt="instagram" title='instagram' /></a>
              <a href="https://www.facebook.com/ownland.co" target='_blank' title='facebook'><img src="/images/footer/facebook.png" alt="facebook" title='facebook'/></a>
              <a href="https://www.tiktok.com/@ownland.co" target='_blank' title='tiktok'><img src="/images/footer/tiktok.png" alt="tiktok" title='tiktok'/></a>
          
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}

export default Footer