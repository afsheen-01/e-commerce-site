import {
  Text,
  Flex,
  Box,
  Stack,
  VStack,
  Icon,
  Link as ExternalLink,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CustomBox } from "./CustomBox";

export const Footer = (): ReactElement => {
  return (
    <CustomBox as={VStack} h="120px">
      <Flex w="100%" justifyContent="space-around">
        <Flex w="50%" justifyContent="space-between" color="white">
          <Stack>
            <Link to="#">Contact Us</Link>
            <Link to="#">Shipping</Link>
          </Stack>
          <Stack>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </Stack>
        </Flex>
        <VStack justifyContent="space-between" w="50%" color="white">
          <Text>Follow us on social media:</Text>
          <Flex>
            <ExternalLink href="#" as={FaInstagram} m={2} />
            <ExternalLink href="#" as={FaTwitter} m={2} />
            <ExternalLink href="#" as={FaFacebook} m={2} />
          </Flex>
        </VStack>
      </Flex>
      <Box as={VStack} width="100%">
        <Text as={Flex} alignItems="center" color="white">
          <Icon as={FaCopyright} m={2} />
          All Rights Reserved by Binks
        </Text>
      </Box>
      {/* </Box> */}
    </CustomBox>
  );
};
