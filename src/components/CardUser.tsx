import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Image,
  Heading,
  Link,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { CardInfo } from "./CardInfo";
interface Data {
  name: string;
  image: string;
  handle_gitcoin: string;
  handle_forum: string;
  statement_post_id: number;
  steward_since: string;
  workstream: string;
  address: string;
  health: number;
  posts: number;
  votingweight: number;
  participation_snapshot: number;
  participation_tally: number;
}

export const CardUser = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {data.map((item, index) => {
        // console.log(item);
        if (index % 2 == 0) {
          return (
            <Box>
              <AccordionItem maxW="590px" key={index}>
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
                          src={`https://picsum.photos/140/${item.statement_post_id}`}
                        />
                        <Flex direction="column">
                          <Heading
                            as="h2"
                            fontSize="22px"
                            fontWeight="semibold"
                            m="23px 0 7px"
                          >
                            {item.name}
                          </Heading>
                          <Link
                            color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                            fontSize="17px"
                            href={`https://gitcoin.co/${item.handle_gitcoin}`}
                            isExternal
                            _hover={{ textDecoration: "none" }}
                          >
                            https://gitcoin.co/{item.handle_gitcoin}
                          </Link>
                        </Flex>
                      </Box>
                    </AccordionButton>

                    <AccordionPanel bg="#1A103D" h="479px" p="0 32px 0 28px">
                      <CardInfo info={item} />
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Box>
          );
        } else {
          return (
            <Box>
              <AccordionItem maxW="590px" key={index}>
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
                          src={`https://picsum.photos/140/${item.statement_post_id}`}
                        />
                        <Flex direction="column">
                          <Heading
                            as="h2"
                            fontSize="22px"
                            fontWeight="semibold"
                            m="23px 0 7px"
                          >
                            {item.name}
                          </Heading>
                          <Link
                            color={isExpanded ? "#5BF1CD" : "#9B95B0"}
                            fontSize="17px"
                            href={`https://gitcoin.co/${item.handle_gitcoin}`}
                            isExternal
                            _hover={{ textDecoration: "none" }}
                          >
                            https://gitcoin.co/{item.handle_gitcoin}
                          </Link>
                        </Flex>
                      </Box>
                    </AccordionButton>

                    <AccordionPanel bg="#1A103D" h="479px" p="0 32px 0 28px">
                      <CardInfo info={item} />
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Box>
          );
        }
      })}
    </Accordion>
  );
};
