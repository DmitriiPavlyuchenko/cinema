import instance from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { API } from "@/constants/api";
import { PremiersInterface } from "@/api/cinema/premiers/premiers-interface";

export const getPremiers = (
  date: PremiersInterface
): Promise<AxiosResponse> => {
  return instance.get(
    API.PREMIERS_PATH + `?year=${date.year}&month=${date.month}`
  );
};
