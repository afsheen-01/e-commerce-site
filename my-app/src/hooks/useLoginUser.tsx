import { useMutation } from "react-query";
import { LoginBody } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

export const useLoginUser = () => {
  return useMutation(login);
};

const login = async ({ username, password }: LoginBody) => {
  const requestBody = { username, password };
  console.log(requestBody);
  const res = await ecommerceBaseURL.post("/auth/login/", requestBody);
  console.log(res);
  return res.data;
};

export default useLoginUser;
