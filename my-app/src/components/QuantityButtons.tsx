import { Heading, ButtonGroup, HStack, IconButton } from "@chakra-ui/react";
import { ButtonGroupProps } from "@chakra-ui/react";
import { useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { increaseQuantity, decreaseQuantity } from "../redux/quantitySlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const QuantityButtons = ({
  productId,
  ...rest
}: { productId: number } & ButtonGroupProps) => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.cart);

  const product = products.find(
    useMemo(() => (product) => product.productId === productId, [productId])
  );
  const quantity = useMemo(() => product?.quantity || 0, [product]);

  return (
    <ButtonGroup as={HStack} {...rest} spacing="2">
      <IconButton
        bgColor="primary.asBg"
        _hover={{ bg: "#DA2F7161" }}
        color="primary.100"
        size="sm"
        height={7}
        icon={<FaMinus />}
        aria-label={"decrease-items"}
        onClick={() => dispatch(decreaseQuantity({ productId }))}
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
        onClick={() => dispatch(increaseQuantity({ productId }))}
      />
    </ButtonGroup>
  );
};
