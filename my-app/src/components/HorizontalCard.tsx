import {
  Card,
  CardBody,
  Stack,
  Image,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Product } from "../types";
import { ProductInfo } from "./ProductInfo";
import { ProductModal } from "./ProductModal";
import { QuantityButtons } from "./QuantityButtons";

export const HorizontalCard = ({
  product,
  showQuantity = false,
}: {
  product: Product;
  showQuantity?: boolean;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        onClick={onOpen}
        cursor="pointer"
      >
        <Image
          objectFit="contain"
          boxSize="200px"
          m={4}
          src={product.image}
          alt={product.title}
        />

        <Stack justifyContent="start">
          <CardBody maxH="53%">
            <ProductInfo
              product={product}
              showQuantity={showQuantity}
              forComponent="card"
            />
          </CardBody>

          {showQuantity && (
            <Flex>
              <Text
                fontWeight="semibold"
                fontSize="md"
                marginRight={2}
                marginLeft={5}
              >
                Add to Cart:
              </Text>
              <QuantityButtons productId={product.id} />
            </Flex>
          )}
        </Stack>
      </Card>

      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        showQuantity={showQuantity}
      />
    </>
  );
};
