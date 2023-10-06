import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import RecipeCard from '../components/RecipieCard';
import NavbarLogIn from '../components/NavbarLogIn';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/recipies/getrecipies';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <NavbarLogIn />
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
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
      </Box>
    </>
  );
}

export default Recipes;
