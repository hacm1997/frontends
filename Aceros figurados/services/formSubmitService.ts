import axios from "axios";
import config from "./config";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios.create({
  baseURL: config.API_URL,
  headers: {
    'Accept': "application/json",
    'Content-Type': 'application/json',
  }
})
