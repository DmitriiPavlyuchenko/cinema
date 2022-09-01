import { Module } from "vuex";
import { Filters } from "@/store/filters/filters-interface";
import { RootStore } from "@/store/root-store";
import { getFilters } from "@/api/cinema/filters/filters";
import { SERVER_RESPONSE } from "@/constants/server-code";

export const filtersStore: Module<Filters, RootStore> = {
  namespaced: true,

  state: () => ({
    filters: {},
  }),
  getters: {
    filters(state) {
      return state.filters;
    },
  },
  mutations: {
    SET_FILTERS(state, payload) {
      state.filters = payload;
    },
  },
  actions: {
    async getFilters(context) {
      try {
        const response = await getFilters();
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_FILTERS", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
