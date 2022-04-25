import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const {getQuantity} = useContext (CartContext)


    return (
        

        <Link to='/cart' className="CartWidget">
             <img className='CartImg' src="../images/Carrito.svg" alt="carrito"/>
             {getQuantity()}
        </Link>


    );
}

export default CartWidget