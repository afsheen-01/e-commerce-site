import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "../types";
import { ProductModal } from "./ProductModal";
import { QuantityButtons } from "./QuantityButtons";

export const ProductCard = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        borderRadius="7px"
        boxShadow={"0 1px 3px 0 rgba(0, 0, 0, 0.6)"}
        key={product.id}
      >
        <CardBody as={VStack} cursor="pointer" onClick={onOpen}>
          <Image
            src={product.image || ""}
            objectFit="contain"
            boxSize="250px"
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              fontFamily="heading"
              maxW="200px"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              color="gray.70"
            >
              {product.title}
            </Heading>
            <Text noOfLines={5} color="gray.70">
              {product.description}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter alignItems="center">
          <Text as="b" fontSize="md" mx={2}>
            Add to Cart:
          </Text>
          <QuantityButtons productId={product.id} />
        </CardFooter>
      </Card>
      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};
