import { Text, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Product } from "../../types";
import { QuantityButtons } from "./QuantityButtons";

export const ProductInfo = ({
  product,
  showQuantity,
  forComponent,
}: {
  product: Product;
  showQuantity: boolean;
  forComponent?: string;
}) => {
  return (
    <VStack alignItems="start">
      <Heading as="h2" fontWeight="medium" size="md" noOfLines={1}>
        {product.title}
      </Heading>
      <ModifyDescription
        description={product.description}
        forComponent={forComponent}
        showQuantity={showQuantity}
        productId={product.id}
      />
    </VStack>
  );
};

const ModifyDescription = ({
  description,
  forComponent,
  showQuantity,
  productId,
}: {
  description: string;
  forComponent?: string;
  showQuantity: boolean;
  productId: number;
}) => {
  if (forComponent === "card") {
    return (
      <Text fontSize={15} noOfLines={3}>
        {description}
      </Text>
    );
  }
  return (
    <>
      <Text fontWeight="semibold" fontSize="md">
        Description
      </Text>
      <Text fontSize={15}>{description}</Text>
      {showQuantity && (
        <Box as={Flex} alignItems="center">
          <Text fontWeight="semibold" fontSize="md" marginRight={2}>
            Add to Cart:
          </Text>
          <QuantityButtons productId={productId} />
        </Box>
      )}
    </>
  );
};
