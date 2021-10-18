import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    alignItems={["center", "start"]}
    spacing={["1.8rem", "4rem"]}
    width="100%"
    maxWidth="75rem"
    pt={["1rem", "7rem"]}
    px={["4%", "2%", "0.6%"]}
    {...props}
  />
);
