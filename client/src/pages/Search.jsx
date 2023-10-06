import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import RecipeCard from '../components/RecipieCard';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  
  useEffect(() => {
    const API_ENDPOINT = `http://localhost:5000/api/recipies/search-recepie?term=${searchText}`;  
    
    fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      setRecipes(data)
    })
    .catch((error) => {
      console.error('Error fetching recipes:', error);
    });
  }, [searchText]);
  

  return (
    <Box p={4}>
      <VStack align="center" spacing={4}>
        <Heading as="h2" mb={4}>
          Search Recipes
        </Heading>
        <Input
          type="text"
          placeholder="Search for recipes..."
          value={searchText}
          onChange={handleSearchChange}
          maxW="400px"
        />
      </VStack>

      {recipes.length > 0 && (
        <Box mt={8}>
          <Text fontSize="lg" fontWeight="bold">
            Search Results:
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {recipes.map((recipe, index) => (
      

              <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            imageUrl={recipe.imageUrl}
            author={recipe.author}
            likes={recipe.likes}
            createdAt={recipe.createdAt}
          />
            ))}
          </Grid> 

        </Box>
      )}
    </Box>
  );
}

export default Search;
