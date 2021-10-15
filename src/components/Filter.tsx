import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const options = [
  "Overall health",
  "Steward Age",
  "Forum Post",
  "Delegators",
  "Voting Power",
  "Vote participation",
];
export const Filter = () => {
  const [selected, setSelected] = useState("");
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  const getSelectName = (option: string) => setSelected(option);
  return (
    <Menu
      gutter={0}
      isLazy={false}
      matchWidth={false}
      flip={false}
      preventOverflow={false}
    >
      <MenuButton
        as={Button}
        bg="#301041"
        borderRadius="none"
        color="#9B95B0"
        fontSize="22px"
        w="251px"
        h="63px"
        px="0.8rem"
        textAlign="left"
        rightIcon={<ChevronDownIcon color="#fff" />}
        _hover={{ bg: "#301041" }}
        _focus={{ bg: "#301041" }}
        _active={{ bg: "#301041" }}
      >
        Sort Stewards By
      </MenuButton>
      <MenuList
        bg="#1A103D"
        color="#9B95B0"
        borderWidth="0"
        borderRadius="none"
        fontSize="22px"
        w="251px"
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => getSelectName(option)}
            color={selected === option && "#fff"}
            _hover={{ bg: "#1A103D" }}
            _focus={{ bg: "#1A103D" }}
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
