import axios from 'axios'
import config from '../../services/config'

export const postTypeRequestEmail = () => {
  return axios.create({
    baseURL: config.SEND_EMAIL_API, // Cambia la URL base según tu API
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}