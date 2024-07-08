import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({ strMeal: '',strMealThumb: '' });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({ strMeal: '', strMealThumb: '' });
  };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="strMeal"
                    value={recipe.strMeal}
                    onChange={handleChange}
                    required
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    name="strMealThumb"
                    value={recipe.strMealThumb}
                    onChange={handleChange}
                    required
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                Add Recipe
                </Button>
            </Form>
        </Container>
    );
};
export default RecipeForm;
