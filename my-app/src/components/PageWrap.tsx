import { Box, BoxProps, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageWrap = ({
  children,
  ...rest
}:
  | {
      children: ReactElement;
    }
  | BoxProps): ReactElement => {
  return (
    <VStack align="stretch">
      <Header />
      <Box h="74vh" overflow="scroll" {...rest}>
        {children}
      </Box>
      <Footer />
    </VStack>
  );
};
