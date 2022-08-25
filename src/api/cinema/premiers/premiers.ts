import instance from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { API } from "@/constants/api";
import { Premiers } from "@/api/cinema/premiers/premiers-interface";

export const getPremiers = (premier: Premiers): Promise<AxiosResponse> => {
  return instance.get(
    API.PREMIERS_PATH + `?year=${premier.year}&month=${premier.month}`
  );
};
