import { Box, HStack } from "@chakra-ui/react";
import useAddToCart from "../../hooks/useAddToCart";
import useGetProducts from "../../hooks/useGetProducts";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { CustomSpinner } from "../CustomSpinner";
import { OrderSummary } from "../summary/OrderSummary";
import { DisplayCart } from "./DisplayCart";
import { EmptyCart } from "./EmptyCart";
import { transformProductsToDisplay } from "../../pages/Cart";

export const CartBody = () => {
  const { data: allProducts } = useGetProducts();
  const cart = useAppSelector((state) => state.cart);
  const cartToDisplay = transformProductsToDisplay(allProducts || [], cart);

  const navigate = useNavigate();
  const { mutate, isLoading: cartIsLoading } = useAddToCart({
    onSuccess: (data) => {
      navigate("/summary", {
        state: {
          ...data,
          products: transformProductsToDisplay(
            allProducts || [],
            data.products
          ),
        },
      });
    },
    onError: () => {
      console.log(Error);
    },
  });

  if (cartIsLoading) {
    return <CustomSpinner />;
  }
  if (cartToDisplay.length === 0) {
    return <EmptyCart />;
  }
  return (
    <HStack
      mx={10}
      my={3}
      spacing={5}
      justifyContent="space-around"
      alignItems="start"
    >
      <Box w="60%">
        <DisplayCart cartToDisplay={cartToDisplay} />
      </Box>

      <Box w="30%">
        <OrderSummary
          cartToDisplay={cartToDisplay}
          mutate={mutate}
          cartIsLoading={cartIsLoading}
        />
      </Box>
    </HStack>
  );
};
