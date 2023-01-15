import { Box, Heading, Text, BoxProps } from "@chakra-ui/react";

export const PageHeading = ({
  title,
  subtitle,
  ...props
}: { title: string; subtitle?: string } & BoxProps) => {
  return (
    <Box {...props}>
      <Heading as="h2" fontWeight="medium" size="md">
        {title}
      </Heading>
      {subtitle?.length && (
        <Text fontSize="smaller" color="gray.500">
          {subtitle}
        </Text>
      )}
    </Box>
  );
};
