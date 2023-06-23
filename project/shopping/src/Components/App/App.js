import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import ProductArea from '../ProductArea/ProductArea';
import ProductForm from '../ProductForm/ProductForm';
import Footer from '../Footer/Footer';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleIncrement = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    console.log(updatedProducts);
  };

  const handleDecrement = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    console.log(updatedProducts);
  };

  return (
    <div className="App">
      <Header />
      <div className='section'>
        <ProductArea products={products} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
        <div className='form'>
          <ProductForm onAddProduct={handleAddProduct} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
