import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { CustomBox } from "./CustomBox";
import { FaShoppingBag, FaShoppingCart, FaUserCircle } from "react-icons/fa";

export const Header = (): ReactElement => {
  return (
    <CustomBox boxShadow="0 2px 2px gray.70">
      <Flex alignItems="center" justifyContent="space-between">
        <Link to="/">
          <Image src="binks-logo.svg" />
        </Link>

        <Flex color="white" justifyContent="space-between" w="10%" mx={3}>
          <Link to="/products">
            <FaShoppingBag size="20px" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart size="20px" />
          </Link>
          <Link to="/login">
            <FaUserCircle size="20px" />
          </Link>
        </Flex>
      </Flex>
    </CustomBox>
  );
};
