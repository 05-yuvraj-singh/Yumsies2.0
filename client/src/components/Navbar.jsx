// Navbar.js
import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      as="nav"
      bg="#ffffcc"
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        {/* Your logo or site title can go here */}
        <strong>Yumsies</strong>
      </Box>
      <Button
        bg="#9900ff"
        color="white"
        _hover={{ bg: "#7a00cc" }} // Optional hover color
      >
        Login
      </Button>
    </Flex>
  );
}

export default Navbar;
