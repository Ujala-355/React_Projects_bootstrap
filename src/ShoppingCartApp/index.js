import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';

const Main= () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => {
            const formattedData = data.meals.map(meal => ({
            id: meal.idMeal,
            name: meal.strMeal,
            price: parseFloat((Math.random() * 100).toFixed(2)),  // Ensure price is a number
            image: meal.strMealThumb
            }));
            setProducts(formattedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <Navbar cartItemsCount={cartItems.length} />
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-8">
                    <ProductList products={products} addToCart={addToCart} />
                </div>
                <div className="col-md-4">
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
