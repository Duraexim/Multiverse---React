
import './ItemCount.css' 
import { useState } from 'react'   





const ItemCount = ({initial =1, stock = 0, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const sumar = () => {
        if ( quantity < stock) {
            setQuantity(quantity+1)
        }
        
    }

    const restar = ()=> {
        if ( quantity > initial) {

            setQuantity (quantity-1)
        }
        
    }  
    
    if (stock === 0) {
        return <button className='BotonRojo' disabled>No hay stock</button>
    }
   

    return (
        <div>
            <div className='ContadorCard'>
                <p className='cantidad P'> Cantidad: {quantity}
                    <div className='botones'>
                        <button onClick={restar} className='botoncito'>-</button>
                        <button onClick={sumar} className='botoncito'>+</button>
                    </div>
                
                </p>     
            </div>
                    
            <button className='BotonAgregar' onClick={()=> onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )

}



export default ItemCount