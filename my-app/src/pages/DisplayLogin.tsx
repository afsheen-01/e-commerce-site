import { useAppSelector } from "../redux/store";
import { LoggedInCard } from "./LoggedInCard";
import { LoginForm } from "./LoginForm";

export const DisplayLogin = () => {
  const login = useAppSelector((state) => state.login);

  if (login.isLoggedIn) {
    return <LoggedInCard />;
  }
  return <LoginForm />;
};
