
import './ItemCount.css' 
import { useState } from 'react'   





const ItemCount = ({initial =1, stock = 0, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if ( quantity < stock) {
            setQuantity(quantity+1)
        }
        
    }

    const decrement = ()=> {
        if ( quantity > initial) {

            setQuantity (quantity-1)
        }
        
    }  
    
    if (stock === 0) {
        return <button className='Boton' disabled>No hay stock</button>
    }
   

    return (
        <div>
            <div className='ContadorCard'>
                <p className='cantidad'> Cantidad: {quantity}
                    <div className='botones'>
                        <button onClick={decrement} className='botoncito'>-</button>
                        <button onClick={increment} className='botoncito'>+</button>
                    </div>
                
                </p>     
            </div>
                    
            <button onClick={()=> onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )

}



export default ItemCount