import { AxiosError } from "axios";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { useAppSelector } from "../redux/store";
import { CartProducts } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

const useAddToCart = (
  options?: UseMutationOptions<CartProducts, AxiosError, void>
): UseMutationResult<CartProducts, AxiosError, void> => {
  const { userId } = useAppSelector((state) => state.login);
  const cart = useAppSelector((state) => state.cart);
  return useMutation(
    addCart({
      userId,
      date: new Date().toLocaleDateString(),
      products: cart,
    }),
    options
  );
};

const addCart =
  (prepareCart?: CartProducts) => async (): Promise<CartProducts> => {
    const res = await ecommerceBaseURL.post("/carts", prepareCart);
    return res.data;
  };

export default useAddToCart;
