import {
  Card,
  CardBody,
  CardFooter,
  Text,
  VStack,
  Image,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { Product } from "../../types";
import { ProductInfo } from "../product/ProductInfo";
import { ProductModal } from "../product/ProductModal";
import { QuantityButtons } from "../product/QuantityButtons";

export const VerticalCard = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card borderRadius="7px" key={product.id}>
        <CardBody as={VStack} cursor="pointer" onClick={onOpen}>
          <Image
            src={product.image || ""}
            objectFit="contain"
            boxSize="250px"
          />
          <ProductInfo
            product={product}
            showQuantity={true}
            forComponent="card"
          />
        </CardBody>
        <Flex mx={3}>
          <Text fontWeight="semibold" fontSize="md" mx={2}>
            Add to Cart:
          </Text>
          <QuantityButtons productId={product.id} />
        </Flex>
        <CardFooter />
      </Card>
      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};
