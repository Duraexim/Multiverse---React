import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/IteamDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './Notification/Notification';


const App = () => {

  const title = 'Multiverse'

  
  return (
    <div className="App">

      <NotificationProvider>
        <CartContextProvider>

      
              <BrowserRouter>
                  <NavBar name={title} />
                  
                  <Routes>
                    <Route path= '/' element={<ItemListContainer/>}/>
                    <Route path= '/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path= '/detail/:axieId' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart />} />
                    <Route path= '*' element={<h1>NOT FOUND 404</h1>}/>
                  </Routes>
              </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
     </div>
       
  );
}

export default App;
