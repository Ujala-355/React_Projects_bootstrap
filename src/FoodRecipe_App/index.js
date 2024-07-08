import React, { useState, useEffect } from 'react';
import NavigationBar from './Navbar';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import { Container } from 'react-bootstrap';

const Main = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => setRecipes(data.meals));
  }, []);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <NavigationBar />
      <Container className="mt-4">
        <h1>Food Recipe App</h1>
        <RecipeForm addRecipe={addRecipe} />
        <RecipeList recipes={recipes} />
      </Container>
    </div>
  );
};

export default Main;
