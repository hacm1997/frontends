/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? 'production.env' : 'development.env',
});
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
  }
}

let config = nextTranslate()
module.exports = {
  ...config,
  env: {
    API_URL: apiURL,
  }
};
