import { Heading, ButtonGroup, HStack, IconButton } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const QuantityButtons = ({
  setQuantity,
  quantity,
}: {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}) => {
  const fnQuantity = () => (quantity > 0 ? console.log(quantity) : null);
  fnQuantity();
  return (
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
  );
};
