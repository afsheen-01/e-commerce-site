import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { PageWrap } from "../components/PageWrap";
import { ProductCard } from "../components/ProductCard";
import { RootState } from "../redux/store";
import { useSetSessionStorage } from "../utils/useSetSessionStorage";

export const Cart = (): ReactElement => {
  return (
    <PageWrap>
      {/* {cart.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))} */}
    </PageWrap>
  );
};
