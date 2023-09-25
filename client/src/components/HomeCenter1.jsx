import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import logo from '../assets/full-logo.png';
import img1 from '../assets/img1.png';

export default function HomeCenter1() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh"
      fontFamily="'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif"
    >
      <Text
        fontSize="6xl" 
        fontWeight="bold" 
        marginBottom="3rem"
        marginTop="15rem"
        textAlign="center" 
      >
        Welcome to Yumsies - Your Culinary Playground!
      </Text>
      <Image
        src={img1}
        alt="Centered Image"
        maxW="1000px"
      />
    </Box>
  );
}
