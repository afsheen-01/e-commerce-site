import { FormControl, FormLabel, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import useLoginUser from "../hooks/useLoginUser";
import { updateCredentials } from "../redux/loginSlice";
import { useAppDispatch } from "../redux/store";

export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { mutate } = useLoginUser();

  const handleLogin = () => {
    setUserId(Math.random() * 100);
    if (username.length && password.length) {
      dispatch(
        updateCredentials({
          username,
          password,
          isLoggedIn: true,
          userId: userId,
        })
      );
      mutate({ username, password });
    } else {
      dispatch(updateCredentials({ isLoggedIn: false }));
    }
  };

  return (
    <FormControl>
      <Flex alignItems="center" m={2}>
        <FormLabel color="primary.100">Username:</FormLabel>
        <Input
          placeholder="John Doe"
          color="gray.70"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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
        onClick={handleLogin}
      >
        Submit
      </Button>
    </FormControl>
  );
};
