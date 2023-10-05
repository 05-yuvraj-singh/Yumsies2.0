import React from 'react';
import { Box, Link, Text, Flex } from "@chakra-ui/react";

function Footer() {
  const footerStyles = {
    backgroundColor: "#ff9966",
    fontFamily: "'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  };

  const linkStyles = {
    color: "white",
    margin: "25px 30px", // Add margin between links (adjust as needed)
  };

  const boxStyles = {
    marginRight: "20px", // Add horizontal margin between boxes
    textAlign: "center", // Center text within each box
  };

  return (
    <Box style={footerStyles}>
      <Flex>
        <Box style={boxStyles}>
          <div>
            <Link href="/about" style={linkStyles} >
              About Us
            </Link>
          </div>
          <div>
            <Link href="/contact-us" style={linkStyles}>
              Contact Us
            </Link>
          </div>
          <div>
            <Link href="https://github.com/05-yuvraj-singh/Yumsies2.0" style={linkStyles}>
              View Code
            </Link>
          </div>
          <div>
            <Text style={{ color: "white", margin: "10px 0" }}>
              © Copyright {new Date().getFullYear()}  Yumsies, Inc. All rights reserved.
            </Text>
          </div>
        </Box>

        <Box style={boxStyles}>
          <div>
            <Link href="/about" style={linkStyles}>
              About Us
            </Link>
          </div>
          <div>
            <Link href="/contact-us" style={linkStyles}>
              Contact Us
            </Link>
          </div>
          <div>
            <Link href="https://github.com/05-yuvraj-singh/Yumsies2.0" style={linkStyles}>
              View Code
            </Link>
          </div>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
