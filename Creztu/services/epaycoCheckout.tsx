import Script from 'next/script'

interface ExtendedWindow extends Window {
  ePayco: any; // Puedes ajustar el tipo según la estructura real de ePayco
}
interface propsEpayco {
  amount: number
  name: string
}

declare const window: ExtendedWindow
export default function EpaycoCheckout({amount, name}: propsEpayco) {
  
  // eslint-disable-next-line no-unused-vars
  var data = {
    //Parametros compra (obligatorio)
    name: 'CREZTU',
    description: name,
    currency: 'cop',
    amount: amount.toString(),
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',
    external: 'false',
    response: 'https://kru360.com/confirmation',
    confirmation: 'https://kru360.com/confirmation'
  }


  const handleClick = () => {
    // Puedes usar 'handler' aquí
    if (typeof window !== 'undefined') {
      if (window.ePayco) {
        window.ePayco.checkout.configure({
          key: process.env.NEXT_PUBLIC_EPAYCO_KEY as string,
          test: true,
        })
        window.ePayco.checkout.open(data)
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
          className="text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md bg-[#FB8501]"
        >
          Proceder al pago
        </button>
      </div>
    </>
  )
}