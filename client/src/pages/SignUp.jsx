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
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({'name':name , 'email':email , 'username':username,'password':password}),
        });
  
        if (response.ok) {
          console.log("Signup successful");
          alert(`${name} Registered Successfully`)
          window.location.href='/sign-in'
        } else {
          // Handle signup error, e.g., show an error message
          console.error("Signup failed");
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
    <Text fontSize="2xl" fontWeight="bold" marginBottom="2rem">
      SignUp 
    </Text>


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
              <Input marginTop="1rem" color="black"
                type="name"
                placeholder="Enter your name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input  color="black"
                type="email"
                placeholder="Enter your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input color="black"
                type="text"
                placeholder="Choose a username*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input color="black"
                type="password"
                placeholder="Enter your password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input color="black"
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
