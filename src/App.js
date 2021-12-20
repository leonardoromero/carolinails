import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import { Scheduling } from './components/Scheduling';
import { NotFound } from './components/NotFound';

function App() {

  return (

  <CartProvider>
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/services" element={<ItemListContainer/>}/>
          <Route path="/services/:category" element={<ItemListContainer/>}/>
          <Route path="/services/detail/:serviceId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/scheduling" element={<Scheduling/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
  </CartProvider>

);
}

export default App;
