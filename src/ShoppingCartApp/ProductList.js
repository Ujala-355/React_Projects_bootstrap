import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row">
        {products.length > 0 ? (
            products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
            ))
        ) : (
            <p>No products available</p>
        )}
    </div>
  );
};

export default ProductList;
