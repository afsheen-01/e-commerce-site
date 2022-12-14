import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { CustomBox } from "./CustomBox";

export const Footer = (): ReactElement => {
  return (
    <CustomBox>
      <Text color="#FFF">Footer</Text>
    </CustomBox>
  );
};
