import { Module } from "vuex";
import { RootStore } from "@/store/root-store";
import { Cinema } from "@/store/cinema/cinema-interface";
import { getPremiers } from "@/api/cinema/premiers/premiers";
import { convertDateMonth } from "@/helpers/date";
import { SERVER_RESPONSE } from "@/constants/server-code";
import {
  getMovie,
  getSimilarMovies,
  getStaff,
} from "@/api/cinema/movie/movie-information";

export const cinemaStore: Module<Cinema, RootStore> = {
  namespaced: true,
  state: () => ({
    premieres: null,
    movieInformation: null,
    staff: null,
    similarMovies: null,
  }),
  getters: {
    premiers(state) {
      return state.premieres;
    },
    movieInformation(state) {
      return state.movieInformation;
    },
    staff(state) {
      return state.staff;
    },
    similarMovies(state) {
      return state.similarMovies;
    },
  },
  mutations: {
    SET_PREMIERS(state, payload) {
      state.premieres = payload;
    },
    SET_MOVIE(state, payload) {
      state.movieInformation = payload;
    },
    SET_STAFF(state, payload) {
      state.staff = payload;
    },
    SET_SIMILAR_MOVIES(state, payload) {
      state.similarMovies = payload;
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
    async getMovieInformation(context, id) {
      try {
        const response = await getMovie(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_MOVIE", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getStaffInformation(context, id) {
      try {
        const response = await getStaff(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_STAFF", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getSimilarMovies(context, id) {
      try {
        const response = await getSimilarMovies(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_SIMILAR_MOVIES", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
