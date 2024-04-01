import CONFIG from './config'
import { TypeEmail } from './types'

const postForm = (data: TypeEmail) => {
  try {
    const res = fetch(CONFIG.BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '/',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    return res
  } catch (error) {
    console.log('Error', error)
  }
}

export default postForm
