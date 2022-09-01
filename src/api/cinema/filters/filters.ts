import instance from "@/plugins/axios";
import { API } from "@/constants/api";

export const getFilters = () => {
  return instance.get(API.FILTERS);
};
