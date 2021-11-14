import './App.css';
import { Hero } from './components/Hero';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'

function App() {


  return (
    <>
        <NavBar/>
        <Hero/>
        <ItemListContainer/>
    </>
  );
}

export default App;
