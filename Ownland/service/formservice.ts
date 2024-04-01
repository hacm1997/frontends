import axios from 'axios'
import http from './common'

interface PostData {
  tenant: string;
  form_ref: string;
  created_at: string;
  comm_pref: Array<string>;
  form_data: any;
}
const apiVersion = '/api/v2/lead'
const formService = (data:PostData) => {
  return http.post<PostData>(apiVersion, data)
}
const getRegister = (form:string) => {
  const configuration = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_SERVICE_FORM as string}/api/v2/lead?form=${form}`,
    headers: {
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
      xsrfCookie: `tenant=${process.env.NEXT_PUBLIC_TENANT as string}`,
    },
    withCredentials: true
  }
  console.log(configuration)
  return axios.request(configuration)
}
const Services = {
  formService,
  getRegister,
}
export default Services