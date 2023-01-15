import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import { Product } from "../types";
import { PageWrap } from "../components/PageWrap";
import { HorizontalCard } from "../components/HorizontalCard";
import { PageHeading } from "../components/PageHeading";

export const OrderSummary = (): ReactElement => {
  const { state } = useLocation();

  console.log(state);
  return (
    <PageWrap>
      <VStack alignItems="start">
        <Box>
          <PageHeading
            title="Order Summary"
            subtitle={`User ID: ${state.userId} | Order placed on: ${state.date}`}
          />
        </Box>

        {state.products.map((item: Product) => (
          <HorizontalCard product={item} key={item.id} />
        ))}
      </VStack>
    </PageWrap>
  );
};
