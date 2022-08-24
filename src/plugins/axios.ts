import axios, { AxiosRequestConfig } from "axios";
import { API } from "@/constants/api";
import { getItem } from "@/helpers/persistanceStorage";
import { KEYS } from "@/constants/localStorage";

const instance = axios.create({
  baseURL: API.SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-API-KEY": "5b48cc31-a6c5-45a2-9ba7-a7def2190d4d",
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
