import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = (props) => {
    console.log (props); 

    return (
        <nav className= "NavBar">
        <img  src={'./images/NFT_Icon.png'} width={50} alt="Icono: Logo del juego"/>
        <div><h3>{props.name}</h3> </div>       
        
        <div>
            <button> Inicio</button>
            <button> Jugar</button>
            <button> Videos</button>
            <button> Fotos</button>
            <button> Contacto</button>
        </div>     

        <div>
            <CartWidget />
        </div>
        
        
        
        
    </nav>
        

     
    )


}

export default NavBar