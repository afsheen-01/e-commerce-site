import { SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import useGetProducts from "../hooks/useGetProducts";
import { VerticalCard } from "../components/cards/VerticalCard";
import { PageWrap } from "../components/PageWrap";
import { CustomSpinner } from "../components/CustomSpinner";

export const Home = (): ReactElement => {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return <CustomSpinner />;
  }

  return (
    <PageWrap>
      <SimpleGrid columns={[2, null, 4]} m={5} spacing={7}>
        {data?.map(
          (product): ReactElement => (
            <VerticalCard key={`product-${product.id}`} product={product} />
          )
        )}
      </SimpleGrid>
    </PageWrap>
  );
};
