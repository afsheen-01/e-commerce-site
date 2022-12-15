import { ButtonGroup, HStack, IconButton, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const QuantityButtonGroup = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <ButtonGroup as={HStack} spacing="2">
      <IconButton
        bgColor="primary.50"
        _hover={{ bg: "#DA2F71" }}
        color="white"
        size="sm"
        height={7}
        icon={<FaMinus />}
        aria-label={"decrease-items"}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      />

      <Heading size="md">{count}</Heading>
      <IconButton
        bgColor="primary.50"
        _hover={{ bg: "#DA2F71" }}
        color="white"
        size="sm"
        height={7}
        icon={<FaPlus />}
        aria-label={"add-item"}
        onClick={() => setCount(count + 1)}
      />
    </ButtonGroup>
  );
};
