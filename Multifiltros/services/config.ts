const config = {
  SEND_EMAIL_API: process.env.NEXT_PUBLIC_SENDEMAIL_SERVICE as string,
  MAIL_SENDER: process.env.NEXT_PUBLIC_MAIL_SENDER as string,
  MAIL_TENAT: process.env.NEXT_PUBLIC_MAIL_TENANT as string,
  PRODUCT_SERVISE_URL_BASE: process.env.NEXT_PUBLIC_URL_PRODUCT_SERVICE as string,
  TENANT: process.env.NEXT_PUBLIC_TENANT as string,
  EPAYCO_KEY: process.env.NEXT_PUBLIC_EPAYCO_KEY as string,
  EPAYCO_API: process.env. NEXT_PUBLIC_EPAYCO_API as string,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL as string,
  PRODUCT_STATUS: process.env.NEXT_PUBLIC_PRODUCT_STATUS as string,
  WOMPI_URL: process.env.NEXT_PUBLIC_WOMPI_CONSULT as string
}

export default config