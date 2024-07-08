import React from 'react';
import { Card } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.strMealThumb} />
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
        {/* <Card.Text>{recipe.strInstructions}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Recipe;
