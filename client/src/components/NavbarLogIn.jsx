import React from "react";
import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import the router Link component

function NavbarLogIn() {
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
      <Link as={RouterLink} to="/recipie">

        <Button
          bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }} 
          marginRight={12}
        >
          Home
        </Button>
    <Link/>

    <Link as={RouterLink} to="/search">

        <Button
          bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }} 
          marginRight={12}
        >
          Search
        </Button>
</Link>

<Link as={RouterLink} to="/profile">

        <Button
          bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }} 
          marginRight={12}
        >
Profile
        </Button>
        </Link>
      </Link>
    </Flex>
  );
}

export default NavbarLogIn;
