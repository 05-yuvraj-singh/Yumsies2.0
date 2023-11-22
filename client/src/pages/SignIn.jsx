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

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({'username':username,'password':password}),
      })
      // localStorage.setItem("token" , await response.json())
      if(response.status==200){
        alert(`${username} Logged IN Successfully`)
          window.location.href='/home'
      }

      } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Box
    backgroundColor="#ffffe6"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
  >
    <Text fontSize="4xl" fontWeight="bold" marginBottom="2rem">
      SignIn
    </Text>
  {/* <Logo /> Render the Logo component here */}
      <Box
        backgroundColor="#ffffcc"
        padding="2rem"
        borderRadius="8px"
        boxShadow="lg"
        color="black"
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
          <Link to="/sign-up" color="gray.450" fontSize="sm" marginLeft="0.5rem">
            SignUp
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignIn;
