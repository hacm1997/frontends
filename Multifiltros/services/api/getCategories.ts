import { getTypeRequestCategories } from './getTypeRequestCategories.instance'

export const getCategories = async(queryString: string) =>{
  const getRequest = getTypeRequestCategories()
  try {
    const res = await getRequest({
      url: `/tags/filter?vehicle=${queryString}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }

}