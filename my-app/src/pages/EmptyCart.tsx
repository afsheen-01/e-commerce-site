import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <Stack h="70vh" alignItems="center" justifyContent="center">
      <Text fontSize="xl">Uh oh! Cart is empty</Text>
      <Text color="primary.100">
        <Link to="/products"> Add products to cart from here</Link>
      </Text>
    </Stack>
  );
};
