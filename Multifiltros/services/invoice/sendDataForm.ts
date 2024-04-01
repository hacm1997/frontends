import { postTypeRequestInvoice } from './postTypeRequestInvoice.instance'
import { UserDataInvoiceTwo } from './types'

export const sendDataForm = async (data: UserDataInvoiceTwo) =>{
  const postRequest = postTypeRequestInvoice()

  try {
    const res = await postRequest({
      url: '/invoice',
      data: data
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}