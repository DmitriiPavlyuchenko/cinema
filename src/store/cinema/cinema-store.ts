import { Module } from "vuex";
import { RootStore } from "@/store/root-store";
import { Cinema } from "@/store/cinema/cinema-interface";
import { getPremiers } from "@/api/cinema/premiers/premiers";
import { convertDateMonth } from "@/helpers/date";
import { SERVER_RESPONSE } from "@/constants/server-code";
import { getFilmInformation } from "@/api/cinema/film/film-information";

export const cinemaStore: Module<Cinema, RootStore> = {
  namespaced: true,
  state: () => ({
    premieres: null,
    filmInformation: null,
  }),
  getters: {
    premiers(state) {
      return state.premieres;
    },
    filmInformation(state) {
      return state.filmInformation;
    },
  },
  mutations: {
    SET_PREMIERS(state, payload) {
      state.premieres = payload;
    },
    SET_FILM_INFORMATION(state, payload) {
      state.filmInformation = payload;
    },
  },
  actions: {
    async getPremiers(context) {
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = convertDateMonth(date.getMonth());
        const data = { year: year, month: month };
        const response = await getPremiers(data);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          const tenPremiers = response.data.items.slice(0, 10);
          context.commit("SET_PREMIERS", tenPremiers);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getFilmInformation(context, id) {
      try {
        const response = await getFilmInformation(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_FILM_INFORMATION", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
