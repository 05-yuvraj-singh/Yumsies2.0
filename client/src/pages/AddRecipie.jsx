import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
} from '@chakra-ui/react';

const RecipeAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [instructionInput, setInstructionInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== '') {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  const handleAddInstruction = () => {
    if (instructionInput.trim() !== '') {
      setInstructions([...instructions, instructionInput]);
      setInstructionInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a recipe object with all data
      const recipeData = {
        ...formData,
        ingredients,
        instructions,
      };

      // Make a POST request to your backend API to create a new recipe
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });
      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log('Recipe added successfully');
      } else {
        // Handle errors (e.g., display error message)
        console.error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </FormControl>

        <Stack direction="column" spacing={4}>
          <FormControl>
            <FormLabel>Ingredients</FormLabel>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {ingredient}
                </p>
              </div>
            ))}
            <Input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <Button onClick={handleAddIngredient}>Add Ingredient</Button>
          </FormControl>

          <FormControl>
            <FormLabel>Instructions</FormLabel>
            {instructions.map((instruction, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {instruction}
                </p>
              </div>
            ))}
            <Textarea
              value={instructionInput}
              onChange={(e) => setInstructionInput(e.target.value)}
            />
            <Button onClick={handleAddInstruction}>Add Instruction</Button>
          </FormControl>
        </Stack>

        <Button type="submit" mt="4" colorScheme="blue">
          Add Recipe
        </Button>
      </form>
    </Box>
  );
};

export default RecipeAdd;
