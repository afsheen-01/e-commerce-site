import { Box, Button, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import useAddToCart from "../hooks/useAddToCart";
import useGetProducts from "../hooks/useGetProducts";
import { useAppSelector } from "../redux/store";
import { CartProduct, Product, ProductResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { HorizontalCard } from "../components/HorizontalCard";
import { CustomSpinner } from "../components/CustomSpinner";
import { PageHeading } from "../components/PageHeading";

export const Cart = (): ReactElement => {
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

  return (
    <PageWrap>
      <Box mx={5}>
        <PageHeading title="Cart" marginBottom={3} />
        <VStack w="60%" spacing={6} alignItems="start">
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

      {/* <Button
        bgColor="primary.asBg"
        _hover={{ bg: "#DA2F7161" }}
        color="primary.100"
        size="sm"
        height={7}
        aria-label={"add-item"}
        onClick={() => mutate()}
      >
        {cartIsLoading ? <CustomSpinner /> : "Checkout"}
      </Button> */}
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
