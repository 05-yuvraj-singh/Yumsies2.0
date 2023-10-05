import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  Badge,
  Flex,
  Spacer,
  Divider,
} from '@chakra-ui/react';

const user = {
  name: 'Yuvraj Singh',
  email: 'yuvrajsingh@gmail.com',
  username: '05-yuvraj-singh',
  recipes: [
    {
      title: 'Delicious Chocolate Cake',
      description: 'A rich and decadent chocolate cake recipe.',
      // ... other recipe properties ...
      createdAt: '2023-09-27T12:00:00.000Z',
    },
    // ... more recipes ...
  ],
  createdAt: new Date(2020, 4, 5),
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function Profile() {
  const customFontFamily = "'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif";

  return (
    <Box p={4} maxW="800px" mx="auto">
    <Box bg="#ffffcc" maxW="1200px">
      <VStack align="left" spacing={4}>
        <Box >
          <Image
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            boxSize="150px"
            objectFit="cover"
            borderRadius="full"
          />
        </Box>
        <Text fontSize="lg" fontFamily={customFontFamily} ml={5}>
          <strong>Name:</strong> {user.name}
        </Text>
        <Text fontSize="lg" fontFamily={customFontFamily} ml={5}>
          <strong>Email:</strong> {user.email}
        </Text>
        <Text fontSize="lg" fontFamily={customFontFamily} ml={5}>
          <strong>Username:</strong> {user.username}
        </Text>
        <Text fontSize="lg" fontFamily={customFontFamily} ml={5} mb={5}>
          <strong>Member Since:</strong> {formatDate(user.createdAt)}
        </Text>
      </VStack>

      <Divider my={6} />

      <Heading as="h3" size="lg" fontFamily={customFontFamily} mb={4}>
        Recipes
      </Heading>

      {user.recipes.map((recipe, index) => (
        <Box key={index} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <HStack spacing={4}>
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              boxSize="150px"
              objectFit="cover"
              borderRadius="lg"
            />
            <Box>
              <Heading as="h4" size="md" fontFamily={customFontFamily}>
                {recipe.title}
              </Heading>
              <Text fontSize="md" fontFamily={customFontFamily}>
                {recipe.description}
              </Text>
              <Text fontFamily={customFontFamily}>
                <strong>Author:</strong> {recipe.author}
              </Text>
              <Text fontFamily={customFontFamily}>
                <strong>Likes:</strong> {recipe.likes}
              </Text>
              <Text fontFamily={customFontFamily}>
                <strong>Created At:</strong> {formatDate(recipe.createdAt)}
              </Text>
            </Box>
            <Spacer />
            <Badge colorScheme="green">Featured</Badge>
          </HStack>
        </Box>
      ))}
    </Box>
    </Box>
  );
}

export default Profile;
