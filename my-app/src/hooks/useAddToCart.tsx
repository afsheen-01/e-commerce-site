import { useMutation } from "react-query";
import { useAppSelector } from "../redux/store";
import { CartProducts } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

const useAddToCart = () => {
  const { userId } = useAppSelector((state) => state.login);
  const cart = useAppSelector((state) => state.cart);
  return useMutation(() =>
    addCart({ userId, date: new Date().toLocaleDateString(), products: cart })
  );
};

const addCart = async (prepareCart: CartProducts) => {
  const res = await ecommerceBaseURL.post("/carts", prepareCart);

  return res.data;
};

export default useAddToCart;
