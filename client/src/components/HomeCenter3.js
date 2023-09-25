import React from 'react';
import { Box, Text, Button } from "@chakra-ui/react";

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
      <Button colorScheme="blue" size="lg">
        Signup
      </Button>
    </Box>
  )
}

export default HomeCenter3