import axios from 'axios'
import config from '../config'

export const getSignatureWompiRequest = () => {
  return axios.create({
    baseURL: config.PRODUCT_SERVISE_URL_BASE,
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'xsrfCookie' : `tenant=${config.TENANT}`
    }
  })
}