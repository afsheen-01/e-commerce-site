import { Heading, ButtonGroup, HStack, IconButton } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const QuantityButtons = ({ productId }: { productId: number }) => {
  const productInCart = useSelector((state: RootState) => state.count);
  console.log({ productInCart });
  const currentProduct = productInCart.find(
    (item) => item.productId === productId
  );
  console.log(currentProduct);
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
        // onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
      />

      <Heading size="md">value</Heading>
      <IconButton
        bgColor="primary.asBg"
        _hover={{ bg: "#DA2F7161" }}
        color="primary.100"
        size="sm"
        height={7}
        icon={<FaPlus />}
        aria-label={"add-item"}
        // onClick={() => {
        //   setQuantity(quantity + 1);
        // }}
      />
    </ButtonGroup>
  );
};
