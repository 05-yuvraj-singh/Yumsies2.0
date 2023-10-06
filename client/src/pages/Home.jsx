import React, { useState } from 'react';
import Footer from '../components/Footer';
import HomeCenter1 from '../components/HomeCenter1';
import HomeCenter2 from '../components/HomeCenter2';
import Navbar from '../components/Navbar';
import SignUp from './SignUp';
import { Box, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; 

import '../styles/home-styles.css';
import '../styles/sign-up.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div>
      <Navbar />
      <div className={`${showSignUp ? 'blur' : ''}`}>
        <HomeCenter1 />
        <HomeCenter2 />
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
      <Button
          mt={4}
          bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }}
          onClick={toggleSignUp}
        >
          SignUp
        </Button>
      </Link>
    </Box>
      </div>
      {showSignUp && (
        <div className = "signup-carousel"><SignUp /></div>
        )
        
        } 
      <Footer />
    </div>
  );
}

export default App;
