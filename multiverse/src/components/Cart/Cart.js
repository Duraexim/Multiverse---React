import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import {  Link } from 'react-router-dom'


const Cart = () => {

    const {cart} = useContext (CartContext)

    if (cart.length === 0) {
        return (

            <div>
                <h1>No hay Axies en el carrito</h1>
                 
                 <button>
                    <Link to='/' className='Option'>Volver a inicio</Link>
                 </button>
                
                
            </div>
            
            
        )
    } 

    return (

        <div className='Cart'>

            <h1>Tus Axies:</h1>
            <ItemCart/>
            <button className='Button' >Finalizar Compra</button>

        </div>
    )
}

export default Cart

