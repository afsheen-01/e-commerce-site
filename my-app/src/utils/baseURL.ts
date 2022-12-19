import axios from "axios";

export const ecommerceBaseURL = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
