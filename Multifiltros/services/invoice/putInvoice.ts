import { putTypeRequestInvoice } from './putTypeRequestInvoice.instance'

export const putInvoice = async (invoiceCode: string, reference: string, payment_method: string) =>{
  const putRequest = putTypeRequestInvoice()

  try {
    const res = await putRequest({
      url: `/invoice/reference?invoice=${invoiceCode}&reference=${reference}&payment_method=${payment_method}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}