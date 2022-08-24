import { SignIn } from "@/store/authorization/sign-in-interface";
import { signIn } from "@/api/sign-in/sign-in";
import { Module } from "vuex";
import { RootStore } from "@/store/root-store";
import { getItem, setItem } from "@/helpers/persistanceStorage";
import { KEYS } from "@/constants/localStorage";
import { SERVER_RESPONSE } from "@/constants/server-code";

export const signInStore: Module<SignIn, RootStore> = {
  namespaced: true,
  state: () => ({
    isAuth: null,
  }),
  getters: {},
  mutations: {
    AUTHORIZATION_SUCCESS(state) {
      state.isAuth = true;
    },
    AUTHORIZATION_FAILED(state) {
      state.isAuth = false;
    },
    LOGOUT(state) {
      state.isAuth = false;
    },
  },
  actions: {
    async authorization(context, data: Authorization) {
      try {
        const response = await signIn(data);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("AUTHORIZATION_SUCCESS");
          setItem(KEYS.TOKEN, response.headers.authorization);
          return true;
        }
      } catch (error: any) {
        const result = error.response.data.message;
        context.commit("AUTHORIZATION_FAILED");
        return result;
      }
    },
    isUserLoggedIn(context) {
      const token = getItem(KEYS.TOKEN);
      if (token.length > 0) {
        context.commit("AUTHORIZATION_SUCCESS");
      } else {
        context.commit("AUTHORIZATION_FAILED");
      }
    },
    logout(context) {
      localStorage.removeItem(KEYS.TOKEN);
      context.commit("LOGOUT");
    },
  },
};
