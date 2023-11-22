import React from 'react';
import {
  Box,
  Text,
  FormControl,
  Link,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

function ContactUs() {
  return (
    <Box 
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="60vh"
    fontFamily="'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif">
      <Text fontSize="4xl" mt={5} mb={5} >Contact Us</Text>

      <Text>Contact our support team for assistance or inquiries.</Text>

      <form maxW="400px">
        <FormControl id="name" mt={4}>
          <Input type="text" placeholder="Your Name" />
        </FormControl>

        <FormControl id="email" mt={4}>
          <Input type="email" placeholder="Your Email Address" />
        </FormControl>

        <FormControl id="message" mt={4}>
          <Textarea
            placeholder="Write your message here..."
            rows={4}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>
      </form>

      <Text mt={4}>
        Alternatively, you can also contact the developer directly at{' '}<br/>
        <Link to="mailto:yuvrajsingh532004@gmail.com?subject=Yumsies%20-%20Contact%20Me&body=I%20wanted%20to%20convey%20that%20">GMail</Link><br/>
        <Link href="https://github.com/05-yuvraj-singh">GitHub</Link>
      </Text>

      <Text mt={2}>
        If you'd like to contribute to our project or report issues, please visit
        our GitHub repository:{' '}
        <Link href="https://github.com/05-yuvraj-singh/Yumsies2.0">
          GitHub Repository
        </Link>.
      </Text>
    </Box>
  );
}

export default ContactUs;
