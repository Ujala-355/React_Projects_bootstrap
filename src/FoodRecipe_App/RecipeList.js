import React from 'react';
import Recipe from './Recipe';
import { Container, Row, Col } from 'react-bootstrap';

const RecipeList = ({ recipes }) => {
    return (
        <Container>
            <Row>
                {recipes.map((recipe, index) => (
                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                    <Recipe recipe={recipe} />
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RecipeList;
