import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import Logo from '../components/Logo'; // Import your Logo component

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      backgroundColor="#ffffe6"
      display="flex"
      flexDirection="column" // Add this to stack logo and the sign-up form vertically
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Logo /> {/* Render the Logo component here */}
      <Box
        backgroundColor="#ffffcc"
        padding="2rem"
        borderRadius="8px"
        boxShadow="lg"
        color="gray.500"
        height="350px"
        width="450px"
        marginTop="2rem" // Add margin between the logo and the sign-up form
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={8}>
            <FormControl>
              <Input
                type="text"
                placeholder="Enter your username*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                marginTop="1rem"
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              backgroundColor="#9900ff"
              color="white"
              _hover={{ bg: '#8800cc' }}
            >
              Log in
            </Button>
          </VStack>
        </form>
        <Text marginTop="2rem">
          New user?{' '}
          <Link color="gray.450" fontSize="sm" marginLeft="0.5rem">
            SignUp
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUp;
