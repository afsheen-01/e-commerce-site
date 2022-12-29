import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useSetSessionStorage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  console.log(cart, "from cart storage");
};
