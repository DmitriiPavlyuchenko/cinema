import instance from "@/plugins/axios";
import { API } from "@/constants/api";
import { AxiosResponse } from "axios";

export const getFilmInformation = (id: number): Promise<AxiosResponse> => {
  return instance.get(API.FILM_INFORMATION + `${id}`);
};
