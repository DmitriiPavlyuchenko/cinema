import { createStore } from "vuex";
import { RootStore } from "@/store/root-store";
import { signInStore } from "@/store/authorization/sign-in-store";
import { cinemaStore } from "@/store/cinema/cinema-store";
import { filtersStore } from "@/store/filters/filters-store";

export default createStore({
  state: (): RootStore => {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    signIn: signInStore,
    cinema: cinemaStore,
    filters: filtersStore,
  },
});
