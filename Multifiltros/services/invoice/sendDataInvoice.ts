import { getTypeRequestInvoice, getWompiResponseInvoice } from './getTypeRequestInvoice.instance'

export const getDataInvoice = async (refEpayco: string) =>{
  const getRequest = getTypeRequestInvoice()

  try {
    const res = await getRequest({
      url:`/validation/v1/reference/${refEpayco}`
    })
    const response = res
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}

export const getDataWompiInvoice = async (refId: string) =>{
  const getRequest = getWompiResponseInvoice()

  try {
    const res = await getRequest({
      url:`/${refId}`
    })
    const response = res.data.data
    console.log(response)
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}