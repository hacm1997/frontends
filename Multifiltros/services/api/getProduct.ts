const getProduct = async () => {

  const res = await fetch('http://localhost:3000/product/multifiltros')
  if (!res.ok) {
    throw new Error('Error al obtener los datos')
  }
  const data = await res.json()
  return data
}

export default getProduct