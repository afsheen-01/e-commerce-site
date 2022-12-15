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
  ModalFooter,
  useDisclosure,
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Product } from "../types";
import { QuantityButtonGroup } from "./QuantityButtonGroup";

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
          <QuantityButtonGroup />
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
                <QuantityButtonGroup />
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
