import { PartnerCard } from '../views/sitioWeb/cards/partnerCard'

interface Props {
  title?: string
  // eslint-disable-next-line no-undef
  subtitle?: JSX.Element
  image?: string
}

export const BoostCard = ({title, subtitle, image}: Props) => {
  return (
    <div className="w-full mt-10 mb-10 px-4 md:px-0 ">
      <div className="mx-auto max-w-[700px] p-4 border-[1px] rounded-lg text-center shadow-[1px_5px_20px_0px_#EF5A0F] relative">
        <p className="text-[#EF5A0F] font-Poppins not-italic font-[1000] text-xl">
          {title}
        </p>
        {subtitle}
        <div className='relative pt-3'>
          <a
            href="#prices"
            title="shopHome"
            className="text-white text-base md:text-xl font-semibold"
          >
            <button className="w-[90%] md:w-[373px] p-2 rounded-3xl bg-[#EF5A0F]">
                    Comienza ya
            </button>
          </a>
          <img
            loading="lazy"
            src="/img/sitioWeb/arrow.webp"
            alt="arrow"
            title="arrow"
            className="absolute top-5 left-[68%] md:top-6 md:left-[65%]"
          />
        </div>
        <img 
          src={image}
          alt="women"
          className="absolute top-[22px] right-[-184px] hidden 1xl:block"
          width={300}
          height={300}
        />
      </div>
      <div className='mt-36'>
        <PartnerCard/>
      </div>
    </div>
  )
}
