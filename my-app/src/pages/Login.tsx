import {
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Flex,
  Image,
  Input,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PageWrap } from "../components/PageWrap";
import useLoginUser from "../hooks/useLoginUser";
import { updateCredentials } from "../redux/loginSlice";
import { RootState } from "../redux/store";

export const Login = (): ReactElement => {
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const loginCredentials = useSelector((state: RootState) => state.login);
  const { data: token } = useLoginUser({ username: "def", password: "hij" });
  const {
    username: loginName,
    password: loginPassword,
    isLoggedIn,
  } = loginCredentials;

  useEffect(() => {
    dispatch(updateCredentials({ username: name, password }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, password]);
  return (
    <PageWrap as={Flex} alignItems="center" justifyContent="center">
      <Card minW="40%" minH="50%" maxW="sm" borderRadius="0px 0px 10px 10px">
        <CardHeader
          as={Flex}
          alignItems="center"
          justifyContent="center"
          bgColor="primary.100"
          color="white"
          borderRadius="10px 10px 0px 0px"
        >
          <Text fontSize="2xl">Login to</Text>
          <Image src="binks-logo.svg" />
        </CardHeader>

        <CardBody>
          {isLoggedIn ? (
            <Stack>
              <Text color="gray.50">Username: {loginName}</Text>
              <Text color="gray.50">
                Password: {"*".repeat(password.length)}
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
          ) : (
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
          )}
        </CardBody>
      </Card>
    </PageWrap>
  );
};
