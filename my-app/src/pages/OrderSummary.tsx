import { ReactElement } from "react";
import { PageWrap } from "../components/PageWrap";
import { useLocation } from "react-router-dom";
import { Product } from "../types";
import { HorizontalCard } from "../components/HorizontalCard";
export const OrderSummary = (): ReactElement => {
  const { state } = useLocation();

  return (
    <PageWrap>
      {state.products.map((item: Product) => (
        <HorizontalCard product={item} key={item.id} />
      ))}
    </PageWrap>
  );
};
