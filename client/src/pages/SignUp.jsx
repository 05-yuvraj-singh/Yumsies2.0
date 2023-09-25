import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link
} from '@chakra-ui/react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box
      backgroundColor="#ffffe6"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        backgroundColor="#ffffcc"
        padding="2rem"
        borderRadius="8px"
        boxShadow="lg"
        color="gray.500"
        width="400px"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl>
              <Input marginTop="1rem" color="white"
                type="email"
                placeholder="Enter your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder="Choose a username*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <FormControl>
              <Input
                type="password"
                placeholder="Confirm your password*"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              backgroundColor="#9900ff"
              color="white"
              _hover={{ bg: '#8800cc' }}
            >
              Create Account
            </Button>
          </VStack>
        </form>        <Text marginTop="2rem">
          Already a user?{' '}
          <Link color="gray.500" fontSize="sm" marginLeft="0.5rem"  >
            Login
          </Link>
        </Text>

      </Box>
    </Box>
  );
};

export default SignUp;
