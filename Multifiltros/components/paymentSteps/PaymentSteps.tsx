import React, { useContext, useEffect, useState } from 'react'
import { StorePickupCard } from './paymentForms/StorePickupCard'
import { HomeDeliveryCard } from './paymentForms/HomeDeliveryCard'
import { StorePickupForm } from './paymentForms/StorePickupForm'
import { HomeDeliveryForm } from './paymentForms/HomeDeliveryForm'
import { BoxIso } from 'iconoir-react'
import { CurrentStep } from './CurrentStep'
import { PayModal } from './payModal'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { useCookies } from 'react-cookie'
import { calculateTotal } from '../../services/api/calculateTotal'
import { sendDataForm } from '../../services/invoice/sendDataForm'
import { toast } from 'sonner'
import { getShipping } from '../../services/api/getShippingPrice'

export interface shipping {
  // eslint-disable-next-line no-unused-vars
  prevEvent?: (e: React.FormEvent) => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  // eslint-disable-next-line no-unused-vars
  onTextAreaChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  // eslint-disable-next-line no-unused-vars
  onChangeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  homeDelivery?: {name: string, lastName: string, documentType: string, id: number | string | null, email: string, city: string, address: string, phone: number | string | null}
  storePickup?: {campus: string, whoPicks: string, name:string, lastName: string, documentType:string, id: number | string | null, email: string, phone: number | string | null, note: string }
  setDpto: React.Dispatch<React.SetStateAction<{ city: string }>>;
  // eslint-disable-next-line no-unused-vars
  onWhoPicksChange?: (value: string) => void;
}

