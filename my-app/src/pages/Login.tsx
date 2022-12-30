import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageWrap } from "../components/PageWrap";
import { updateCredentials } from "../redux/loginSlice";
import { RootState } from "../redux/store";
import { useSetLoginCreds } from "../utils/useSetSessionStorage";
import { DisplayLogin } from "./DisplayLogin";
import { parseJSON } from "./parseJSON";

export const Login = (): ReactElement => {
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const setLoginCreds = useSetLoginCreds();
  const loginCredentials = useSelector((state: RootState) => state.login);
  // const { data: token } = useLoginUser({ username: "def", password: "hij" });
  const {
    username: loginName,
    password: loginPassword,
    isLoggedIn,
  } = loginCredentials;

  useEffect(() => {
    dispatch(updateCredentials({ username: name, password }));
    setLoginCreds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, password]);

  const { username, password: passwordFromSession } = parseJSON("login");
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
          <DisplayLogin
            isLoggedIn={isLoggedIn}
            username={username}
            loginName={loginName}
            passwordFromSession={passwordFromSession}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            dispatch={dispatch}
            name={name}
            loginPassword={loginPassword}
          />
        </CardBody>
      </Card>
    </PageWrap>
  );
};
