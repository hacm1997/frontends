import axios from 'axios'
import config from '../config'

export const deleteTypeInvoice = () =>{
  return axios.create({
    baseURL: config.PRODUCT_SERVISE_URL_BASE, // Cambia la URL base según tu API
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'xsrfCookie' : `tenant=${config.TENANT}`
    }
  })
}