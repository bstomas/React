import React from 'react';

const ProductItem = ({ product, onIncrement, onDecrement }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>id: {product.id}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Importance: {product.importance}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default ProductItem;
