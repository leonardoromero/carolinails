import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidx a mi página web!" className=''/>
    </>
  );
}

export default App;
