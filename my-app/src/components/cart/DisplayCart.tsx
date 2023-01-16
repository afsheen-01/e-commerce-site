import { VStack } from "@chakra-ui/react";
import { Product } from "../../types";
import { HorizontalCard } from "../cards/HorizontalCard";
import { PageHeading } from "../PageHeading";

export const DisplayCart = ({
  cartToDisplay,
}: {
  cartToDisplay: Product[];
}) => {
  return (
    <>
      <PageHeading title="Cart" marginBottom={3} />
      <VStack w="100%" spacing={6} alignItems="start">
        {cartToDisplay &&
          cartToDisplay.map((item: Product) => (
            <HorizontalCard product={item} key={item.id} showQuantity={true} />
          ))}
      </VStack>
    </>
  );
};
