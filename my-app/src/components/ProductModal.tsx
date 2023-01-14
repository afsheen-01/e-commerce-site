import {
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Product } from "../types";
import { QuantityButtons } from "./QuantityButtons";

export const ProductModal = ({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="60%" maxH="70%">
        <ModalHeader p={8}>{product.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} maxW="1000px" as={SimpleGrid} columns={2} spacing={5}>
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
              <QuantityButtons productId={product.id} m={3} />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
