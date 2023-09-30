import React from 'react';
import { Box } from '@chakra-ui/react';
import RecipeCard from '../components/RecipieCard';
import NavbarLogIn from '../components/NavbarLogIn';
function Recipes() {
  return (
    <>
      <NavbarLogIn/>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </>
    
  );
}

export default Recipes;
