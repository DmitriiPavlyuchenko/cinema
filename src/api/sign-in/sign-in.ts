import axios from "@/plugins/axios";
import { SIGN_IN } from "@/constants/api";

export const signIn = async (signIn: Authorization) => {
  return await axios.post(SIGN_IN.SIGN_IN_PATH, signIn);
};
