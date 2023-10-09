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
      const recipeData = {
        ...formData,
        ingredients,
        instructions,
      };

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
    <Box
       // Background color for the entire page
      h="100vh"     // Set the height of the page to 100% viewport height
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
      bg="#ffe6b3" // Grayish background color for the content box
        p="4"
        borderRadius="md"
        w="100%"       // Adjust the width of the content box
        maxW="600px"   // Set a maximum width for the content box
      >
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
<center>
<Button
  bg="#9900ff"
  color="white"
  _hover={{ bg: "blue" }} 
>
  Post Recipie
</Button>

</center>
        </form>
      </Box>
    </Box>
  );
};

export default RecipeAdd;