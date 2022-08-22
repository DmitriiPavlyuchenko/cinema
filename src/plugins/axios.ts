import axios, { AxiosRequestConfig } from "axios";
import { SIGN_IN } from "@/constants/api";
import { getItem } from "@/helpers/persistanceStorage";
import { KEYS } from "@/constants/localStorage";

const instance = axios.create({
  baseURL: SIGN_IN.SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
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
