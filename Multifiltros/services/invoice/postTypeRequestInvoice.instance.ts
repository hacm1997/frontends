import axios from 'axios'
import config from '../config'

export const postTypeRequestInvoice = () => {
  return axios.create({
    baseURL: config.PRODUCT_SERVISE_URL_BASE, // Cambia la URL base según tu API
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'xsrfCookie' : `tenant=${config.TENANT}`
    }
  })
}