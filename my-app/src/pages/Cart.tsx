import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { ProductCard } from "../components/ProductCard";
import useAddToCart from "../hooks/useAddToCart";
import useGetProducts from "../hooks/useGetProducts";
import { useAppSelector } from "../redux/store";
import { Product } from "../types";

export const Cart = (): ReactElement => {
  const { data: allProducts } = useGetProducts();
  const { mutate } = useAddToCart({
    onSuccess: (data) => {
      return data;
    },
  });
  const cart = useAppSelector((state) => state.cart);

  const cartToDisplay = allProducts
    ?.filter((product) => cart.some((item) => item.productId === product.id))
    .map((product) => {
      const item = cart.find((item) => item.productId === product.id);
      return {
        ...product,
        quantity: item ? item.quantity : 0,
      };
    });

  return (
    <PageWrap>
      {cartToDisplay &&
        cartToDisplay.map((item: Product) => (
          <ProductCard product={item} key={item.id} />
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
        Checkout
      </Button>
    </PageWrap>
  );
};
