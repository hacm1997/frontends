import config from '../config'
import { postTypeRequestEmail } from './postTypeRequestSchedule.instance'

export const sendEmail = async (message: string) =>{
  const postRequest = postTypeRequestEmail()

  try {
    const res = await postRequest({
      data: {
        sender: config.MAIL_SENDER,
        message: message,
        receivers: [config.MAIL_TENAT],
        subject: 'Agendamiento de cita'
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