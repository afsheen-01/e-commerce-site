import { SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import useGetProducts from "../hooks/useGetProducts";
import { ProductCard } from "../components/ProductCard";
import { PageWrap } from "../components/PageWrap";

export const Home = (): ReactElement => {
  const { data } = useGetProducts();

  return (
    <PageWrap>
      <SimpleGrid columns={[2, null, 4]} spacingX="0px" spacingY="20px">
        {data?.map(
          (product): ReactElement => (
            <ProductCard key={`product-${product.id}`} product={product} />
          )
        )}
      </SimpleGrid>
    </PageWrap>
  );
};
