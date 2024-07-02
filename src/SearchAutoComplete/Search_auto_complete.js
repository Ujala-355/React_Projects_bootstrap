// SearchAutoComplete.js
import React, { useState, useEffect } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";

const SearchAutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const filteredSuggestions = data
        .map(user => user.name)
        .filter(name => name.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Failed to fetch suggestions:', error);
    }
  };

  return (
    <div className="search-autoComplete">
      <h1>Search Autocomplete</h1>
      <Form>
        <FormControl
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      {suggestions.length > 0 && (
        <ListGroup>
          {suggestions.map((suggestion, index) => (
            <ListGroup.Item key={index}>{suggestion}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchAutoComplete;
