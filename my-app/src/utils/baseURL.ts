import axios from "axios";

export const ecommerceBaseURL = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
