import axios from "@/plugins/axios";
import { API } from "@/constants/api";

export const signIn = async (signIn: Authorization) => {
  return await axios.post(API.SIGN_IN_PATH, signIn);
};
