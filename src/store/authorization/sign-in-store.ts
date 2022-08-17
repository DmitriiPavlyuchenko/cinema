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
  actions: {
    async authorization(context, data: Authorization) {
      try {
        const response = await signIn(data);
        if (response.status === 200) {
          return console.log("auth");
        }
      } catch (e) {
        return console.log(e);
      }
    },
  },
};
