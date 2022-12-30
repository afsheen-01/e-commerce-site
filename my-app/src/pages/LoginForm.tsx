import { FormControl, FormLabel, Flex, Input, Button } from "@chakra-ui/react";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { updateCredentials } from "../redux/loginSlice";

export const LoginForm = ({
  setUsername,
  name,
  setPassword,
  password,
  loginName,
  loginPassword,
  dispatch,
}: {
  setUsername: React.Dispatch<SetStateAction<string>>;
  name: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  password: string;
  loginName: string;
  loginPassword: string;
  dispatch: Dispatch<AnyAction>;
}) => {
  return (
    <FormControl>
      <Flex alignItems="center" m={2}>
        <FormLabel color="primary.100">Username:</FormLabel>
        <Input
          placeholder="John Doe"
          color="gray.70"
          onChange={(e) => setUsername(e.target.value)}
          value={name}
        />
      </Flex>
      <Flex alignItems="center" m={2}>
        <FormLabel color="primary.100">Password:</FormLabel>
        <Input
          placeholder="*****"
          type="password"
          color="gray.70"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Flex>
      <Button
        bgColor="primary.asBg"
        color="primary.100"
        w="100%"
        mt={4}
        type="submit"
        onClick={() => {
          loginName.length && loginPassword.length
            ? dispatch(updateCredentials({ isLoggedIn: true }))
            : dispatch(updateCredentials({ isLoggedIn: false }));
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};
