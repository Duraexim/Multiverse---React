import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/IteamDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const App = () => {

  const title = 'Multiverse'

  
  return (
    <div className="App">

        <BrowserRouter>
            <NavBar name={title} />
            
            <Routes>
              <Route path= '/' element={<ItemListContainer/>}/>
              <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path= '/detail/:axieId' element={<ItemDetailContainer/>}/>

              <Route path= '*' element={<h1>NOT FOUND 404</h1>}/>
            </Routes>
        </BrowserRouter>
      
     </div>
       
  );
}

export default App;
