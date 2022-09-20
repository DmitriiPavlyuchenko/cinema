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
  getTopAwaitMovies,
  getTopMovies,
  getTrailer,
} from "@/api/cinema/movie/movie-information";
import { generateRandomNumber } from "@/helpers/generate-random-number";

export const cinemaStore: Module<Cinema, RootStore> = {
  namespaced: true,
  state: () => ({
    premieres: null,
    movieInformation: {},
    staff: [],
    similarMovies: {},
    trailer: null,
    topMovies: [],
    topAwaitMovies: [],
  }),
  getters: {
    premieres(state) {
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
    trailer(state) {
      return state.trailer;
    },
    topMovies(state) {
      return state.topMovies;
    },
    topAwaitMovies(state) {
      return state.topAwaitMovies;
    },
  },
  mutations: {
    SET_PREMIERES(state, payload) {
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
    SET_TRAILER(state, payload) {
      state.trailer = payload;
    },
    SET_TOP_MOVIES(state, payload) {
      state.topMovies = payload;
    },
    SET_TOP_AWAIT_MOVIES(state, payload) {
      state.topAwaitMovies = payload;
    },
  },
  actions: {
    // async getPremieres(context) {
    //   try {
    //     const date = new Date();
    //     const year = date.getFullYear();
    //     const month = convertDateMonth(date.getMonth());
    //     const data = { year: year, month: month };
    //     const response = await getPremiers(data);
    //     if (response.status === SERVER_RESPONSE.CODE_200) {
    //       const tenPremieres = response.data.items.slice(0, 10);
    //       context.commit("SET_PREMIERES", response.data.items);
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    async getMovieInformation(context, id) {
      try {
        const response = await getMovie(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_MOVIE", response.data);
          return response.data;
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
    async getTrailer(context, id) {
      try {
        const response = await getTrailer(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          context.commit("SET_TRAILER", response.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    // async getTopMovies(context) {
    //   try {
    //     const firstPage = 1;
    //     const lastPage = 13;
    //     const page = generateRandomNumber(firstPage, lastPage);
    //     const response = await getTopMovies(page);
    //     if (response.status === SERVER_RESPONSE.CODE_200) {
    //       context.commit("SET_TOP_MOVIES", response.data);
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
};
