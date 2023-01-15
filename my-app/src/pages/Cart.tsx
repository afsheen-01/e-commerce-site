import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import useAddToCart from "../hooks/useAddToCart";
import useGetProducts from "../hooks/useGetProducts";
import { useAppSelector } from "../redux/store";
import { CartProduct, Product, ProductResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { HorizontalCard } from "../components/HorizontalCard";
import { CustomSpinner } from "../components/CustomSpinner";

export const Cart = (): ReactElement => {
  const { data: allProducts, isLoading: productsIsLoading } = useGetProducts();
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

  if (productsIsLoading || cartIsLoading) {
    return <CustomSpinner />;
  }

  return (
    <PageWrap>
      {cartToDisplay &&
        cartToDisplay.map((item: Product) => (
          <HorizontalCard product={item} showQuantity={true} />
        ))}
      <Button
        bgColor="primary.asBg"
        _hover={{ bg: "#DA2F7161" }}
        color="primary.100"
        size="sm"
        height={7}
        aria-label={"add-item"}
        onClick={() => mutate()}
      >
        {cartIsLoading ? <CustomSpinner /> : "Checkout"}
      </Button>
    </PageWrap>
  );
};

const transformProductsToDisplay = (
  filterFrom: ProductResponse,
  filterWith: CartProduct[]
) => {
  return filterFrom
    ?.filter((product) =>
      filterWith.some((item: CartProduct) => item.productId === product.id)
    )
    .map((product) => {
      const item = filterWith.find(
        (item: CartProduct) => item.productId === product.id
      );
      return {
        ...product,
        quantity: item ? item.quantity : 0,
      };
    });
};
