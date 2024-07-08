import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
