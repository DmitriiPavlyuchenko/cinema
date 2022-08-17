import axios from "axios";
import { SIGN_IN } from "@/constants/api";

const instance = axios.create({
  baseURL: SIGN_IN.SERVER_URL,
  timeout: 1000,
});
