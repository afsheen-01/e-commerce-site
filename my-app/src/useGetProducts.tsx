import axios, { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { ProductResponse } from './types';

const eCommerceAPI = axios.create({baseURL:process.env.REACT_APP_BASE_URL})

const useGetProducts = (): UseQueryResult<ProductResponse, AxiosError> => {
  return useQuery<ProductResponse, AxiosError>('products', getProducts(), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

const getProducts = () => {
  return async () => {
    const res = await eCommerceAPI.get<ProductResponse>(`/products`);
    return res.data;
  };
};

export default useGetProducts;
