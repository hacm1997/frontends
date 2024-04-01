import axios from 'axios'
import config from '../config'

export const getTypeRequestInvoice = () => {
  return axios.create({
    baseURL: config.EPAYCO_API, // Cambia la URL base según tu API
    method: 'GET',
  })
}

export const getWompiResponseInvoice = () => {
  return axios.create({
    baseURL: config.WOMPI_URL, // Cambia la URL base según tu API
    method: 'GET',
  })
}