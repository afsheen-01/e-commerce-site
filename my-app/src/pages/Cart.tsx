import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { ProductCard } from "../components/ProductCard";
import useAddToCart from "../hooks/useAddToCart";
import useGetProducts from "../hooks/useGetProducts";
import { useAppSelector } from "../redux/store";
import { CartProduct, Product, ProductResponse } from "../types";
import { useNavigate } from "react-router-dom";

export const Cart = (): ReactElement => {
  const { data: allProducts } = useGetProducts();
  const cart = useAppSelector((state) => state.cart);
  const cartToDisplay = transformProductsToDisplay(allProducts || [], cart);

  const navigate = useNavigate();
  const { mutate } = useAddToCart({
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
