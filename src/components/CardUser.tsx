import {
  Flex,
  Box,
  Image,
  Heading,
  Link,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { CardInfo } from "./CardInfo";

export const CardUser = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Box w="full">
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem maxW="590px">
          {({ isExpanded }) => (
            <>
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
                      color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                      fontSize="17px"
                      href="https://gitcoin.co/username"
                      _hover={{ textDecoration: "none" }}
                      isExternal
                    >
                      https://gitcoin.co/username
                    </Link>
                  </Flex>
                </Box>
              </AccordionButton>

              <AccordionPanel bg="#1A103D" p="0 32px 0 28px" h="479px">
                <CardInfo />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
