import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'
import { Cart } from './components/Cart'

function App() {


  return (
    <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/services" element={<ItemListContainer/>}/>
        <Route path="/services/:category" element={<ItemListContainer/>}/>
        <Route path="/services/detail/:serviceId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
