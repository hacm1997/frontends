import Script from 'next/script'
import config from '../../services/config'
import { useCookies } from 'react-cookie'

interface ExtendedWindow extends Window {
  ePayco: any; // Puedes ajustar el tipo según la estructura real de ePayco
}
interface propsEpayco {
  totalPrice: number
  invoiceCode: string
  email: string
  homeDeliveryInfo: any
  storePickUpInfo: any
  city: string
  products: any
}
declare const window: ExtendedWindow
export default function EpaycoCheckout({totalPrice, invoiceCode, email, homeDeliveryInfo, storePickUpInfo, city, products}: propsEpayco) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies()
  var data = {
    //Parametros compra (obligatorio)
    name: 'Multifiltros',
    description: 'Compras multifiltros',
    currency: 'cop',
    amount: totalPrice.toString(),
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',
    extra1: invoiceCode,
    extra2: email,
    extra3: homeDeliveryInfo.name && homeDeliveryInfo.lastName ? `${homeDeliveryInfo.name} ${homeDeliveryInfo.lastName}` : `${storePickUpInfo.name} ${storePickUpInfo.lastName}`,
    extra4: homeDeliveryInfo.id ? homeDeliveryInfo.id : storePickUpInfo.id,
    extra5: homeDeliveryInfo.address ? homeDeliveryInfo.address : storePickUpInfo.adress,
    extra6: homeDeliveryInfo.phone ? homeDeliveryInfo.phone : storePickUpInfo.phone,
    extra7: products.shipping_price,
    extra8: city,
    extra9: homeDeliveryInfo.documentType ?  homeDeliveryInfo.documentType : storePickUpInfo.documentType,
    //Onpage="false" - Standard="true"
    external: 'false',
    confirmation: `${config.APP_URL}/epaycoShop`,
    response: `${config.APP_URL}/epaycoShop`,
  }

  const handleClick = () => {
    // Puedes usar 'handler' aquí
    if (typeof window !== 'undefined') {
      if (window.ePayco) {
        window.ePayco.checkout.configure({
          key: config.EPAYCO_KEY,
          test: true,
        })
        window.ePayco.checkout.open(data)
        // setHandler(newHandler)
        setCookie('detailProducts', cookies.cart, {path: '/', maxAge: 3600 * 100})
        setCookie('emailStatus', 'true', {path: '/', maxAge: 3600 * 100})
        setCookie('emailStatusTwo', 'true', {path: '/', maxAge: 3600 * 100})
      }
    }
  
  }
  return (
    <>
      <form>
        <Script
          type="text/javascript"
          src="https://checkout.epayco.co/checkout.js"
        ></Script>
      </form>
      <div className="App">
        <button
          onClick={handleClick}
          className="text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8"
        >
          Proceder al pago
        </button>
      </div>
    </>
  )
}
