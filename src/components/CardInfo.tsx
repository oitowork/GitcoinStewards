import {
  Flex,
  Box,
  List,
  ListItem,
  Text,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Steward } from "../model/stewards.interface";
import CalendarIcon from "../../public/icons/calendar.svg";
import MessageIcon from "../../public/icons/message.svg";
import UserIcon from "../../public/icons/user.svg";
import CheckIcon from "../../public/icons/check.svg";
import FlashIcon from "../../public/icons/flash.svg";
const levelActive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const CardInfo = ({ ...spread }: Steward) => {
  const {
    health,
    participation_snapshot,
    participation_tally,
    posts,
    steward_since,
    votingweight,
  } = spread;

  return (
    <>
      <Flex gridGap="7px" py="20px">
        {levelActive.map((item) => {
          return (
            <Divider
              key={item}
              borderLeftWidth="0"
              w="3px"
              h="30px"
              bg={health > item ? "#02E2AC" : "#02e2ac54"}
              orientation="vertical"
            />
          );
        })}
      </Flex>
      <List color="#9B95B0" fontSize="22px">
        <ListItem
          alignItems="center"
          d="flex"
          justifyContent="space-between"
          mb="24px"
          w="full"
        >
          <Box d="flex" alignItems="center">
            <CalendarIcon />
            <Text ml="22px">Steward since</Text>
          </Box>
          <Text>{steward_since}</Text>
        </ListItem>

        <ListItem
          alignItems="center"
          d="flex"
          justifyContent="space-between"
          mb="24px"
          w="full"
        >
          <Box d="flex" alignItems="center">
            <MessageIcon />
            <Text ml="22.5px">Forum post</Text>
          </Box>
          <Text>{posts}</Text>
        </ListItem>

        <ListItem
          alignItems="center"
          d="flex"
          justifyContent="space-between"
          mb="24px"
          w="full"
        >
          <Box d="flex" alignItems="center" ml="-6px">
            <UserIcon />
            <Text ml="19px">Delegators</Text>
          </Box>
          <Text>{participation_tally}</Text>
        </ListItem>

        <ListItem
          alignItems="center"
          d="flex"
          justifyContent="space-between"
          mb="24px"
          w="full"
        >
          <Box d="flex" alignItems="center">
            <CheckIcon />
            <Text ml="28px">Voting power</Text>
          </Box>
          <Text>{votingweight}%</Text>
        </ListItem>

        <ListItem
          alignItems="center"
          d="flex"
          justifyContent="space-between"
          w="full"
        >
          <Box d="flex" alignItems="center">
            <FlashIcon />
            <Text ml="28px">Vote participation</Text>
          </Box>
          <Text>{participation_snapshot}%</Text>
        </ListItem>
      </List>

      <Flex
        justify="space-between"
        align="center"
        mt="28px"
        color="#0E0333"
        fontWeight="semibold"
      >
        <Button
          bg="#F579A6"
          fontSize="22px"
          h="66px"
          variant="unstyled"
          w="176px"
          _focus={{}}
        >
          Statement
        </Button>
        <Button
          bg="#5BF1CD"
          fontSize="22px"
          h="66px"
          variant="unstyled"
          w="161px"
          _focus={{}}
        >
          Delegate
        </Button>
      </Flex>
    </>
  );
};
