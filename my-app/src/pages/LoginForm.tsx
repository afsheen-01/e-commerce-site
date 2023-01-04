import { FormControl, FormLabel, Flex, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCredentials } from "../redux/loginSlice";
import { useSetLoginCreds } from "../utils/useSetSessionStorage";

export const LoginForm = () => {
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const dispatch = useDispatch();
  const setLoginCreds = useSetLoginCreds();

  useEffect(() => {
    dispatch(updateCredentials({ username: name, password }));
    setLoginCreds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, password]);

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
          setUserId(Math.random() * 100);
          name.length && password.length
            ? dispatch(
                updateCredentials({
                  isLoggedIn: true,
                  userId: userId,
                })
              )
            : dispatch(updateCredentials({ isLoggedIn: false }));
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};
