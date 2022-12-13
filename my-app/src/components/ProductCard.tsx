import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "../types";
import { QuantityButtonGroup } from "./QuantityButtonGroup";

export const ProductCard = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      maxW="200px"
      borderRadius="5px"
      boxShadow={"0 1px 3px 0 rgba(0, 0, 0, 0.6)"}
      key={product.id}
    >
      <CardBody onClick={onOpen}>
        <Image
          src={product.image || ""}
          objectFit="cover"
          maxW="200px"
          maxH="200px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
        </Stack>
      </CardBody>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>I have more product details</Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Divider />
      <CardFooter>
        <QuantityButtonGroup />
      </CardFooter>
    </Card>
  );
};
