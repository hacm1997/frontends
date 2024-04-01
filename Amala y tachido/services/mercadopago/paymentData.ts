import CONFIG from '../notification/config'

const getPaymentData = async (id: string) => {
  try {
    const res = await fetch(`${CONFIG.NOTIFICATON_API}${id}`, {
      headers: {
        'Authorization': `Bearer ${CONFIG.ACCESS_TOKEN}`
      }
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default getPaymentData