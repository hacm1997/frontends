import React from 'react'

interface Props {
  // eslint-disable-next-line no-undef
  image?: JSX.Element
}

export const Innovation = ({image}: Props) => {
  return (
    <div className="w-full mt-10 mb-10 px-4 md:px-0 ">
      <div className="mx-auto w-[65%] h-[auto] p-4 border-[1px] rounded-lg text-center 
      shadow-[-10px_-10px_30px_4px_rgba(237,137,54,0.1),_10px_10px_30px_4px_rgba(79,70,229,0.1)] relative"
      >
        <p className="pt-[25px] text-black font-Poppins not-italic font-bold text-xl">
        Porque la verdadera innovación está en la simplicidad
        </p>
        
        <div className='pt-3 pb-5'>
          <a
            href="#prices"
            title="shopHome"
            className="text-white text-base md:text-xl font-semibold"
          >
            <button className="w-[60%] md:w-[200px] p-1 bg-black rounded-3xl ">
                  Comprar ahora
            </button>
          </a>

        </div>
        {image}
      </div>

    </div>
  )
}
