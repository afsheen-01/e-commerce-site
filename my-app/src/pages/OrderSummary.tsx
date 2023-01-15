import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { useLocation } from "react-router-dom";
import { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
export const OrderSummary = (): ReactElement => {
  const { state } = useLocation();

  return (
    <PageWrap>
      {state.products.map((item: Product) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </PageWrap>
  );
};
