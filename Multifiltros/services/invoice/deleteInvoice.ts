import { deleteTypeInvoice } from './deleteTypeInvoice.instance'

export const deleteInvoice = async (invoice_code: string) =>{
  const getRequest = deleteTypeInvoice()
  try {
    const res = await getRequest({
      url:`/invoice/${invoice_code}`
    })
    const response = res
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}