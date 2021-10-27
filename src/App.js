import React from 'react';
import './App.css';
import data from './components/Data';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes/Routes';
import useLocalStorage from './components/LocalStorage/LocalStorage';

function App() {
  //Get products information
  const { products } = data
  const [cartItems, setCartItems] = useLocalStorage("products", products)

  //Function add products
  const handleAddProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, number: productExist.number + 1 } : item)
      )
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }])
    }
  }
  //Function remove products
  const handleRemoveProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if (productExist.number === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(cartItems.map(item => item.id === product.id ?
        { ...productExist, number: productExist.number - 1 } : item
      ))
    }
  }
  //Function clear all cart items
  const handleClearCartItems = () => {
    setCartItems([])
  }
  return (
    <div className="container">
      <Router>
        <Header cartItems={cartItems} />
        <Routes
          products={products}
          cartItems={cartItems}
          handleAddProducts={handleAddProducts}
          handleRemoveProducts={handleRemoveProducts}
          handleClearCartItems={handleClearCartItems}
        />
      </Router>
    </div>
  );
}

export default App;
