import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { Categories } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

const useGetCategories = (): UseQueryResult<Categories, AxiosError> => {
  return useQuery<Categories, AxiosError>("products", getProducts(), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

const getProducts = () => {
  return async () => {
    const res = await ecommerceBaseURL.get<Categories>(`/products/categories`);
    return res.data;
  };
};

export default useGetCategories;
