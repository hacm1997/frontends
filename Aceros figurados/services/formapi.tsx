import http from "./formSubmitService";
import { PostData } from "./formTypeModel";
import axios from "axios";
import config from "./config";

const postForm  = (data: PostData) => {
  return http.post<PostData>("/api/v2/lead", data)
}

const configAxiosS3 = {
  headers: {
    'xsrfCookie': `tenant=${config.TENANT as string}`,
    'maxBodyLength': Infinity,
    'Content-Type': 'multipart/form-data'
  }
}

const s3Service = (fileKey:any) => {
  return axios.post(`${config.API_URL as string}/api/v2/file/upload`, fileKey, configAxiosS3);
}

const deleteFileS3 = (fileKey:any) => {
  return axios.delete(`${config.API_URL as string}/api/v2/file/${fileKey}`, configAxiosS3);
}

const Services = {
  postForm,
  s3Service,
  deleteFileS3,
}

export default Services;


