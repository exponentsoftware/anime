import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavgationLink from "./NavLink";
import Search from './../searchBar/index';

function Navigation() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="24px"
      bg="blue"
      color="white"
      justifyContent="space-between"
      justifyItems="baseline"
    >
      <Heading p={2}>
        <Link to="/">Anime</Link>
      </Heading>

      <Search />
      <NavgationLink />
    </Stack>
  );
}

export default Navigation;
