import React from "react";
import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import the router Link component

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
      {/* Wrap the Button with RouterLink */}
      <Link as={RouterLink} to="/sign-in">
        <Button
          bg="#9900ff"
          color="white"
          _hover={{ bg: "#7a00cc" }} // Optional hover color
        >
          Login
        </Button>
      </Link>
    </Flex>
  );
}

export default Navbar;
