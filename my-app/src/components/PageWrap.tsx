import { Box, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageWrap = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <VStack align="stretch">
      <Header />
      <Box h="74vh" overflow="scroll">
        {children}
      </Box>
      <Footer />
    </VStack>
  );
};
