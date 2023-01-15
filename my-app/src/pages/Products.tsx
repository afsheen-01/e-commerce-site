import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { PageWrap } from "../components/PageWrap";
import { ProductCard } from "../components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import useGetCategories from "../hooks/useGetCategories";
import { CustomSpinner } from "../components/CustomSpinner";

export const Products = (): ReactElement => {
  const [category, setCategory] = useState<string>("");

  const { data: categories, isLoading: categoriesIsLoading } =
    useGetCategories();
  const { data: products, isLoading: productsIsLoading } = useGetProducts();

  const filteredData = () => {
    if (category) {
      return products?.filter((product) => product.category === category);
    }
    return products;
  };

  if (categoriesIsLoading || productsIsLoading) {
    return <CustomSpinner />;
  }

  return (
    <PageWrap>
      <Flex>
        <Stack minW="15%" bgColor="primary.asBg" p={6}>
          <Text as="b">FilterBy:</Text>
          {categories?.map((category, index) => {
            return (
              <Text
                key={index}
                cursor="pointer"
                onClick={() => setCategory(category)}
              >
                {category}
              </Text>
            );
          })}
        </Stack>
        <SimpleGrid columns={[1, null, 3]} m={5} spacing={7}>
          {filteredData()?.map(
            (product): ReactElement => (
              <ProductCard key={`product-${product.id}`} product={product} />
            )
          )}
        </SimpleGrid>
      </Flex>
    </PageWrap>
  );
};
