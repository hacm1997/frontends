import postForm from './api'
import { TypeEmail } from './types'
import CONFIG from './config'

const notifier = async (data: TypeEmail, email: string) => {

  const { message } = data

  const notification = {
    message,
    receivers: [`${email}`],
    subject: 'Nuevo Pedido Recibido en Amala y Ta\'chido',
    sender: `${CONFIG.SOURCE_EMAIL}`
  }

  return postForm(notification)
}

export default notifier
