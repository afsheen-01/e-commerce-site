import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  Image,
  Divider,
  BoxProps,
} from "@chakra-ui/react";
import { useAppDispatch } from "../redux/store";
import { Product } from "../types";
import { CustomSpinner } from "../components/CustomSpinner";
import { PageHeading } from "../components/PageHeading";
import { clearCart } from "../redux/quantitySlice";

export const OrderSummary = ({
  cartToDisplay,
  mutate,
  cartIsLoading,
  ...rest
}: {
  cartToDisplay: Product[];
  mutate?: () => void;
  cartIsLoading?: boolean;
} & BoxProps) => {
  const calculateTotal = () => {
    const totalPricePerProduct = cartToDisplay && [
      0,
      ...cartToDisplay.map((item) => (item.quantity || 1) * item.price),
    ];
    const totalPrice =
      totalPricePerProduct &&
      totalPricePerProduct.reduce((acc, val) => acc + val);
    console.log(totalPrice);
    return (Math.round(totalPrice * 100) / 100).toFixed(2);
  };

  return (
    <Box {...rest}>
      <PageHeading title="Order Summary" marginBottom={3} />
      <Stack>
        {cartToDisplay.map((item: Product) => (
          <HStack justifyContent="space-between" key={item.id} color="gray.500">
            <Image src={item.image} boxSize="100px" objectFit="contain" />
            <Text w="80%" noOfLines={1}>
              {item.title} X {item.quantity}
            </Text>
            <Text>${item.price}</Text>
          </HStack>
        ))}
        <Divider />
        <HStack justifyContent="space-between">
          <Text>Total</Text>
          <Text>${calculateTotal()}</Text>
        </HStack>
        <CheckoutWithSummary mutate={mutate} cartIsLoading={cartIsLoading} />
      </Stack>
    </Box>
  );
};

const CheckoutWithSummary = ({
  mutate,
  cartIsLoading,
}: {
  mutate?: () => void;
  cartIsLoading?: boolean;
}) => {
  const dispatch = useAppDispatch();
  if (!mutate) {
    return <></>;
  }
  return (
    <>
      <Button
        bgColor="primary.asBg"
        _hover={{ bg: "#DA2F7161" }}
        color="primary.100"
        size="lg"
        p={5}
        height={7}
        onClick={() => mutate && mutate()}
      >
        {cartIsLoading ? <CustomSpinner /> : "Checkout"}
      </Button>
      <Button
        bgColor="white"
        _hover={{ bg: "primary.asBg" }}
        color="primary.100"
        size="lg"
        p={5}
        height={7}
        onClick={() => dispatch(clearCart([]))}
      >
        Clear Cart
      </Button>
    </>
  );
};
