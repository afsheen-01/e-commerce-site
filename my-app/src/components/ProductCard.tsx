import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Box,
  SimpleGrid,
  Flex,
  ButtonGroup,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCart, updateCount } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { Product } from "../types";

export const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const isItemInCart = cart.find((item) => item.id === product.id);

    if (isItemInCart) {
      dispatch(updateCount({ id: product.id, quantity }));
      dispatch(updateCart({ ...product, quantity }));
    }
    if (!isItemInCart && quantity > 0) {
      dispatch(updateCart({ ...product, quantity }));
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
          <ButtonGroup as={HStack} spacing="2">
            <IconButton
              bgColor="primary.asBg"
              _hover={{ bg: "#DA2F7161" }}
              color="primary.100"
              size="sm"
              height={7}
              icon={<FaMinus />}
              aria-label={"decrease-items"}
              onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            />

            <Heading size="md">{quantity}</Heading>
            <IconButton
              bgColor="primary.asBg"
              _hover={{ bg: "#DA2F7161" }}
              color="primary.100"
              size="sm"
              height={7}
              icon={<FaPlus />}
              aria-label={"add-item"}
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            maxW="1000px"
            as={SimpleGrid}
            columns={2}
            spacing={5}
          >
            <Image
              src={product.image || ""}
              objectFit="contain"
              boxSize="350px"
            />
            <Box>
              <Text as="b" fontSize="md">
                Description:
              </Text>
              <Text>{product.description}</Text>
              <Box as={Flex} alignItems="center">
                <Text as="b" fontSize="md">
                  Add to Cart:
                </Text>
                <ButtonGroup as={HStack} spacing="2">
                  <IconButton
                    bgColor="primary.asBg"
                    _hover={{ bg: "#DA2F7161" }}
                    color="primary.100"
                    size="sm"
                    height={7}
                    icon={<FaMinus />}
                    aria-label={"decrease-items"}
                    onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                  />

                  <Heading size="md">{quantity}</Heading>
                  <IconButton
                    bgColor="primary.asBg"
                    _hover={{ bg: "#DA2F7161" }}
                    color="primary.100"
                    size="sm"
                    height={7}
                    icon={<FaPlus />}
                    aria-label={"add-item"}
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </ButtonGroup>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
