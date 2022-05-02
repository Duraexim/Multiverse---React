import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import { getCategories } from '../../mock/axies';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';
import CartContext from '../../context/CartContext';


const NavBar = (props) => {
    
    const [categories,setCategories] = useState([])
    const {cart} = useContext (CartContext)

    useEffect (()=>{

        /*getCategories().then(categories=>{
            setCategories(categories)

        }) */

        getDocs(collection(firestoreDb,'categories')).then(response=>{

            const categories = response.docs.map (doc=> {
                return {id: doc.id, ...doc.data()}
            })

            setCategories(categories)


        })

    },[])

    

    return (
        <nav className= "NavBar">
           <Link to='/'> <img  src={'../images/NFT_Icon.png'} width={50} alt="Icono: Logo del juego"/> </Link> 
        
        <Link className='WebName' to='/'><h3 >{props.name}</h3> </Link>       
        
        <div className='Categories'>
            
            {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.description}</NavLink>)}
            

        </div>     

        <div className={cart.length === 0 ? "visually-hidden":"d-block"}>
            <CartWidget />
        </div>

    </nav>

    )

}

export default NavBar