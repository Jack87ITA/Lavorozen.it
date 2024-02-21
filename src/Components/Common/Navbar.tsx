import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import Logo from "../../Assets/icons/Logo";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} p={10}>
      <Box>
        <Logo />
      </Box>

      <HStack display={["none", "flex"]} spacing={10}>
        <Link fontSize={"sm"} fontWeight={500}>
          Home
        </Link>
        <Link fontSize={"sm"} fontWeight={500}>
          About
        </Link>
        <Link fontSize={"sm"} fontWeight={500}>
          Services
        </Link>
        <Link fontSize={"sm"} fontWeight={500}>
          Contact
        </Link>
      </HStack>
      <Flex display={["none", "flex"]} gap={2}>
        <Button variant="outline">Sign In</Button>
        <Button>Sign Up</Button>
      </Flex>
    </HStack>
  );
};

export default Navbar;
