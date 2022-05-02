import './ItemCart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const ItemCart = ({id, clase, quantity,precio, img}) => {

    const {removeItem} = useContext (CartContext)
    const handleRemove = (id) => {
        removeItem (id)
    }

    return (
             
        <div className="ItemsCart">
            
                        <article className='CardItem'>

                                <header className='Header'>
                                    
                                    <h2 className='ItemHeader'>
                                        {clase}
                                    </h2>

                                </header>

                                <picture>
                                    <img src={img} alt={clase} className='ItemImg'/>
                                </picture>

                                <section>
                                    
                                    <p className='Info'>
                                        Precio unitario: ${precio}
                                    </p>

                                    <p className='Info'>
                                        Cantidad: {quantity}
                                    </p>

                                    <p className='Info'>
                                        Subtotal: ${quantity * precio}
                                    </p>

                                    <button className='ButtonQuitar' onClick={() => handleRemove(id)}>Quitar del carrito</button>
                                    

                                </section>

                        
                        </article> 
                   
        </div>
            

            )
}

export default ItemCart