export const PaymentSteps = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const {cart} = useContext(EcommerceContext)
  const [selectedCard, setSelectedCard] = useState<string>('homeDelivery')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dtpo, setDpto] = useState({city: ''})
  const [totalPrice, setTotalPrice] = useState(0)
  const {initialProducts} = useContext(EcommerceContext)
  const [invoiceCode, setInvoiceCode] = useState('')
  const [shippingPrice, setShippingPrice] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const [homeDelivery, setHomeDelivery] = useState({
    name: '', lastName: '', documentType: '', id: 0,
    email: '', city: '', phone: 0,
    address: ''
  })
  const [storePickup, setStorePickup] = useState({
    campus: '', whoPicks: '', name: '',
    lastName: '', documentType: '', email:'',
    id: 0, phone: 0, note: ''
  })
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState<any[]>([])

  const customerHomeDelivery = {
    documentType: homeDelivery.documentType,
    id: homeDelivery.id,
    name: homeDelivery.name,
    last_name: homeDelivery.lastName,
    phone: homeDelivery.phone,
    email: homeDelivery.email,
    address: homeDelivery.address,
    details: {
      city: homeDelivery.city,
    }
  }

  const customerStorePickup = {
    documentType: storePickup.documentType,
    id: storePickup.id,
    name: storePickup.name,
    last_name: storePickup.lastName,
    phone: storePickup.phone,
    email: storePickup.email,
    address: storePickup.campus,
    details: {
      note: storePickup.note,
      whoPicks: storePickup.whoPicks
    }
  }

  console.log('customerStorePickUIp => ', customerStorePickup)

  const dataInvoice = {
    reference:'',
    createdAt: '',
    customer: selectedCard === 'homeDelivery' ? customerHomeDelivery : customerStorePickup,
    products: products,
    shipping: {
      city: ''
    },
    iva: '0',
    total: totalPrice?.toString(),
    payment_method: '',
    status: '',
    extraInfo: {
      gateway: 'wompi'
    }
  }

  useEffect(() =>{
    localStorage.setItem('address', customerStorePickup.address)
    localStorage.setItem('note', customerStorePickup.details.note)
    localStorage.setItem('whoPicks', customerStorePickup.details.whoPicks)
  },[customerStorePickup])

  useEffect(() => {
    if(cookies.initialProducts){
      calculateTotal(cookies.initialProducts).then((res) => {
        setTotalPrice(res.total_price)
      })
    }
  }, [cookies.initialProducts])

  useEffect(() =>{
    if(cart){
      cart.map((item : any) => {
        products.push({
          id: item.id,
          product_name: item.title,
          amount: item.quantity,
          price: item.price,
          details: {}
        })
      })
    }
  }, [cart])

  const handlereDataHomeDelivery = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setHomeDelivery({
      ...homeDelivery,
      [ev.target.name] : value
    })
  }

  useEffect(() => {
    setHomeDelivery({
      ...homeDelivery,
      city: dtpo.city
    })
  }, [dtpo])

  const handlereDataHomeDeliveryTextArea = (ev: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const value = ev.target.value
    setHomeDelivery({
      ...homeDelivery,
      [ev.target.name] : value
    })
  }
  
  const handlereDataStorePickup = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setStorePickup({
      ...storePickup,
      [ev.target.name] : value
    })
  }
  const handlereDataStorePickupSelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    setStorePickup({
      ...storePickup,
      [ev.target.name] : value
    })
  }

  const handlereDataHomeDeliverySelect = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    setHomeDelivery({
      ...homeDelivery,
      [ev.target.name] : value
    })
  }

  const prevEvent = (e: React.FormEvent) => {
    console.log(e)
    e.preventDefault()
  }

  const handleStorePickupChange = () => {
    setSelectedCard('storePickup')
  }

  const handleHomeDeliveryChange = () => {
    setSelectedCard('homeDelivery')
  }
  useEffect(() => {
    // Establecer HomeDeliveryCard como seleccionada por defecto al cargar el componente
    setSelectedCard('homeDelivery')
    if(initialProducts.products[0].id !== ''){
      removeCookie('initialProducts')
      setCookie('initialProducts', initialProducts, {path: '/'})
    }else{
      if(cookies.initialProducts){
        const arrayInitial = JSON.parse(JSON.stringify(cookies.initialProducts))
        if(!arrayInitial.products){
          setCookie('initialProducts', initialProducts, {path: '/'})
        }
      }
    }
  }, [])
  const validateFields = (): boolean => {
    let isValid = true

    // Validar campos para el método de envío HomeDelivery
    if (selectedCard === 'homeDelivery') {
      const { name, lastName, documentType, id, email, city, address, phone } = homeDelivery
      if (!name || !lastName || !documentType || !id || !email || !city || !address || !phone) {
        toast.warning('Por favor complete todos los datos del formulario para continuar')
        isValid = false
      }
    }

    // Validar campos para el método de retiro en tienda
    if (selectedCard === 'storePickup') {
      const { campus, whoPicks, name, lastName, documentType, id, email, phone, note } = storePickup
      if (!campus || !whoPicks || !name || !lastName || !documentType || !id || !email || !phone || !note) {
        toast.warning('Por favor complete todos los datos del formulario para continuar')
        isValid = false
      }
    }

    return isValid
  }

  const pay = () => {
    const isValid = validateFields()
  
    if (isValid) {
      setIsModalOpen(true)
  
      sendDataForm(dataInvoice)
        .then((res) => {
          setInvoiceCode(res.invoice_code)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const handleWhoPicksChange = (value: string) => {
    setStorePickup({
      ...storePickup,
      whoPicks: value,
    })
  }

  useEffect(() => {
    getShipping(homeDelivery.city.toLowerCase()).then((res) => {
      setShippingPrice(res[0].price)
    }).catch((error) => {
      console.error(error)
    })
  },[homeDelivery.city])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <h2 className="text-blue-custom text-4xl font-bold not-italic text-center flex justify-center gap-4 mt-8">
         Mi entrega <BoxIso className='text-red-custom'/>
      </h2>
      <CurrentStep/>
      <div className="flex flex-col justify-center items-center medium:items-baseline medium:flex medium:flex-row medium:justify-around mt-32">
        <div className="flex flex-col justify-center items-center">
          
          <p className="text-blue-custom text-xl not-italic font-semibold flex gap-2">
            <span className="text-white bg-blue-custom rounded-full w-8 h-8 flex justify-center items-center">
              1
            </span>
            Escoge tu método de envió
          </p>
          <div className='flex flex-col lg:flex lg:flex-row medium:flex medium:flex-col justify-center gap-4 w-full'>
            <StorePickupCard
              checked={selectedCard === 'storePickup'}
              onChange={handleStorePickupChange}
            />
            <HomeDeliveryCard
              checked={selectedCard === 'homeDelivery'}
              onChange={handleHomeDeliveryChange}
            />
          </div>
          
        </div>
        <div className='flex flex-col justify-center items-center medium:items-start mt-8 w-full sm:w-fit'>
          <p className="text-blue-custom text-xl not-italic font-semibold flex gap-2">
            <span className="text-white bg-blue-custom rounded-full w-8 h-8 flex justify-center items-center">
              2
            </span>
            {
              selectedCard === 'homeDelivery' ? 'Llena tus datos de envio' : 'Selecciona un punto de retiro'
            }
          </p>
          {selectedCard === 'homeDelivery' && <HomeDeliveryForm 
            onChange={handlereDataHomeDelivery} 
            onTextAreaChange={handlereDataHomeDeliveryTextArea} 
            homeDelivery={homeDelivery}
            onChangeSelect={handlereDataHomeDeliverySelect}
            setDpto={setDpto} 
            prevEvent={prevEvent}
          />}
          {selectedCard === 'storePickup' && <StorePickupForm 
            onChange={handlereDataStorePickup}
            prevEvent={prevEvent}
            storePickup={storePickup}
            onChangeSelect={handlereDataStorePickupSelect}
            setDpto={setDpto}
            onWhoPicksChange={handleWhoPicksChange}
          />}
          <div className='flex flex-col mt-8 justify-center items-center w-full'>
            <div>
              <input 
                className='accent-red-custom'
                checked={isChecked}
                onChange={handleCheckboxChange}
                type="checkbox" 
                name="" 
                id="" 
              /> <label htmlFor="">Estoy de acuerdo con las {''}
                <a 
                  className='underline text-red-custom'
                  href='/00. Política de privacidad- Multifiltros .pdf' 
                  target='_blank'>
                    políticas de uso de mis datos
                </a>
              </label>
            </div>
            <button
              className="text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8 w-[50%]"
              onClick={pay}
              disabled={!isChecked}
            >
          Continuar a pagar
            </button>
          </div>
          <PayModal storePickUpInfo={storePickup} homeDeliveryInfo={homeDelivery} city={homeDelivery.city} shippingPrice={shippingPrice} invoiceCode={invoiceCode} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} email={selectedCard === 'homeDelivery' ? homeDelivery.email : storePickup.email} />
        </div>
      </div>
    </div>
  )
}
