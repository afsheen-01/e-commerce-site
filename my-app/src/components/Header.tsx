import { Flex, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { CustomBox } from "./CustomBox";

export const Header = (): ReactElement => {
  return (
    <CustomBox>
      <Flex alignItems="center" justifyContent="space-between">
        <Link to="/">
          <Image src="binks-logo.svg" />
        </Link>

        <HStack color="white">
          <Link to="/products">All Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </HStack>
      </Flex>
    </CustomBox>
  );
};
