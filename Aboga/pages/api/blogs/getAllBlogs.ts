import axios from "axios"
import config from "../../../services/config"

export const getTypeRequestBlogs = (tenant: string) => {
  return axios.create({
    baseURL: config.SERVICE_CAMPAIGN, // Cambia la URL base según tu API
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'xsrfCookie' : `tenant=${config.TENANT}`
    }
  })
}

export const getBlogByFilterInstance = () => {
  return axios.create({
    baseURL: config.SERVICE_CAMPAIGN, // Cambia la URL base según tu API
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'xsrfCookie' : `tenant=${config.TENANT}`
    }
  })
}

export const getBlogFiltered = async (pageNumber: number, pageSize: number, cetgories?: string[] | undefined) => {
  const getRequest = getBlogByFilterInstance()
  const dataToFilter = {
    "list_catgories": cetgories
  }
  const data = JSON.stringify(dataToFilter);

  try {
    const res = await getRequest({
      url: `/blogs/filter?page=${pageNumber}&limit=${pageSize}&status=published`,
      data
    })

    const response = res.data
    
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getBlogByService = async (pageNumber: number, pageSize: number, cetgories?: string[]) => {
  const getRequest = getBlogByFilterInstance()
  const dataParse =  cetgories?.toString()?.replace(/^"|"$/g, '').slice(1, -1).split(',')
  const dataToFilter = {
    "list_catgories": dataParse
  }
  const data = JSON.stringify(dataToFilter);

  try {
    const res = await getRequest({
      url: `/blogs/filter?page=${pageNumber}&limit=${pageSize}&status=published`,
      data
    })

    const response = res.data
    
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getBlog = async (tenant: string, pageNumber: number, pageSize: number) => {
  const getRequest = getTypeRequestBlogs(tenant) 

  try {
    const res = await getRequest({
      url: `/blogs?page=${pageNumber}&limit=${pageSize}`,
    })

    const response = res.data
    
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getBlogById = async (id: string) => {
  const getRequest = getTypeRequestBlogs(config.TENANT as string) 

  try {
    const res = await getRequest({
      url: `/blogs/${id}`,
    })

    const response = res.data
    
    return response
  } catch (error) {
    console.log(error)
  }
}