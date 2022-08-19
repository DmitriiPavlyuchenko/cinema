import axios from "axios";
import { SIGN_IN } from "@/constants/api";

const instance = axios.create({
  baseURL: SIGN_IN.SERVER_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;

// axios.defaults.baseURL = SIGN_IN.SERVER_URL;
