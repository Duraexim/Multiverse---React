import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/IteamDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';


const App = () => {

  const title = 'Multiverse'

  
  return (
    <div className="App">

        <CartContextProvider>

      
              <BrowserRouter>
                  <NavBar name={title} />
                  
                  <Routes>
                    <Route path= '/' element={<ItemListContainer/>}/>
                    <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path= '/detail/:axieId' element={<ItemDetailContainer/>}/>
                    <Route path= '*' element={<h1>NOT FOUND 404</h1>}/>
                  </Routes>
              </BrowserRouter>
        </CartContextProvider>

     </div>
       
  );
}

export default App;
