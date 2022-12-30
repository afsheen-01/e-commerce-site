import { Button, Text, Stack } from "@chakra-ui/react";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { updateCredentials } from "../redux/loginSlice";

export const LoggedInCard = ({
  username,
  loginName,
  password,
  passwordFromSession,
  setUsername,
  setPassword,
  dispatch,
}: {
  username: string;
  loginName: string;
  passwordFromSession: string;
  password: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  dispatch: Dispatch<AnyAction>;
}) => {
  return (
    <Stack>
      <Text color="gray.50">Username: {username || loginName}</Text>
      <Text color="gray.50">
        Password: {"*".repeat(passwordFromSession.length || password.length)}
      </Text>
      <Button
        bgColor="primary.asBg"
        color="primary.100"
        w="100%"
        mt={4}
        type="submit"
        onClick={() => {
          setUsername("");
          setPassword("");
          dispatch(updateCredentials({ isLoggedIn: false }));
        }}
      >
        Logout
      </Button>
    </Stack>
  );
};
