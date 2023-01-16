import { Button, Text, Stack } from "@chakra-ui/react";
import { updateCredentials } from "../../redux/loginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const LoggedInCard = () => {
  const login = useAppSelector((state) => state.login);
  const { username, password } = login;
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <Text color="gray.50">Username: {username}</Text>
      <Text color="gray.50">Password: {"*".repeat(password.length)}</Text>
      <Button
        bgColor="primary.asBg"
        color="primary.100"
        w="100%"
        mt={4}
        type="submit"
        onClick={() => {
          dispatch(
            updateCredentials({ isLoggedIn: false, username: "", password: "" })
          );
        }}
      >
        Logout
      </Button>
    </Stack>
  );
};
