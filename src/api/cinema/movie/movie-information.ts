import instance from "@/plugins/axios";
import { API } from "@/constants/api";
import { AxiosResponse } from "axios";

export const getMovie = (id: number): Promise<AxiosResponse> => {
  return instance.get(API.MOVIE_INFORMATION + `${id}`);
};

export const getStaff = (id: number): Promise<AxiosResponse> => {
  return instance.get(API.STAFF_INFORMATION + `?filmId=${id}`);
};

export const getSimilarMovies = (id: number): Promise<AxiosResponse> => {
  return instance.get(API.SIMILAR_MOVIES_INFORMATION + `${id}/similars`);
};
