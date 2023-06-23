import {useState} from 'react'
import './App.scss';
import Header from '../Header/Header';
import Item from '../Item/Item';
import List from '../List/List';
// import Cart from '../Cart/Cart';

function App() {
  const [products, setProducts] = useState([])
  // const [budget, setBudget] = useState(100)

  // const addProduct = (newProduct) => {
  //   setProducts([...products, newProduct])
  // }

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId))
  }

  // const markProductAsAdded = (productId) => {
  //   setProducts(
  //     products.map((product) => {
  //       if (product.id === productId) {
  //         return {
  //           ...product,
  //         addedToCart: true          }
  //       }
  //     })
  //   )

  return (
    <div className="App">
      <Header />
      <List
      products={products}
      deleteProduct={deleteProduct}
      // markProductAsAdded={markProductAsAdded}
       />
       <Item />
    </div>
  );
}


export default App;
