import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const QuantityButtonGroup = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <ButtonGroup spacing="2">
      <IconButton
        icon={<FaPlus />}
        aria-label={"add-item"}
        onClick={() => setCount(count + 1)}
      />
      {count}
      <IconButton
        icon={<FaMinus />}
        aria-label={"decrease-items"}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      />
    </ButtonGroup>
  );
};
