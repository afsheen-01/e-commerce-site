import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useSetCartDetails = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return () => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  };
};

export const useSetLoginCreds = () => {
  const login = useSelector((state: RootState) => state.login);
  return () => sessionStorage.setItem("login", JSON.stringify(login));
};
