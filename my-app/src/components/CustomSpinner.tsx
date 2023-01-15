import { Flex, Spinner } from "@chakra-ui/react";

export const CustomSpinner = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      h="100vh"
    >
      <Spinner
        thickness="4px"
        color="primary.100"
        size="xl"
        emptyColor="primary.asBg"
      />
    </Flex>
  );
};
