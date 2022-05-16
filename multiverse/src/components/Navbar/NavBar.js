import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';



const NavBar = (props) => {
    
    const [categories,setCategories] = useState([])
    

    useEffect (()=>{

       
        getDocs(collection(firestoreDb,'categories')).then(response=>{

            const categories = response.docs.map (doc=> {
                return {id: doc.id, ...doc.data()}
            })

            setCategories(categories)


        })

    },[])

    

    return (
        <nav className= "NavBar">
           <Link to='/'> <img className='Icono' src={'../images/NFT_Icon.png'}  alt="Icono: Logo del juego"/> </Link> 
        
        <Link className='WebName' to='/'><h3 >{props.name}</h3> </Link>       
        
        <div className='Categories'>
            
            {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'CategoriaSeleccionada' : 'Categorias'}>{cat.description}</NavLink>)}
            

        </div>     

        <div>
            <CartWidget />
        </div>

    </nav>

    )

}

export default NavBar