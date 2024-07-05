import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import './styles.css';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "20111d93272c27e3f8bcaea51ad28701";

  const getWeather = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found. Please try again.");
    }
  };

  return (
    <Container className="weather-container">
      <h1 className="text-center mb-4">Weather App</h1>
      <Form onSubmit={getWeather} className="weather-form">
        <Form.Group>
          <Form.Label>Enter city name:</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get Weather
        </Button>
      </Form>
      {error && <p className="text-danger mt-3">{error}</p>}
      {weather && (
        <Card className="mt-3 weather-card">
          <Card.Body>
            <Card.Title className="text-center">{weather.name}</Card.Title>
            <Row>
              <Col xs={12} md={6} className="text-center">
                <Card.Text>
                  <strong>Temperature:</strong> {weather.main.temp} °C
                </Card.Text>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Card.Text>
                  <strong>Weather:</strong> {weather.weather[0].description}
                </Card.Text>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Card.Text>
                  <strong>Humidity:</strong> {weather.main.humidity}%
                </Card.Text>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Card.Text>
                  <strong>Wind Speed:</strong> {weather.wind.speed} m/s
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default WeatherApp;
