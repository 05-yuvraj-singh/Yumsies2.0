import React, { useState } from 'react';
import { Box, Image, Heading, Text, VStack, Button, Center } from '@chakra-ui/react';


function RecipeCard(recipe) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  
  return (
    <Center>
      <Box fontFamily="'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif"
       borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" width="800px" margin="2rem" bg="#ffe6b3">
        <Center>
          <Text marginTop={5} fontWeight="bold">
            By <a href="#">{recipe.author}</a>
          </Text>
        </Center>
        <Center>

        <Image src={recipe.imageUrl} alt={recipe.title} marginTop={8}  width="400px" height="400px" />
        </Center>
        <Box p="4" margin={6}>
          <Heading as="h2" fontSize="xl" fontWeight="semibold" mb="2">
            {recipe.title}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb="2">
            {recipe.description}
          </Text>
          <VStack align="start"  margin={4}>
            <Text fontWeight="bold">
               
              <Button bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }} size="sm" onClick={() => setShowIngredients(!showIngredients)} ml="1rem">
                {showIngredients ? 'Hide' : 'Ingredients'}
              </Button>
            </Text>
            {showIngredients &&
              recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>
                  {index + 1}. {ingredient}
                </Text>
              ))}
          </VStack>
          <VStack align="start"  margin={4}>
            <Text fontWeight="bold"> 
              <Button bg="#9900ff"
          color="white"
          _hover={{ bg: "blue" }} size="sm" onClick={() => setShowInstructions(!showInstructions)} ml="1rem">
                {showInstructions ? 'Hide' : 'Instructions'}
              </Button>
            </Text>
            {showInstructions &&
              recipe.instructions.map((instruction, index) => (
                <Text key={index}>
                  {index + 1}. {instruction}
                </Text>
              ))}
          </VStack>
          {/* <Button colorScheme="teal" size="sm" mt="4">
            Like ({recipe.likes})
          </Button> */}


    {/* <Box onClick={onClick} cursor="pointer">
      {liked ? <Icon as={AiFillHeart} color="red.500" boxSize={6} /> : <Icon as={AiOutlineHeart} boxSize={6} />}
    </Box> */}


          <Text margin={3} fontSize="sm" color="gray.500">
            Posted on: {new Date(recipe.createdAt).toLocaleDateString()}
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default RecipeCard;


// import React from 'react';
// import { Box, Icon } from '@chakra-ui/react';

// function LikeIcon({ liked, onClick }) {
//   return (
//   );
// }

// export default LikeIcon;
