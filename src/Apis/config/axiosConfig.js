import axios from "axios";

import { BASE_URL } from "../../Constants/apiConstant";
import { useAppSelector } from "../../Hook";
// import { store } from "../../redux/Store";

export const api = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
});

const pathsToIgnoreSession = ['/auth/session']

const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
}

axios.interceptors.request.use(
  (config) => {
    if (!pathsToIgnoreSession.includes(config?.url || '')) {
      const token = useAppSelector((state) => state.auth.token) || ""
      config.headers['Authorization'] = token || ''
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});