import React from 'react';
import { Box, Link, Text } from "@chakra-ui/react";

function Footer() {
  const footerStyles = {
    backgroundColor: "#ff9966", // Background color
    fontFamily: "'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif",
    display: "flex",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    height: "40vh",
  };

  const linkStyles = {
    color: "white", // White color for links
    margin: "0 10px", // Add margin between links
  };

  return (
    <Box style={footerStyles}>
      <Link href="/about" style={linkStyles}>
        About Us
      </Link>
      <Link href="" style={linkStyles}>
        Contact Us
      </Link>
      <Link href="" style={linkStyles}>
        View Code
      </Link>
      <Text style={{ color: "white", margin: "0 10px" }}>
        © Copyright {new Date().getFullYear()}  Yumsies , inc. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
