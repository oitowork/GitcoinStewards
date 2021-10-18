import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { CardUser } from "../components/CardUser";
import { Filter } from "../components/Filter";

const Index = () => (
  <Container minH="100vh">
    <Main>
      <Filter />
      <CardUser />
    </Main>
  </Container>
);

export default Index;
