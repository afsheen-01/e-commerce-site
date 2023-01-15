import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "../types";
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
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={product.image}
          alt={product.title}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{product.title}</Heading>

            <Text py="2">{product.description}</Text>
          </CardBody>

          {showQuantity && (
            <CardFooter>
              <QuantityButtons productId={product.id} />
            </CardFooter>
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
