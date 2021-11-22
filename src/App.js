import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ItemDetail } from './components/ItemDetail';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'

function App() {


  return (
    <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route path="/" element={ <Hero/> }/>
        <Route path="/services" element={<ItemListContainer/>}/>
        <Route path="/services/detail/:serviceId" element={<ItemDetailContainer/>}/>
        <Route path="/services/:category" element={<ItemListContainer/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
