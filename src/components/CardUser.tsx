import { useState } from "react";
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
  // const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box w="full">
      <Accordion allowMultiple defaultIndex={[0]} ml="100px">
        <AccordionItem maxW="590px">
          {({ isExpanded }) => (
            <Box
            // boxShadow={
            //   isExpanded
            //     ? index % 2
            //       ? "0px 0px 50px #F579A6"
            //       : "0px 0px 50px #25E899"
            //     : ""
            // }
            >
              <AccordionButton
                bg="#1A103D"
                h="140px"
                p="0"
                _focus={{}}
                _hover={
                  !isExpanded && {
                    boxShadow: "0px 0px 50px rgba(245, 121, 166, 0.5);",
                  }
                }
              >
                <Box
                  color="white"
                  d="flex"
                  flex="1"
                  gridGap="30px"
                  textAlign="left"
                >
                  <Image
                    alt="Segun Adebayo"
                    boxSize="140px"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Flex direction="column">
                    <Heading
                      as="h2"
                      fontSize="22px"
                      fontWeight="semibold"
                      m="23px 0 7px"
                    >
                      Dianne Russell
                    </Heading>
                    <Link
                      color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                      fontSize="17px"
                      href="https://gitcoin.co/username"
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      https://gitcoin.co/username
                    </Link>
                  </Flex>
                </Box>
              </AccordionButton>

              <AccordionPanel bg="#1A103D" h="479px" p="0 32px 0 28px">
                <CardInfo />
              </AccordionPanel>
            </Box>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
