import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [importance, setImportance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Math.random().toString(),
      title: name,
      price,
      category,
      importance,
      quantity: 0,
    };

    onAddProduct(newProduct);

    setName('');
    setPrice('');
    setCategory('');
    setImportance('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' id='productName' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type='text' id='productPrice' value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Category:
        <input type='text' id='productCategory' value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Importance:
        <input type='text' id='productImportance' value={importance} onChange={(e) => setImportance(e.target.value)} />
      </label>
      <input className='button' type='submit' value='Add Product' />
    </form>
  );
};

export default ProductForm;
