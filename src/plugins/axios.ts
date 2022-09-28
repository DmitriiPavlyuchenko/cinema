import axios, { AxiosRequestConfig } from "axios";
import { API } from "@/constants/api";
import { getItem } from "@/helpers/persistanceStorage";
import { KEYS } from "@/constants/localStorage";

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

export default instance;
