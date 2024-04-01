import React, { useEffect, useState } from 'react'
import { getDataWompiInvoice } from '../../services/invoice/sendDataInvoice'
import { WopmiInvoiceData } from '../../services/invoice/types'
import { formatNumber } from '../../helpers/formatNumber'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { putInvoice } from '../../services/invoice/putInvoice'
import { invoiceEmail } from '../../services/invoice/invoiceEmail'
import { sendInvoice, sendInvoiceTwo } from '../../services/invoice/sendInvoice'

export const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState<WopmiInvoiceData | null>(null)
  const [infoStore, setInfoStore] = useState({
    address: '',
    note: '',
    whoPicks: ''
  })
  const route = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const [infoEmail, setInfoEmail] = useState('')
  const refId = route.query.id
  console.log(refId)
  useEffect(() => {
    if(localStorage.getItem('address') && localStorage.getItem('note') && localStorage.getItem('whoPicks')){
      console.log('hola 123')
      setInfoStore({
        address: localStorage.getItem('address') as string,
        note: localStorage.getItem('note') as string,
        whoPicks: localStorage.getItem('whoPicks') as string
      })
    }
  }, [])
  const bodyEmail = invoiceEmail(invoiceData, cookies.detailProducts, infoStore)
  // const bodyEmailMultifiltro = invoiceEmailNotification(invoiceData, cookies.detailProducts)
  useEffect(() => {
    getDataWompiInvoice(refId as string).then(res => {
      console.log('res wompi => ', res)
      setInvoiceData(res as WopmiInvoiceData)
      setInfoEmail(localStorage.getItem('customerEmail') as string)
      putInvoice(localStorage.getItem('invoiceCode') as string, refId as string, res.payment_method_type as string).then(() =>{
      }).catch((error) => {
        console.error(error)
      })
      removeCookie('cart')
    }).catch(error => {
      console.error('Error al obtener datos de la factura', error)
    })
    // getDataInvoice(ref_payco as string)
    //   .then((res) => {
    //     // Almacenar los datos en el estado local
    //     setInvoiceData(res as WopmiInvoiceData)
    //     setInfoEmail(res.data.data.x_extra2 as string)
    //     putInvoice(res.data.data.x_extra1 as string, ref_payco as string, res.data.data.x_type_payment as string).then(() =>{
    //     }).catch((error) => {
    //       console.error(error)
    //     })
    //     removeCookie('cart')
    //   })
    //   .catch((error) => {
    //     console.error('Error al obtener datos de la factura', error)
    //   })
  }, [refId])

  useEffect(() => {
    if(bodyEmail && infoStore.address !== '' && infoStore.note !== '' && infoStore.whoPicks !== ''){
      if(cookies.emailStatus === true){
        sendInvoice(bodyEmail, infoEmail).then(() => {
          setCookie('emailStatus', 'false', {path: '/'})
          removeCookie('cart')
          localStorage.removeItem('address')
          localStorage.removeItem('note')
          localStorage.removeItem('whoPicks')
        }).catch((error) => {
          console.error(error)
        })
      }
      if(bodyEmail && infoStore.address === '' && infoStore.note === '' && infoStore.whoPicks === ''){
        if(cookies.emailStatus === true){
          sendInvoice(bodyEmail, infoEmail).then(() => {
            setCookie('emailStatus', 'false', {path: '/'})
            removeCookie('cart')
          }).catch((error) => {
            console.error(error)
          })
        }
      }
    }
  }, [infoEmail, bodyEmail, infoStore])

  useEffect(() => {
    if(invoiceData && localStorage.removeItem('customerEmail') !== undefined && localStorage.removeItem('customerEmail') !== null){
      if(cookies.emailStatusTwo === true){
        sendInvoiceTwo(bodyEmail).then(() => {
          setCookie('emailStatusTwo', 'false', {path: '/'})
          removeCookie('cart')
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  }, [invoiceData])

  
  const handleGoToInicio = () => {
    removeCookie('emailStatus')
    removeCookie('cart')
    removeCookie('emailStatusTwo')
    route.push('/')
  }

  const printInvoice = () => {
    window.print()
  }
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {invoiceData ? (
        <div className="border-[1px] rounded-lg p-8 flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <h3 className="text-blue-custom text-center text-xl sm:text-2xl not-italic font-semibold ">
            Resumen de factura
          </h3>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            ID de factura:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.id}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Descripción:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {'Compras multifiltros'}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Entidad bancaria:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.payment_method && invoiceData.payment_method?.extra ? invoiceData.payment_method?.extra?.brand : ''}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Metodo de pago:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.payment_method_type}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Estado de transaccion:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.status === 'APPROVED' ? 'APROBADA' : 'FALLIDA'}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Fecha de la transaccion:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.finalized_at
                ? format(invoiceData.finalized_at, 'dd MMMM yyyy HH:mm', {
                  locale: es,
                })
                : null}
            </span>
          </p>
          <p className="text-blue-custom text-center font-bold text-xl">Detalles de la compra</p>
          {Array.isArray(cookies.detailProducts)
            ? cookies.detailProducts.map((item) => (
              <div key={item.id}>
                <div className="flex gap-2">
                  <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
                    {item.title}
                  </p>{' '}
                  <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
                      x{item.quantity}
                  </p>
                </div>
                <p>
                    sub total :{' '}
                  <span className="text-[#353535] text-center text-base not-italic font-normal ">
                    {formatNumber(item.quantity * item.price)}
                  </span>
                </p>
              </div>
            ))
            : null}
          {
            localStorage.getItem('shippingPrice') !== null && localStorage.getItem('shippingPrice') !== undefined ? 
              <p className="text-[#353535] text-xl font-semibold not-italic">
            Costo de envio:{' '}
                <span className="text-[#353535] text-center text-base not-italic font-normal ">
                  {formatNumber(Number(localStorage.getItem('shippingPrice')))}
                </span>
              </p>
              : null
          }
          <p className="text-[#353535] text-xl font-semibold not-italic">
            Total de la compra:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {formatNumber(invoiceData.amount_in_cents/100)}
            </span>
          </p>
          <p className="text-[#353535] text-sm sm:text-xl font-semibold not-italic">
            Entidad:{' '}
            <span className="text-[#353535] text-center text-base not-italic font-normal ">
              {invoiceData.merchant ? invoiceData.merchant.name : null}
            </span>
          </p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
      <div className="flex flex-col  sm:flex sm:flex-row sm:gap-8">
        <button
          onClick={handleGoToInicio}
          className="hover:bg-blue-custom text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8"
        >
          Volver al inicio
        </button>
        <button
          onClick={printInvoice}
          className="hover:bg-blue-custom text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8"
        >
          Descargar
        </button>
      </div>
    </div>
  )
}
