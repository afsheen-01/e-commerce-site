import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { DisplayLogin } from "./DisplayLogin";

export const Login = (): ReactElement => {
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
          <DisplayLogin />
        </CardBody>
      </Card>
    </PageWrap>
  );
};
