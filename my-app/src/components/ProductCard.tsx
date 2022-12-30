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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCart, updateCount } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { Product } from "../types";
import { useSetCartDetails } from "../utils/useSetSessionStorage";
import { ProductModal } from "./ProductModal";
import { QuantityButtons } from "./QuantityButtons";

export const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity || 0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const addToSessionStorage = useSetCartDetails();

  useEffect(() => {
    const isItemInCart = cart.find((item) => item.id === product.id);

    if (isItemInCart) {
      dispatch(updateCount({ id: product.id, quantity }));
      dispatch(updateCart({ ...product, quantity }));
      addToSessionStorage();
    }
    if (!isItemInCart && quantity > 0) {
      dispatch(updateCart({ ...product, quantity }));
      addToSessionStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, quantity]);
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
          <QuantityButtons setQuantity={setQuantity} quantity={quantity} />
        </CardFooter>
      </Card>
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </>
  );
};
