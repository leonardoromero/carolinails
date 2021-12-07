import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'
import { Cart } from './components/Cart'
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { Checkout } from './components/Checkout';

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart( [...cart, item])
  }

  const removeFromCart = (id) => {
    setCart( cart.filter(item => item.id !== id))
  }

  const deleteCart = () => {
    setCart([])
  }

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.count, 0)
  }

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  return (

    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        deleteCart,
        totalQuantity,
        totalCart,
        isInCart
    }}>
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/services" element={<ItemListContainer/>}/>
          <Route path="/services/:category" element={<ItemListContainer/>}/>
          <Route path="/services/detail/:serviceId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
