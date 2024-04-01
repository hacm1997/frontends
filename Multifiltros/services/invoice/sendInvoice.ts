import config from '../config'
import { postTypeRequestEmail } from '../schedule/postTypeRequestSchedule.instance'

export const sendInvoice = async (messageClient: string, email: string) =>{
  const postRequest = postTypeRequestEmail()

  try {
    const res = await postRequest({
      data: {
        sender: config.MAIL_SENDER,
        message: messageClient,
        receivers: [email],
        subject: 'Tu factura multifiltros'
      }
    })
    const response = res
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
  
}

export const sendInvoiceTwo = async (messageTenant: string) =>{
  const postRequest = postTypeRequestEmail()

  try {

    const res = await postRequest({
      data: {
        sender: config.MAIL_SENDER,
        message: messageTenant,
        receivers: [config.MAIL_TENAT],
        subject: 'Felicidades nueva compra en tu ecommerce'
      }
    })
    const response = res
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
  
}