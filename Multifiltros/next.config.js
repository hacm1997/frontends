/** @type {import('next').NextConfig} */
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? 'production.env' : 'development.env',
})
const apiURL = process.env.NEXT_PUBLIC_API_URL
module.exports = {
  env: {
    API_URL: apiURL,
  }
}