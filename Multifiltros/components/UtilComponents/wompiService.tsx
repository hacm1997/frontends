import React, { useEffect } from 'react'
import config from '../../services/config'
import { useCookies } from 'react-cookie'

const WompiCheckoutForm: React.FC <{currency: string, price: string | number, referenceCode: string, signature: string, homeDeliveryInfo: any, storePickUpInfo: any, email:string, city: string, products: any}> = 
    ({currency, price, referenceCode, signature, homeDeliveryInfo, storePickUpInfo, email, city, products}) => {
      const [cookies, setCookie] = useCookies()
      const totalPrice = Math.trunc(Number(price))*100
      const redirectUrl = `${config.APP_URL}/resume`
      useEffect(() => {
        localStorage.setItem('customerEmail', email)
        localStorage.setItem('customerCity', city)
        localStorage.setItem('customerFullName', homeDeliveryInfo.name && homeDeliveryInfo.lastName ? `${homeDeliveryInfo.name} ${homeDeliveryInfo.lastName}` : `${storePickUpInfo.name} ${storePickUpInfo.lastName}`)
        localStorage.setItem('customerPhone', homeDeliveryInfo.phone ? homeDeliveryInfo.phone : storePickUpInfo.phone)
        localStorage.setItem('customerId', homeDeliveryInfo.id ? homeDeliveryInfo.id : storePickUpInfo.id)
        localStorage.setItem('customerTypeDoc', homeDeliveryInfo.documentType ?  homeDeliveryInfo.documentType : storePickUpInfo.documentType)
        localStorage.setItem('customerAddress', homeDeliveryInfo.address? homeDeliveryInfo.address : storePickUpInfo.adress)
        localStorage.setItem('shippingPrice', products.shipping_price)
        const script = document.createElement('script')
        script.src = 'https://checkout.wompi.co/widget.js'
        script.dataset.render = 'button'
        script.dataset.publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY as string
        script.dataset.currency = currency
        script.dataset.amountInCents = totalPrice.toString()
        script.dataset.reference = referenceCode
        script.dataset.signatureIntegrity = signature
        script.dataset.redirectUrl = redirectUrl

        // document.body.appendChild(script);
        document.getElementById('wompi-button-container')?.appendChild(script)
        setCookie('detailProducts', cookies.cart, {path: '/', maxAge: 3600 * 100})
        setCookie('emailStatus', 'true', {path: '/', maxAge: 3600 * 100})
        setCookie('emailStatusTwo', 'true', {path: '/', maxAge: 3600 * 100})

        return () => {
          document.getElementById('wompi-button-container')?.removeChild(script)
        }
      }, [totalPrice, redirectUrl])

      return <form />
    }

export default WompiCheckoutForm
