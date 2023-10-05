import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  Button,
  Spacer,
  Grid,
  GridItem,
} from '@chakra-ui/react';

function FindUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define your backend API endpoint to fetch users here
    const API_ENDPOINT = '/api/users';

    // Make a GET request to the backend using fetch or axios
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleFollowClick = (userId) => {
    // Implement follow logic here, e.g., make a POST request to the backend
    // to add the user to the list of followed users
    console.log(`Following user with ID ${userId}`);
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Find Users to Follow
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {users.map((user, index) => (
          <GridItem key={index}>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <HStack spacing={4}>
                <Image
                  src={user.profilePicUrl}
                  alt={user.name}
                  boxSize="50px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <VStack align="left" spacing={0}>
                  <Text fontSize="sm">{user.username}</Text>
                </VStack>
                <Spacer />
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() => handleFollowClick(user.id)}
                >
                  Follow
                </Button>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default FindUsers;
