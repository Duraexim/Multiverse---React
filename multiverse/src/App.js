import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {

  const title = 'Multiverse'
  
  return (
    <div className="App">

      <NavBar name={title} />
      <ItemListContainer greeting={'Curso React'}/>
      
     </div>
    
   
  );
}

export default App;
