import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { PageWrap } from "../components/PageWrap";
import { OrderSummary } from "./OrderSummary";

export const OrderSuccess = (): ReactElement => {
  const { state } = useLocation();

  console.log(state);
  return (
    <PageWrap>
      <Box mx="auto" w="80%">
        <OrderSummary cartToDisplay={state.products} />
      </Box>
    </PageWrap>
  );
};
