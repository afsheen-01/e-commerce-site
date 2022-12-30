import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { LoggedInCard } from "./LoggedInCard";
import { LoginForm } from "./LoginForm";

export const DisplayLogin = ({
  isLoggedIn,
  username,
  loginName,
  loginPassword,
  name,
  passwordFromSession,
  password,
  setUsername,
  setPassword,
  dispatch,
}: {
  isLoggedIn: boolean;
  username: string;
  loginName: string;
  passwordFromSession: string;
  password: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  dispatch: Dispatch<AnyAction>;
  name: string;
  loginPassword: string;
}) => {
  if (isLoggedIn) {
    return (
      <LoggedInCard
        username={username}
        loginName={loginName}
        passwordFromSession={passwordFromSession}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        dispatch={dispatch}
      />
    );
  }
  return (
    <LoginForm
      setUsername={setUsername}
      name={name}
      setPassword={setPassword}
      password={password}
      loginName={loginName}
      loginPassword={loginPassword}
      dispatch={dispatch}
    />
  );
};
