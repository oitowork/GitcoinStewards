import {
  Flex,
  Box,
  Image,
  Heading,
  Link,
  Divider,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
const levelActive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
export const CardUser = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Box w="full">
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem w="590px">
          <h2>
            <AccordionButton
              h="140px"
              bg="#1A103D"
              _hover={{ boxShadow: "0px 0px 50px rgba(245, 121, 166, 0.5);" }}
              p="0"
            >
              <Box
                d="flex"
                flex="1"
                textAlign="left"
                color="white"
                gridGap="30px"
              >
                <Image
                  boxSize="140px"
                  objectFit="cover"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Flex direction="column">
                  <Heading
                    as="h2"
                    fontWeight="semibold"
                    fontSize="22px"
                    m="23px 0 7px"
                  >
                    Dianne Russell
                  </Heading>
                  <Link
                    fontSize="17px"
                    color="#9B95B0"
                    isExternal
                    href="https://gitcoin.co/username"
                  >
                    https://gitcoin.co/username
                  </Link>
                </Flex>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box d="flex" gridGap="7px">
              {levelActive.map((item) => {
                return (
                  <Divider
                    key={item}
                    w="2px"
                    h="30px"
                    bg={num > item ? "#02E2AC" : "#02e2ac54"}
                    orientation="vertical"
                  />
                );
              })}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
