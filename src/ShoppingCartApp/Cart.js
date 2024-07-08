import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="card">
        <div className="card-header">
            Cart
        </div>
        <div className="card-body">
            {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
            ) : (
            cartItems.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))
            )}
        </div>
        <div className="card-footer">
            <h5>Total: ${total.toFixed(2)}</h5>
            <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
        </div>
        </div>
    );
};

export default Cart;
