import { Box, BoxProps } from "@chakra-ui/react";
import { ReactElement } from "react";

type CustomBoxProps = {
  children: ReactElement;
  bgColor?: string;
};

export const CustomBox = (props: CustomBoxProps | BoxProps): ReactElement => {
  const { children, bgColor = "primary.100", ...rest } = props;
  return (
    <Box p={4} bgColor={bgColor} {...rest}>
      {children}
    </Box>
  );
};
