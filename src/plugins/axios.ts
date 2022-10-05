import axios, { AxiosRequestConfig } from "axios";
import { API } from "@/constants/api";
import { getItem } from "@/helpers/persistanceStorage";
import { KEYS } from "@/constants/localStorage";
import router from "@/router";

const instance = axios.create({
  baseURL: API.SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-API-KEY": "cbf13414-b53e-417b-9d9d-793bc19e5557",
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = getItem(KEYS.TOKEN);
    const authorizationToken = token ? token : "";
    config.headers!.Authorization = authorizationToken;
    return config;
  }
);

instance.interceptors.response.use(null, (error) => {
  let path = "/error";
  switch (error.response.status) {
    case 401:
      path = "/";
      break;
    case 404:
      path = "/404";
      break;
    case 400:
      path = "/";
      break;
  }
  router.push(path);
  return Promise.reject(error);
});

export default instance;
