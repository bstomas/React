import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Products from '../ProductItem/Products/Products';

function ProductArea({ onIncrement, onDecrement }) {
  const { products } = Products();
  return (
    <div className='div'>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductArea;
