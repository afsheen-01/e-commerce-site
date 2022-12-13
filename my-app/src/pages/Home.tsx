import { SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import useGetProducts from "../hooks/useGetProducts";
import { ProductCard } from "../components/ProductCard";
import { PageWrap } from "../components/PageWrap";

export const Home = (): ReactElement => {
  const { data } = useGetProducts();

  return (
    <PageWrap>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {data?.map(
          (product): ReactElement => (
            <ProductCard key={`product-${product.id}`} product={product} />
          )
        )}
      </SimpleGrid>
    </PageWrap>
  );
};
