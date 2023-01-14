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
  options?: UseMutationOptions<CartProducts, AxiosError, CartProducts>
): UseMutationResult<CartProducts, AxiosError, CartProducts> => {
  const { userId } = useAppSelector((state) => state.login);
  const cart = useAppSelector((state) => state.cart);
  return useMutation(
    () =>
      addCart({
        userId,
        date: new Date().toLocaleDateString(),
        products: cart,
      }),
    options
  );
};

const addCart = async (prepareCart: CartProducts) => {
  const res = await ecommerceBaseURL.post("/carts", prepareCart);

  return res.data;
};

export default useAddToCart;
