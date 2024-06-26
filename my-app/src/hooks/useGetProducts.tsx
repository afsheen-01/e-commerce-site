import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { ProductResponse } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

const useGetProducts = (): UseQueryResult<ProductResponse, AxiosError> => {
  return useQuery<ProductResponse, AxiosError>("categories", getProducts(), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

const getProducts = () => {
  return async () => {
    const res = await ecommerceBaseURL.get<ProductResponse>(`/products`);
    return res.data;
  };
};

export default useGetProducts;
