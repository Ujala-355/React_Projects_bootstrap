import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
        <div className="item-details">
            {item.name}
        </div>
        <div className="item-price">
            ${item.price.toFixed(2)}
        </div>
        <button className="btn btn-danger btn-sm remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
