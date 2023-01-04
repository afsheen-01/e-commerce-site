import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { LoginBody } from "../types";
import { ecommerceBaseURL } from "../utils/baseURL";

// const useAddToCart = ({
//  userId,
//  date,
//  products =
// }): UseQueryResult<LoginBody, AxiosError> => {
//   return useQuery<LoginBody, AxiosError>(
//     "categories",
//     addCart({ username, password }),
//     {
//       retry: false,
//       refetchOnWindowFocus: false,
//       refetchOnMount: false,
//     }
//   );
// };

// const addCart = ({ username, password }: LoginBody) => {
//   return async () => {
//     const res = await ecommerceBaseURL.post<LoginBody>(
//       `/auth/login`,
//       JSON.stringify({ username, password })
//     );
//     console.log(res);
//     return res.data;
//   };
// };

// export default useAddToCart;
