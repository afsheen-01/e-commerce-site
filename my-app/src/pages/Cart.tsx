import {
  Box,
  Button,
  HStack,
  Stack,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { PageWrap } from "../components/PageWrap";
import useAddToCart from "../hooks/useAddToCart";
import useGetProducts from "../hooks/useGetProducts";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { CartProduct, Product, ProductResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { HorizontalCard } from "../components/HorizontalCard";
import { CustomSpinner } from "../components/CustomSpinner";
import { PageHeading } from "../components/PageHeading";
import { clearCart } from "../redux/quantitySlice";

export const Cart = (): ReactElement => {
  const { data: allProducts } = useGetProducts();
  const cart = useAppSelector((state) => state.cart);
  const cartToDisplay = transformProductsToDisplay(allProducts || [], cart);

  const dispatch = useAppDispatch();

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

  const calculateTotal = () => {
    const totalPricePerProduct = cartToDisplay && [
      0,
      ...cartToDisplay.map((item) => item.quantity * item.price),
    ];
    const totalPrice =
      totalPricePerProduct &&
      totalPricePerProduct.reduce((acc, val) => acc + val);
    console.log(totalPrice);
    return (Math.round(totalPrice * 100) / 100).toFixed(2);
  };

  if (cartIsLoading) {
    return <CustomSpinner />;
  }
  if (cartToDisplay.length === 0) {
    return (
      <PageWrap>
        <Stack h="70vh" alignItems="center" justifyContent="center">
          <Text fontSize="xl">Uh oh! Cart is empty</Text>
          <Text color="primary.100">
            <Link to="/products"> Add products to cart from here</Link>
          </Text>
        </Stack>
      </PageWrap>
    );
  }
  return (
    <PageWrap>
      <HStack
        mx={10}
        my={3}
        spacing={5}
        justifyContent="space-around"
        alignItems="start"
      >
        <Box w="60%">
          <PageHeading title="Cart" marginBottom={3} />
          <VStack w="100%" spacing={6} alignItems="start">
            {cartToDisplay &&
              cartToDisplay.map((item: Product) => (
                <HorizontalCard
                  product={item}
                  key={item.id}
                  showQuantity={true}
                />
              ))}
          </VStack>
        </Box>

        <Box w="30%">
          <PageHeading title="Order Summary" marginBottom={3} />
          <Stack>
            {cartToDisplay.map((item: Product) => (
              <HStack
                justifyContent="space-between"
                key={item.id}
                color="gray.500"
              >
                <Text w="80%" noOfLines={1}>
                  {item.title} X {item.quantity}
                </Text>
                <Text>${item.price}</Text>
              </HStack>
            ))}
            <Divider />
            <HStack justifyContent="space-between" color="gray.500">
              <Text>Total</Text>
              <Text>${calculateTotal()}</Text>
            </HStack>
            <Button
              bgColor="primary.asBg"
              _hover={{ bg: "#DA2F7161" }}
              color="primary.100"
              size="lg"
              p={5}
              height={7}
              onClick={() => mutate()}
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
          </Stack>
        </Box>
      </HStack>
    </PageWrap>
  );
};

const transformProductsToDisplay = (
  filterFrom: ProductResponse,
  filterBy: CartProduct[]
) => {
  return filterFrom
    ?.filter((product) =>
      filterBy.some((item: CartProduct) => item.productId === product.id)
    )
    .map((product) => {
      const item = filterBy.find(
        (item: CartProduct) => item.productId === product.id
      );
      return {
        ...product,
        quantity: item ? item.quantity : 0,
      };
    });
};
