import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../types";
import { parseJSON } from "./parseJSON";

export const Cart = (): ReactElement => {
  const cart = parseJSON("cart");
  console.log(cart);

  return (
    <PageWrap>
      {cart.map((item: Product) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </PageWrap>
  );
};
