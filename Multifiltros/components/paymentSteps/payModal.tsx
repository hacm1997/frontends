import CashIcon from '../../public/icons/utilsIcons/cashIcon'
import { DeliveryIcon } from '../../public/icons/utilsIcons/delivery'
import { InitialRequest, calculateTotal } from '../../services/api/calculateTotal'
import { formatNumber } from '../../helpers/formatNumber'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import MasterCard from '../../public/icons/utilsIcons/masterCard'
import AmericanExpress from '../../public/icons/utilsIcons/americanExpress'
import Visa from '../../public/icons/utilsIcons/visa'
import DinersClubInternational from '../../public/icons/utilsIcons/dinersClubInternational'
import SavePurchaseIcon from '../../public/icons/utilsIcons/savePurchaseIcon'
import WarrantyIcon from '../../public/icons/utilsIcons/warrantyIcon'
import { deleteInvoice } from '../../services/invoice/deleteInvoice'
import { getProductById } from '../../services/api/getProductsById'
import { DEFAULT_CITY } from '../../data/constants/constants'
import { getSiganture } from '../../services/wompi/getSignature'
import WompiCheckoutForm from '../UtilComponents/wompiService'

interface PayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: () => void;
  invoiceCode: string
  email: string
  shippingPrice: number
  city: string
  homeDeliveryInfo: any
  storePickUpInfo: any
}

export const PayModal = ( { isOpen, onClose, invoiceCode, email, shippingPrice, city, homeDeliveryInfo, storePickUpInfo }: PayModalProps ) => {
  const [cookies] = useCookies()
  const [products, setProducts] = useState<InitialRequest>()
  const [wompiCredentials, setWompiCredentials] = useState({
    signature: '', uniqueCodeRef: ''
  })
  const [totalCalculate, setTotalCalculate] = useState({
    price_without_iva: 0,
    price_without_shipping: 0,
    price_shipping: 0,
    total_price: 0
  })
  const [productsId, setProductId] = useState<any[]>([])

  useEffect(() => {
    if(cookies.initialProducts){
      setProductId([])
      cookies.initialProducts.products.map((item:any) => {
        getProductById(item.id).then((res:any) => {
          const quantity = item.quantity
          setProductId((prevProducts: any) => ([...prevProducts,{...res, quantity}]))
        })
      })
    }
  }, [cookies.initialProducts])

  useEffect(() => {
    if(productsId.length > 0){
      const hasFullKitCategory = productsId.some((item: any) => {
        const extraInfo = JSON.parse(item.extraInfo)
        return extraInfo.categories && extraInfo.categories.includes('full-kit')
      })
      setProducts({
        products: productsId.map((item:any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price_discount ? item.price_discount : item.price,
          iva: item.iva ? item.iva : 0, 
        })),
        shipping_price: city === DEFAULT_CITY || cookies.OriginCity === DEFAULT_CITY  ? 0 : hasFullKitCategory ? 0 : shippingPrice,
      })
    }
  }, [productsId, city, cookies.OriginCity])

  const cancelPay = () =>{
    deleteInvoice(invoiceCode).then(() => {
      onClose()
    }).catch((error) => {
      console.error(error)
    })
  }
  
  useEffect(() => {
    if(products){
      calculateTotal(products).then((res) => {
        setTotalCalculate({
          price_without_iva: res.price_without_iva,
          price_without_shipping: res.price_without_shipping,
          price_shipping: res.price_shipping,
          total_price: res.total_price
        })
        getSiganture('COP', res.total_price).then(res => {
          setWompiCredentials(res)
        })

      }).catch(error => {
        console.error(error)
      })
    }
  }, [products])

  useEffect(() => {
    localStorage.setItem('invoiceCode', invoiceCode)
  }, [invoiceCode])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-[500px] mx-2 sm:mx-0">
            <div>
              <p className="text-blue-custom text-center text-xl sm:text-2xl not-italic font-semibold sm:leading-10">
        Resumen de tu compra
              </p>
              <div className='flex flex-col items-start'>
                <p
                  className='text-[#353535] text-xl not-italic font-semibold text-center flex felx-row justify-around items-center gap-2'
                >
                  <span className='flex items-center gap-2'><CashIcon/> Subtotal:</span> {formatNumber(totalCalculate.price_without_shipping)}
                </p>
                <p
                  className='text-[#353535] text-xl not-italic font-semibold text-center flex felx-row justify-around items-center gap-2'
                >
                  <span className='flex gap-2 items-center'><DeliveryIcon/> Entrega:</span> <span className='text-blue-custom text-xl not-italic font-medium'>{formatNumber(totalCalculate.price_shipping)}</span>
                </p>
                <p
                  className='text-[#353535] text-xl not-italic font-semibold text-center flex felx-row justify-around items-center gap-2'
                >
                  <span className='flex items-center gap-2'><DeliveryIcon/> Total a pagar:</span> <span className='text-red-custom font-bold text-2xl'>{formatNumber(totalCalculate.total_price)}</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              {/* <EpaycoCheckout city={city} products={products} totalPrice={totalCalculate.total_price} invoiceCode={invoiceCode} email={email} homeDeliveryInfo={homeDeliveryInfo} storePickUpInfo={storePickUpInfo}/> */}
              <div style={{display:'flex', justifyContent:'center', paddingTop: '15px'}} id="wompi-button-container">
                <WompiCheckoutForm currency='COP' price={totalCalculate.total_price} referenceCode={wompiCredentials.uniqueCodeRef} signature={wompiCredentials.signature} homeDeliveryInfo={homeDeliveryInfo} storePickUpInfo={storePickUpInfo} email={email} city={city} products={products}/>
              </div>
              <button
                onClick={cancelPay}
                className='border-2 border-blue-custom rounded-xl text-blue-custom mt-6 text-sm sm:text-2xl not-italic font-bold leading-normal px-10 py-2'
              >
                Cancelar compra
              </button>
            </div>
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
        </div>
      )}
    </>
  )
}
