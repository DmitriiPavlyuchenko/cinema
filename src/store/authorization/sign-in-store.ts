import { SignIn } from "@/store/authorization/sign-in-interface";
import { signIn } from "@/api/sign-in/sign-in";
import { Module } from "vuex";
import { RootStore } from "@/store/root-store";

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
  },
  actions: {
    async authorization(context, data: Authorization) {
      try {
        const response = await signIn(data);
        if (response.status === 200) {
          context.commit("AUTHORIZATION_SUCCESS");
          return console.log("auth");
        }
      } catch (e) {
        context.commit("AUTHORIZATION_FAILED");
        return console.log(e);
      }
    },
  },
};
