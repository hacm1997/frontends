import { getSignatureWompiRequest } from './createSignatureRequest'

export const getSiganture = async(currency: string, price: string | number) =>{
  const integrity = process.env.NEXT_PUBLIC_WOMPI_INTEGRITY as string
  const getRequest = getSignatureWompiRequest()
  const querys = `currency=${currency.toUpperCase()}&price=${price}&integrity=${integrity}`
  try {
    const res = await getRequest({
      url: `/invoice/wompi/signature?${querys}`,
    })
      
    const response = res.data
    return response
  } catch (error) {
    console.error('Error al crear firma:', error)
    throw error
  }
  
}