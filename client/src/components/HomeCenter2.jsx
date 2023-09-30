import React from 'react';
import { Box, Text, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';

function HomeCenter2() {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh"
      marginTop="18rem"
      fontFamily="'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif"
      bg="#ffffcc"
    >
      <Text fontSize="xl" marginLeft={4}>
        Embark on a delightful culinary journey with our platform, where food lovers unite to share, explore, and savor diverse recipes. Yumsies brings together a vibrant community of chefs and food enthusiasts, allowing you to share, explore, and savor mouthwatering dishes from around the globe. Key features include : 
      </Text>
      <UnorderedList listStyleType="none" ml={0} mt={4} fontSize="md" className="left-aligned-list">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Explore a vast collection of mouthwatering recipes.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Share your culinary masterpieces with the world.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Connect with a vibrant community of fellow food enthusiasts.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Discover dishes from around the globe.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Unleash your inner chef and elevate your cooking skills.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" /> Stay inspired with a constant stream of new recipes and ideas.
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default HomeCenter2;
