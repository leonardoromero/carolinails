import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'

function App() {


  return (
    <>
        <NavBar/>
        <Hero/>
        <ItemListContainer/>
        <Footer/>
    </>
  );
}

export default App;
