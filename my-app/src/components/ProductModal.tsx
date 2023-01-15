import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { Product } from "../types";
import { ProductInfo } from "./ProductInfo";

export const ProductModal = ({
  isOpen,
  onClose,
  product,
  showQuantity = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  showQuantity?: boolean;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="60%" maxH="70%">
        <ModalCloseButton />
        <ModalBody
          py={10}
          maxW="1000px"
          as={SimpleGrid}
          columns={2}
          spacing={5}
        >
          <Image
            src={product.image || ""}
            objectFit="contain"
            boxSize="350px"
            ignoreFallback={true}
          />
          <ProductInfo product={product} showQuantity={showQuantity} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
