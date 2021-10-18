import { useContext } from "react";
import {
  Flex,
  Box,
  Image,
  Heading,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useMediaQuery,
} from "@chakra-ui/react";

import { CardInfo } from "./CardInfo";
import { observer } from "mobx-react-lite";
import StoreContext from "../mobx/store";

export const CardUser = observer(() => {
  const [isLessThan920] = useMediaQuery("(max-width: 920px)");
  const store = useContext(StoreContext);
  const { steward } = store;

  const numDivder = isLessThan920 ? 1 : 2;
  return (
    <Flex gridGap={["0.5rem", "0.75rem", "1rem", "1.25rem"]}>
      <Accordion allowMultiple defaultIndex={[]}>
        {steward.map((stewardItem, index) => {
          if (index % numDivder === 0) {
            return (
              <AccordionItem
                border="none"
                key={stewardItem.handle_gitcoin}
                w={["90vw", "95vw", "100%", 490, 590]}
                mb="1.25rem"
              >
                {({ isExpanded }) => (
                  <Box
                    boxShadow={
                      isExpanded
                        ? index % 2
                          ? "0px 0px 50px #25E899"
                          : "0px 0px 50px #F579A6"
                        : ""
                    }
                  >
                    <AccordionButton
                      bg="#1A103D"
                      h={["auto", "140px"]}
                      p="0"
                      _focus={{}}
                      _hover={
                        !isExpanded && {
                          boxShadow:
                            index % 2
                              ? "0px 0px 50px rgba(37, 232, 153, 0.5)"
                              : "0px 0px 50px rgba(245, 121, 166, 0.5)",
                        }
                      }
                    >
                      <Box
                        alignItems={["center", "start"]}
                        color="white"
                        d="flex"
                        flex="1"
                        flexDirection={["column", "row"]}
                        gridGap={[2, "30px"]}
                        py={["10px", 0]}
                        textAlign={["center", "left"]}
                      >
                        <Image
                          alt="Segun Adebayo"
                          boxSize={["180px", "140px"]}
                          objectFit="cover"
                          src={`https://picsum.photos/140/${stewardItem.statement_post_id}`}
                        />
                        <Flex direction="column">
                          <Heading
                            as="h2"
                            fontSize={["lg", "22px"]}
                            fontWeight="semibold"
                            m="23px 0 7px"
                          >
                            {stewardItem.name}
                          </Heading>
                          <Link
                            color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                            fontSize={["md", "17px"]}
                            href={`https://gitcoin.co/${stewardItem.handle_gitcoin}`}
                            isExternal
                            _hover={{ textDecoration: "none" }}
                          >
                            https://gitcoin.co/{stewardItem.handle_gitcoin}
                          </Link>
                        </Flex>
                      </Box>
                    </AccordionButton>

                    <AccordionPanel
                      bg="#1A103D"
                      h={["auto", "480px"]}
                      p="0 32px 0 28px"
                    >
                      <CardInfo {...stewardItem} />
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            );
          }
        })}
      </Accordion>
      {numDivder === 2 && (
        <Accordion allowMultiple>
          {steward.map((stewardItem, index) => {
            if (index % numDivder === 1) {
              return (
                <AccordionItem
                  border="none"
                  key={index}
                  w={["100%", 590, "100%", 490, 590]}
                  mb="1.25rem"
                >
                  {({ isExpanded }) => (
                    <Box
                      boxShadow={
                        isExpanded
                          ? index % 2
                            ? "0px 0px 50px #25E899"
                            : "0px 0px 50px #F579A6"
                          : ""
                      }
                    >
                      <AccordionButton
                        bg="#1A103D"
                        h="140px"
                        p="0"
                        _focus={{}}
                        _hover={
                          !isExpanded && {
                            boxShadow: "0px 0px 50px rgba(37, 232, 153, 0.5)",
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
                            src={`https://picsum.photos/140/${stewardItem.statement_post_id}`}
                          />
                          <Flex direction="column">
                            <Heading
                              as="h2"
                              fontSize="22px"
                              fontWeight="semibold"
                              m="23px 0 7px"
                            >
                              {stewardItem.name}
                            </Heading>
                            <Link
                              color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                              fontSize="17px"
                              href={`https://gitcoin.co/${stewardItem.handle_gitcoin}`}
                              isExternal
                              _hover={{ textDecoration: "none" }}
                            >
                              https://gitcoin.co/{stewardItem.handle_gitcoin}
                            </Link>
                          </Flex>
                        </Box>
                      </AccordionButton>

                      <AccordionPanel bg="#1A103D" h="480px" p="0 32px 0 28px">
                        <CardInfo {...stewardItem} />
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              );
            }
          })}
        </Accordion>
      )}
    </Flex>
  );
});
