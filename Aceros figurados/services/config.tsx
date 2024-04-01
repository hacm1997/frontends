const config = {
  API_URL: process.env.NEXT_PUBLIC_BASE_URL,
  USERNAME: process.env.NEXT_PUBLIC_USERNAME,
  PASSWORD: process.env.NEXT_PUBLIC_LOGIN_PASSWORD,
  TOKEN_SESSION: process.env.NEXT_PUBLIC_TOKEN_SESSION,
  TENANT: process.env.NEXT_PUBLIC_TENANT,
  EMAIL_SENDER: process.env.NEXT_PUBLIC_MAILER_SENDER
};

export default config;
