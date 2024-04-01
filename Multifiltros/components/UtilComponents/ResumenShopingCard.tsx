import React, { useContext } from 'react'
import CashIcon from '../../public/icons/utilsIcons/cashIcon'
import { DeliveryIcon } from '../../public/icons/utilsIcons/delivery'
import WarrantyIcon from '../../public/icons/utilsIcons/warrantyIcon'
import SavePurchaseIcon from '../../public/icons/utilsIcons/savePurchaseIcon'
import MasterCard from '../../public/icons/utilsIcons/masterCard'
import AmericanExpress from '../../public/icons/utilsIcons/americanExpress'
import Visa from '../../public/icons/utilsIcons/visa'
import DinersClubInternational from '../../public/icons/utilsIcons/dinersClubInternational'
import { formatNumber } from '../../helpers/formatNumber'
import Link from 'next/link'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

export interface ResumenShopingCardProps {
  totalPrice: number;
}

export const ResumenShopingCard = ({ totalPrice }: ResumenShopingCardProps) => {
  const {cart} = useContext(EcommerceContext)

  return (
    <div className="flex flex-col justify-center items-center border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-md max-w-[450px] px-3 py-4 bg-white">
      <p className="text-black text-center sm:text-left text-xl sm:text-2xl not-italic font-semibold sm:leading-10">
        Resumen de tu compra
      </p>
      <div className="mt-4">
        <div className="flex gap-1">
          <CashIcon />
          <p className="text-[#353535] text-sm sm:text-xl font-semibold left-5 not-italic">
            {' '}
            Subtotal:{' '}
            <span className="text-blue-custom">{formatNumber(totalPrice)}</span>
          </p>
        </div>
        <div className="flex items-center gap-1 mt-4">
          <DeliveryIcon />
          <p className="text-[#353535] text-sm sm:text-xl not-italic font-semibold leading-4">
            Entrega: <span className="text-red-custom">Envío por calcular</span>
          </p>
        </div>
        <p className="text-[#353535] text-center text-base not-italic font-normal leading-4">
          *El precio se calculará al momento del pago*
        </p>
      </div>
      {/* <EpaycoCheckout totalPrice={totalPrice}/> */}
      <Link href='/paymentSteps'>
        <button
          disabled={cart.length < 1}
          className="text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8"
        >
          Proceder al pago
        </button>
      </Link>
      <div className="flex flex-col sm:flex sm:flex-row gap-10 mt-6 justify-center items-baseline px-3">
        <div className="flex justify-center items-center gap-1">
          <SavePurchaseIcon />
          <p className="text-black text-base not-italic font-medium leading-4">
            Compra segura
            <br />
            <span className="text-xs">múltiples pasarelas de pago</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <WarrantyIcon />
          <p className="text-black text-base not-italic font-medium leading-4">
            Garantía 30 días <br />
            <span className="text-xs">Garantía de provedor</span>
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center">
        <p className="text-blue-custom text-2xl not-italic font-semibold leading-normal">
          Medios de pago
        </p>
        <div className="grid grid-cols-2 sm:flex justify-center items-center">
          <MasterCard />
          <AmericanExpress />
          <Visa />
          <DinersClubInternational />
        </div>
      </div>
    </div>
  )
}
