const CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL_SES as string,
  EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
  EMAIL_ADDRESS_MEDELLIN: process.env.NEXT_PUBLIC_EMAIL_ADDRESS_MEDELLIN as string,
  SOURCE_EMAIL: process.env.NEXT_PUBLIC_SOURCE_EMAIL as string,
  NOTIFICATON_API: process.env.NEXT_PUBLIC_API_NOTIFICATION as string,
  ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  ORDER_URL: process.env.NEXT_PUBLIC_ORDER
}

export default CONFIG