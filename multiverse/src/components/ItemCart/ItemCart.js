import './ItemCart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const ItemCart = () => {

    const {cart,removeItem} = useContext (CartContext)

    return (
             
        <div className="ItemsCart">


            {
                cart.map ( axie => 
                    
            
                <article className='CardItem'>

                        <header className='Header'>
                            
                            <h2 className='ItemHeader'>
                                {axie.clase}
                            </h2>

                        </header>

                        <picture>
                            <img src={axie.img} alt={axie.clase} className='ItemImg'/>
                        </picture>

                        <section>
                            
                            <p className='Info'>
                                Precio unitario: ${axie.precio}
                            </p>

                            <p className='Info'>
                                Cantidad: {axie.quantity}
                            </p>

                            <p className='Info'>
                                Subtotal: ${axie.quantity * axie.precio}
                            </p>

                            <button className='ButtonQuitar' onClick={() => removeItem(axie.id)}>Quitar del carrito</button>
                            

                        </section>

                    
                </article> ) } 

                <p>Total Final: $ </p>

              
        
        
        </div>
            

            )
}

export default ItemCart