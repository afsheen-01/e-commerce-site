import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { CartProduct, ProductResponse } from "../types";
import { CartBody } from "./CartBody";

export const Cart = (): ReactElement => {
  return (
    <PageWrap>
      <CartBody />
    </PageWrap>
  );
};

export const transformProductsToDisplay = (
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
