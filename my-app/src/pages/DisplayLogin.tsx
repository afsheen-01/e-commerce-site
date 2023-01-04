import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LoggedInCard } from "./LoggedInCard";
import { LoginForm } from "./LoginForm";

export const DisplayLogin = () => {
  const login = useSelector((state: RootState) => state.login);

  if (login.isLoggedIn) {
    return <LoggedInCard />;
  }
  return <LoginForm />;
};
