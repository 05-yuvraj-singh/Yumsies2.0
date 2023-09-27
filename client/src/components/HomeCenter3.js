import React from "react";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import the router Link component

function HomeCenter3() {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center" // Center vertically
      justifyContent="center"
      height="60vh"
    >
      <Text fontSize="5xl" fontWeight="bold" mb={4}>
        Ready to get started?
      </Text>
      <Link as={RouterLink} to="/sign-up">

      <Button colorScheme="blue" size="lg">
        Signup
      </Button>
      </Link>
    </Box>
  )
}

export default HomeCenter3